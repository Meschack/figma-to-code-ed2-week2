import Link from 'next/link'
import { Wrapper } from '@/components/ui/wrapper'
import { Logo } from '@/components/ui/logo'

const quickLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Jacket', path: '/product/jacket' },
      { label: 'T-shirt', path: '/product/t-shirt' },
      { label: 'Jacket', path: '/product/jacket' },
      { label: 'Shoes', path: '/product/shoes' },
      { label: 'Sunglasses', path: '/product/sunglasses' }
    ]
  },
  {
    title: 'Categories',
    links: [
      { label: 'Man', path: '/categories/man' },
      { label: 'Womans', path: '/categories/womans' },
      { label: 'Kids', path: '/categories/kids' },
      { label: 'Gift', path: '/categories/gift' },
      { label: 'New arrival', path: '/categories/new-arrival' }
    ]
  },
  {
    title: 'Our Social Media',
    links: [
      { label: 'Instagram', path: '/categories/instagram' },
      { label: 'Facebook', path: '/categories/facebook' },
      { label: 'Youtube', path: '/categories/youtube' },
      { label: 'X', path: '/categories/x' }
    ]
  }
]

export const Footer = () => {
  return (
    <div className='bg-black'>
      <Wrapper className='space-y-8 py-13'>
        <div className='flex w-full flex-col justify-between gap-5 xl:flex-row'>
          <div className='space-y-5'>
            <Logo theme='dark' />

            <p className='text-balance text-dark-gray'>
              Subscribe to our newsletter for upcoming products and best
              discount for all items
            </p>

            <div className='flex items-stretch gap-2'>
              <input
                type='email'
                placeholder='Your email'
                className='max-w-80 flex-1 rounded-full border bg-transparent px-3.5 py-3 text-xs text-white'
              />

              <button className='rounded-full bg-white px-5 py-3 text-sm text-black'>
                Subscribe
              </button>
            </div>
          </div>

          <div className='flex gap-13'>
            {quickLinks.map((element) => (
              <div className='space-y-2' key={element.title}>
                <h3 className='text-base text-white'>{element.title}</h3>

                <div className='flex flex-col gap-1 text-sm text-gray'>
                  {element.links.map((link, index) => (
                    <Link
                      key={`${element.title}-${link.path}-${index}`}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className='mx-auto w-fit text-dark-gray'>
          &copy; BALLAMAS 2024 by{' '}
          <Link
            className='underline underline-offset-4'
            href='https://www.linkedin.com/in/waris-akinocho/'
          >
            waris
          </Link>
        </p>
      </Wrapper>
    </div>
  )
}
