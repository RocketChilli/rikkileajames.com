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
      return { post: payload || await getPost(params.slug) }
    },
  }
</script>

<style></style>
