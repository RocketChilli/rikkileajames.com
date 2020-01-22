<template>
  <main>
    <archive-grid type="tag" :items="featured" title="All tags" />
    <tag-list :tags="others" :count="true" />
  </main>
</template>

<script>
  import * as cms from '../api/cms'
  import ArchiveGrid from '../components/archive-grid.vue'
  import TagList from '../components/tag-list.vue'
  import tagUtils from '../mixins/tag-utils'

  const FEATURED_TAGS = 6

  export default {
    components: { ArchiveGrid, TagList },
    mixins: [tagUtils],
    computed: {
      sorted() {
        return [...this.tags].sort((a, b) => b.count.posts - a.count.posts)
      },
      featured() {
        return this.sorted.slice(0, FEATURED_TAGS)
          .map((tag) => this.getImage(tag, this.posts))
      },
      others() {
        return this.sorted.slice(FEATURED_TAGS)
      },
    },
    async asyncData({ payload }) {
      return {
        tags: payload?.tags || await cms.getTags(),
        posts: payload?.posts || await cms.getPosts(),
      }
    },
    head() {
      return { title: `All tags - ${this.$store.state.settings.title}` }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';
  @use '~assets/scss/abstracts/placeholders';
  @use '~assets/scss/abstracts/variables/colours';

  .archive-grid {
    @extend %container-wide;

    row-gap: 2 * grid.$gutter;
  }

  .tag-list {
    @extend %info-text;
    @extend %container-main;

    margin-top: 2 * grid.$gutter;
    text-align: center;
    line-height: 1.8;

    .count {
      color: colours.$grey;
    }
  }
</style>
