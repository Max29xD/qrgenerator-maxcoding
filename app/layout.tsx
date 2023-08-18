import Generator from '@/components/Generator'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  fallback: ['sans-serif'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Qr Generator - Maxcoding',
  description: 'Qr Generator Maxcoding'
}

export default function RootLayout() {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <main>
          <Generator />
        </main>
      </body>
    </html>
  )
}
