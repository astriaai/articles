# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

See [ANALYTICS.md](./ANALYTICS.md) for CTA events, optional main-property GA4
collection, privacy behavior, canonical URLs and the required GA4 admin setup.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

After building, run `yarn audit:search` to check sitemap URLs, raw HTML, and FAQ/HowTo
JSON-LD against visible article text. Run `yarn audit:search --live` to also check
production robots.txt, sitemap discovery, and key pages with the four AI bot user
agents. This fetches raw HTTP responses without running JavaScript. The root
robots.txt is served by the main Astria application; an articles/robots.txt would
not control crawling. Schemas come from the visible FAQ and numbered Step/Stage
sections through `plugins/remark-article-schema.js`.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
