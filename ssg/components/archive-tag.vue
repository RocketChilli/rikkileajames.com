<template>
  <li class="archive-tag">
    <a :href="tag.path">
      <div class="image">
        <img v-if="tag.feature_image" :src="tag.feature_image">
        <div class="post-count">
          {{ tag.count.posts }} post{{ tag.count.posts === 1 ? '' : 's' }}
        </div>
      </div>
    </a>
    <h2><a :href="tag.path">{{ tag.name }}</a></h2>
  </li>
</template>

<script>
  export default {
    props: {
      tag: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
  @use '~assets/scss/abstracts/placeholders';
  @use '~assets/scss/abstracts/variables' as vars;
  @use '~assets/scss/abstracts/variables/text';
  @use '~assets/scss/abstracts/variables/colours';
  @use '~assets/scss/layout/grid';

  .archive-tag {
    h2 {
      @extend %info-text;

      text-align: center;
    }

    .image {
      height: 0;
      padding-bottom: calc(300% / 5);
      overflow: hidden;
      border-radius: vars.$radius;
      margin-bottom: grid.$gutter;
      background-color: colours.$light;
      position: relative;

      img {
        padding-top: 50%;
        transform: translateY(-37%);
        width: 100%;
        object-fit: cover;
      }
    }

    .post-count {
      @extend %info-text;

      font-size: text.size(-1);
      padding: .3em;
      min-width: 7em;
      text-align: center;
      color: colours.$grey;
      background: colours.$light;
      border-top-left-radius: vars.$radius;
      box-shadow: vars.$shadow;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>
