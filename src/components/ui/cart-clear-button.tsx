'use client'

import { Trash } from '../icons/trash'
import { removeCartLine } from '@/actions/cart'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { GlobalLoader } from './global-loader'

interface Props {
  cart: string
  linesIds: string[]
}

interface State {
  loading?: boolean
}

export const CartClearButton = ({ cart, linesIds }: Props) => {
  const [state, setState] = useState<State>({ loading: false })

  const remove = useCallback(async () => {
    if (state.loading) return

    setState((prev) => ({ ...prev, loading: true }))

    try {
      const response = await removeCartLine(cart, linesIds)

      if (!response?.success) toast.error('Une erreur est survenue !')
    } catch (error) {
      toast.error('Une erreur est survenue !')

      console.log(error)
    } finally {
      setState((prev) => ({ ...prev, loading: false }))
    }
  }, [cart, state, linesIds])

  return (
    <>
      <button
        disabled={state.loading}
        onClick={remove}
        className='inline-flex items-center space-x-1 rounded-full bg-[#E5E5E5]/50 p-2 text-dark-gray'
      >
        <Trash className='*:text-dark-gray' />

        <span>Clear Cart</span>
      </button>

      {state.loading && <GlobalLoader />}
    </>
  )
}
