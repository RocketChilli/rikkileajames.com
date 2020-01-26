<template>
  <article class="post-preview">
    <div>
      <post-header :post="post" />
      <img :src="post.feature_image">
      <p>{{ post.excerpt }}</p>
      <p><a class="read-more" :href="post.path">Read more</a></p>
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2 * grid.$gutter;
    align-items: center;

    .post-header {
      margin: grid.$gutter 0 2 * grid.$gutter;
    }

    .post-header + img {
      display: none;
      margin-bottom: grid.$gutter;
    }

    .read-more {
      @extend %info-text;
    }

    img {
      border-radius: vars.$radius;
    }

    @media (max-width: grid.$break-lg) {
      display: flex;
      flex-direction: column;

      .post-header {
        text-align: center;
      }

      .post-header + img {
        display: block;
      }

      > img {
        display: none;
      }
    }
  }
</style>
