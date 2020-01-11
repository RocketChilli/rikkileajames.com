<template>
  <archive-grid type="post" :items="posts" :title="tag.name" />
</template>

<script>
  import * as cms from '../../api/cms'
  import ArchiveGrid from '../../components/archive-grid.vue'

  export default {
    components: { ArchiveGrid },
    async asyncData({ params, payload, error }) {
      const tag = payload || await cms.getTag(params.slug)
      if (!tag) {
        error({ statusCode: 404, message: 'Tag not found' })
        return {}
      }
      return {
        tag,
        posts: await cms.getTagPosts(tag.slug),
      }
    },
  }
</script>

<style></style>
