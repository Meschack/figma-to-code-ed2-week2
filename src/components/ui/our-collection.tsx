import { Button } from './button'
import { Icons } from './icons'

export const OurCollection = () => {
  return (
    <div className='space-y-9'>
      <div className='space-y-1'>
        <h2 className='mx-auto text-center font-chillax text-4xl font-semibold uppercase'>
          Our Collection
        </h2>

        <p className='text-center text-lg font-medium text-dark-gray'>
          Our latest collection, where classic and contemporary styles converge in perfect harmony.
        </p>
      </div>

      <div className='flex flex-col-reverse gap-4 *:h-[446px] *:rounded-4xl *:bg-dark-gray *:bg-cover *:bg-center md:flex-row md:*:basis-1/2 xl:mx-24'>
        <div className='flex items-end justify-center bg-first-collection pb-6 xl:basis-1/3'>
          <Button className='bg-white uppercase text-black'>
            Learn More <Icons.arrow />
          </Button>
        </div>

        <div className='overflow-hidden bg-second-collection xl:basis-2/3'>
          <div className='flex h-full w-full flex-col items-center justify-center bg-pure-black/20 *:w-fit'>
            <p className='special-text text-center text-xl font-extrabold uppercase text-transparent md:text-3xl xl:text-5xl'>
              Classic men
            </p>

            <p className='text-sm text-white xl:text-lg'>We're changing the way things get made.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
