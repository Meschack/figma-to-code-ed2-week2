import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['var(--font-archivo)'],
        chillax: ['var(--font-chillax)'],
        sans: ['var(--font-archivo)']
      },
      backgroundImage: {
        'banner-background': "url('/images/banner-background.png')"
      },
      maxWidth: {
        vw: '100vw',
        desktop: '1200px',
        tablet: '676px'
      },
      spacing: {
        4.5: '18px',
        13: '52px',
        18: '72px'
      },
      borderRadius: {
        52: '52px'
      },
      colors: {
        'light-gray': '#E5E5E5',
        gray: '#C3C3C3',
        'dark-gray': '#7E7E7E',
        green: '#2D5C43',
        purple: '#393158',
        ocean: '#2A5259',
        olive: '#706947',
        black: '#1D1D1D'
      }
    }
  },
  plugins: []
}
export default config
