const root = document.documentElement;
const body = document.body;
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('[data-theme-toggle]');
const progressBar = document.querySelector('.progress-bar');
const backToTop = document.querySelector('.back-to-top');
const newsletterPopup = document.querySelector('.newsletter-popup');
const cookieBanner = document.querySelector('.cookie-banner');
const shareButtons = document.querySelectorAll('[data-share-url]');
const faqButtons = document.querySelectorAll('.faq-toggle');

function getSiteRelativePrefix() {
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments[0] === 'wink-mod-apk-india-site') {
    segments.shift();
  }
  if (segments[segments.length - 1]?.includes('.html')) {
    segments.pop();
  }
  return segments.length ? '../'.repeat(segments.length) : './';
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    setTheme(stored);
    return;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

function initMenu() {
  if (!menuToggle || !navLinks) return;
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function initThemeToggle() {
  if (!themeToggle) return;
  themeToggle.addEventListener('click', () => {
    const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

function injectGlobalPromo() {
  const main = document.querySelector('main#content');
  const pathname = window.location.pathname;
  const isHome =
    pathname === '/' ||
    pathname.endsWith('/index.html') ||
    pathname === '/wink-mod-apk-india-site/' ||
    pathname.endsWith('/wink-mod-apk-india-site/index.html');
  const guidesHref = `${getSiteRelativePrefix()}categories/wink-mod-apk.html`;

  if (!main || isHome || document.querySelector('.global-promo')) return;

  const promo = document.createElement('section');
  promo.className = 'global-promo';
  promo.innerHTML = `
    <div class="site-shell global-promo-inner">
      <div>
        <span class="eyebrow">Bonus</span>
        <h2>Quick bonus stop before you continue</h2>
        <p>Use the bonus link, then come back to the guide if you still need install or comparison help.</p>
      </div>
      <div class="hero-actions">
        <a class="btn btn-primary" href="https://www.profitablecpmratenetwork.com/j9f627innq?key=be46e17df9e34aa3b5b8e77e88a34740">Open Bonus Link</a>
        <a class="btn btn-secondary promo-link" href="${guidesHref}">Browse All Guides</a>
      </div>
    </div>
  `;

  main.insertAdjacentElement('afterbegin', promo);
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }

  if (backToTop) {
    backToTop.classList.toggle('show', scrollTop > 500);
  }

  if (newsletterPopup && !newsletterPopup.dataset.shown && percent > 70) {
    newsletterPopup.classList.add('show');
    newsletterPopup.dataset.shown = '1';
  }
}

function initScrollUi() {
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initNewsletterPopup() {
  if (!newsletterPopup) return;

  const close = newsletterPopup.querySelector('[data-close-popup]');
  if (close) {
    close.addEventListener('click', () => newsletterPopup.classList.remove('show'));
  }

  window.setTimeout(() => {
    if (!newsletterPopup.dataset.shown) {
      newsletterPopup.classList.add('show');
      newsletterPopup.dataset.shown = '1';
    }
  }, 30000);
}

function initCookieBanner() {
  if (!cookieBanner) return;

  if (!localStorage.getItem('cookie-consent')) {
    cookieBanner.classList.add('show');
  }

  cookieBanner.querySelectorAll('[data-cookie-action]').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', button.dataset.cookieAction || 'essential');
      cookieBanner.classList.remove('show');
    });
  });
}

function initCopyButtons() {
  document.querySelectorAll('pre code').forEach((block) => {
    const wrapper = block.parentElement;
    if (!wrapper || !wrapper.parentElement || wrapper.parentElement.querySelector('.copy-code-btn')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Copy';
    button.className = 'copy-code-btn';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.textContent || '');
        button.textContent = 'Copied';
        window.setTimeout(() => {
          button.textContent = 'Copy';
        }, 1200);
      } catch {
        button.textContent = 'Error';
      }
    });
    wrapper.parentElement.insertBefore(button, wrapper);
  });
}

function initTocScroll() {
  document.querySelectorAll('.table-of-contents a').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initFadeIn() {
  const nodes = document.querySelectorAll('.fade-in');
  if (!nodes.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function initActiveToc() {
  const tocLinks = Array.from(document.querySelectorAll('.table-of-contents a'));
  const headings = document.querySelectorAll('.article-body h2[id]');
  if (!tocLinks.length || !headings.length || !('IntersectionObserver' in window)) return;

  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -45% 0px' }
  );

  headings.forEach((heading) => headingObserver.observe(heading));
}

function buildShareUrl(network, url, title) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  switch (network) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case 'pinterest':
      return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`;
    case 'reddit':
      return `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
    default:
      return url;
  }
}

function initShareButtons() {
  shareButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const shareUrl = button.dataset.shareUrl || window.location.href;
      const shareTitle = button.dataset.shareTitle || document.title;
      const shareNetwork = button.dataset.shareNetwork || '';
      const target = buildShareUrl(shareNetwork, shareUrl, shareTitle);
      window.open(target, 'share-popup', 'width=680,height=560');
    });
  });
}

function initFaq() {
  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (item) item.classList.toggle('open');
    });
  });
}

function initLocalCounters() {
  const viewKey = `views:${window.location.pathname}`;
  const nextViews = Number(localStorage.getItem(viewKey) || '0') + 1;
  localStorage.setItem(viewKey, String(nextViews));
  document.querySelectorAll('[data-view-count]').forEach((node) => {
    node.textContent = String(nextViews);
  });

  const articleText = document.querySelector('.article-body')?.innerText || '';
  const words = articleText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  document.querySelectorAll('[data-reading-time]').forEach((node) => {
    node.textContent = `${minutes} min read`;
  });
}

initTheme();
initMenu();
initThemeToggle();
injectGlobalPromo();
initScrollUi();
initNewsletterPopup();
initCookieBanner();
initCopyButtons();
initTocScroll();
initFadeIn();
initActiveToc();
initShareButtons();
initFaq();
initLocalCounters();
