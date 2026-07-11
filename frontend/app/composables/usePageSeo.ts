export function usePageSeo(title: string, description: string) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = String(config.public.siteUrl || 'http://localhost:3000').replace(/\/$/, '')
  const canonicalPath = route.path === '/' ? '/' : route.path.replace(/\/$/, '')

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: `${siteUrl}${canonicalPath}`,
      },
    ],
  })
}
