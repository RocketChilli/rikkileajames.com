module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint-config-airbnb-base',
  ],
  // add your custom rules here
  rules: {
    semi: 0,
  },
}
