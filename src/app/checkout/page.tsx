import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Wrapper } from '@/components/ui/wrapper'
import { Icons } from '@/components/ui/icons'
import { cookies } from 'next/headers'
import { ErrorComponent } from '@/components/ui/error'
import { CustomImage } from '@/components/ui/custom-image'
import { get } from '@/actions/cart'

const shippingMethods = [
  {
    title: 'Free shipping',
    value: 'free-shipping',
    cost: 0,
    minDuration: 7,
    maxDuration: 30
  },
  {
    title: 'Regular shipping',
    value: 'regular-shipping',
    cost: 7.5,
    minDuration: 3,
    maxDuration: 14,
    default: true
  },
  {
    title: 'Express shipping',
    value: 'express-shipping',
    cost: 22.5,
    minDuration: 1,
    maxDuration: 3
  }
]

const adressFormFields = [
  { label: 'First name', name: 'first-name' },
  { label: 'Last name', name: 'last-name' },
  { label: 'Email address', name: 'email', type: 'email' },
  { label: 'Phone number', name: 'phone', type: 'tel' },
  { label: 'Address', name: 'address' },
  { label: 'City', name: 'city' },
  { label: 'Region', name: 'region' },
  { label: 'Postal code', name: 'postal-code' }
]

const Page = async () => {
  try {
    const cartId = cookies().get('cart')?.value

    if (!cartId) {
      return (
        <ErrorComponent
          className='mb-24'
          title='Empty cart'
          description='Any product have been found in your cart. Please, add products in your cart and come back !'
          label='Find products'
        />
      )
    }

    const { cart } = await get(cartId)

    return (
      <Wrapper className='mb-24 space-y-5'>
        <h1>Checkout</h1>

        <div className='grid items-start gap-y-16 xl:grid-cols-12'>
          <div className='grid gap-6 xl:col-span-6'>
            <section className='grid gap-4'>
              <div className='flex flex-col gap-1'>
                <h2>Your Order</h2>

                <p className='text-xs font-medium text-dark-gray'>
                  By placing your order, you agree to Ballamas{' '}
                  <a
                    href='/privacy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-black'
                  >
                    Privacy
                  </a>{' '}
                  and{' '}
                  <a
                    href='/policy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-black'
                  >
                    Policy
                  </a>
                  .
                </p>
              </div>

              <div className='grid gap-6'>
                <div className='space-y-5'>
                  {cart.lines.edges.map(({ node }) => (
                    <div key={node.id} className='flex items-center justify-between'>
                      <div className='col-span-2 flex items-center gap-2.5'>
                        <div className='relative size-11 md:size-18'>
                          <CustomImage
                            src={`${node.merchandise.image.url}`}
                            alt='Merchandise image'
                            fill
                            className='rounded-lg object-cover'
                          />
                        </div>

                        <div className='flex flex-col gap-0.5'>
                          <span className='text-sm font-semibold text-black'>
                            {node.merchandise.product.title}
                          </span>
                          <span className='text-xs font-medium text-dark-gray'>
                            {node.merchandise.selectedOptions
                              .map(option => `${option.name}: ${option.value}`)
                              .join(' - ')}
                          </span>
                        </div>
                      </div>

                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-semibold text-black'>
                          ${(+node.merchandise.price.amount * node.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-1'>
                    <h2>Discount code</h2>

                    <div className='flex w-full items-center gap-2 md:max-w-100'>
                      <Input placeholder='Add discount code' className='grow' />

                      <Button>Apply</Button>
                    </div>
                  </div>

                  <p className='text-black'>
                    New customer?{' '}
                    <a href='/signup' className='underline underline-offset-4'>
                      Signup
                    </a>{' '}
                    <span className='text-dark-gray'>to get better offer</span>
                  </p>
                </div>

                <div className='grid gap-3'>
                  <div className='text-sm text-dark-gray'>
                    <div className='flex items-center justify-between'>
                      <span>Subtotal</span>
                      <span>${(+cart.cost.subtotalAmount.amount).toFixed(2)}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span>Discount</span>
                      <span>
                        $
                        {(+cart.cost.subtotalAmount.amount - +cart.cost.totalAmount.amount).toFixed(
                          2
                        )}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className='flex items-center justify-between text-base font-semibold text-black'>
                    <span>Order total</span>
                    <span>${(+cart.cost.totalAmount.amount).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </section>

            <section id='shipping-methods' className='grid gap-3.5'>
              <h2>Shipping Method</h2>

              <form className='grid gap-3'>
                {shippingMethods.map(method => (
                  <div
                    key={method.value}
                    className='flex w-full items-center gap-3.5 rounded-xl border border-light-gray p-3 text-sm font-medium'
                  >
                    <Input
                      type='radio'
                      className='size-4.5 accent-black'
                      id={method.value}
                      name='shipping-method'
                      defaultChecked={method.default}
                    />

                    <label
                      htmlFor={method.value}
                      className='flex grow items-center justify-between'
                    >
                      <div className='grid gap-0.5'>
                        <h3>{method.title}</h3>
                        <span className='text-xs font-normal text-dark-gray'>
                          {method.minDuration}-{method.maxDuration} business days
                        </span>
                      </div>

                      <span>${method.cost}</span>
                    </label>
                  </div>
                ))}
              </form>
            </section>
          </div>

          <div className='space-y-4 xl:col-span-5 xl:col-start-8'>
            <div className='space-y-1'>
              <h2>Payment details</h2>
              <p className='text-xs text-dark-gray'>
                Complete your purchase by providing your payment details.
              </p>
            </div>

            <form className='grid space-y-5.5'>
              <div className='space-y-6'>
                <div className='space-y-3'>
                  <h3 className='font-semibold'>Shipping address</h3>

                  <div className='grid gap-x-3.5 gap-y-2 md:grid-cols-2'>
                    {adressFormFields.map(field => (
                      <div className='flex flex-col gap-2' key={field.name}>
                        <label htmlFor={field.name} className='text-xs font-medium'>
                          {field.label}
                        </label>
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                          type={field.type}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className='space-y-3'>
                  <h3 className='font-semibold'>Payment method</h3>

                  <div className='space-y-5.5'>
                    <div className='grid grid-cols-2 gap-5'>
                      <div className='relative grid cursor-pointer gap-2 rounded-xl border border-gray p-3 has-[:checked]:border-black'>
                        <Icons.card color='black' />

                        <input
                          value='card'
                          defaultChecked
                          type='radio'
                          name='payment-medthod'
                          className='absolute inset-0 appearance-none'
                        />

                        <span>Debit / Credit Card</span>
                      </div>

                      <div className='relative grid cursor-pointer gap-2 rounded-xl border border-gray p-3 has-[:checked]:border-black'>
                        <Icons.bank color='black' />

                        <input
                          value='account'
                          type='radio'
                          name='payment-medthod'
                          className='absolute inset-0 appearance-none'
                        />

                        <span>Virtual account</span>
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='grid grid-cols-2 gap-2'>
                        <Input className='col-span-2' placeholder='Card number' />
                        <Input placeholder='Expiration date (MM/YY)' />
                        <Input placeholder='Security code' />
                      </div>

                      <div className='flex items-end gap-2'>
                        <Input
                          type='checkbox'
                          className='size-4.5 accent-black'
                          id='shipping-as-billing'
                          name='shipping-as-billing'
                        />

                        <label htmlFor='shipping-as-billing' className='text-xs text-pure-black'>
                          Use shipping address as billing address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button className='mx-auto flex w-full md:w-1/2'>
                <span>Pay ${cart.cost.totalAmount.amount}</span>
                <Icons.arrowRight />
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    )
  } catch (error) {
    return (
      <Wrapper className='mb-24'>
        <ErrorComponent
          className='mb-24'
          description="We're not able to load your order's details rigth now. Please, retry !"
          label='Try again'
          to=''
        />
      </Wrapper>
    )
  }
}
export default Page
