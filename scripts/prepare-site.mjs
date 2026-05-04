import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const siteDomain = 'https://zeshan-wink-mod-apk-india.netlify.app';
const ownedLinks = [
  {
    href: 'https://sites.google.com/view/capcutapklatestversion/home',
    label: 'CapCut APK Notes',
    desc: 'A related mobile editing reference for readers comparing creator apps.',
  },
  {
    href: 'https://zeshanalikhan.github.io/creator-app-hub-site/',
    label: 'Creator App Hub',
    desc: 'A broader hub covering lightweight creator tools and publishing notes.',
  },
  {
    href: 'https://zeshanalikhan.github.io/paintz-app-guide-site/',
    label: 'PaintZ App Guide',
    desc: 'Useful if you also need a simple browser drawing tool for thumbnails or planning.',
  },
  {
    href: 'https://zeshanalikhan.github.io/app-icon-generator-site/',
    label: 'App Icon Generator',
    desc: 'Helpful when you need clean icon sizes for Android, iOS, or PWA assets.',
  },
];

const globalLinksMarkup = ownedLinks
  .map(
    (link) =>
      `<article class="network-link-card"><h3><a href="${link.href}">${link.label}</a></h3><p>${link.desc}</p></article>`
  )
  .join('');

const headerHtml = `<header class="site-header"><div class="site-shell nav-row"><a class="brand" href="/">Wink Mod APK India</a><div class="nav-actions"><button class="menu-toggle" data-menu-toggle aria-label="Toggle menu">Menu</button><nav class="nav-links" aria-label="Primary navigation"><a href="/">Home</a><a href="/categories/wink-mod-apk.html">Guides</a><a href="/about.html">About</a><a href="/contact.html">Contact</a><a href="/search.html">Search</a></nav><button class="theme-toggle" data-theme-toggle aria-label="Toggle dark mode">Theme</button></div></div></header>`;

const footerHtml = `<footer class="footer"><div class="site-shell footer-grid"><div><h2>Wink Mod APK India</h2><p>Independent guides covering Wink mod APK features, install checks, comparison notes, and safer decision-making for Android users in India.</p></div><div><h3>Explore</h3><p><a href="/">Home</a></p><p><a href="/categories/wink-mod-apk.html">Guides</a></p><p><a href="/about.html">About</a></p><p><a href="/contact.html">Contact</a></p></div><div><h3>Useful Pages</h3><p><a href="/search.html">Search</a></p><p><a href="/robots.txt">Robots</a></p><p><a href="/humans.txt">Humans</a></p></div></div><div class="site-shell footer-mini"><p>&copy; 2026 Wink Mod APK India. Independent editorial reference for app research and install guidance.</p></div></footer>`;

