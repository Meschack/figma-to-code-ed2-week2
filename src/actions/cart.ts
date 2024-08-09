'use server'

import { BASE_URL } from '@/config/urls/api'
import { MinimalCart } from '@/types/cart'
import { request, gql } from 'graphql-request'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

const GET_CART = gql`
  query ($id: ID!) {
    cart(id: $id) {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
              }
            }
            attributes {
              key
              value
            }
          }
        }
      }
      attributes {
        key
        value
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
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
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

export const create = async (variant: string) => {
  try {
    const response = await request<MinimalCart>(BASE_URL, CREATE_CART, {
      variant,
      quantity: 1
    })

    const oneDay = 24 * 60 * 60 * 1000

    cookies().set('cart', response.cartCreate.cart.id, {
      expires: Date.now() + oneDay
    })

    cookies().set(
      'cart-quantity',
      response.cartCreate.cart.totalQuantity.toString(),
      { expires: Date.now() + oneDay }
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
    const data = await request(BASE_URL, GET_CART, { id })

    return data
  } catch (error) {
    console.error('Error fetching product details:', error)
    throw error
  }
}
