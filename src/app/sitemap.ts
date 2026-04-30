import type { MetadataRoute } from 'next'
import { posts } from '@/content/posts'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prodb.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/servidores-cloud`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/backup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/empresa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/seja-um-parceiro`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/termos-de-uso`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/politica-de-cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages]
}
