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

Articles are served from the private `astria-articles` R2 bucket by the
`astria-articles` Cloudflare Worker at `www.astria.ai/articles*`. The main
application still owns root robots/sitemaps and `/articles/*.md`. The old Pages
branch remains available as an origin fallback; it is no longer the publisher.

Publish locally by default with `yarn deploy`; it does not wait for GitHub Actions.
The publisher automatically reads the scoped R2 key from the ignored `.env.github`
in this repository. Use the `CLOUDFLARE_R2_ACCESS_KEY_ID` and
`CLOUDFLARE_R2_SECRET_ACCESS_KEY` variables and keep the file owner-only (`chmod 600`).
The shared GitHub publishing key is restricted to `astria-academy` and
`astria-articles`. Prepare the Python environment once:

```sh
python3 -m venv .venv-r2
.venv-r2/bin/python -m pip install -r scripts/requirements-r2.txt
yarn deploy
```

`yarn deploy` tests, builds, audits, uploads changed content blobs, verifies their
checksums, writes an immutable release manifest, then atomically changes
`_current.json` using its previous ETag. Existing routes and older asset files
are retained. Concurrent activation fails safely rather than replacing a newer
release. Bucket files are never deleted by publishing. `yarn deploy:stage`
uploads a release without activating it.

To use a credential file elsewhere, pass `--env-file /absolute/path/.env.github`
to `scripts/publish-r2.py`. AWS profiles require explicit `--profile NAME`; the
publisher never silently falls back to the broader `cloudflare` profile.

Activate a staged release or roll back to a previous release:

```sh
.venv-r2/bin/python -B scripts/publish-r2.py --activate RELEASE_ID --expected-current CURRENT_RELEASE_ID
```

The Worker reads the current release on every request and caches public responses
under release-specific cache keys. HTML uses a short browser cache; hashed JS/CSS
uses immutable caching. Missing routes serve the actual 404 document with status
404 and noindex. Legacy article redirects and byte ranges for videos are supported.
Change Worker code/config with `yarn worker:deploy` using Cloudflare login.

The `Publish articles to R2` workflow validates pushes to main. It only publishes
when manually dispatched, with optional staging via its `stage` input. The repo
has encrypted `CLOUDFLARE_R2_ACCESS_KEY_ID` and `CLOUDFLARE_R2_SECRET_ACCESS_KEY`
secrets and `ARTICLES_R2_CI_ENABLED=true` for this manual fallback. CI needs R2
object read/write/list access, not Worker management or broader Cloudflare
credentials. Pushes do not activate releases.