const homeMain = `<main id="content"><section class="hero"><div class="site-shell hero-grid"><article class="hero-card"><span class="eyebrow">Wink Mod APK India</span><h1>Wink Mod APK India Guides, Feature Checks and Install Help</h1><p>Use this site to compare feature claims, understand install requirements, check basic safety signals, and review common questions before you rely on any Wink mod APK page or download source.</p><div class="hero-actions"><a class="btn btn-primary" href="https://www.profitablecpmratenetwork.com/j9f627innq?key=be46e17df9e34aa3b5b8e77e88a34740">Bonus Link</a><a class="btn btn-secondary" href="/blog/install-wink-mod-apk-india/">Install Guide</a><a class="btn btn-secondary" href="/blog/wink-mod-apk-india-review-review/">Review Guide</a></div></article><aside class="spotlight-card"><h2>What readers usually need first</h2><div class="mini-stat"><span>Version checks</span><strong>Current claims</strong></div><div class="mini-stat"><span>Install steps</span><strong>Android basics</strong></div><div class="mini-stat"><span>Feature tradeoffs</span><strong>VIP vs standard</strong></div><div class="mini-stat"><span>Risk review</span><strong>Download page signals</strong></div></aside></div></section><section class="site-shell layout-two"><div><section class="content-card" style="padding:1.5rem;margin-bottom:1.5rem"><span class="eyebrow">Quick Start</span><h2>How to use this Wink Mod APK India site</h2><p>Start with the install guide if you are checking compatibility, then move to the review and comparison pages if you want to understand what claims are common across competing download pages. The goal here is clarity, not hype.</p><div class="checklist-grid"><article class="mini-info-card"><h3>1. Check the version claim</h3><p>Many pages publish version numbers and unlocked feature lists. Compare those claims before trusting a single source.</p></article><article class="mini-info-card"><h3>2. Review the install path</h3><p>Understand what permissions, Android version requirements, and storage access a guide is asking for.</p></article><article class="mini-info-card"><h3>3. Compare alternatives</h3><p>Use the comparison and pricing-style guides to see whether the claimed benefits are actually meaningful for your workflow.</p></article></div></section><section class="content-card" style="padding:1.5rem;margin-bottom:1.5rem"><span class="eyebrow">Popular Guides</span><h2>Most useful pages on the site</h2><div class="posts-grid posts-grid-home"><article class="post-card"><img src="/images/thumb/install-wink-mod-apk-india-1777905302-1.webp" alt="How To Install Wink Mod Apk India: Step-by-Step Guide" loading="lazy"><div class="post-copy"><span class="eyebrow">Install</span><h3><a href="/blog/install-wink-mod-apk-india/">How To Install Wink Mod APK India</a></h3><p>A practical walk-through for Android users who want the basic install flow and the common setup checks in one place.</p></div></article><article class="post-card"><img src="/images/thumb/wink-mod-apk-india-review-review-1777905646-1.webp" alt="Honest Wink Mod Apk India Review With Pros and Cons" loading="lazy"><div class="post-copy"><span class="eyebrow">Review</span><h3><a href="/blog/wink-mod-apk-india-review-review/">Honest Wink Mod APK India Review</a></h3><p>A plain-language summary of typical benefits, common claims, and the tradeoffs readers should check before relying on a download page.</p></div></article><article class="post-card"><img src="/images/thumb/wink-mod-apk-india-comparison-1777905351-1.webp" alt="Wink Mod Apk India Comparison Guide for Careful Buyers" loading="lazy"><div class="post-copy"><span class="eyebrow">Comparison</span><h3><a href="/blog/wink-mod-apk-india-comparison/">Wink Mod APK India Comparison Guide</a></h3><p>A side-by-side way to review version claims, feature lists, and the small details that usually get skipped in short reviews.</p></div></article><article class="post-card"><img src="/images/thumb/wink-mod-apk-india-pricing-buying-guide-1777905691-1.webp" alt="Smart Wink Mod Apk India Pricing Buying Guide for New Buyers" loading="lazy"><div class="post-copy"><span class="eyebrow">Decision Help</span><h3><a href="/blog/wink-mod-apk-india-pricing-buying-guide/">Smart Wink Mod APK India Buying Guide</a></h3><p>Useful when you are deciding whether a claimed premium feature set actually matters for your editing or export workflow.</p></div></article><article class="post-card"><img src="/images/thumb/wink-mod-apk-india-ideas-faq-1777905563-1.webp" alt="Wink Mod Apk India Ideas FAQ: Straight Answers for Beginners" loading="lazy"><div class="post-copy"><span class="eyebrow">FAQ</span><h3><a href="/blog/wink-mod-apk-india-ideas-faq/">Wink Mod APK India FAQ</a></h3><p>Short answers for first-time readers who want the basics before opening several separate guides.</p></div></article><article class="post-card"><img src="/images/thumb/use-wink-mod-apk-india-1777905275-1.webp" alt="How To Use Wink Mod Apk India: Step-by-Step Guide" loading="lazy"><div class="post-copy"><span class="eyebrow">Workflow</span><h3><a href="/blog/use-wink-mod-apk-india/">How To Use Wink Mod APK India</a></h3><p>A simple starting workflow for comparing claims, testing features, and keeping your setup notes organized.</p></div></article></div></section><section class="content-card" style="padding:1.5rem;margin-bottom:1.5rem"><span class="eyebrow">Related Sites</span><h2>Useful related tools and creator notes</h2><div class="network-links-grid">${globalLinksMarkup}</div></section><section class="content-card" style="padding:1.5rem"><span class="eyebrow">FAQ</span><h2>Common Wink Mod APK India questions</h2><div class="faq-item"><h3>What does this site actually cover?</h3><p>It focuses on version checks, install guidance, feature comparison, and the practical questions readers ask before trusting a mod APK page.</p></div><div class="faq-item"><h3>Does this site host APK files?</h3><p>No. It is an editorial guide site. The content is meant to help readers compare claims and understand install considerations, not act as a file host.</p></div><div class="faq-item"><h3>Why are there so many comparison and checklist pages?</h3><p>Because download pages often repeat the same claims. Separate guides help readers compare features, setup steps, and common risks more clearly.</p></div></section></div><aside class="sidebar"><section class="sidebar-card"><h2>Search the site</h2><input class="search-input" data-search-input list="titles-list" placeholder="Search guides and FAQs"><datalist id="titles-list"></datalist></section><section class="sidebar-card"><h2>Read these next</h2><div class="tag-links"><a href="/blog/install-wink-mod-apk-india/">Install guide</a><a href="/blog/wink-mod-apk-india-review-review/">Review</a><a href="/blog/wink-mod-apk-india-comparison/">Comparison</a><a href="/categories/wink-mod-apk.html">All guides</a></div></section><section class="sidebar-card"><h2>Bonus</h2><p>Open the bonus page if you want a quick external stop before returning to the Wink guides.</p><p><a class="btn btn-primary" href="https://www.profitablecpmratenetwork.com/j9f627innq?key=be46e17df9e34aa3b5b8e77e88a34740">Open Bonus Link</a></p></section></aside></section></main>`;

