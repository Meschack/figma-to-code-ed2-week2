import logo from '@@/icons/logo.svg'
import logoDark from '@@/icons/logo-dark.svg'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  theme?: 'light' | 'dark'
}

export const Logo = ({ theme = 'light' }: Props) => {
  return (
    <Link href='/'>
      <Image src={theme === 'light' ? logo : logoDark} alt="Ballamas's logo" />
    </Link>
  )
}
