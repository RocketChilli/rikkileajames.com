<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
  import * as cms from '../../api/cms'

  export default {
    async asyncData({ params, payload }) {
      return { post: payload || await cms.getPost(params.slug) }
    },
  }
</script>

<style></style>
