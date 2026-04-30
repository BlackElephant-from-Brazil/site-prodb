import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prodb.com.br'
const siteName = 'ProDB Tecnologia'

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
}): Metadata {
  const url = `${siteUrl}${path}`
  const image = ogImage ?? `${siteUrl}/og-default.png`

  return {
    title: `${title} | ${siteName}`,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  }
}
