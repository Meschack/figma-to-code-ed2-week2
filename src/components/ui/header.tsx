import Image, { StaticImageData } from 'next/image'
import { TrendingNews } from '@/components/ui/trending-news'
import logo from '@@/icons/logo.svg'
import user from '@@/icons/user.svg'
import search from '@@/icons/search.svg'
import Link from 'next/link'
import { Wrapper } from '@/components/ui/wrapper'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface NavLink {
  path: string
  label: string
  icon?: StaticImageData
}

const navLinks: NavLink[] = [
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About Us' },
  { path: '/account', label: 'Account', icon: user },
  { path: '/account', label: 'Cart(0)' }
]

interface Props extends ComponentProps<'header'> {}

export const Header = ({ className, ...rest }: Props) => {
  return (
    <header className={cn(className)} {...rest}>
      <TrendingNews />
      <div className=''>
        <Wrapper className='flex items-center justify-between border-b py-5'>
          <ul className='flex items-center gap-4.5'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Collection</li>
          </ul>

          <Image src={logo} alt="Ballamas's logo" />

          <div className='flex items-center gap-4.5'>
            <nav>
              <ul className='flex items-center gap-4.5'>
                {navLinks.map((link) => (
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
              </ul>
            </nav>

            <div>
              <Image src={search} alt='Search icon' />
            </div>
          </div>
        </Wrapper>
      </div>
    </header>
  )
}