const aboutMain = `<main id="content"><section class="site-shell" style="padding:2rem 0 4rem"><div class="layout-two"><article class="content-card" style="padding:1.5rem"><span class="eyebrow">About</span><h1>About Wink Mod APK India</h1><p>Wink Mod APK India is an independent editorial site built to help readers review feature claims, install questions, and practical tradeoffs around Wink mod APK pages targeted at Android users in India.</p><h2>What the site covers</h2><p>The main focus is decision support. That means version claim comparisons, install-path notes, feature summaries, beginner FAQs, and warnings about the kinds of details that are easy to skip when a page is written only to push a download.</p><h2>How pages are reviewed</h2><ul><li>Titles and summaries are checked for clarity before publishing.</li><li>Homepage and archive pages are kept focused on the strongest guides.</li><li>Thin utility archives such as tag pages are kept out of the index where possible.</li><li>Guides are written to help readers compare claims rather than rely on a single download source.</li></ul><h2>Editorial standard</h2><p>This site does not present itself as an official publisher of Wink, and it does not claim partnership with the app developer. The point is to help readers evaluate what they are seeing across the wider web.</p><h2>Suggested reading</h2><div class="tag-links"><a href="/blog/install-wink-mod-apk-india/">Install guide</a><a href="/blog/wink-mod-apk-india-review-review/">Review guide</a><a href="/blog/wink-mod-apk-india-comparison/">Comparison guide</a><a href="/blog/wink-mod-apk-india-ideas-faq/">FAQ guide</a></div></article><aside class="sidebar"><section class="sidebar-card"><h2>Quick facts</h2><div class="mini-stat"><span>Focus</span><strong>Wink mod APK research</strong></div><div class="mini-stat"><span>Format</span><strong>Guides and comparisons</strong></div><div class="mini-stat"><span>Audience</span><strong>Android users in India</strong></div></section><section class="sidebar-card"><h2>Related reading</h2><div class="network-links-grid network-links-compact">${globalLinksMarkup}</div></section></aside></div></section></main>`;

