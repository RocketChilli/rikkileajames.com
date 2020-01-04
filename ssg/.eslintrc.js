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
    'import/prefer-default-export': 'off',
    'vue/no-v-html': 'off',
  },
  overrides: {
    files: ['*.vue'],
    rules: {
      indent: 'off',
      'vue/script-indent': [
        'error',
        2,
        { baseIndent: 1 },
      ],
    }
  }
}
