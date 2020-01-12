<template>
  <archive-grid :items="tags" title="All tags" />
</template>

<script>
  import * as cms from '../api/cms'
  import ArchiveGrid from '../components/archive-grid.vue'

  export default {
    components: { ArchiveGrid },
    async asyncData({ payload }) {
      return { tags: payload || await cms.getTags() }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';

  .archive-grid {
    @extend %container-wide;
  }
</style>
