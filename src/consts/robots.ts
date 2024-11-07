import { MetadataRoute } from 'next'

export function generateRobots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      disallow: '/private/',
      userAgent: '*'
    },
    sitemap: process.env.NEXT_PUBLIC_URL + '/sitemap.xml'
  }
}
