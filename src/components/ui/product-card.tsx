import { Product } from '@/types/products'
import Image from 'next/image'
import { PromoBadge } from './promo-badge'

import placeholder from '@@/images/placeholder.png'
import cart from '@@/icons/cart.svg'
import { Button } from './button'

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className='space-y-4'>
      <div className='group relative aspect-[322.67/405] min-h-[405px] overflow-hidden rounded-4xl'>
        <Image
          fill
          src={product.featuredImage.url}
          alt={`${product.title} featured image`}
          placeholder='blur'
          blurDataURL={placeholder.src}
        />

        <div className='absolute flex size-full flex-col justify-between p-5 text-sm group-hover:bg-[#000000]/20'>
          <PromoBadge className='absolute left-5 top-5' />
          <div className='mt-auto hidden items-center gap-1 group-hover:flex'>
            <Button className='bg-white uppercase text-black'>
              <Image src={cart} alt='Cart icon' />
              <span className='font-extrabold'>Add to cart</span>
            </Button>

            <Button
              variant='transparent'
              className='font-semibold uppercase text-white hover:bg-transparent'
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>

      <div className='space-y-0.5 font-semibold'>
        <h3 className='truncate text-3xl uppercase text-black'>
          {product.title}
        </h3>

        <span className='text-28 leading-9 text-dark-gray'>
          {product.variants.edges[0].node.price.currencyCode}{' '}
          {product.variants.edges[0].node.price.amount}
        </span>
      </div>
    </div>
  )
}
