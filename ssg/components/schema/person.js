const structure = (person) => ({
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: person.name,
})

export default structure
