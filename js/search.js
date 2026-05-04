async function loadSearchIndex() {
  const candidates = [
    'search-index.json',
    '../search-index.json',
    '../../search-index.json',
    '/search-index.json',
  ];

  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate);
      if (!response.ok) continue;
      return await response.json();
    } catch {
      // Try the next candidate path.
    }
  }

  return [];
}

function renderResults(items, container) {
  container.innerHTML = '';
  if (!items.length) {
    container.innerHTML = '<div class="empty-state"><h2>No results</h2><p>Try a broader keyword or switch categories.</p></div>';
    return;
  }

  items.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'post-card fade-in';
    article.innerHTML = `${item.thumb ? `<img src="${item.thumb}" alt="${item.title}" loading="lazy">` : ''}<div class="post-copy"><span class="eyebrow">${item.category}</span><h2><a href="${item.url}">${item.title}</a></h2><p>${item.excerpt}</p></div>`;
    container.appendChild(article);
  });
}

async function initSearch() {
  const index = await loadSearchIndex();
  const inputs = document.querySelectorAll('[data-search-input]');
  const container = document.querySelector('[data-search-results]');
  const categoryFilter = document.querySelector('[data-category-filter]');
  const params = new URLSearchParams(window.location.search);

  if (inputs[0] && params.get('q')) {
    inputs[0].value = params.get('q');
  }

  if (categoryFilter && params.get('category')) {
    categoryFilter.value = params.get('category');
  }

  function run() {
    const query = (inputs[0]?.value || '').toLowerCase();
    const category = (categoryFilter?.value || '').toLowerCase();
    const next = new URLSearchParams();

    if (inputs[0] && inputs[0].value) {
      next.set('q', inputs[0].value);
    }

    if (categoryFilter && categoryFilter.value) {
      next.set('category', categoryFilter.value);
    }

    if (window.location.pathname.endsWith('search.html')) {
      history.replaceState({}, '', next.toString() ? `?${next.toString()}` : window.location.pathname);
    }

    const filtered = index.filter((item) => {
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        (item.tags || []).join(' ').toLowerCase().includes(query);
      const matchesCategory = !category || item.category.toLowerCase() === category;
      return matchesQuery && matchesCategory;
    });

    if (container) {
      renderResults(filtered, container);
    }
  }

  inputs.forEach((input) => input.addEventListener('input', run));
  if (categoryFilter) {
    categoryFilter.addEventListener('change', run);
  }

  run();

  inputs.forEach((input) => {
    const datalistId = input.getAttribute('list');
    const datalist = datalistId ? document.getElementById(datalistId) : null;
    if (datalist) {
      datalist.innerHTML = index
        .slice(0, 50)
        .map((item) => `<option value="${item.title}"></option>`)
        .join('');
    }
  });
}

initSearch();
