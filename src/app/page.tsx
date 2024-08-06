import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { HomeBanner } from '@/components/ui/home-banner'
import { OurCollection } from '@/components/ui/our-collection'
import { Wrapper } from '@/components/ui/wrapper'

export default function Home() {
  return (
    <>
      <Header />

      <HomeBanner className='mb-18 mt-10' />

      <Wrapper className='mb-24 space-y-18'>
        <p className='w-full text-center font-chillax text-3xl font-semibold'>
          Discover the latest trends in summer fashion. Shop now and refresh
          your wardrobe with our stylish summer shirts.
        </p>

        <div></div>

        <OurCollection />
      </Wrapper>

      <Footer />
    </>
  )
}
