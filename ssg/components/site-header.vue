<template>
  <header class="site-header">
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
    components: { TextLogo },
    computed: {
      links() {
        return this.$store.state.settings.navigation
      },
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/abstracts/variables/grid';
  @use '~assets/scss/abstracts/placeholders';

  .site-header {
    border-bottom: 1px solid colours.$black;

    svg {
      width: 30rem;
      margin: 0 auto;
      fill: colours.$black;
    }

    nav {
      @extend %info-text;
      line-height: 1rem;
      margin: grid.$gutter;
    }

    ul {
      display: flex;
      justify-content: center;

      > li {
        @extend %separators;
      }
    }
  }
</style>
