<template>
  <main>
    <post-preview v-for="post in posts" :key="post.id" :post="post" />
  </main>
</template>

<script>
  import * as cms from '../api/cms'
  import PostPreview from '../components/post-preview.vue'
  import meta from '../mixins/page-meta'

  const POST_COUNT = 1

  export default {
    components: { PostPreview },
    mixins: [meta],
    async asyncData({ payload }) {
      return { posts: (payload || await cms.getPosts()).slice(0, POST_COUNT) }
    },
    head() {
      return this.meta(this.$store.state.settings)
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';

  .post-preview {
    @extend %container-wide;
  }
</style>
