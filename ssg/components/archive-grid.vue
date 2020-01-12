<template>
  <div class="archive-grid">
    <h1>Archive: {{ title }}</h1>
    <ul v-if="type == 'post'">
      <li is="archive-post" v-for="item in items" :key="item.id" :post="item" />
    </ul>
    <ul v-if="type == 'tag'">
      <li is="archive-tag" v-for="item in items" :key="item.id" :tag="item" />
    </ul>
  </div>
</template>

<script>
  import ArchivePost from './archive-post.vue'
  import ArchiveTag from './archive-tag.vue'

  export default {
    components: { ArchivePost, ArchiveTag },
    props: {
      items: {
        type: Array,
        required: true,
      },
      type: {
        type: String,
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

  .archive-grid {
    > h1 {
      color: colours.$grey;
      font-size: text.size(0);
      margin-bottom: grid.$gutter;
      text-align: center;
    }

    > ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: grid.$gutter;
      row-gap: 2 * grid.$gutter;
    }
  }
</style>
