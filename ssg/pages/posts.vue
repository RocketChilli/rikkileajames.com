<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.url">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getPosts } from '../api/cms'

  export default {
    async asyncData({ payload }) {
      return { posts: payload || await getPosts() }
    },
  }
</script>

<style></style>
