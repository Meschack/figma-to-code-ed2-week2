import { get } from '@/actions/cart'
import { ErrorComponent } from '@/components/common/error'
import { OrderSummary } from '@/components/cart/order-summary'
import { Wrapper } from '@/components/layout/wrapper'
import { cookies } from 'next/headers'

import { Separator } from '@/components/common/separator'
import { CustomImage } from '@/components/common/custom-image'
import { ProductLineActions } from '@/components/product/product-line-actions'
import { CartClearButton } from '@/components/cart/cart-clear-button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ballamas | Cart'
}

const Page = async () => {
  try {
    const cartId = cookies().get('cart')?.value

    if (!cartId) {
      return (
        <ErrorComponent
          className='mb-24'
          title='Empty cart'
          description='Any product have been found in your cart. Please, add products in your cart and come back !'
          label='Find products'
        />
      )
    }

    const { cart } = await get(cartId)

    return (
      <Wrapper className='mb-16 grid w-full grid-cols-4 gap-10.5 md:grid-cols-8 xl:mb-28 xl:grid-cols-12'>
        <div className='col-span-full xl:col-span-9'>
          <div className='flex items-center justify-between'>
            <h1 className='font-chillax text-2xl font-semibold'>
              Cart ({cart.lines.edges.length})
            </h1>

            <CartClearButton cart={cart.id} linesIds={cart.lines.edges.map(edge => edge.node.id)} />
          </div>

          <div role='table' className='space-y-5'>
            <div className='grid grid-cols-2 border-b border-light-gray py-3 text-dark-gray xl:grid-cols-3'>
              <div className='xl:col-span-2'>
                <span>Product</span>
              </div>

              <div className='flex justify-between'>
                <span>Quantity</span>
                <span className='text-end'>Price</span>
              </div>
            </div>

            <div className='space-y-5'>
              {cart.lines.edges.map(({ node }) => (
                <div className='space-y-5' key={node.id}>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='flex basis-1/2 items-center gap-2.5 xl:basis-2/3'>
                      <div className='relative size-11 md:size-18'>
                        <CustomImage
                          src={`${node.merchandise.image.url}`}
                          alt='Merchandise image'
                          className='aspect-square rounded-lg object-cover'
                          fill
                        />
                      </div>

                      <div className='flex flex-col gap-0.5 text-tiny'>
                        <span className='truncate font-semibold text-black md:text-sm'>
                          {node.merchandise.product.title}
                        </span>
                        <span className='font-medium text-dark-gray md:text-xs'>
                          {node.merchandise.selectedOptions.map(option => option.value).join(' - ')}
                        </span>
                        <span className='font-bold text-black md:text-xs xl:font-semibold'>
                          ${node.merchandise.price.amount}
                        </span>
                      </div>
                    </div>

                    <div className='flex basis-1/2 items-center justify-between gap-2 xl:basis-1/3'>
                      <ProductLineActions node={node} cart={cart.id} />

                      <span className='text-sm font-semibold text-black'>
                        ${(+node.merchandise.price.amount * node.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Separator />
                </div>
              ))}
            </div>
          </div>
        </div>

        <OrderSummary cost={cart.cost} />
      </Wrapper>
    )
  } catch (error) {
    return (
      <ErrorComponent
        className='mb-24'
        title='An error occured'
        description="We're not able to load your cart right now. Try again !"
        label='Retry'
        to=''
      />
    )
  }
}

export default Page
