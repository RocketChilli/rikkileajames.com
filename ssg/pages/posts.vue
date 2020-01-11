<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.url">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as cms from '../api/cms'

  export default {
    async asyncData({ payload }) {
      return { posts: payload || await cms.getPosts() }
    },
  }
</script>

<style></style>
