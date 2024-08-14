import { Product } from '@/types/products'

export interface Collections {
  collections: {
    edges: {
      cursor: string
      node: {
        id: string
        handle: string
        title: string
        products: { edges: { node: Product }[] }
        image: { id: string; url: string }
      }
    }[]
  }
}
