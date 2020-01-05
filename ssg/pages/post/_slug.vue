<template>
  <div>
    <post-header :post="post" />
    <post-content :post="post" />
    <structured-data type="blog-posting" :data="post" />
  </div>
</template>

<script>
  import * as cms from '../../api/cms'
  import PostHeader from '../../components/post-header.vue'
  import PostContent from '../../components/post-content.vue'
  import StructuredData from '../../components/structured-data.vue'
  import meta from '../../mixins/page-meta'

  export default {
    components: { PostHeader, PostContent, StructuredData },
    mixins: [meta],
    async asyncData({ params, payload }) {
      return { post: payload || await cms.getPost(params.slug) }
    },
    head() {
      return this.meta(this.post)
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';

  .post-header {
    @extend %container-main;

    margin-bottom: 2 * grid.$gutter;
    text-align: center;
  }
</style>
