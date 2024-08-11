'use server'

import { BASE_URL } from '@/config/urls/api'
import { logClientError } from '@/lib/console'
import { Cart, MinimalCart } from '@/types/cart'
import { request, gql, ClientError } from 'graphql-request'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

const GET_CART = gql`
  query ($id: ID!) {
    cart(id: $id) {
      id
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  title
                }
                image {
                  url
                }
                selectedOptions {
                  name
                  value
                }
                unitPrice {
                  amount
                  currencyCode
                }
                quantityAvailable
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
`

const CREATE_CART = gql`
  mutation CartCreate($variant: ID!) {
    cartCreate(input: { lines: [{ merchandiseId: $variant }] }) {
      cart {
        id
        totalQuantity
      }
    }
  }
`

const ADD_LINE = gql`
  mutation cartLinesAdd($cart: ID!, $variant: ID!) {
    cartLinesAdd(cartId: $cart, lines: [{ merchandiseId: $variant }]) {
      cart {
        id
        totalQuantity
      }
    }
  }
`

const UPDATE_LINE_QUANTITY = gql`
  mutation cartLinesUpdate($cart: ID!, $line: ID!, $quantity: Int) {
    cartLinesUpdate(cartId: $cart, lines: { id: $line, quantity: $quantity }) {
      cart {
        totalQuantity
      }
      userErrors {
        message
      }
    }
  }
`

const REMOVE_LINE = gql`
  mutation cartLinesRemove($cart: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cart, lineIds: $lineIds) {
      cart {
        totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`

export const addToCart = async (variant: string) => {
  try {
    const cartId = cookies().get('cart')

    const response = await (cartId
      ? addLine(cartId.value, variant)
      : create(variant))

    return response
  } catch (error) {
    if (error instanceof ClientError) logClientError(error)
    throw error
  }
}

export const create = async (variant: string) => {
  try {
    const response = await request<MinimalCart<'cartCreate'>>(
      BASE_URL,
      CREATE_CART,
      { variant }
    )

    const oneWeek = 7 * 24 * 60 * 60 * 1000

    cookies().set('cart', response.cartCreate.cart.id, {
      expires: Date.now() + oneWeek
    })

    cookies().set(
      'cart-quantity',
      response.cartCreate.cart.totalQuantity.toString(),
      { expires: Date.now() + oneWeek }
    )

    revalidatePath('/', 'layout')

    return response.cartCreate.cart
  } catch (error) {
    if (error instanceof ClientError) logClientError(error)
    throw error
  }
}

export const get = async (id: string) => {
  try {
    const data = await request<Cart>(BASE_URL, GET_CART, { id })

    return data
  } catch (error) {
    if (error instanceof ClientError) logClientError(error)
    throw error
  }
}

export const updateLineQuantity = async (
  cart: string,
  line: string,
  quantity: number
) => {
  if (quantity > 0) {
    try {
      const data = await request<{
        cartLinesUpdate: {
          userErrors: { message: string }[]
          cart: { totalQuantity: number }
        }
      }>(BASE_URL, UPDATE_LINE_QUANTITY, {
        cart,
        line,
        quantity
      })

      if (!data.cartLinesUpdate.userErrors.length) {
        cookies().set(
          'cart-quantity',
          data.cartLinesUpdate.cart.totalQuantity.toString()
        )

        revalidatePath('/cart')

        revalidatePath('/', 'layout')
      }

      return { success: !data.cartLinesUpdate.userErrors.length }
    } catch (error) {
      if (error instanceof ClientError) logClientError(error)
      throw error
    }
  }
}

export const addLine = async (cart: string, variant: string) => {
  try {
    const response = await request<MinimalCart<'cartLinesAdd'>>(
      BASE_URL,
      ADD_LINE,
      { variant, cart }
    )

    const oneWeek = 7 * 24 * 60 * 60 * 1000

    cookies().set('cart', response.cartLinesAdd.cart.id, {
      expires: Date.now() + oneWeek
    })

    cookies().set(
      'cart-quantity',
      response.cartLinesAdd.cart.totalQuantity.toString(),
      { expires: Date.now() + oneWeek }
    )

    revalidatePath('/', 'layout')

    return response.cartLinesAdd.cart
  } catch (error) {
    if (error instanceof ClientError) logClientError(error)
    throw error
  }
}

export const removeCartLine = async (cart: string, lines: string[]) => {
  try {
    const data = await request<{
      cartLinesRemove: {
        cart: { totalQuantity: number }
        userErrors: { message: string }[]
      }
    }>(BASE_URL, REMOVE_LINE, { cart, lineIds: lines })

    if (!data.cartLinesRemove.userErrors.length) {
      revalidatePath('/cart')
      cookies().set(
        'cart-quantity',
        data.cartLinesRemove.cart.totalQuantity.toString()
      )
      revalidatePath('/', 'layout')
    }

    return { success: !data.cartLinesRemove.userErrors.length }
  } catch (error) {
    if (error instanceof ClientError) logClientError(error)
    throw error
  }
}
