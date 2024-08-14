'use client'

import { removeCartLine } from '@/actions/cart'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { Overlay } from '@/components/common/overlay'
import { Icons } from '@/components/common/icons'

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

    setState(prev => ({ ...prev, loading: true }))

    try {
      const response = await removeCartLine(cart, linesIds)

      if (!response?.success) toast.error('An error occured !')
    } catch (error) {
      toast.error('An error occured !')
    } finally {
      setState(prev => ({ ...prev, loading: false }))
    }
  }, [cart, state, linesIds])

  return (
    <>
      <button
        disabled={state.loading}
        onClick={remove}
        className='flex items-center space-x-1 rounded-full bg-light-gray/50 p-2 text-dark-gray'
      >
        <Icons.trash width={14} height={14} />

        <span className='text-xs font-medium'>Clear Cart</span>
      </button>

      {state.loading && <Overlay />}
    </>
  )
}
