import { cn } from '@/lib/utils'
import { Product } from '@/types/products'

interface Props {
  option: Product['options'][number]
  selectedOptions: Product['variants']['edges'][number]['node']['selectedOptions']
  onToggle: (name: string, value: string) => void
}

const colorClasses = {
  gray: 'bg-gray border-gray',
  green: 'bg-green border-green',
  purple: 'bg-purple border-purple',
  ocean: 'bg-ocean border-ocean',
  olive: 'bg-olive border-olive'
}

export const ColorOptions = ({ option, selectedOptions, onToggle }: Props) => {
  return (
    <div className='space-y-3.5'>
      <h3 className='text-xl font-medium'>
        {option.name}:
        {selectedOptions.find(selectedOption => selectedOption.name === option.name)?.value}
      </h3>

      <div className='flex flex-wrap gap-3'>
        {option.values.map(value => {
          const isSelected = selectedOptions.some(
            el => el.value === value && el.name === option.name
          )

          return (
            <button
              onClick={() => !isSelected && onToggle(option.name, value)}
              key={`${value}-${option.name}`}
              className={cn(
                value.toLowerCase() in colorClasses &&
                  colorClasses[value.toLowerCase() as keyof typeof colorClasses],
                'size-7 rounded-full border-2',
                isSelected && 'border-light-gray'
              )}
              style={
                !(value.toLowerCase() in colorClasses)
                  ? {
                      backgroundColor: value.toLowerCase(),
                      borderColor: isSelected ? undefined : value.toLowerCase()
                    }
                  : undefined
              }
            ></button>
          )
        })}
      </div>
    </div>
  )
}
