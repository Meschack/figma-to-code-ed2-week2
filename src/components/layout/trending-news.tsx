import { cn } from '@/lib/utils'
import { JetBrains_Mono } from 'next/font/google'

interface Props {
  message?: string
}

const jetbrainsMono = JetBrains_Mono({ weight: '400', style: 'normal', subsets: ['latin'] })

export const TrendingNews = ({
  message = 'Sign up and get 20% off for all new arrivals collections'
}: Props) => {
  return (
    <div className='bg-black px-2.5 py-4 text-white'>
      <p className={cn('mx-auto w-fit text-center text-tiny md:text-xs', jetbrainsMono.className)}>
        {message}
      </p>
    </div>
  )
}
