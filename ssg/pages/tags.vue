<template>
  <div>
    <h1>Tags</h1>
    <ul>
      <li v-for="tag in tags" :key="tag.id">
        <a :href="tag.path">{{ tag.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as cms from '../api/cms'

  export default {
    async asyncData({ payload }) {
      return { tags: payload || await cms.getTags() }
    },
  }
</script>

<style></style>
