import { Wrapper } from '@/components/layout/wrapper'
import { Icons } from '@/components/common/icons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ballamas | Payment confirmation'
}

const Page = () => {
  return (
    <Wrapper className='flex items-center justify-center py-18'>
      <div className='space-y-2.5 *:mx-auto *:w-fit'>
        <Icons.circleCheck />

        <div className='space-y-1 *:mx-auto *:w-fit'>
          <h1 className='text-center text-base font-semibold md:text-lg'>
            Thanks for your order !
          </h1>

          <p className='text-center text-xs font-medium text-dark-gray'>
            The order confirmation has been sent to johndoe@gmail.com
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Page
