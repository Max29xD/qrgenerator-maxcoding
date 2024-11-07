import { MetadataRoute } from 'next'

export function generateSitemap(): MetadataRoute.Sitemap {
  const routes = ['/']
  return routes.map(route => ({
    changeFrequency: 'weekly',
    lastModified: new Date(),
    priority: route === '' ? 1 : 0.8,
    url: process.env.NEXT_PUBLIC_URL + route
  }))
}
