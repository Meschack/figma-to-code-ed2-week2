interface Price {
  amount: string
  currencyCode: string
}

interface Variant {
  node: { price: Price }
}

interface FeaturedImage {
  id: string
  url: string
}

export interface Product {
  id: string
  title: string
  description: string
  featuredImage: FeaturedImage
  variants: { edges: Variant[] }
}

interface ProductEdge {
  node: Product
}

export interface ProductsResponse {
  products: { edges: ProductEdge[] }
}

export interface GraphQLResponse {
  data: ProductsResponse
}
