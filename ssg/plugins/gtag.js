import Vue from 'vue'
import VueGtag from 'vue-gtag'

const config = {
  id: process.env.GOOGLE_MEASUREMENT_ID,
}

// From https://github.com/nuxt-community/gtm-module/issues/82#issuecomment-762153556
export default ({ app }) => {
  Vue.use(VueGtag, { config }, app.router)
}
