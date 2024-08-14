import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {}

export const Input = ({ className, ...rest }: Props) => {
  return (
    <input
      className={cn(
        'flex h-11 items-center justify-between rounded-full border border-dark-gray px-3.5 text-black placeholder:text-black autofill:bg-transparent autofill:text-black focus-visible:outline-dark-gray',
        className
      )}
      {...rest}
    />
  )
}
