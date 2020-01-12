<template>
  <li class="archive-post">
    <a :href="post.path">
      <div class="image">
        <img v-if="post.feature_image" :src="post.feature_image">
      </div>
    </a>
    <h2>
      <a :href="post.path">{{ post.title }}</a>
    </h2>
    <p>{{ post.excerpt.substring(0, 200) }}...</p>
    <a class="read-more" :href="post.path">Read more</a>
  </li>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/abstracts/placeholders';
  @use '~assets/scss/abstracts/variables' as vars;
  @use '~assets/scss/abstracts/variables/text';
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/layout/grid';

  .archive-post {
    h2 {
      @extend %info-text;
    }

    p {
      font-size: text.size(-1);
    }

    h2,
    p {
      margin-bottom: 1rem;
    }

    .read-more {
      @extend %info-text;

      color: colours.$grey;
    }

    .image {
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      border-radius: vars.$radius;
      margin-bottom: grid.$gutter;
      background-color: colours.$light;

      img {
        padding-top: 50%;
        transform: translateY(-37%);
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
