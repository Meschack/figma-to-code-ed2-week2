import Image from 'next/image'
import { Button } from './button'
import arrow from '@@/icons/arrow.svg'

interface Props {}

export const OurCollection = ({}: Props) => {
  return (
    <div className='space-y-9'>
      <div className='space-y-1'>
        <h2 className='mx-auto text-center font-chillax text-4xl font-semibold uppercase'>
          Our Collection
        </h2>

        <p className='text-center text-lg font-medium text-dark-gray'>
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-4 *:h-[446px] *:rounded-4xl *:bg-cover *:bg-center'>
        <div className='flex items-end justify-center bg-first-collection pb-6'>
          <Button className='bg-white uppercase text-black'>
            Learn More <Image src={arrow} alt='Arrow up' />
          </Button>
        </div>

        <div className='col-span-2 overflow-hidden bg-second-collection'>
          <div className='flex h-full w-full flex-col items-center justify-center bg-[#000000]/20 *:w-fit'>
            <p className='text-stroke text-stroke-blue-500 bg-gradient-to-r from-white to-white bg-clip-text text-5xl font-extrabold uppercase tracking-widest text-transparent'>
              Classic men
            </p>

            <p className='text-white'>
              We're changing the way things get made.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
