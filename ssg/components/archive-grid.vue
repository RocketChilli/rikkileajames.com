<template>
  <div class="archive-grid">
    <h1>Archive: {{ title }}</h1>
    <ul :class="`${type}-grid`">
      <li
        :is="`archive-${type}`"
        v-for="item in items"
        :key="item.id"
        v-bind="{ [type]: item }"
      />
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

    > ul:first-of-type {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: grid.$gutter;

      @media (max-width: grid.$break-lg) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: grid.$break-xs) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>
