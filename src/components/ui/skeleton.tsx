import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'div'> {}

export const Skeleton = ({ className, ...props }: Props) => {
  return <div className={cn('animate-pulse rounded-md bg-gray/90', className)} {...props} />
}
