<template>
  <header class="site-header">
    <a href="/"><text-logo /></a>
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
    data() {
      return {
        links: this.$store.state.settings.navigation,
      }
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/abstracts/placeholders';
  @use '~assets/scss/layout/grid';

  .site-header {
    border-bottom: 1px solid colours.$black;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 30rem;
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
