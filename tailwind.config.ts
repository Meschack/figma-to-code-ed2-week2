import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: { 28: '28px', 42: ['42px', '44px'], tiny: ['10px', '12px'] },
      fontFamily: {
        archivo: ['var(--font-archivo)'],
        chillax: ['var(--font-chillax)'],
        sans: ['var(--font-archivo)']
      },
      backgroundImage: {
        'banner-background': "url('/images/banner-background.png')",
        'first-collection': "url('/images/first-collection.png')",
        'second-collection': "url('/images/second-collection.png')"
      },
      maxWidth: {
        vw: '100vw',
        desktop: '1200px',
        tablet: '676px',
        100: '400px'
      },
      spacing: { 4.5: '18px', 5.5: '22px', 13: '52px', 18: '72px', 'px/2': '0.5px' },
      borderRadius: { '4xl': '32px', 52: '52px' },
      colors: {
        'light-gray': '#E5E5E5',
        'dark-gray': '#7E7E7E',
        'pure-black': '#000000',
        gray: '#C3C3C3',
        green: '#2D5C43',
        purple: '#393158',
        ocean: '#2A5259',
        olive: '#706947',
        black: '#1D1D1D'
      },
      borderWidth: { 1.5: '1.5px' },
      gap: { 10.5: '42px' },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(1px)' }
        }
      },
      animation: {
        wiggle: 'wiggle 300ms ease-in-out'
      },
      rotate: {
        25: '25deg'
      },
      height: { 'collection-height': '446px' }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
