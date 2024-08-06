interface Props {
  message?: string
}

export const TrendingNews = ({
  message = 'Sign up and get 20% off for all new arrivals collections'
}: Props) => {
  return (
    <div className='bg-black px-2.5 py-4 text-white'>
      <p className='mx-auto w-fit'>{message}</p>
    </div>
  )
}
