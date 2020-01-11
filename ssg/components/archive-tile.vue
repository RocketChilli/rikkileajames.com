<template>
  <li class="archive-tile">
    <div class="image">
      <img v-if="item.feature_image" :src="item.feature_image">
    </div>
    <h2>{{ item.title || item.name }}</h2>
    <p>{{ (item.excerpt || item.description || '').substring(0, 200) }}...</p>
    <a :href="item.url">Read more</a>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
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

  .archive-tile {
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

    a {
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
