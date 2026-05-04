# GitHub and Netlify Handoff

## Current State

This folder is already cleaned for production use as a static editorial site.

Key work already completed:

- placeholder domain strings removed from public pages
- generator branding removed from public pages
- homepage, about, contact, search, and archive pages rewritten
- article pages rewritten into cleaner editorial content
- search index refreshed with human summaries
- tag archives set to `noindex,follow`
- `search.html` set to `noindex,follow`
- `contact.html` set to `noindex,follow`
- `category.html` set to `noindex,follow`

## Repo Setup

Recommended repository:

- Name: `wink-mod-apk-india-site`
- Description: `Editorial Wink mod APK India guide site with install help, comparisons, FAQs, and client-side search.`

Push the contents of this folder as the repo root.

## Netlify Requirements

When deploying this project to Netlify:

- use the account logged into Firefox for `teraapkboxx@gmail.com`
- publish directory: `.`
- build command: leave blank

## Files That Matter Most

- `index.html`
- `about.html`
- `contact.html`
- `search.html`
- `blog/*/index.html`
- `categories/wink-mod-apk.html`
- `search-index.json`
- `sitemap.xml`
- `sitemap-posts.xml`
- `sitemap-pages.xml`
- `sitemap-categories.xml`
- `sitemap-images.xml`
- `robots.txt`
- `netlify.toml`

## Maintenance Scripts

Run from the site root:

```powershell
node scripts\prepare-site.mjs
node scripts\refine-articles.mjs
```

Use them in this order:

1. `prepare-site.mjs`
2. `refine-articles.mjs`

## Final Checks Before Push

- verify `search-index.json` matches cleaned excerpts
- verify `categories/wink-mod-apk.html` shows all 13 cards
- verify `search.html` is `noindex,follow`
- verify no duplicate `.article-note` blocks remain
- verify no `replace-this-domain.example` remains in public output

## Launch Note

Canonicals currently point to the GitHub Pages project URL for this site. If the site is later switched to a final Netlify domain, update canonicals, Open Graph URLs, and sitemap URLs together in one pass before the final production launch.
