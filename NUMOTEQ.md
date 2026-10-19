# NUMOTEQ Publisher

NUMOTEQ Publisher is NUMOTEQ's social media scheduling service, built on [Postiz](https://github.com/gitroomhq/postiz-app) (AGPL-3.0).

Changes against upstream:

- NUMOTEQ branding (logos, favicon, product name in UI texts, sign-in page).
- `OAUTH_REDIRECT_BASE_URL`: base URL for social OAuth redirect URIs, defaults to `FRONTEND_URL`. Lets the app move to a new domain while the redirect URIs registered with each network keep the old one. TikTok always uses `FRONTEND_URL`.

The image is built by `.github/workflows/build.yml` and published as `ghcr.io/numoteq/publisher`.

To update to a new upstream release, rebase `main` onto the upstream tag.
