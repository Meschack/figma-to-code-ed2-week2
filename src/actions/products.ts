'use server'

import { BASE_URL } from '@/config/urls/api'
import { Product, ProductResponse } from '@/types/products'
import request, { gql } from 'graphql-request'

const GET_PRODUCT_DETAILS = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      description
      featuredImage {
        id
        url
        altText
      }
      options {
        id
        name
        values
      }
      variants(first: 3) {
        edges {
          node {
            id
            title
            selectedOptions {
              name
              value
            }
            image {
              altText
              url
              id
            }
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }
`

const GET_PRODUCT_RECOMMANDATIONS = gql`
  query getRecommandations($id: ID!) {
    productRecommendations(productId: $id, intent: RELATED) {
      id
      title
      description
      featuredImage {
        id
        url
        altText
      }
      isGiftCard
      variants(first: 3) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

export const getProduct = async (id: string) => {
  try {
    const data = await request<ProductResponse>(BASE_URL, GET_PRODUCT_DETAILS, {
      id
    })

    return data
  } catch (error) {
    console.error('Error fetching product details:', error)
    throw error
  }
}

export const getRecommendations = async (productId: string) => {
  try {
    const data = await request<{ productRecommendations: Product[] }>(BASE_URL, GET_PRODUCT_RECOMMANDATIONS, {
      id: productId
    })

    return data
  } catch (error) {
    if (error instanceof Error) console.error('Error fetching product recommendations :', error.message)

    throw error
  }
}
