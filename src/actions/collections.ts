'use server'

import { BASE_URL } from '@/config/urls/api'
import { logClientError } from '@/lib/console'
import { Collections } from '@/types/collections'
import { request, gql, ClientError } from 'graphql-request'

export const getCollections = async () => {
  try {
    const query = gql`
      {
        collections(first: 4) {
          edges {
            cursor
            node {
              id
              handle
              title
              products(first: 6) {
                edges {
                  node {
                    id
                    title
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    featuredImage {
                      id
                      url
                      altText
                    }
                  }
                }
              }
              image {
                id
                url
              }
            }
          }
        }
      }
    `

    const response: Collections = await request(BASE_URL, query)

    return response
  } catch (error) {
    if (error instanceof ClientError) logClientError(error)

    throw error
  }
}
