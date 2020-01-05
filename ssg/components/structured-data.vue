<template>
  <script type="application/ld+json" v-html="json" />
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
    data() {
      /* eslint global-require: 'off', import/no-dynamic-require: 'off' */
      const { structure } = require(`./schema/${this.type}`)

      const json = structure(this.$store.state.settings, this.data)
      return { json: JSON.stringify(json) }
    },
  }
</script>
