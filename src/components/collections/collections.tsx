'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/common/button'
import { ProductCard } from '../product/product-card'
import { Collections as CollectionsType } from '@/types/collections'

interface Props {
  collections: CollectionsType['collections']
}

interface State {
  selectedCollection: string
}

export const Collections = ({ collections }: Props) => {
  // Eviter que les quantités changent à chaque fois qu'on sélectionne une autre collection

  const collectionsAvailableQuantity = useMemo(() => {
    return collections.edges.reduce<Record<string, number>>((acc, curr) => {
      acc[curr.node.handle] = Math.floor(Math.random() * 100)

      return acc
    }, {})
  }, [])

  const [state, setState] = useState<State>({
    selectedCollection: collections.edges[0].node.handle
  })

  const selectedCollection = collections.edges.find(
    collection => collection.node.handle === state.selectedCollection
  )

  const onCollectionChange = (collection: string) => {
    state.selectedCollection !== collection &&
      setState(prev => ({
        ...prev,
        selectedCollection: collection
      }))
  }

  return (
    <div className='space-y-9'>
      <div className='flex flex-wrap items-center gap-3.5 md:justify-center'>
        {collections.edges.map(collection => (
          <Button
            key={collection.node.id}
            variant={collection.node.handle === state.selectedCollection ? 'fill' : 'transparent'}
            className='items-center gap-1 border-1.5 font-semibold'
            onClick={() => onCollectionChange(collection.node.handle)}
          >
            <span className='text-sm md:text-xl'>{collection.node.title}</span>
            <span className='text-xs md:text-base' suppressHydrationWarning>
              {collectionsAvailableQuantity[collection.node.handle]}
            </span>
          </Button>
        ))}
      </div>

      <div className='space-y-8 xl:mx-24'>
        {selectedCollection ? (
          <div className='space-y-4'>
            <div className='grid gap-3.5 md:grid-cols-2 xl:grid-cols-3'>
              {selectedCollection.node.products.edges.map(edge => (
                <ProductCard key={edge.node.id} product={edge.node} />
              ))}
            </div>
          </div>
        ) : (
          <p>We're not able to load this collections's products right now. Please, retry</p>
        )}

        <Button className='mx-auto block' variant='transparent'>
          Voir plus
        </Button>
      </div>
    </div>
  )
}
