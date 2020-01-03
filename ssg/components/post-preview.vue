<template>
  <article>
    <h1>{{ post.title }}</h1>
    <formatted-time format="datetime" :time="post.published_at" />
    <p>{{ post.excerpt }}</p>
    <img :src="post.feature_image">
    <a :href="post.url">Read more</a>
  </article>
</template>

<script>
  import post from '../mixins/post'
  import FormattedTime from './formatted-time.vue'

  export default {
    components: { FormattedTime },
    mixins: [post],
  }
</script>

<style></style>
