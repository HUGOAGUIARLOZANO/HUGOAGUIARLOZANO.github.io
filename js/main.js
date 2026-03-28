/* ============================================================
   HUGO AGUIAR — Attorney | AI & Energy Governance Consultant
   main.js — Article Data & UI
   ============================================================ */

'use strict';

/* ============================================================
   UI STRINGS
   ============================================================ */

const T = {
  nav_home:     'Home',
  nav_articles: 'Articles',
  nav_about:    'About',

  tagline:      'Attorney · LL.M. Harvard Law School · AI & Energy Governance Consultant',
  topbar_label: 'Independent Analysis',

  featured_eyebrow: 'Featured Analysis',
  recent_eyebrow:   'Recent Analysis',
  view_all:         'View all articles →',
  read_article:     'Read Article →',
  min_read:         'min read',

  page_articles_title: 'Articles & Analysis',
  page_articles_sub:   'Research and commentary on energy governance, natural resources, public law, and AI regulation',
  filter_all:          'All Topics',
  filter_energy:       'Energy Governance',
  filter_resources:    'Natural Resources',
  filter_governance:   'Governance',
  filter_policy:       'Energy Policy',
  filter_climate:      'Climate & Energy',

  cta_title:       'Stay Informed',
  cta_body:        'New analysis on energy governance, public law, and AI regulation delivered to your inbox.',
  cta_placeholder: 'Your email address',
  cta_submit:      'Subscribe',

  footer_tagline: 'Attorney · LL.M. Harvard Law School · AI & Energy Governance Consultant',
  footer_desc:    'Ecuadorian attorney and consultant specializing in energy governance, natural resource policy, public law, and AI regulation. Formerly Minister of Energy, Vice Minister of Oil and Gas, and Senior Consultant at the World Bank Group.',
  footer_copy:    '© 2026 Hugo Aguiar. All rights reserved.',

  cat_energy:     'Energy Governance',
  cat_resources:  'Natural Resources',
  cat_governance: 'Governance',
  cat_policy:     'Energy Policy',
  cat_climate:    'Climate & Energy',
  cat_trade:      'Trade Policy',
  cat_ai:         'AI & Regulation',

  by_author: 'Hugo Aguiar',
};


/* ============================================================
   ARTICLE DATA
   ============================================================ */

