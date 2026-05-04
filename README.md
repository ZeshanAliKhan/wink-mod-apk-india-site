# Wink Mod APK India

Static editorial site for Wink mod APK research, comparison notes, install guidance, and beginner FAQs aimed at Android users in India.

## Project Type

- Pure static site
- No backend build step required
- Netlify-compatible
- GitHub-compatible

## Folder Structure

- `index.html` - homepage
- `about.html` - editorial overview
- `contact.html` - Netlify form contact page
- `search.html` - client-side search page
- `blog/` - article pages
- `categories/` - main archive page
- `tags/` - noindex tag archives
- `css/` - shared styles
- `js/` - client-side behavior and search
- `images/` - article and UI assets
- `scripts/prepare-site.mjs` - cleanup and sitewide metadata pass
- `scripts/refine-articles.mjs` - article-quality rewrite pass and search-index refresh

## Local Maintenance

Run these from the site root:

```powershell
node scripts\prepare-site.mjs
node scripts\refine-articles.mjs
```

What they do:

- replace generator leftovers and placeholders
- keep `search.html`, `contact.html`, tag pages, `category.html`, and `post-template.html` out of the index where appropriate
- refresh homepage, archive, and support-page copy
- rewrite article bodies into cleaner editorial content
- refresh `search-index.json`

## Publish Notes

### GitHub

- Repo root should be the contents of this folder.
- Suggested repo name: `wink-mod-apk-india-site`
- Suggested description: `Editorial Wink mod APK India guide site with install help, comparisons, FAQs, and client-side search.`

### Netlify

- Publish directory: `.`
- Build command: leave blank
- Important: when this project is deployed to Netlify, use the account logged into Firefox for `teraapkboxx@gmail.com`

## SEO Notes

- `search.html` is `noindex,follow`
- `contact.html` is `noindex,follow`
- tag archives are `noindex,follow`
- `category.html` is `noindex,follow` and the preferred archive is `categories/wink-mod-apk.html`
- `robots.txt` points to the site sitemap

## Forms

The site uses static Netlify-style forms on:

- `contact.html`
- newsletter blocks

## Content Standard

- keep copy practical and direct
- avoid fake official claims
- do not present the site as the app publisher
- prefer comparison, workflow, and install clarity over hype
