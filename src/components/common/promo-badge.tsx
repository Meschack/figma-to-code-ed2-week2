import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const badgeVariants = cva('rounded-full px-3.5 py-2 uppercase', {
  variants: {
    variant: { default: 'bg-white text-black', dark: 'bg-black text-white' }
  },
  defaultVariants: { variant: 'default' }
})

interface Props extends ComponentProps<'div'>, VariantProps<typeof badgeVariants> {}

export const PromoBadge = ({ variant, className, ...rest }: Props) => {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...rest}>
      Get off 20%
    </div>
  )
}
