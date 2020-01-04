const meta = {
  methods: {
    meta(data) {
      return {
        title: data.title,
        meta: [
          {
            hid: 'title',
            name: 'title',
            content: data.meta_title,
          },
          {
            hid: 'description',
            name: 'description',
            content: data.meta_description,
          },
          {
            hid: 'ogtitle',
            property: 'og:title',
            content: data.og_title,
          },
          {
            hid: 'ogdescription',
            property: 'og:description',
            content: data.og_description,
          },
          {
            hid: 'ogurl',
            property: 'og:url',
            content: data.url,
          },
          {
            hid: 'twitter',
            name: 'twitter:card',
            content: 'summary',
          },
          {
            hid: 'twittersite',
            name: 'twitter:site',
            content: data.twitter,
          },
        ],
      }
    },
  },
}

export default meta
