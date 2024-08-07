interface Price {
  amount: string
  currencyCode: string
}

interface FeaturedImage {
  id: string
  url: string
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
}

interface ProductImage {
  id: string
  url: string
  altText: string | null
}

export interface Product {
  id: string
  title: string
  description: string
  featuredImage: FeaturedImage
  options: ProductOption[]
  variants: { edges: Array<{ node: ProductVariant }> }
  images: { edges: Array<{ node: ProductImage }> }
}

interface ProductResponse {
  product: Product
}
