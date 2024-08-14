'use client'

import { getRecommendations } from '@/actions/products'
import { Product } from '@/types/products'
import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/product/product-card'
import { ProductCardLoader } from '@/components/product/product-card-loader'

interface Props {
  product: string
}

interface State {
  products?: Product[]
  loading: boolean
  error?: boolean
}

export const RelatedProducts = ({ product }: Props) => {
  const [{ loading, products, error }, setState] = useState<State>({
    loading: true
  })

  const getRelatedProducts = async () => {
    if (error) {
      setState(prev => ({
        ...prev,
        loading: true,
        error: false
      }))
    }

    try {
      const response = await getRecommendations(product)

      setState(prev => ({
        ...prev,
        products: response.productRecommendations,
        loading: false
      }))
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: true
      }))
    }
  }

  useEffect(() => {
    getRelatedProducts()
  }, [])

  if (loading) {
    return (
      <div className='no-scrollbar flex h-min gap-3.5 overflow-x-auto overflow-y-hidden'>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardLoader key={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex flex-col gap-1 lg:flex-row'>
        <p>An error occured lors de la récupération des recommandations !</p>
        <button
          className='w-fit font-medium underline-offset-4 hover:underline'
          onClick={getRelatedProducts}
        >
          Relancer
        </button>
      </div>
    )
  }

  return (
    products && (
      <div className='no-scrollbar flex flex-col gap-3.5 sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden'>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    )
  )
}
