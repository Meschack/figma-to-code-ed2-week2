'use client'

import Image from 'next/image'
import plus from '@@/icons/plus.svg'
import minus from '@@/icons/remove.svg'
import { Trash } from '../icons/trash'
import { CartProductVariant } from '@/types/cart'
import { removeCartLine, updateLineQuantity } from '@/actions/cart'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { GlobalLoader } from './global-loader'

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

        if (!response?.success) toast.error('Une erreur est survenue !', { id: 'cart-product-line' })
      } catch (error) {
        toast.error('Une erreur est survenue !', { id: 'cart-product-line' })

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

      if (!response?.success) toast.error('Une erreur est survenue !', { id: 'cart-product-line' })
    } catch (error) {
      toast.error('Une erreur est survenue !', { id: 'cart-product-line' })

      console.log(error)
    } finally {
      setState(prev => ({ ...prev, loading: false }))
    }
  }, [cart, node.id, state])

  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-5 rounded-full bg-light-gray p-3 text-black'>
        <button disabled={node.quantity === 1} onClick={() => node.quantity > 1 && updateLine(node.quantity - 1)}>
          <Image src={minus} alt='Substract icon' />
        </button>

        <span>{node.quantity}</span>

        <button onClick={() => node.merchandise.quantityAvailable > node.quantity && updateLine(node.quantity + 1)}>
          <Image src={plus} alt='Plus icon' />
        </button>
      </div>

      <button
        onClick={remove}
        className='inline-flex items-center space-x-1 rounded-full bg-[#E5E5E5]/50 p-3 text-dark-gray'
      >
        <Trash className='*:text-dark-gray' />
      </button>

      {state.loading && <GlobalLoader />}
    </div>
  )
}
