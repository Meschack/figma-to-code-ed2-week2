import { cn } from '@/lib/utils'

export const MobileMenu = () => {
  return (
    <div className='relative flex size-10 cursor-pointer items-center justify-center xl:hidden'>
      <input
        type='checkbox'
        id='menu__open__state'
        value='state'
        className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-10 cursor-pointer appearance-none'
      />

      <label htmlFor='menu__open__state'>
        <button className='relative flex flex-col items-center justify-center gap-1 xl:hidden'>
          <span
            className={cn(
              'h-0.5 w-5 bg-black transition-all duration-300 group-has-[:checked]:absolute group-has-[:checked]:rotate-25'
            )}
          ></span>
          <span
            className={cn(
              'h-0.5 w-5 bg-black transition-all duration-300 group-has-[:checked]:absolute group-has-[:checked]:-rotate-25'
            )}
          ></span>
        </button>
      </label>
    </div>
  )
}
