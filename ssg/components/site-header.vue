<template>
  <header>
    <text-logo />
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
  import TextLogo from './svg/text-logo.svg'

  export default {
    components: {
      TextLogo,
    },
    computed: {
      links() {
        return this.$store.state.settings.navigation
      },
    },
  }
</script>

<style></style>
