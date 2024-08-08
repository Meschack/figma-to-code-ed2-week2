import { getProduct } from '@/actions/products'
import { ErrorComponent } from '@/components/ui/error'
import { ProductDetails } from '@/components/ui/product-details'
import { RelatedProducts } from '@/components/ui/related-products'
import { Wrapper } from '@/components/ui/wrapper'
import { PageProps } from '@/types/page'

interface Props extends PageProps<{}, { product: string | undefined }> {}

const Page = async ({ params }: Props) => {
  if (!params.product) {
    throw new Error('Aucun produit sélectionné !')
  }

  const response = await getProduct(decodeURIComponent(params.product))

  if (!response) {
    return (
      <ErrorComponent
        description='Impossible de charger les détails de ce produit'
        label='Réessayer'
        to=''
      />
    )
  }

  // console.log({ options: response.product.options.map((el) => el.values) })

  return (
    <Wrapper className='mb-24 space-y-18'>
      <ProductDetails product={response.product} />

      <div className='space-y-8'>
        <h2 className='font-chillax text-4xl font-semibold'>
          You may also like
        </h2>

        <RelatedProducts product={response.product.id} />
      </div>
    </Wrapper>
  )
}

export default Page
