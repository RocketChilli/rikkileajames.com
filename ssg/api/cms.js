import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  // FIXME: The URL is undefined in the static frontend, causing an error in the browser
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

const options = {
  include: 'tags,authors',
}

/**
 * Get the path component of a URL
 * @param {string} url
 * @return {string}
 */
const getUrlPath = (url) => (
  url.replace(/^(?:https?:\/\/[^/]+)?(\/.*?)\/?$/, '$1')
)

/**
 * Recursively format CMS objects
 * @param {object} item
 * @return {object}
 */
const format = (item, name) => {
  if (Array.isArray(item)) {
    // Handle all array elements
    return item.map((value) => format(value, name))
  }
  if (item && typeof item === 'object') {
    // Handle all object properties
    const output = {}
    Object.entries(item).forEach(([key, value]) => {
      output[key] = format(value, key)

      if (key === 'url') {
        // Add relative path property
        output.path = getUrlPath(value)
      }
    })
    return output
  }
  if (name === 'url') {
    // Remove trailing slashes from URLs
    return item.replace(/\/$/, '')
  }
  return item
}

/**
 * Get a single post from the CMS
 * @param {string} slug
 * @return {promise}
 */
const getPost = (slug) => (
  api.posts.read({ slug }, options)
    .then(format)
    .catch(console.error)
)

/**
 * Get all posts from the CMS
 * @return {promise}
 */
const getPosts = () => (
  api.posts.browse({ limit: 'all', ...options })
    .then(format)
    .catch(console.error)
)

/**
 * Get all posts from the CMS for a particular tag
 * @param {string} slug - The tag slug
 * @return {promise}
 */
const getTagPosts = (slug) => (
  api.posts.browse({ limit: 'all', filter: `tag:${slug}`, ...options })
    .then(format)
    .catch(console.error)
)

/**
 * Get featured posts from the CMS
 * @param {number} limit - The number of posts to fetch
 * @return {promise}
 */
const getFeaturedPosts = (limit) => (
  api.posts.browse({ limit, filter: 'featured:true', ...options })
    .then(format)
    .catch(console.error)
)

/**
 * Get a single tag from the CMS
 * @param {string} slug
 * @return {promise}
 */
const getTag = (slug) => (
  api.tags.read({ slug })
    .then(format)
    .catch(console.error)
)

/**
 * Get all tags from the CMS
 * @return { promise}
 */
const getTags = () => (
  api.tags.browse({ limit: 'all', include: 'count.posts' })
    .then(format)
    .catch(console.error)
)

/**
 * Get an array of all CMS-generated content URLs
 * @return {promise}
 */
const getAllRoutes = () => (
  Promise.all([getPosts(), getTags()])
    .then(([posts, tags]) => ([
      { route: '/', payload: posts },
      { route: '/posts', payload: posts },
      ...posts.map((post) => ({ route: post.path, payload: post })),
      { route: '/tags', payload: { tags, posts } },
      ...tags.map((tag) => ({ route: tag.path, payload: tag })),
    ]))
    .catch(console.error)
)

/**
 * Get all settings from the CMS
 * @return {promise}
 */
const getSettings = () => (
  api.settings.browse()
    .then(format)
)

export {
  getPost,
  getPosts,
  getTagPosts,
  getFeaturedPosts,
  getTag,
  getTags,
  getAllRoutes,
  getSettings,
}
