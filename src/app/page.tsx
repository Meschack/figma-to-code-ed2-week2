import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { HomeBanner } from '@/components/ui/home-banner'

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner className='mb-18 mt-10' />
      <Footer />
    </>
  )
}
