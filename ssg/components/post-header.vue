<template>
  <header>
    <h1>{{ post.title }}</h1>
    <formatted-time format="datetime" :time="post.published_at" />
    <ul>
      <li v-for="tag in post.tags" :key="tag.id">
        {{ tag.name }}
      </li>
    </ul>
  </header>
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
