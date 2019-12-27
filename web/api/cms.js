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
  route: `posts/${post.slug}`,
  payload: post,
})

/**
 * Get an array of all CMS-generated content URLs
 * @return {promise}
 */
const getAllRoutes = () => (
  api.posts.browse({ limit: 'all' })
    .then((posts) => posts.map(getRoute))
    .catch(console.error)
)

/**
 * Get a single post from the CMS
 * @param {string} slug
 * @return {object}
 */
const getPost = (slug) => (
  api.posts.read({ slug })
    .catch(console.error)
)

export {
  getAllRoutes,
  getPost,
}
