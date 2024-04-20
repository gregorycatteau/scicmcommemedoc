import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'scicgreen' : '#2b8c00',
        'scicorange' : '#f26612',
        'scicblue' : '#b0d9ff',
        'scicyellow' : '#ffbf08',
        'scicpurple' : '#bf87cc',
      },
      fontFamily: {
        sans: ['', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'site-background': "url('/wallpaper3.png')",
        
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // ...
  ],
}