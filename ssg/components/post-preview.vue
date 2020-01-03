<template>
  <article>
    <post-header :post="post" />
    <p>{{ post.excerpt }}</p>
    <img :src="post.feature_image">
    <a :href="post.url">Read more</a>
  </article>
</template>

<script>
  import post from '../mixins/post'
  import PostHeader from './post-header.vue'

  export default {
    components: { PostHeader },
    mixins: [post],
  }
</script>

<style></style>
