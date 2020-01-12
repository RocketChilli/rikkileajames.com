const tagUtils = {
  methods: {
    /*
     * Try and find a tag image from child posts
     * @param {object} tag - The tag object
     * @param {array} posts - An array of posts to look in
     * @return {object}
     */
    getImage(tag, posts) {
      if (tag.feature_image) {
        return tag
      }
      const image = (posts.find((post) => (
        post.feature_image && post.tags.some((postTag) => postTag.id === tag.id)
      )) || {}).feature_image
      return { ...tag, feature_image: image }
    },
  },
}

export default tagUtils
