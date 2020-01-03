<template>
  <header class="post-header">
    <h1>{{ post.title }}</h1>
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

  export default {
    components: { FormattedTime },
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
  @use '~assets/scss/abstracts/variables/grid';
  @use '~assets/scss/abstracts/placeholders';

  .post-header {
    h1 {
      color: colours.$grey;
    }

    .info {
      @extend %info-text;
      margin-top: .5rem;
      margin-bottom: 2rem;
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
