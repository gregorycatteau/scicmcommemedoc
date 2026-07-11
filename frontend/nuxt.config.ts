import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-10',
  devtools: { enabled: true },
  srcDir: 'app/',
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_ENDPOINT || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s | Mcomme Medoc',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
})
