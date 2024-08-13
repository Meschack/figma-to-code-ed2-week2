import { getProduct } from '@/actions/products'
import { ErrorComponent } from '@/components/ui/error'
import { ProductDetails } from '@/components/ui/product-details'
import { RelatedProducts } from '@/components/ui/related-products'
import { Wrapper } from '@/components/ui/wrapper'
import { PageProps } from '@/types/page'

interface Props extends PageProps<{}, { product: string | undefined }> {}

const Page = async ({ params }: Props) => {
  try {
    if (!params.product) {
      return (
        <ErrorComponent
          className='mb-24'
          title='Product not found'
          description='Please, select a product to continue !'
          label='Find products'
        />
      )
    }

    const response = await getProduct(decodeURIComponent(params.product))

    if (!response) {
      return (
        <ErrorComponent
          className='mb-24'
          description="We're not able to load this product's details right now. Please, try again !"
          label='Retry'
          to=''
        />
      )
    }

    return (
      <Wrapper className='mb-24 space-y-18'>
        <ProductDetails product={response.product} />

        <div className='space-y-8'>
          <h2 className='font-chillax text-4xl font-semibold'>You may also like</h2>

          <RelatedProducts product={response.product.id} />
        </div>
      </Wrapper>
    )
  } catch (error) {
    return (
      <ErrorComponent
        className='mb-24'
        description="We're not able to load this product's details right now. Please, try again !"
        label='Retry'
        to=''
      />
    )
  }
}

export default Page
