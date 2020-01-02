import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

/**
 * Get the path component of a URL
 * @param {string} url
 * @return {string}
 */
const getUrlPath = (url) => (
  url.replace(/^https?:\/\/[^/]+(\/.*?)\/?$/, '$1')
)

/**
 * Manipulate CMS objects for use in website
 * @param {object} item
 * @return {object}
 */
const formatObject = (item) => ({
  ...item,
  url: getUrlPath(item.url),
})

/**
 * Get a single post from the CMS
 * @param {string} slug
 * @return {promise}
 */
const getPost = (slug) => (
  api.posts.read({ slug })
    .then(formatObject)
    .catch(console.error)
)

/**
 * Get all posts from the CMS
 * @return {promise}
 */
const getPosts = () => (
  api.posts.browse({ limit: 'all' })
    .then((posts) => posts.map(formatObject))
    .catch(console.error)
)

/**
 * Get all posts from the CMS for a particular tag
 * @param {string} slug - The tag slug
 * @return {promise}
 */
const getTagPosts = (slug) => (
  api.posts.browse({ limit: 'all', filter: `tag:${slug}` })
    .then((posts) => posts.map(formatObject))
    .catch(console.error)
)

/**
 * Get a single tag from the CMS
 * @param {string} slug
 * @return {promise}
 */
const getTag = (slug) => (
  api.tags.read({ slug })
    .then(formatObject)
    .catch(console.error)
)

/**
 * Get all tags from the CMS
 * @return { promise}
 */
const getTags = () => (
  api.tags.browse({ limit: 'all' })
    .then((tags) => tags.map(formatObject))
    .catch(console.error)
)

/**
 * Get an array of all CMS-generated content URLs
 * @return {promise}
 */
const getAllRoutes = () => (
  Promise.all([getPosts(), getTags()])
    .then(([posts, tags]) => ([
      { route: '/posts', payload: posts },
      ...posts.map((post) => ({ route: post.url, payload: post })),
      { route: '/tags', payload: tags },
      ...tags.map((tag) => ({ route: tag.url, payload: tag })),
    ]))
    .catch(console.error)
)

/**
 * Get all settings from the CMS
 * @return {promise}
 */
const getSettings = () => (
  api.settings.browse()
)

export {
  getPost,
  getPosts,
  getTagPosts,
  getTag,
  getTags,
  getAllRoutes,
  getSettings,
}
