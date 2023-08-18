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
  title: 'QR Generator - Maxcoding',
  description: 'QR Generator Maxcoding'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
