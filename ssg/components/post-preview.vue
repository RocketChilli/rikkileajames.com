<template>
  <article class="post-preview">
    <div>
      <post-header :post="post" />
      <p>{{ post.excerpt }}</p>
      <p><a class="read-more" :href="post.url">Read more</a></p>
    </div>
    <img :src="post.feature_image">
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

<style lang="scss">
  @use '~assets/scss/layout/grid';
  @use '~assets/scss/abstracts/variables' as vars;
  @use '~assets/scss/abstracts/placeholders';

  .post-preview {
    @extend %container-wide;
    @extend %grid;
    @extend %cols-6-6;

    align-items: start;

    .post-header {
      margin: 2 * grid.$gutter 0;
    }

    .read-more {
      @extend %info-text;
    }

    img {
      border-radius: vars.$radius;
    }
  }
</style>
