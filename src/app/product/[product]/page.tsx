import { getProduct } from '@/actions/products'
import { DetailsPage } from '@/components/ui/details-page'
import { PageProps } from '@/types/page'

interface Props extends PageProps<{}, { product: string | undefined }> {}

const Page = async ({ params }: Props) => {
  if (!params.product) {
    throw new Error('Aucun produit sélectionné !')
  }

  const response = await getProduct(decodeURIComponent(params.product))

  return <DetailsPage product={response} />
}

export default Page
