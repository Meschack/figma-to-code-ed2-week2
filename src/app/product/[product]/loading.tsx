import { Skeleton } from '@/components/ui/skeleton'

const ProductLoader = () => {
  return (
    <div className='flex flex-col gap-4 p-4 xl:flex-row'>
      <Skeleton className='aspect-square w-full rounded-lg xl:w-1/2' />
      <div className='w-full space-y-4 xl:w-1/2'>
        <Skeleton className='h-8 w-3/4' />
        <Skeleton className='h-6 w-1/4' />

        <Skeleton className='h-6 w-1/3' />

        <div className='flex gap-2'>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className='size-7 rounded-full' />
          ))}
        </div>

        <Skeleton className='h-6 w-1/3' />
        <div className='flex gap-2'>
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className='h-10 w-16 rounded-full' />
          ))}
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <Skeleton className='h-11 rounded-full' />
          <Skeleton className='h-11 rounded-full' />
        </div>

        <div className='space-y-2'>
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-2/3' />
        </div>
      </div>
    </div>
  )
}

export default ProductLoader
