import { getCollections } from '@/actions/collections'
import { Collections } from '@/components/ui/collections'
import { HomeBanner } from '@/components/ui/home-banner'
import { OurCollection } from '@/components/ui/our-collection'
import { Wrapper } from '@/components/ui/wrapper'

export default async function Home() {
  const { collections } = await getCollections()

  return (
    <>
      <HomeBanner className='mb-18' />

      <Wrapper className='mb-24 space-y-18'>
        <p className='w-full text-center font-chillax text-xl font-semibold md:text-2xl xl:text-3xl'>
          Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our
          stylish summer shirts.
        </p>

        <Collections collections={collections} />

        <OurCollection />
      </Wrapper>
    </>
  )
}
