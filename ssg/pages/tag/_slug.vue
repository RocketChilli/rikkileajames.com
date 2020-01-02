<template>
  <div>
    <h1>Tag: {{ tag.name }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.url">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as cms from '../../api/cms'

  export default {
    async asyncData({ params, payload }) {
      const tag = payload || await cms.getTag(params.slug)
      return {
        tag,
        posts: await cms.getTagPosts(tag.slug),
      }
    },
  }
</script>

<style></style>
