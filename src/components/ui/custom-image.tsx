import Image from 'next/image'
import { ComponentProps } from 'react'

import placeholderImage from '@@/images/placeholder.png'

interface Props extends ComponentProps<typeof Image> {}

export const CustomImage = ({ placeholder, blurDataURL, ...rest }: Props) => {
  return (
    <Image
      placeholder={placeholder || 'blur'}
      blurDataURL={placeholderImage.src || blurDataURL}
      {...rest}
    />
  )
}
