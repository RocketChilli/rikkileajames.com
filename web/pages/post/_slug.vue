<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
  export default {
    asyncData({ payload }) {
      return { post: payload }
    },
  }
</script>

<style></style>
