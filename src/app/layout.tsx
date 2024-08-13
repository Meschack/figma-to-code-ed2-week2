import type { Metadata } from 'next'
import './globals.css'
import { archivo, chillax } from '@/config/fonts'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { Toaster } from 'sonner'

const baseUrl = process.env.APP_URL

export const metadata: Metadata = {
  title: 'Ballamas',
  description: 'Ballamas Shop website',
  keywords: ['ballamas', 'shop', 'shopping', 'e-commerce', 'figma'],
  metadataBase: baseUrl ? new URL(baseUrl) : null
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${archivo.variable} ${chillax.variable} flex min-h-screen flex-col overflow-x-hidden font-sans`}
      >
        <Header />

        <main className='mt-10 flex grow flex-col justify-between bg-white md:mt-13 xl:mt-8'>
          {children}
          <Footer />
        </main>

        <Toaster richColors />
      </body>
    </html>
  )
}
