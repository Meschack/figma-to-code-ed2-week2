import { Button } from '@/components/ui/button'
import { HomeBanner } from '@/components/ui/home-banner'
import { OurCollection } from '@/components/ui/our-collection'
import { ProductCard } from '@/components/ui/product-card'
import { Wrapper } from '@/components/ui/wrapper'
import { ProductsResponse } from '@/types/products'
import { request, gql } from 'graphql-request'

const getProducts = async () => {
  try {
    const query = gql`
      {
        products(first: 6) {
          edges {
            node {
              id
              title
              description
              featuredImage {
                id
                url
                altText
              }
              isGiftCard
              variants(first: 3) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    const response: ProductsResponse = await request('https://mock.shop/api', query)

    return response
  } catch (error) {
    console.log(error)
  }
}

const categories = [
  { label: 'All', quantity: 132, selected: true },
  { label: 'Accessories', quantity: 13, selected: false },
  { label: 'Featured', quantity: 67, selected: false },
  { label: 'Unisex', quantity: 52, selected: false }
]

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <HomeBanner className='mb-18' />

      <Wrapper className='mb-24 space-y-18'>
        <p className='w-full text-center font-chillax text-xl font-semibold md:text-2xl xl:text-3xl'>
          Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer
          shirts.
        </p>

        <div className='space-y-9'>
          <div className='flex flex-wrap items-center gap-3.5 md:justify-center'>
            {categories.map(category => (
              <Button
                key={category.label}
                variant={category.selected ? 'fill' : 'transparent'}
                className='items-center gap-1 border-1.5 font-semibold'
              >
                <span className='text-sm md:text-xl'>{category.label}</span>
                <span className='text-xs md:text-base'>{category.quantity}</span>
              </Button>
            ))}
          </div>

          <div className='space-y-8'>
            {products ? (
              <div className='space-y-4'>
                <div className='mx-auto flex w-fit items-center gap-5'></div>

                <div className='grid gap-3.5 md:grid-cols-2 xl:grid-cols-3'>
                  {products.products.edges.map(edge => (
                    <ProductCard key={edge.node.id} product={edge.node} />
                  ))}
                </div>
              </div>
            ) : null}

            <Button className='mx-auto block' variant='transparent'>
              Voir plus
            </Button>
          </div>
        </div>

        <OurCollection />
      </Wrapper>
    </>
  )
}
