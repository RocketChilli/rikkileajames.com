<template>
  <div />
</template>

<script>
  import * as cms from '../api/cms'

  export default {
    async asyncData() {
      return { posts: await cms.getFeaturedPosts(1) }
    },
  }
</script>

<style></style>
