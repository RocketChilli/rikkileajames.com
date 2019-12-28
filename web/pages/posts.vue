<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <a :href="post.url">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    asyncData({ payload }) {
      return { posts: payload }
    },
  }
</script>

<style></style>
