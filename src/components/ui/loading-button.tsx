import { ComponentProps } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface Props extends ComponentProps<typeof Button> {
  loading: boolean
  loadingText?: string
  icon?: React.ComponentType<{ className?: string }>
}

export const LoadingButton = (props: Props) => {
  const { loading, loadingText = 'En cours', className, icon, children, ...rest } = props

  return (
    <Button disabled={loading} type='submit' className={cn(className)} {...rest}>
      {loading ? (
        <>
          <Spinner />
          {loadingText}
        </>
      ) : (
        <div className='flex items-center gap-1'>
          {props.icon && <props.icon className='h-3.5 w-3.5' />}
          {children}
        </div>
      )}
    </Button>
  )
}

const Spinner = () => (
  <svg
    className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    />
  </svg>
)
