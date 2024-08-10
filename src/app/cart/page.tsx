import { get } from '@/actions/cart'
import { ErrorComponent } from '@/components/ui/error'
import { OrderSummary } from '@/components/ui/order-summary'
import { Wrapper } from '@/components/ui/wrapper'
import { cookies } from 'next/headers'

import { Separator } from '@/components/ui/separator'
import { CustomImage } from '@/components/ui/custom-image'
import { Trash } from '@/components/icons/trash'
import { ProductLineActions } from '@/components/ui/product-line-actions'

const Page = async () => {
  const cartId = cookies().get('cart')?.value

  if (!cartId) {
    return (
      <ErrorComponent
        title='Panier vide'
        description="Aucun produit n'a été retrouvé dans votre panier. Rajoutez-en et revenez !"
        label='Retrouver des produits'
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

          <button className='inline-flex items-center space-x-1 rounded-full bg-[#E5E5E5]/50 p-2 text-dark-gray'>
            <Trash className='*:text-dark-gray' />

            <span>Clear Cart</span>
          </button>
        </div>

        <div role='table' className='space-y-5'>
          <div className='grid grid-cols-3 border-b border-light-gray py-3 text-dark-gray'>
            <div className='col-span-2'>
              <span>Product</span>
            </div>

            <div className='flex justify-between pe-6'>
              <span>Quantity</span>
              <span>Price</span>
            </div>
          </div>

          <div className='space-y-5'>
            {cart.lines.edges.map(({ node }) => (
              <div className='space-y-5' key={node.id}>
                <div className='grid grid-cols-3'>
                  <div className='col-span-2 flex items-center gap-2.5'>
                    <CustomImage
                      src={`${node.merchandise.image.url}&width=72`}
                      alt='Merchandise image'
                      width={72}
                      height={72}
                      className='aspect-square rounded-lg object-cover'
                    />

                    <div className='flex flex-col gap-0.5'>
                      <span className='text-sm font-semibold text-black'>
                        {node.merchandise.product.title}
                      </span>
                      <span className='text-xs font-medium text-dark-gray'>
                        {node.merchandise.selectedOptions
                          .map((option) => option.value)
                          .join(' - ')}
                      </span>
                      <span className='text-sm font-semibold text-black'>
                        ${node.merchandise.price.amount}
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <ProductLineActions node={node} cart={cart.id} />

                    <span className='text-sm font-semibold text-black'>
                      $
                      {(+node.merchandise.price.amount * node.quantity).toFixed(
                        2
                      )}
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
}

export default Page
