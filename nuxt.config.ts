// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src/',
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: '特殊な属性を持つメタタグ' },
        { name: 'twitter:card', content: 'summary' },
      ],
    },
  },
  modules: ['@pinia/nuxt'],
};
