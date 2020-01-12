<template>
  <div class="archive-grid">
    <h1>Archive: {{ title }}</h1>
    <ul v-if="type == 'post'" class="post-grid">
      <li is="archive-post" v-for="item in items" :key="item.id" :post="item" />
    </ul>
    <ul v-if="type == 'tag'" class="tag-grid">
      <li is="archive-tag" v-for="item in sorted.slice(0, featured)" :key="item.id" :tag="item" />
    </ul>
    <tag-list v-if="type == 'tag'" :tags="sorted.slice(featured)" />
  </div>
</template>

<script>
  import ArchivePost from './archive-post.vue'
  import ArchiveTag from './archive-tag.vue'
  import TagList from './tag-list.vue'

  export default {
    components: { ArchivePost, ArchiveTag, TagList },
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
      featured: {
        type: Number,
        required: false,
        default: 6,
      },
    },
    computed: {
      sorted() {
        if (this.type === 'tag') {
          return [...this.items].sort((a, b) => b.count.posts - a.count.posts)
        }
        return this.items
      },
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/layout/grid';
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/abstracts/variables/text';
  @use '~assets/scss/abstracts/placeholders';

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

      &.post-grid {
        row-gap: 2 * grid.$gutter;
      }
    }

    > .tag-list {
      @extend %info-text;

      margin-top: 2 * grid.$gutter;
      text-align: center;
    }
  }
</style>
