const meta = {
  methods: {
    meta(data) {
      const siteTitle = this.$store.state.settings.title
      const title = data.title === siteTitle ? data.title : `${data.title} - ${siteTitle}`

      const properties = [
        {
          name: 'title',
          content: data.meta_title || data.title,
        },
        {
          name: 'description',
          content: data.meta_description || data.description || data.excerpt,
        },
        {
          property: 'og:title',
          content: data.og_title || data.title,
        },
        {
          property: 'og:description',
          content: data.og_description || data.meta_description || data.description,
        },
        {
          property: 'og:url',
          content: data.url,
        },
        {
          property: 'og:image',
          content: data.feature_image,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: data.twitter,
        },
        {
          name: 'twitter:creator',
          content: data.primary_author?.twitter,
        },
      ]

      return {
        title,
        meta: properties.filter((item) => item.content),
      }
    },
  },
}

export default meta
