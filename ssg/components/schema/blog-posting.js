import person from './person'
import organisation from './organisation'

const structure = (settings, post) => ({
  '@context': 'https://schema.org/',
  '@type': 'BlogPosting',
  headline: post.title,
  image: post.feature_image,
  author: person(post.primary_author),
  publisher: organisation(settings),
  keywords: post.tags.map((tag) => tag.name),
  text: post.html,
  mainEntityOfPage: post.url,
  datePublished: post.published_at,
  dateModified: post.updated_at,
})

export { structure }
