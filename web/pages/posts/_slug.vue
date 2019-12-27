<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
  import { getPost } from '../../api/cms'

  export default {
    async asyncData({ params, payload }) {
      if (payload) {
        return { post: payload }
      }
      const post = await getPost(params.slug)
      return { post }
    },
  }
</script>

<style></style>
