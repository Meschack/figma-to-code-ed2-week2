import { TrendingNews } from '@/components/layout/trending-news'
import Link from 'next/link'
import { Wrapper } from '@/components/layout/wrapper'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/common/logo'
import { cookies } from 'next/headers'
import { MobileMenu } from '@/components/layout/mobile-menu'
import { Icons } from '@/components/common/icons'

interface NavLink {
  path: string
  label: string
  icon?: React.FC
}

const staticNavLinks: NavLink[] = [
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About Us' },
  { path: '/account', label: 'Account', icon: Icons.user }
]

interface Props extends ComponentProps<'header'> {}

export const Header = ({ className, ...rest }: Props) => {
  const cartQuantity = cookies().get('cart-quantity')?.value

  return (
    <header className={cn('group sticky top-0 z-10', className)} {...rest}>
      <TrendingNews />

      <div className='bg-white'>
        <Wrapper className='flex items-center justify-between border-b border-light-gray py-5'>
          <ul className='hidden items-center gap-4.5 xl:flex'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Collection</li>
          </ul>

          <MobileMenu />

          <Logo />

          <div className='hidden items-center gap-4.5 xl:flex'>
            <nav>
              <ul className='flex items-center gap-4.5'>
                {staticNavLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.path} className='flex items-center gap-1.5'>
                      {link.icon && <link.icon />}
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
              <Icons.search />
            </div>
          </div>

          <div className='flex items-center gap-3 xl:hidden'>
            <Icons.search color='black' />

            <Link href='/cart'>
              <Icons.cartTwo color='black' />
            </Link>
          </div>
        </Wrapper>
      </div>

      <div className='sticky hidden h-lvh flex-col items-center gap-11 bg-white pt-6 group-has-[:checked]:flex xl:!hidden'>
        <nav>
          <ul className='space-y-11 *:flex *:flex-col *:items-center *:gap-4.5'>
            <div>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Collection</li>

              {staticNavLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.path} className='flex items-center gap-1.5'>
                    {link.icon && <link.icon />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </div>

            <div>
              <li>FAQ</li>
              <li>Contact Us</li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}
