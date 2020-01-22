import Sass from 'dart-sass'
import * as cms from './api/cms'

export default {
  mode: 'universal',

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: { color: '#fff' },

  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' },
  ],

  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
    extend(config) {
      // Exclude component SVGs from normal file loader
      const fileRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      fileRule.exclude = /components/
      // Add loader rule for inline SVG components
      config.module.rules.push({
        loader: 'vue-svg-loader',
        include: /components\/svg/,
      })
    },
    loaders: {
      scss: { implementation: Sass },
    },
    babel: {
      plugins: [
        // TODO: Remove this once integrated into Babel core
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
  },

  server: {
    // Allow dev server to be accessible through exposed Docker port
    host: '0.0.0.0',
  },

  generate: {
    async routes() {
      return [...await cms.getAllRoutes(), '/404']
    },
    subFolders: false,
    dir: '../site/html',
  },
}
