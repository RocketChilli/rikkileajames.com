<template>
  <div class="layout">
    <site-header />
    <main>
      <nuxt />
    </main>
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

<style lang="scss">
  .site-header {
    grid-area: head;
  }
</style>
