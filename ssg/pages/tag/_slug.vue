<template>
  <archive-grid type="post" :items="posts" :title="tag.name" />
</template>

<script>
  import meta from '../../mixins/page-meta'
  import ArchiveGrid from '../../components/archive-grid.vue'

  export default {
    components: { ArchiveGrid },
    mixins: [meta],
    async asyncData({ params, payload, error }) {
      const cms = await import('../../api/cms')
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
    head() {
      return this.meta(this.tag)
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';

  .archive-grid {
    @extend %container-wide;
  }
</style>
