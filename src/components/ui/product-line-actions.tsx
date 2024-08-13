'use client'

import { CartProductVariant } from '@/types/cart'
import { removeCartLine, updateLineQuantity } from '@/actions/cart'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { Overlay } from './overlay'
import { Icons } from './icons'

interface Props {
  cart: string
  node: CartProductVariant
}

interface State {
  loading?: boolean
}

export const ProductLineActions = ({ node, cart }: Props) => {
  const [state, setState] = useState<State>({ loading: false })

  const updateLine = useCallback(
    async (quantity: number) => {
      if (state.loading) return

      setState(prev => ({ ...prev, loading: true }))

      try {
        const response = await updateLineQuantity(cart, node.id, quantity)

        if (!response?.success) toast.error('An error occured !', { id: 'cart-product-line' })
      } catch (error) {
        toast.error('An error occured !', { id: 'cart-product-line' })

        console.log(error)
      } finally {
        setState(prev => ({ ...prev, loading: false }))
      }
    },
    [state, node.id, cart]
  )

  const remove = useCallback(async () => {
    if (state.loading) return

    setState(prev => ({ ...prev, loading: true }))

    try {
      const response = await removeCartLine(cart, [node.id])

      if (!response?.success) toast.error('An error occured !', { id: 'cart-product-line' })
    } catch (error) {
      toast.error('An error occured !', { id: 'cart-product-line' })

      console.log(error)
    } finally {
      setState(prev => ({ ...prev, loading: false }))
    }
  }, [cart, node.id, state])

  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-1.5 rounded-full bg-light-gray p-2 text-black md:gap-5 md:p-3'>
        <button
          disabled={node.quantity === 1}
          onClick={() => node.quantity > 1 && updateLine(node.quantity - 1)}
          className='cursor-pointer disabled:cursor-not-allowed disabled:text-dark-gray'
        >
          <Icons.remove className='w-4 md:w-5' />
        </button>

        <span className='inline-flex size-4 items-center justify-center md:size-5'>
          {node.quantity}
        </span>

        <button
          disabled={node.merchandise.quantityAvailable <= node.quantity}
          onClick={() =>
            node.merchandise.quantityAvailable > node.quantity && updateLine(node.quantity + 1)
          }
          className='cursor-pointer disabled:cursor-not-allowed disabled:text-dark-gray'
        >
          <Icons.plus className='w-4 md:w-5' />
        </button>
      </div>

      <button
        onClick={remove}
        className='inline-flex aspect-square shrink-0 items-center rounded-full bg-light-gray/50 p-2 text-black md:p-3'
      >
        <Icons.trash className='w-4 md:w-5' />
      </button>

      {state.loading && <Overlay />}
    </div>
  )
}
