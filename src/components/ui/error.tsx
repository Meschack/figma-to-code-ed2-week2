import Image from 'next/image'
import notFound from '@@/icons/not-found.svg'
import { Wrapper } from './wrapper'

interface Props {
  title?: string
  description?: string
  label?: string
  to?: string
}

export const ErrorComponent = ({ description, label, title, to }: Props) => (
  <Wrapper className='rounded-sm bg-transparent px-5'>
    <div className='mx-auto flex flex-col items-center gap-10'>
      <Image
        alt='Not found illustration'
        width='400'
        height='400'
        decoding='async'
        src={notFound}
        priority
        className='text-transparent'
      />

      <div className='flex flex-col items-center gap-5 text-center'>
        <h2 className='text-2xl font-bold text-black dark:text-white'>{title ?? 'Une erreur est survenue'}</h2>
        <p className='font-medium'>
          {description ?? "La page que vous recherchez a été déplacée, supprimée ou n'existe pas."}
        </p>

        <a
          className='w-fit rounded-md border border-neutral-800 px-6 py-3 font-medium text-neutral-800 hover:bg-neutral-800 hover:text-white hover:!no-underline'
          href={to ?? '/'}
        >
          {label ?? 'Revenir en lieu sûr'}
        </a>
      </div>
    </div>
  </Wrapper>
)
