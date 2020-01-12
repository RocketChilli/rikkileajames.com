<template>
  <archive-grid type="post" :items="posts" />
</template>

<script>
  import * as cms from '../api/cms'
  import ArchiveGrid from '../components/archive-grid.vue'

  export default {
    components: { ArchiveGrid },
    async asyncData({ payload }) {
      return { posts: payload || await cms.getPosts() }
    },
    head() {
      return { title: `All posts - ${this.$store.state.settings.title}` }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';

  .archive-grid {
    @extend %container-wide;
  }
</style>