const contactMain = `<main id="content"><section class="site-shell" style="padding:2rem 0 4rem"><div class="layout-two"><article class="content-card" style="padding:1.5rem"><span class="eyebrow">Contact</span><h1>Contact Wink Mod APK India</h1><p>Use the form below if you want to suggest a topic, report a broken page, flag inaccurate wording, or point out a download source claim that needs a second look.</p><form class="contact-form" name="contact-page" method="POST" data-netlify="true" netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contact-page"><p hidden><label>Do not fill this out: <input name="bot-field"></label></p><input type="text" name="name" placeholder="Name" required><input type="email" name="email" placeholder="Email" required><input type="text" name="subject" placeholder="Subject"><textarea name="message" rows="7" placeholder="Message" required></textarea><button class="btn btn-primary" type="submit">Send message</button></form></article><aside class="sidebar"><section class="sidebar-card"><h2>Best reasons to reach out</h2><ul><li>Broken internal links</li><li>Wrong version or feature wording</li><li>Request for a comparison guide</li><li>Clarification about install steps or requirements</li></ul></section><section class="sidebar-card"><h2>Before you send</h2><p>If the question is about a common install or feature claim, the search page and the main category archive usually answer it faster than waiting for a reply.</p><p><a href="/search.html">Search the site</a></p></section></aside></div></section></main>`;

const categoryMain = `<main id="content"><section class="site-shell" style="padding:2rem 0 4rem"><header class="content-card" style="padding:1.4rem;margin-bottom:1.5rem"><span class="eyebrow">Guide Archive</span><h1>Wink Mod APK India Guides</h1><p>This archive collects the strongest Wink Mod APK India pages on the site, with a focus on install help, feature checks, comparisons, and beginner questions.</p></header><section class="category-grid">__POST_CARDS__</section><section class="content-card" style="padding:1.4rem;margin-top:1.5rem"><h2>How to use the archive</h2><p>Start with installation if compatibility is your first problem. Use the comparison and review pages if you are still deciding whether the claimed feature unlocks matter for your workflow. The FAQ and checklist pages are better for quick answers.</p></section></section></main>`;

const searchMain = `<main id="content"><section class="site-shell" style="padding:2rem 0 4rem"><article class="content-card" style="padding:1.5rem;margin-bottom:1.5rem"><span class="eyebrow">Search</span><h1>Search Wink Mod APK India</h1><p>Search by guide title, feature, question, or workflow term to reach the most relevant page faster.</p><div class="layout-two search-toolbar" style="grid-template-columns:1fr 240px"><input class="search-input" data-search-input list="search-page-list" placeholder="Search articles"><select class="filter-select" data-category-filter><option value="">All categories</option><option value="wink-mod-apk">Wink Mod Apk</option></select></div><datalist id="search-page-list"></datalist></article><section class="search-results-grid" data-search-results></section></section></main>`;

const notFoundMain = `<main id="content"><section class="site-shell" style="padding:4rem 0 5rem"><article class="not-found-card content-card"><span class="eyebrow">404</span><h1>That page is not available</h1><p>The page may have moved, been cleaned up, or never existed in the published version of the site.</p><input class="search-input" data-search-input list="not-found-list" placeholder="Search for another guide"><datalist id="not-found-list"></datalist><h2>Useful starting points</h2><ul><li><a href="/blog/install-wink-mod-apk-india/">Install guide</a></li><li><a href="/blog/wink-mod-apk-india-review-review/">Review guide</a></li><li><a href="/blog/wink-mod-apk-india-comparison/">Comparison guide</a></li><li><a href="/categories/wink-mod-apk.html">Full guide archive</a></li></ul><p><a class="btn btn-primary" href="/">Back to home</a></p></article></section></main>`;

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.cache' || entry.name === 'scripts') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, acc);
    else acc.push(fullPath);
  }
  return acc;
}

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function replaceMain(html, mainHtml) {
  return html.replace(/<main id="content">[\s\S]*?<\/main>/, mainHtml);
}

