import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  adjustFontFallback: true,
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})