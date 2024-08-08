interface Price {
  amount: string
  currencyCode: string
}

interface FeaturedImage {
  id: string
  url: string
  altText: string | null
}

interface ProductEdge {
  node: Product
}

export interface ProductsResponse {
  products: { edges: ProductEdge[] }
}

interface ProductOption {
  id: string
  name: string
  values: string[]
}

interface SelectedOption {
  name: string
  value: string
}

interface Price {
  amount: string
  currencyCode: string
}

interface ProductVariant {
  id: string
  title: string
  selectedOptions: SelectedOption[]
  price: Price
  availableForSale: boolean
  image?: FeaturedImage
}

export interface Product {
  id: string
  title: string
  description: string
  featuredImage: FeaturedImage
  isGiftCard: boolean
  options: ProductOption[]
  variants: { edges: Array<{ node: ProductVariant }> }
}

export interface ProductResponse {
  product: Product
}
