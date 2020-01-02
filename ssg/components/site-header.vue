<template>
  <header>
    <h1>Rikki-Lea James</h1>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.url">
          <a :href="link.url">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      links() {
        return this.$store.state.settings.navigation
      },
    },
  }
</script>

<style></style>
