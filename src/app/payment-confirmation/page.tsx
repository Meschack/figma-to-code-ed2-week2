import { Wrapper } from '@/components/ui/wrapper'
import Image from 'next/image'
import circleCheck from '@@/icons/circle-check.svg'

const Page = () => {
  return (
    <Wrapper className='flex items-center justify-center py-18'>
      <div className='space-y-2.5 *:mx-auto *:w-fit'>
        <Image src={circleCheck} alt='Circle check' />

        <div className='space-y-1 *:mx-auto *:w-fit'>
          <h1 className='text-base font-semibold md:text-lg'>
            Thanks for your order !
          </h1>

          <p className='text-xs font-medium text-dark-gray'>
            The order confirmation has been sent to johndoe@gmail.com
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Page
