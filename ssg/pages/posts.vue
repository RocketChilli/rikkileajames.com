<template>
  <div>
    <post-archive :posts="posts" />
  </div>
</template>

<script>
  import * as cms from '../api/cms'
  import PostArchive from '../components/post-archive.vue'

  export default {
    components: { PostArchive },
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
