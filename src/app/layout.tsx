import type { Metadata, Viewport } from 'next'
import { poppins } from '$/consts/fonts'
import { cn } from '$/lib/utils'
import { metadataConfig, viewportConfig } from '$/consts/metadata'
import './globals.css'

export const viewport: Viewport = viewportConfig
export const metadata: Metadata = metadataConfig

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
    >
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  )
}
