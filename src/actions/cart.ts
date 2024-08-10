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
  mutation CartCreate($variant: ID!, $quantity: Int!) {
    cartCreate(
      input: { lines: [{ quantity: $quantity, merchandiseId: $variant }] }
    ) {
      cart {
        id
        createdAt
        updatedAt
        totalQuantity
      }
    }
  }
`

const UPDATE_LINE_QUANTITY = gql`
  mutation cartLinesUpdate($cart: ID!, $line: ID!, $quantity: Int) {
    cartLinesUpdate(cartId: $cart, lines: { id: $line, quantity: $quantity }) {
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

export const create = async (variant: string) => {
  try {
    const response = await request<MinimalCart>(BASE_URL, CREATE_CART, {
      variant,
      quantity: 1
    })

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
    console.log(error)

    throw error
  }
}

export const get = async (id: string) => {
  try {
    const data = await request<Cart>(BASE_URL, GET_CART, { id })

    return data
  } catch (error) {
    console.error('Error fetching product details :', error)

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
        cartLinesUpdate: { userErrors: { message: string }[] }
      }>(BASE_URL, UPDATE_LINE_QUANTITY, {
        cart,
        line,
        quantity
      })

      if (!data.cartLinesUpdate.userErrors.length) revalidatePath('/cart')

      return { success: !data.cartLinesUpdate.userErrors.length }
    } catch (error) {}
  }
}

export const removeCartLine = async (cart: string, line: string) => {
  try {
    const data = await request<{
      cartLinesRemove: {
        cart: { totalQuantity: number }
        userErrors: { message: string }[]
      }
    }>(BASE_URL, REMOVE_LINE, { cart, lineIds: [line] })

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
  }
}
