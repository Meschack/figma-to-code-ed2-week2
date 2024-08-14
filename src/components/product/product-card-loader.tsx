import { Skeleton } from '@/components/common/skeleton'

export const ProductCardLoader = () => {
  return (
    <div className='shrink-0 space-y-4'>
      <div className='relative aspect-[322.67/405] min-h-[405px] overflow-hidden rounded-4xl'>
        <Skeleton className='size-full' />
        <Skeleton className='absolute left-5 top-5 h-11 w-1/4 rounded-full bg-dark-gray/20' />
      </div>

      <div>
        <Skeleton className='mb-2 h-6 w-2/3' />
        <Skeleton className='h-6 w-1/3' />
      </div>
    </div>
  )
}
