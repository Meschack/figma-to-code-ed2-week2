export type MinimalCart<Key extends 'cartCreate' | 'cartLinesAdd'> = {
  [name in Key]: { cart: { id: string; totalQuantity: number } }
}

export interface Cart {
  cart: {
    id: string
    lines: { edges: Array<{ node: CartProductVariant }> }
    cost: { totalAmount: Price; subtotalAmount: Price }
  }
}

export interface CartProductVariant {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    image: { url: string }
    selectedOptions: Option[]
    unitPrice: unknown
    quantityAvailable: number
    price: Price
    product: { title: string }
  }
}

interface Option {
  name: string
  value: string
}

interface Price {
  amount: string
  currencyCode: string
}
