interface SeoOptions {
  title: string
  description: string
  image?: string
  url?: string
  canonical?: string
}

export function useAppSeo({ title, description, image, url, canonical }: SeoOptions) {
  const fullTitle = `${title} | Bynery`
  const canonicalUrl = canonical ?? (url ? `https://bynery.app${url}` : 'https://bynery.app')

  useSeoMeta({
    title: fullTitle,
    ogTitle: fullTitle,
    description: description,
    ogDescription: description,
    ogImage: image ?? 'https://bynery.app/images/overall.png',
    ogUrl: url ? `https://bynery.app${url}` : undefined,
    ogSiteName: 'Bynery',
    twitterCard: 'summary_large_image',
    canonical: canonicalUrl,
  })
}
