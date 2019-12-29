# rikkileajames.com

A headless CMS and web frontend for rikkileajames.com using Ghost and Nuxt.

## Build setup

``` bash
# Start the Docker containers
$ docker-compose up -d

# Serve with hot reload at local.rikkileajames.com:3000
$ docker-compose exec ssg npm run dev

# Generate static project
$ docker-compose exec ssg npm run generate
```

## Ghost integration

Two-way communication is required between the site generator and the Ghost CMS. This facilitates Nuxt fetching data from the Ghost using its API, and the Ghost triggering a site rebuild when posts are modified.

To integrate with the Ghost CMS:

1. Create a custom integration and set the environment variable `GHOST_API_KEY` for the site generator container
2. Set up webhooks in Ghost for the events `post.published`, `post.published.edited` and `post.unpublished`. These should all point at the URL `http://ssg.backend/hooks/generate`
