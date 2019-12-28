import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

/**
 * Build a page route from a post object
 * @param {object} post
 * @return {object}
 */
const getRoute = (post) => ({
  route: post.url.replace(/^https?:\/\/[^/]+(\/.*?)\/?$/, '$1'),
  payload: post,
})

/**
 * Get a single post from the CMS
 * @param {string} slug
 * @return {promise}
 */
const getPost = (slug) => (
  api.posts.read({ slug })
    .catch(console.error)
)

/**
 * Get all posts from the CMS
 * @return {promise}
 */
const getPosts = () => (
  api.posts.browse({ limit: 'all' })
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
      ...posts.map(getRoute),
    ]))
    .catch(console.error)
)

export {
  getPost,
  getPosts,
  getAllRoutes,
}