const articles = [
  {
    id: 1,
    slug: 'governing-energy-transition-latin-america',
    featured: true,
    category: 'energy',
    catClass: 'cat-energy',
    date: '2026-03-15',
    dateDisplay: 'March 15, 2026',
    readingTime: 12,
    url: 'article-energy-transition.html',
    title:   'Governing the Energy Transition: Institutional Challenges in Latin America',
    excerpt: 'Latin American governments face a structural tension that no rhetorical commitment to the energy transition can resolve: they depend on hydrocarbon revenues to fund public services while facing pressure to restructure their energy sectors around renewables. This is not a political choice between two options — it is a governance problem that will be resolved, well or poorly, through institutional design.',
  },
  {
    id: 10,
    slug: 'ai-regulation-three-models',
    featured: false,
    category: 'ai',
    catClass: 'cat-ai',
    date: '2026-03-28',
    dateDisplay: 'March 28, 2026',
    readingTime: 10,
    url: 'article-ai-regulation.html',
    title:   'Artificial Intelligence and the Law: Three Regulatory Models in Collision',
    excerpt: 'The world is simultaneously building the most powerful technology in human history and trying to write rules for it. Three regulatory philosophies — the EU\'s rights-first extraterritorial model, the US\'s innovation-first fragmented approach, and Latin America\'s largely unwritten frameworks — are now in active collision. For lawyers, governments, and institutions operating across jurisdictions, the compliance environment this creates is manageable only if you understand all three.',
  },
  {
    id: 7,
    slug: 'oil-hedge-ecuador',
    featured: false,
    category: 'policy',
    catClass: 'cat-policy',
    date: '2026-03-24',
    dateDisplay: 'March 24, 2026',
    readingTime: 5,
    url: 'article-oil-hedge.html',
    title:   "Ecuador's \"Oil Insurance\": What It Solves and What It Doesn't",
    excerpt: "Ecuador's Monetary Policy Board has cleared the institutional path for Petroecuador to contract oil price insurance, with WTI at USD 87.27 following the U.S. strike on Iran. But hedging a reference price is only part of the problem: Ecuador sells heavy crude at structural discounts to WTI, the BCE assumes no risk, and without the institutional infrastructure of the Mexican model, a poorly designed hedge is not insurance — it's a rent transfer.",
  },
  {
    id: 9,
    slug: 'hormuz-crisis-latin-america',
    featured: false,
    category: 'energy',
    catClass: 'cat-energy',
    date: '2026-03-25',
    dateDisplay: 'March 25, 2026',
    readingTime: 10,
    url: 'article-hormuz-crisis.html',
    title:   'The Strait of Hormuz Crisis and What It Means for Latin American Energy Policy',
    excerpt: 'Iran\'s closure of the Strait of Hormuz drove Brent crude to $126/barrel — the fastest price surge in recent history — removing roughly 20% of global daily oil supply. For Latin American oil exporters, the crisis creates a paradox: Ecuador is a price beneficiary, but whether the windfall reaches the treasury depends entirely on the contract design and pricing mechanics being decided right now.',
  },
  {
    id: 8,
    slug: 'bilateral-trade-deficit',
    featured: false,
    category: 'trade',
    catClass: 'cat-trade',
    date: '2026-03-25',
    dateDisplay: 'March 25, 2026',
    readingTime: 2,
    url: 'article-trade-deficit.html',
    title:   'A Bilateral Trade Deficit Is Not Necessarily a Problem',
    excerpt: 'Having a trade deficit with a particular partner does not automatically imply an economic loss. Bilateral balances often reflect production structure, supply chain organization, and comparative advantage rather than structural weakness — and interpreting trade relations through this narrow lens risks oversimplifying a far more complex economic reality.',
  },
  {
    id: 2,
    slug: 'state-oil-companies-crossroads',
    featured: false,
    category: 'resources',
    catClass: 'cat-resources',
    date: '2026-02-10',
    dateDisplay: 'February 10, 2026',
    readingTime: 9,
    title:   'State Oil Companies at the Crossroads: Strategic Choices in the Energy Transition',
    excerpt: 'National oil companies across the developing world confront an existential question: diversify into low-carbon assets and risk losing competitive advantage in hydrocarbons, or double down on fossil fuel extraction and risk stranded assets as the global transition accelerates.',
  },
  {
    id: 3,
    slug: 'fiscal-transparency-extractive-industries',
    featured: false,
    category: 'governance',
    catClass: 'cat-governance',
    date: '2026-01-22',
    dateDisplay: 'January 22, 2026',
    readingTime: 8,
    title:   'Fiscal Transparency in Extractive Industries: Progress and Persistent Gaps',
    excerpt: 'Two decades of EITI implementation and open contracting reforms have produced measurable improvements in extractive industry disclosure. Yet significant gaps remain — particularly in beneficial ownership, subnational revenue flows, and environmental liabilities — that undermine the accountability these reforms intended to build.',
  },
  {
    id: 4,
    slug: 'regulatory-frameworks-renewable-investment',
    featured: false,
    category: 'policy',
    catClass: 'cat-policy',
    date: '2025-12-08',
    dateDisplay: 'December 8, 2025',
    readingTime: 10,
    title:   'Regulatory Frameworks for Renewable Energy Investment in the Global South',
    excerpt: 'Attracting private capital for renewable energy projects in developing economies requires more than competitive tariffs. This analysis surveys how policy uncertainty, currency risk, and institutional capacity gaps continue to inflate the cost of capital for clean energy projects, and what regulatory designs can close the gap.',
  },
  {
    id: 5,
    slug: 'energy-access-social-equity',
    featured: false,
    category: 'policy',
    catClass: 'cat-policy',
    date: '2025-11-14',
    dateDisplay: 'November 14, 2025',
    readingTime: 7,
    title:   'Energy Access and Social Equity: Rethinking Universal Service Obligations',
    excerpt: 'Universal electrification commitments often disguise a more troubling reality: access without affordability. In many countries, grid connection rates have surged while households remain effectively energy-poor due to tariff structures that price out low-income consumers. A re-examination of universal service policy is overdue.',
  },
  {
    id: 6,
    slug: 'climate-commitments-resource-nationalism',
    featured: false,
    category: 'climate',
    catClass: 'cat-climate',
    date: '2025-10-03',
    dateDisplay: 'October 3, 2025',
    readingTime: 11,
    title:   'Climate Commitments and Resource Nationalism: Navigating the Tensions',
    excerpt: 'The resurgence of resource nationalism across Latin America and Africa is creating friction with international climate commitments. Governments that have asserted greater control over extractive sectors are now confronting the question of how to fulfill NDC obligations while maintaining the sovereign prerogative to exploit natural wealth.',
  }
];


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function articleUrl(a) {
  return a.url || ('article.html?id=' + a.id);
}

