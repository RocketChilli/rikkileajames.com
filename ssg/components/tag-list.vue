<template>
  <ul class="tag-list">
    <li v-for="tag in tags" :key="tag.id">
      <a :href="tag.path">
        {{ tag.name }}
        <span v-if="count" class="count">{{ tag.count.posts }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        required: true,
      },
      count: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/abstracts/placeholders';

  .tag-list {
    > li {
      @extend %separators;
      display: inline;
    }
  }
</style>
