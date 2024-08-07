'use server'

import request, { gql } from 'graphql-request'

const GET_PRODUCT_DETAILS = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      description
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
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
      images(first: 5) {
        edges {
          node {
            id
            url
            altText
          }
        }
      }
    }
  }
`

export const getProduct = async (id: string) => {
  try {
    try {
      const data = await request('https://mock.shop/api', GET_PRODUCT_DETAILS, {
        id
      })

      return data
    } catch (error) {
      console.error('Error fetching product details:', error)
      throw error
    }
  } catch (error) {}
}
