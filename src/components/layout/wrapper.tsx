import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ className, children, ...rest }: Props) => (
  <div
    className={cn(
      'mx-auto w-full max-w-[calc(100vw-40px)] md:max-w-tablet xl:max-w-desktop',
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
