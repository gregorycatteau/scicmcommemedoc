// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@hypernym/nuxt-anime",
    "@nuxt/fonts" // Incluez tous vos modules ici, pas besoin de dupliquer la clé 'modules'
  ],
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
