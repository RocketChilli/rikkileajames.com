<template>
  <div class="post-content" :data-tags="taglist" v-html="post.html" />
</template>

<script>
  import post from '../mixins/post'

  export default {
    mixins: [post],
    data() {
      return {
        taglist: this.post.tags.map((tag) => tag.slug).join(' '),
      }
    },
  }
</script>

<style></style>
