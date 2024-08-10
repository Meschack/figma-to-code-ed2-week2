import { Cart } from '@/types/cart'
import { Separator } from './separator'
import { Button } from './button'

interface Props {
  cost: Cart['cart']['cost']
}

export const OrderSummary = ({ cost }: Props) => {
  return (
    <div className='col-span-full h-fit space-y-4 rounded-xl border border-light-gray px-6 py-4 md:col-span-4 xl:col-span-3'>
      <h2>Order summary</h2>

      <div className='space-y-3'>
        <div className='*:flex *:items-center *:justify-between *:text-sm *:font-medium *:text-dark-gray'>
          <div>
            <span>Subtotal</span>
            <span>${cost.subtotalAmount.amount}</span>
          </div>

          <div>
            <span>Discount</span>
            <span>
              ${+cost.totalAmount.amount - +cost.subtotalAmount.amount}
            </span>
          </div>
        </div>

        <Separator />

        <div className='space-y-2'>
          <div className='flex items-center justify-between text-black *:font-medium'>
            <span className='text-sm font-semibold'>Order total</span>
            <span className='text-base font-extrabold'>
              ${(+cost.totalAmount.amount).toFixed(2)}
            </span>
          </div>

          <Button className='w-full'>Checkout now</Button>
        </div>
      </div>
    </div>
  )
}
