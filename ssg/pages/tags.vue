<template>
  <div>
    <archive-grid type="tag" :items="featured" title="All tags" />
    <tag-list v-if="type == 'tag'" :tags="sorted.slice(featured)" />
  </div>
</template>

<script>
  import * as cms from '../api/cms'
  import ArchiveGrid from '../components/archive-grid.vue'
  import TagList from '../components/tag-list.vue'

  const FEATURED_TAGS = 6

  export default {
    components: { ArchiveGrid, TagList },
    computed: {
      sorted() {
        if (this.type === 'tag') {
          return [...this.items].sort((a, b) => b.count.posts - a.count.posts)
        }
        return this.items
      },
      featured() {
        return this.sorted.slice(0, FEATURED_TAGS)
      },
      unfeatured() {
        return this.sorted.slice(FEATURED_TAGS)
      },
    },
    async asyncData({ payload }) {
      return { tags: payload || await cms.getTags() }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';
  @use '~assets/scss/abstracts/placeholders';

  .archive-grid {
    @extend %container-wide;
  }

  > .tag-list {
    @extend %info-text;
    @extend %container-main;

    margin-top: 2 * grid.$gutter;
    text-align: center;
  }
</style>