function replaceMeta(html, { title, description }) {
  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  next = next.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`);
  next = next.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`);
  next = next.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`);
  next = next.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`);
  next = next.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${description}">`);
  return next;
}

function replaceHeader(html) {
  return html.replace(/<header class="site-header">[\s\S]*?<\/header>/, headerHtml);
}

function replaceFooter(html) {
  return html.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footerHtml);
}

function baseCleanup(html, filePath) {
  let next = html;
  next = next.replaceAll('https://replace-this-domain.example', siteDomain);
  next = next.replaceAll('Wink Mod Apk India Hub', 'Wink Mod APK India');
  next = next.replaceAll('wink mod apk India', 'Wink Mod APK India');
  next = next.replaceAll('AutoBlogger', 'Editorial Team');
  next = next.replaceAll('Creator: OpenAI Codex', 'Editor: Wink Mod APK India team');
  next = next.replaceAll('Creator: OpenAI', 'Editor: Wink Mod APK India team');
  next = next.replace(/<link rel="preconnect" href="https:\/\/disqus\.com">\s*/g, '');
  if (!next.includes('/css/site-overrides.css?v=20260504')) {
    next = next.replace(
      /<link rel="stylesheet" href="\/css\/dark-mode\.css\?v=\d+">/,
      (match) =>
        `${match}<link rel="stylesheet" href="/css/site-overrides.css?v=20260504">`
    );
  }
  next = next.replace(
    /(<link rel="stylesheet" href="\/css\/site-overrides\.css\?v=20260504">){2,}/g,
    '<link rel="stylesheet" href="/css/site-overrides.css?v=20260504">'
  );
  next = next.replace(/<section class="comments-box">[\s\S]*?<\/section>/g, '');
  next = next.replace(/<section class="sidebar-card"><h2>Ad Space<\/h2><div class="ad-placeholder">300 x 250 Ad Placeholder<\/div><\/section>/g, `<section class="sidebar-card bonus-card"><h2>Bonus</h2><p>Use the bonus link if you want a quick external stop before returning to the guide.</p><p><a class="btn btn-primary" href="https://www.profitablecpmratenetwork.com/j9f627innq?key=be46e17df9e34aa3b5b8e77e88a34740">Open Bonus Link</a></p></section>`);
  next = next.replace(/<div class="social-links"><a href="https:\/\/facebook\.com"[^>]*>Facebook<\/a><a href="https:\/\/twitter\.com"[^>]*>Twitter<\/a><a href="https:\/\/linkedin\.com"[^>]*>LinkedIn<\/a>(?:<a href="https:\/\/pinterest\.com"[^>]*>Pinterest<\/a>)?<\/div>/g, `<div class="social-links"><a href="https://sites.google.com/view/capcutapklatestversion/home">CapCut APK Notes</a><a href="https://zeshanalikhan.github.io/creator-app-hub-site/">Creator App Hub</a><a href="https://zeshanalikhan.github.io/paintz-app-guide-site/">PaintZ App Guide</a></div>`);
  next = next.replace(/<div class="social-links"><a href="https:\/\/linkedin\.com">LinkedIn<\/a><a href="https:\/\/twitter\.com">Twitter<\/a><a href="https:\/\/github\.com">GitHub<\/a><\/div>/g, `<div class="social-links"><a href="https://sites.google.com/view/capcutapklatestversion/home">CapCut APK Notes</a><a href="https://zeshanalikhan.github.io/creator-app-hub-site/">Creator App Hub</a><a href="https://zeshanalikhan.github.io/paintz-app-guide-site/">PaintZ App Guide</a></div>`);
  next = next.replace(/<p>Email: hello@example\.com<\/p>\s*<p>Phone: \+1 \(555\) 010-0000<\/p>\s*<p>Address: 123 Example Street, San Francisco, CA<\/p>/g, `<p>Use the contact form for corrections, broken links, and topic suggestions.</p><p>No public phone support is listed for this site.</p>`);
  next = next.replace(/<div class="site-shell"><p>&copy; 2026 Wink Mod APK India\. Built with AutoBlogger\.<\/p><\/div>/g, `<div class="site-shell footer-mini"><p>&copy; 2026 Wink Mod APK India. Independent editorial reference for app research and install guidance.</p></div>`);
  next = next.replace(/<div class="site-shell"><p>&copy; 2026 Wink Mod APK India\. Independent editorial reference for app research and install guidance\.<\/p><\/div>/g, `<div class="site-shell footer-mini"><p>&copy; 2026 Wink Mod APK India. Independent editorial reference for app research and install guidance.</p></div>`);
  next = next.replace(/<a href="https:\/\/(?:en\.wikipedia\.org|catalog\.data\.gov|scholar\.google\.com)[^"]*"[^>]*>[^<]*<\/a>/g, '');
  next = next.replace(/<p>\s*<\/p>/g, '');
  next = replaceHeader(next);
  next = replaceFooter(next);

  if (filePath.includes(`${path.sep}tags${path.sep}`)) {
    next = next.replace('<meta name="robots" content="index,follow">', '<meta name="robots" content="noindex,follow">');
  }

  if (filePath.endsWith('contact.html')) {
    next = next.replace('<meta name="description" content="Contact Wink Mod APK India">', '<meta name="description" content="Contact the Wink Mod APK India editorial site for corrections, topic suggestions, and page feedback.">');
    next = next.replace('<meta name="robots" content="index,follow">', '<meta name="robots" content="noindex,follow">');
  }

  if (filePath.endsWith('search.html')) {
    next = next.replace('<meta name="robots" content="index,follow">', '<meta name="robots" content="noindex,follow">');
  }

  if (filePath.endsWith('category.html') || filePath.endsWith('post-template.html')) {
    next = next.replace('<meta name="robots" content="index,follow">', '<meta name="robots" content="noindex,follow">');
  }

  return next;
}

