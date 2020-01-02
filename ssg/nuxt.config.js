import * as cms from './api/cms'

export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: { color: '#fff' },

  css: [],

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
  },

  server: {
    // Allow dev server to be accessible through exposed Docker port
    host: '0.0.0.0',
  },

  generate: {
    routes() {
      return cms.getAllRoutes()
    },
    subFolders: false,
    dir: '../site/html',
  },
}
