import Image, { StaticImageData } from 'next/image'
import { TrendingNews } from '@/components/ui/trending-news'
import user from '@@/icons/user.svg'
import search from '@@/icons/search.svg'
import cart from '@@/icons/cart-2.svg'
import Link from 'next/link'
import { Wrapper } from '@/components/ui/wrapper'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { cookies } from 'next/headers'

interface NavLink {
  path: string
  label: string
  icon?: StaticImageData
}

const staticNavLinks: NavLink[] = [
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About Us' },
  { path: '/account', label: 'Account', icon: user }
]

interface Props extends ComponentProps<'header'> {}

export const Header = ({ className, ...rest }: Props) => {
  const cartQuantity = cookies().get('cart-quantity')?.value

  return (
    <header className={cn(className)} {...rest}>
      <TrendingNews />
      <div className=''>
        <Wrapper className='flex items-center justify-between border-b border-light-gray py-5'>
          <ul className='hidden items-center gap-4.5 xl:flex'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Collection</li>
          </ul>

          <button className='flex flex-col gap-1 xl:hidden'>
            <span className='h-0.5 w-5 bg-black'></span>
            <span className='h-0.5 w-5 bg-black'></span>
          </button>

          <Logo />

          <div className='hidden items-center gap-4.5 xl:flex'>
            <nav>
              <ul className='flex items-center gap-4.5'>
                {staticNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className='flex items-center gap-1.5'
                    >
                      {link.icon && (
                        <Image src={link.icon} alt={link.label + ' icon'} />
                      )}
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li key='/cart'>
                  <Link href='/cart' className='flex items-center gap-1.5'>
                    Cart ({cartQuantity ?? 0})
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <Image src={search} alt='Search icon' />
            </div>
          </div>

          <div className='flex items-center gap-3 xl:hidden'>
            <Image src={search} alt='Search icon' />
            <Image src={cart} alt='Cart icon' />
          </div>
        </Wrapper>
      </div>
    </header>
  )
}
