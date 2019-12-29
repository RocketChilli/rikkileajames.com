import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

/**
 * Remove the scheme, host and trailing slashes from a URL
 * @param {string} url
 * @return {string}
 */
const cleanUrl = (url) => (
  url.replace(/^https?:\/\/[^/]+(\/.*?)\/?$/, '$1')
)

/**
 * Manipulate post properties for use in website
 * @param {object} post
 * @return {object}
 */
const formatPost = (post) => ({
  ...post,
  url: cleanUrl(post.url),
})

/**
 * Get a single post from the CMS
 * @param {string} slug
 * @return {promise}
 */
const getPost = (slug) => (
  api.posts.read({ slug })
    .then(formatPost)
    .catch(console.error)
)

/**
 * Get all posts from the CMS
 * @return {promise}
 */
const getPosts = () => (
  api.posts.browse({ limit: 'all' })
    .then((posts) => posts.map(formatPost))
    .catch(console.error)
)

/**
 * Get an array of all CMS-generated content URLs
 * @return {promise}
 */
const getAllRoutes = () => (
  getPosts()
    .then((posts) => ([
      { route: '/posts', payload: posts },
      ...posts.map((post) => ({ route: post.url, payload: post })),
    ]))
    .catch(console.error)
)

export {
  getPost,
  getPosts,
  getAllRoutes,
}
