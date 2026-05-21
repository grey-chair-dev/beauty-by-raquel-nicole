import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/services`, lastModified },
    { url: `${baseUrl}/bridal`, lastModified },
    { url: `${baseUrl}/gallery`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/book`, lastModified },
  ]
} 