<template>
  <archive-grid :items="posts" />
</template>

<script>
  import * as cms from '../api/cms'
  import ArchiveGrid from '../components/archive-grid.vue'

  export default {
    components: { ArchiveGrid },
    async asyncData({ payload }) {
      return { posts: payload || await cms.getPosts() }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';

  .post-archive {
    @extend %container-wide;
  }
</style>