function updateRobots() {
  const robotsPath = path.join(root, 'robots.txt');
  write(
    robotsPath,
    `User-agent: *\nAllow: /\nDisallow: /search\nDisallow: /admin\nSitemap: ${siteDomain}/sitemap.xml\n`
  );
}

function updateSitemaps() {
  const sitemapFiles = [
    'sitemap.xml',
    'sitemap-posts.xml',
    'sitemap-pages.xml',
    'sitemap-categories.xml',
    'sitemap-images.xml',
  ];
  for (const name of sitemapFiles) {
    const filePath = path.join(root, name);
    if (!fs.existsSync(filePath)) continue;
    const updated = read(filePath).replaceAll('https://replace-this-domain.example', siteDomain);
    write(filePath, updated);
  }
}

function updateStaticFiles() {
  const aboutPath = path.join(root, 'about.html');
  write(
    aboutPath,
    replaceMain(
      replaceMeta(baseCleanup(read(aboutPath), aboutPath), {
        title: 'About Wink Mod APK India',
        description: 'Learn what Wink Mod APK India covers, how the guides are reviewed, and what the site is built to help readers compare.',
      }),
      aboutMain
    )
  );

  const contactPath = path.join(root, 'contact.html');
  write(
    contactPath,
    replaceMain(
      replaceMeta(baseCleanup(read(contactPath), contactPath), {
        title: 'Contact Wink Mod APK India',
        description: 'Contact Wink Mod APK India for corrections, topic suggestions, broken links, or page feedback.',
      }),
      contactMain
    )
  );

  const searchPath = path.join(root, 'search.html');
  write(
    searchPath,
    replaceMain(
      replaceMeta(baseCleanup(read(searchPath), searchPath), {
        title: 'Search Wink Mod APK India',
        description: 'Search Wink Mod APK India guides, feature checks, reviews, and install help.',
      }),
      searchMain
    )
  );

  const notFoundPath = path.join(root, '404.html');
  write(
    notFoundPath,
    replaceMain(
      replaceMeta(baseCleanup(read(notFoundPath), notFoundPath), {
        title: 'Page Not Found | Wink Mod APK India',
        description: 'The page you requested is not available. Search or return to the main Wink Mod APK India guide archive.',
      }),
      notFoundMain
    )
  );

  const categoryPath = path.join(root, 'categories', 'wink-mod-apk.html');
  const originalCategory = replaceMeta(baseCleanup(read(categoryPath), categoryPath), {
    title: 'Wink Mod APK India Guides and Comparisons',
    description: 'Browse the main Wink Mod APK India guides covering install help, reviews, comparison notes, and beginner FAQs.',
  });
  const cardsMatch = originalCategory.match(/<section class="category-grid">([\s\S]*?)<\/section><nav class="content-card"/);
  const cardsHtml = cardsMatch ? cardsMatch[1] : '';
  write(categoryPath, replaceMain(originalCategory, categoryMain.replace('__POST_CARDS__', cardsHtml)));

  const homePath = path.join(root, 'index.html');
  write(
    homePath,
    replaceMain(
      replaceMeta(baseCleanup(read(homePath), homePath), {
        title: 'Wink Mod APK India: Install Guide, Review, Features and Safety Tips',
        description: 'Explore Wink Mod APK India guides for install help, feature checks, comparison notes, review summaries, and safer download-page research.',
      }),
      homeMain
    )
  );
}

