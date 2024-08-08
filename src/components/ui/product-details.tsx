'use client'

import { Product } from '@/types/products'
import { Button } from './button'
import { CustomImage } from './custom-image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  product: Product
}

interface State {
  selectedVariant?: Product['variants']['edges'][number]['node']
  selectedOptions: Product['variants']['edges'][number]['node']['selectedOptions']
}

export const ProductDetails = ({ product }: Props) => {
  const [state, setState] = useState<State>({
    selectedVariant: product.variants.edges[0].node,
    selectedOptions: product.variants.edges[0].node.selectedOptions
  })

  const onToggle = (name: string, value: string) => {
    const newSelectedOptions = state.selectedOptions.map((option) =>
      option.name === name ? { ...option, value } : option
    )

    const variant = product.variants.edges.find((edge) =>
      edge.node.selectedOptions.every((option) =>
        newSelectedOptions.some(
          (newOption) =>
            newOption.name === option.name && newOption.value === option.value
        )
      )
    )

    /* const variant = product.variants.edges.find((edge) =>
      edge.node.selectedOptions.find(
        (el) => el.name === name && el.value === value
      )
    ) */

    setState({
      selectedVariant: variant?.node,
      selectedOptions: newSelectedOptions
    })
  }

  return (
    <div className='grid gap-8 md:gap-10 xl:grid-cols-2'>
      <div className='xl:min-h-none relative min-h-[650px] overflow-hidden rounded-4xl'>
        <CustomImage
          alt={
            state.selectedVariant?.image?.url ||
            product.featuredImage.altText ||
            `${product.title} featured image`
          }
          src={
            state.selectedVariant?.image
              ? state.selectedVariant.image.url
              : product.featuredImage.url
          }
          fill
          className='object-cover object-center'
        />
      </div>

      <div className='space-y-7'>
        <div className='space-y-5.5'>
          <div className='space-y-4.5'>
            <h1 className='truncate font-chillax text-42 font-semibold'>
              {product.title}
            </h1>

            <div>
              <span className='text-4xl font-semibold'>
                {state.selectedVariant
                  ? `${state.selectedVariant.price.currencyCode} $ ${state.selectedVariant.price.amount}`
                  : '--'}
              </span>
            </div>

            {product.options.toReversed().map((option) => (
              <div key={option.id} className='space-y-3.5'>
                <h3 className='text-xl font-medium'>{option.name}</h3>

                <div className='flex flex-wrap gap-3'>
                  {option.values.map((value) => {
                    const isSelected = state.selectedOptions.some(
                      (el) => el.value === value && el.name === option.name
                    )

                    return (
                      <Button
                        variant={isSelected ? 'fill' : 'transparent'}
                        className={cn(
                          !isSelected && 'hover:bg-transparent hover:text-black'
                        )}
                        key={value}
                        onClick={() =>
                          !isSelected && onToggle(option.name, value)
                        }
                      >
                        {value}
                      </Button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* // TODO: Product options */}

          <div className='grid grid-cols-2 gap-3.5 *:text-sm *:font-semibold *:uppercase'>
            <Button disabled={!state.selectedVariant}>Buy now</Button>
            <Button variant='transparent' disabled={!state.selectedVariant}>
              Add to cart
            </Button>
          </div>
        </div>

        <div>
          <h2 className='font-chillax text-3xl font-medium'>Description</h2>
          <p className='text-lg text-dark-gray'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}