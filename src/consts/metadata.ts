import { Metadata, Viewport } from 'next'
import { ColorSchemeEnum } from 'next/dist/lib/metadata/types/metadata-types'
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

// Título
const title = 'QR Generator'

// Configuración básica
export const configMetadata = {
  author: {
    name: 'MaxCoding',
    twitter: '@MarcosBonilla29',
    url: 'https://maxcoding.pro'
  },
  publicUrl: new URL(process.env.NEXT_PUBLIC_URL!),
  robots: 'index,follow',
  manifest: '/manifest.webmanifest',
  site: {
    category: 'Security',
    countryName: 'Bolivia',
    description: 'Aplicación web gratuita para generar códigos QR de forma rápida y sencilla. Crea códigos QR personalizados con logo, cambio de colores y ajustes avanzados. Genera QR para enlaces, texto, contactos, ubicaciones y más. Herramienta intuitiva que permite compartir información de manera eficiente a través de códigos QR escaneables. Ideal para uso personal y profesional, compatible con todos los dispositivos y lectores QR estándar.',
    languages: ['es'],
    locales: ['es_BO'],
    title,
    type: 'website' as OpenGraphType,
  },
  viewport: {
    colorScheme: 'light' as ColorSchemeEnum,
    initialScale: 1,
    themeColor: '#ffffff'
  }
}

// Palabras clave
const keywords = {
  en: [
    'QR code reader',
    'QR scanner',
    'barcode reader',
    'QR code generator',
    'QR code scanner app',
    'mobile QR reader',
    'QR code decoder',
    'scan QR codes',
    'read QR codes',
    'QR code detection',
    'QR code recognition',
    'QR code scanning tool',
    'QR code utility',
    'QR code application'
  ],
  es: [
    'lector de códigos QR',
    'escáner QR',
    'lector de códigos de barras',
    'generador de códigos QR',
    'aplicación de escaneo QR',
    'lector QR móvil',
    'decodificador de códigos QR',
    'escanear códigos QR',
    'leer códigos QR',
    'detección de códigos QR',
    'reconocimiento de códigos QR',
    'herramienta de escaneo QR',
    'utilidad de códigos QR',
    'aplicación de códigos QR'
  ]
}

// Configuración de imágenes
const sizes: number[] = [32,48,72,96,144,192]

const images = {
  cover: {
    alt: `${configMetadata.site.title} Cover`,
    height: 930,
    type: 'image/png',
    url: '/cover.png',
    width: 1200
  },
  icons: sizes.map(size => ({
    sizes: `${size}x${size}`,
    type: 'image/svg+xml',
    url: `/icon-${size}x${size}.svg`
  }))
}

// Configuración de metadatos
export const metadataConfig: Metadata = {
  alternates: { canonical: '/' },
  manifest: configMetadata.manifest,
  // Apple Web App
  appleWebApp: {
    capable: true,
    startupImage: images.icons[images.icons.length - 1].url,
    statusBarStyle: 'black-translucent',
    title: configMetadata.site.title
  },
  // Información del sitio
  applicationName: configMetadata.site.title,
  authors: configMetadata.author,
  category: configMetadata.site.category,
  creator: configMetadata.author.name,
  description: configMetadata.site.description,
  // Iconos y PWA
  icons: {
    apple: images.icons,
    icon: images.icons
  },
  keywords: keywords.es.concat(keywords.en).join(', '),
  metadataBase: configMetadata.publicUrl,
  // Open Graph
  openGraph: {
    alternateLocale: configMetadata.site.locales,
    countryName: configMetadata.site.countryName,
    description: configMetadata.site.description,
    images: [images.cover],
    locale: configMetadata.site.locales[0],
    siteName: configMetadata.site.title,
    title: {
      absolute: configMetadata.site.title,
      template: `%s | ${configMetadata.site.title}`
    },
    type: configMetadata.site.type,
    url: configMetadata.publicUrl.toString()
  },

  other: {
    'mobile-web-app-capable': 'yes'
  },

  robots: configMetadata.robots,

  // SEO básico
  title: {
    absolute: configMetadata.site.title,
    template: `%s | ${configMetadata.site.title}`
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    creator: configMetadata.author.twitter,
    description: configMetadata.site.description,
    images: [images.cover],
    title: {
      absolute: configMetadata.site.title,
      template: `%s | ${configMetadata.site.title}`
    }
  }
}

export const viewportConfig: Viewport = {
  colorScheme: configMetadata.viewport.colorScheme,
  initialScale: configMetadata.viewport.initialScale,
  themeColor: configMetadata.viewport.themeColor
}
