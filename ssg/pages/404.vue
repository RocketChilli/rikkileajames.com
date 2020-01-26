<template>
  <div class="error">
    <h1><span class="code">404</span> not found</h1>
    <p>
      Really sorry, but the page you're looking for doesn't exist. Maybe it was
      deleted, or perhaps  it hasn't been written yet. Check back in the future
      to find out which.
    </p>
    <p>In the meantime, maybe you'd like to browse these tags instead:</p>

    <tag-list :tags="tags" />
  </div>
</template>

<script>
  import TagList from '../components/tag-list.vue'

  export default {
    components: { TagList },
    async asyncData() {
      const cms = await import('../api/cms')
      return {
        tags: await cms.getTags(),
      }
    },
    head() {
      return { title: `Page not found - ${this.$store.state.settings.title}` }
    },
  }
</script>

<style></style>
