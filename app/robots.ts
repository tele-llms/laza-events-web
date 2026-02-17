import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lazaevent.com' // Replace with your custom domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Assuming you have a /studio path for Sanity which shouldn't be indexed
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
