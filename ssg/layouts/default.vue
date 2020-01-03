<template>
  <div class="container">
    <site-header />
    <nuxt />
  </div>
</template>

<script>
  import SiteHeader from '../components/site-header.vue'

  export default {
    components: {
      SiteHeader,
    },
  }
</script>

<style></style>
