<template>
  <ul class="tag-list">
    <li v-for="tag in tags" :key="tag.id">
      <a :href="tag.url">{{ tag.name }}</a>
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
