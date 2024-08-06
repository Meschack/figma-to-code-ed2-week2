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
      }
    }
  },
  plugins: []
}
export default config
