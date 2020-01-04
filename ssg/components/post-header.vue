<template>
  <header class="post-header">
    <h1>
      <split-text separator=" " :limit="1">
        {{ post.title }}
      </split-text>
    </h1>
    <div class="info">
      <formatted-time format="date" :time="post.published_at" />
      - <ul class="tags">
        <li v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import post from '../mixins/post'
  import FormattedTime from './formatted-time.vue'
  import SplitText from './split-text.vue'

  export default {
    components: { FormattedTime, SplitText },
    mixins: [post],
    computed: {
      tags() {
        return this.post.tags.slice(1)
      },
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

    .tags {
      display: inline;

      > li {
        @extend %separators;
        display: inline;
      }
    }
  }
</style>
