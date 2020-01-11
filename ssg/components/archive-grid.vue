<template>
  <div class="archive-grid">
    <h1>Archive: {{ title }}</h1>
    <ul>
      <li is="archive-tile" v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
  import ArchiveTile from './archive-tile.vue'

  export default {
    components: { ArchiveTile },
    props: {
      items: {
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
      grid-gap: grid.$gutter;
    }
  }
</style>
