// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    // Incluez tous vos modules ici, pas besoin de dupliquer la clé 'modules'
    "@hypernym/nuxt-anime",
    "@nuxt/fonts",
    "@pinia/nuxt",
    '@vueuse/nuxt',
    ['nuxt-mail', {
      message: {
        to: process.env.EMAIL_TO,
        cc:process.env.EMAIL_CC,
        bcc: process.env.EMAIL_BCC,
      },
      smtp: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }],
  ],
  // nuxt.config.ts
  
  app: {
    head: {
      title: 'M Comme Médoc - Engagez-vous dans l\'économie sociale en Médoc',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'M Comme Médoc, une SCIC dynamique en Médoc, favorise une économie solidaire et durable. Participez à nos projets innovants de développement territorial et social, et engagez-vous à nos côtés pour un territoire plus fort et plus vert. Découvrez comment vous impliquer aujourd\'hui.' },
        { hid: 'keywords', name: 'keywords', content: 'M Comme Médoc, SCIC, économie sociale, développement territorial, Médoc, coopérative, engagement communautaire, développement durable' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'og:title', property: 'og:title', content: 'M Comme Médoc - Engagez-vous dans l\'économie sociale en Médoc' },
        { hid: 'og:description', property: 'og:description', content: 'Rejoignez M Comme Médoc pour promouvoir une économie solidaire en Médoc. Engagez-vous dans nos projets de coopération pour un impact social durable.' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.mcommemedoc.fr' },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.mcommemedoc.fr' }
      ]
    },
  },


  anime: {
    provide: true,
  },
  colorMode: {
    preference: 'light', // valeur par défaut de $colorMode.preference
  },
  content: {
    api: {
      baseURL: '/api/_my_content'
    }
  },
  fonts: {
    families: [
      // Montserrat avec les styles et poids que vous souhaitez
      {
        name: 'Montserrat',
        provider: 'google',
        weights: ['400', '700'], // ajoutez d'autres poids si nécessaire
        styles: ['normal', 'italic']
      },
      // Playfair Display avec les styles et poids que vous souhaitez
      {
        name: 'Playfair Display',
        provider: 'google',
        weights: ['400', '700'], // ajoutez d'autres poids si nécessaire
        styles: ['normal', 'italic']
      },
      // Lora avec les styles et poids que vous souhaitez
      {
        name: 'Lora',
        provider: 'google',
        weights: ['400', '700'], // ajoutez d'autres poids si nécessaire
        styles: ['normal', 'italic']
      },
      // Kaina (assurez-vous que le nom est correct ou remplacez-le par la police voulue)
      {
        name: 'Kalnia', // Remplacez par le nom exact si c'est une police Google
        provider: 'google', // ou 'none' si c'est une police personnalisée et fournissez les détails nécessaires
        weights: ['400', '700'], // Ajustez selon les besoins
        styles: ['normal', 'italic'] // Ajustez selon les besoins
      },
      {
        name: 'Permanent Marker',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal', 'italic']
      }
    ],
    // Personnalisez d'autres paramètres si nécessaire
  }
});