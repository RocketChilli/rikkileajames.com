<template>
  <ul class="tag-list">
    <li v-for="tag in tags" :key="tag.id">
      <span>{{ tag.name }}</span>
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
