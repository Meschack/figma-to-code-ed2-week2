import { Skeleton } from '@/components/ui/skeleton'

const ProductLoader = () => {
  return (
    <div className='flex flex-col gap-4 p-4 md:flex-row'>
      <Skeleton className='aspect-square w-full rounded-lg md:w-1/2' />
      <div className='w-full space-y-4 md:w-1/2'>
        <Skeleton className='h-8 w-3/4' />
        <Skeleton className='h-6 w-1/4' />
        <div className='flex gap-2'>
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className='h-6 w-6 rounded-full' />
          ))}
        </div>
        <div className='flex gap-2'>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className='h-10 w-10 rounded-md' />
          ))}
        </div>
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-24 w-full' />
      </div>
    </div>
  )
}

export default ProductLoader