function updateHtmlFiles() {
  const files = walk(root).filter((file) => file.endsWith('.html'));
  const rootIndex = path.join(root, 'index.html');
  const aboutPath = path.join(root, 'about.html');
  const contactPath = path.join(root, 'contact.html');
  const searchPath = path.join(root, 'search.html');
  const notFoundPath = path.join(root, '404.html');
  const categoryPath = path.join(root, 'categories', 'wink-mod-apk.html');
  for (const filePath of files) {
    if (
      filePath === rootIndex ||
      filePath === aboutPath ||
      filePath === contactPath ||
      filePath === searchPath ||
      filePath === notFoundPath ||
      filePath === categoryPath
    ) {
      continue;
    }

    let html = baseCleanup(read(filePath), filePath);
    if (filePath.includes(`${path.sep}blog${path.sep}`)) {
      html = html.replace(/<div class="notice-card article-note">[\s\S]*?<\/div>/g, '');
      html = html.replace(
        /<header class="article-header">[\s\S]*?<\/header>/,
        (match) =>
          `${match}<div class="notice-card article-note"><strong>Editorial note:</strong> This page is an independent guide for readers comparing Wink mod APK claims in India. It is not an official app publisher and does not host APK files.</div>`
      );
      html = html.replace(/<\/header><div class="notice-card article-note">[\s\S]*?<\/div><main id="content">/, '</header><main id="content">');
    }
    write(filePath, html);
  }
}

function updateSupportFiles() {
  write(
    path.join(root, 'ads.txt'),
    '# No direct ads.txt publisher relationships are declared for this site.\n'
  );
  write(
    path.join(root, 'humans.txt'),
    '/* TEAM */\nEditorial site: Wink Mod APK India\nFocus: Wink mod APK research, install guidance, feature comparisons\nLast updated: 2026-05-04\n'
  );
}

updateSitemaps();
updateRobots();
updateStaticFiles();
updateHtmlFiles();
updateSupportFiles();
