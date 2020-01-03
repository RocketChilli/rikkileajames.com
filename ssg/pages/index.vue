<template>
  <div>
    <post-preview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
  import * as cms from '../api/cms'
  import PostPreview from '../components/post-preview.vue'

  const POST_COUNT = 1

  export default {
    components: { PostPreview },

    async asyncData({ payload }) {
      return { posts: (payload || await cms.getPosts()).slice(0, POST_COUNT) }
    },
  }
</script>

<style></style>
