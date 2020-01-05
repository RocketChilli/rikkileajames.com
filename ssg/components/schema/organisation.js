const structure = (site) => ({
  '@context': 'https://schema.org/',
  '@type': 'Organization',
  name: site.title,
  url: site.url,
})

export default structure
