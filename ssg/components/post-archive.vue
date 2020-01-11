<template>
  <div class="post-archive">
    <h1>Archive: {{ title }}</h1>
    <ul>
      <li is="post-tile" v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
  import PostTile from './post-tile.vue'

  export default {
    components: { PostTile },
    props: {
      posts: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        required: false,
        default: 'All posts',
      },
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/abstracts/variables/text';

  .post-archive {
    > h1 {
      color: colours.$grey;
      font-size: text.size(0);
      margin-bottom: grid.$gutter;
      text-align: center;
    }

    > ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: grid.$gutter;
    }
  }
</style>
