import Image from 'next/image'
import { Button } from './button'
import { Wrapper } from './wrapper'
import arrow from '@@/icons/arrow.svg'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface Props extends ComponentProps<typeof Wrapper> {}

export const HomeBanner = ({ className, ...rest }: Props) => {
  return (
    <Wrapper
      className={cn(
        'space-y-11 rounded-52 bg-banner-background bg-cover bg-center px-5 py-10 *:mx-auto xl:px-20 xl:py-24',
        className
      )}
      {...rest}
    >
      <div className='flex w-fit flex-col items-center gap-4.5 text-white'>
        <div className='flex items-center gap-3'>
          <div className='h-[0.5px] w-16 bg-white'></div>
          <span className='whitespace-nowrap text-xs md:text-sm'>
            We bring new fashion to the world
          </span>
          <div className='h-[0.5px] w-16 bg-white'></div>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-ellipsis text-center font-chillax text-3xl font-bold md:text-42 xl:text-5xl'>
            DISCOVER THE LATEST FASHION TRENDS HERE
          </h1>
          <p className='text-center text-xs md:text-sm lg:w-1/2 xl:text-base'>
            Discover a world of fashion with our meticulously curated outfits.
            Shop now to update your wardrobe with chic and stylish outfits.
          </p>
        </div>
      </div>

      <div className='flex w-fit items-center'>
        <Button className='bg-white text-black'>Start shopping</Button>

        <Button className='bg-white' size='icon'>
          <Image src={arrow} alt='Arrow up' />
        </Button>
      </div>
    </Wrapper>
  )
}