function getCategoryLabel(catKey) {
  const map = {
    energy:     'cat_energy',
    resources:  'cat_resources',
    governance: 'cat_governance',
    policy:     'cat_policy',
    climate:    'cat_climate',
    trade:      'cat_trade',
    ai:         'cat_ai'
  };
  return T[map[catKey]] || catKey;
}

function renderFeaturedArticle() {
  const el = document.getElementById('featured-article-slot');
  if (!el) return;

  const a = articles.find(x => x.featured);
  if (!a) return;

  el.innerHTML = `
    <article class="featured-article" itemscope itemtype="https://schema.org/Article">
      <div class="featured-image" aria-hidden="true">
        <div class="featured-image-pattern"></div>
        <span class="featured-image-label">${T.featured_eyebrow}</span>
      </div>
      <div class="featured-content">
        <span class="cat-badge ${a.catClass}">${getCategoryLabel(a.category)}</span>
        <h2 class="featured-title" itemprop="headline">
          <a href="${articleUrl(a)}">${a.title}</a>
        </h2>
        <p class="featured-excerpt" itemprop="description">${a.excerpt}</p>
        <div class="article-meta">
          <span class="meta-author" itemprop="author">${T.by_author}</span>
          <span class="meta-sep">·</span>
          <span class="meta-date">${a.dateDisplay}</span>
          <span class="meta-sep">·</span>
          <span class="meta-read">${a.readingTime} ${T.min_read}</span>
        </div>
        <a href="${articleUrl(a)}" class="btn-read">${T.read_article}</a>
      </div>
    </article>`;
}

function renderRecentArticles() {
  const el = document.getElementById('recent-articles-slot');
  if (!el) return;

  const recent = articles.filter(a => !a.featured).slice(0, 6);

  el.innerHTML = recent.map(a => `
    <article class="article-card" itemscope itemtype="https://schema.org/Article">
      <div class="card-category">
        <span class="cat-badge ${a.catClass}">${getCategoryLabel(a.category)}</span>
      </div>
      <h3 class="card-title" itemprop="headline">
        <a href="${articleUrl(a)}">${a.title}</a>
      </h3>
      <p class="card-excerpt" itemprop="description">${a.excerpt}</p>
      <div class="card-meta">
        <span>${a.dateDisplay}</span>
        <span class="card-meta-sep">·</span>
        <span>${a.readingTime} ${T.min_read}</span>
      </div>
      <a href="${articleUrl(a)}" class="card-read-more">${T.read_article}</a>
    </article>`).join('');
}

function renderArticlesList(filter) {
  const el = document.getElementById('articles-list-slot');
  if (!el) return;

  let list = [...articles];
  if (filter && filter !== 'all') {
    list = list.filter(a => a.category === filter);
  }

  if (!list.length) {
    el.innerHTML = '<div class="no-results">No articles found.</div>';
    return;
  }

  el.innerHTML = list.map((a, i) => `
    <article class="article-list-item" itemscope itemtype="https://schema.org/Article">
      <span class="list-item-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div class="list-item-body">
        <div><span class="cat-badge ${a.catClass}">${getCategoryLabel(a.category)}</span></div>
        <h2 class="list-item-title" itemprop="headline">
          <a href="${articleUrl(a)}">${a.title}</a>
        </h2>
        <p class="list-item-excerpt" itemprop="description">${a.excerpt}</p>
        <div class="list-item-meta">
          <span itemprop="author">${T.by_author}</span>
          <span>·</span>
          <span>${a.dateDisplay}</span>
          <span>·</span>
          <span>${a.readingTime} ${T.min_read}</span>
        </div>
      </div>
      <div class="list-item-action">
        <a href="${articleUrl(a)}" class="card-read-more">${T.read_article}</a>
      </div>
    </article>`).join('');
}


/* ============================================================
   FILTER BUTTONS — articles page
   ============================================================ */

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.removeAttribute('aria-pressed'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      renderArticlesList(btn.getAttribute('data-filter'));
    });
  });
}


/* ============================================================
   MOBILE MENU
   ============================================================ */

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ============================================================
   CTA FORM
   ============================================================ */

function initCtaForm() {
  const form = document.getElementById('cta-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('.cta-input');
    if (input && input.value) {
      input.value = '';
      const btn = form.querySelector('.cta-submit');
      const orig = btn.textContent;
      btn.textContent = 'Thank you!';
      setTimeout(() => { btn.textContent = orig; }, 3000);
    }
  });
}


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedArticle();
  renderRecentArticles();

  const activeFilter = document.querySelector('.filter-btn.active');
  renderArticlesList(activeFilter ? activeFilter.getAttribute('data-filter') : 'all');

  initMobileMenu();
  initFilters();
  initCtaForm();
});
