<template>
  <header class="post-header">
    <h1>
      <split-text separators=": " :limit="1">
        {{ post.title }}
      </split-text>
    </h1>
    <div class="info">
      <formatted-time format="date" :time="post.published_at" />
      - <tag-list :tags="tags" />
    </div>
  </header>
</template>

<script>
  import post from '../mixins/post'
  import FormattedTime from './formatted-time.vue'
  import SplitText from './split-text.vue'
  import TagList from './tag-list.vue'

  export default {
    components: { FormattedTime, SplitText, TagList },
    mixins: [post],
    data() {
      return {
        tags: this.post.tags.filter((tag) => tag.id !== this.post.primary_tag.id),
      }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/abstracts/placeholders';

  .post-header {
    h1 {
      color: colours.$grey;

      .split-text > span:first-child {
        color: colours.$black;
      }
    }

    .info {
      @extend %info-text;
      margin-top: .5rem;
    }

    .tag-list {
      display: inline;
    }
  }
</style>
