import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const Radio = forwardRef<HTMLInputElement, Props>(({ className, id, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      id={id}
      type='radio'
      className={cn(
        "relative size-4.5 appearance-none rounded-full border border-dark-gray checked:border-black checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:size-2.5 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:rounded-full checked:before:bg-black checked:before:content-['']",
        className
      )}
      {...rest}
    />
  )
})

Radio.displayName = 'Radio'
