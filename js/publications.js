/* ============================================
   Publications — Real-time API Fetcher
   ============================================ */
(function () {
  // ────────────────────────────────────────────
  // CONFIG: Replace these IDs with your own
  // ────────────────────────────────────────────
  const CONFIG = {
    // Semantic Scholar author ID
    semanticScholarId: '2397381348',
    // OpenAlex author ID — find yours at openalex.org
    openAlexId: '',
    // Cache key and TTL
    cacheKey: 'portfolio_pubs_cache_v2',
    cacheTTL: 3600000, // 1 hour in ms
  };

  // ────────────────────────────────────────────
  // FALLBACK DATA — Always up to date
  // ────────────────────────────────────────────
  const FALLBACK_PUBLICATIONS = [
    {
      title: 'EvoQRE: Modeling Bounded Rationality in Safety-Critical Traffic Simulation via Evolutionary Quantal Response Equilibrium',
      authors: ['Phu-Hoa Pham', 'Chi-Nguyen Tran', 'Duy-Minh Dao-Sy', 'Phu-Quy Nguyen-Lam', 'Trung-Kiet Huynh'],
      year: 2026,
      venue: 'arXiv 2026',
      citationCount: 0,
      url: 'https://arxiv.org/abs/2601.05653',
      arxivId: '2601.05653',
      role: 'co',
    },
    {
      title: 'More at Stake: How Payoff and Language Shape LLM Agent Strategies in Cooperation Dilemmas',
      authors: ['Trung-Kiet Huynh', 'Duy-Minh Dao-Sy', 'Thi-Bich Cao', 'Phu-Hiep Le', 'Hieu-Duc Nguyen', 'Phu-Quy Nguyen-Lam', 'Chi-Nguyen Tran', 'et al.'],
      year: 2026,
      venue: 'arXiv 2026',
      citationCount: 0,
      url: 'https://arxiv.org/abs/2601.19082',
      arxivId: '2601.19082',
      role: 'co',
    },
    {
      title: 'Navigating Simply, Aligning Deeply: Winning Solutions for Mouse vs. AI 2025',
      authors: ['Phu-Hoa Pham', 'Chi-Nguyen Tran', 'Duy-Minh Dao-Sy', 'Phu-Quy Nguyen-Lam', 'Trung-Kiet Huynh'],
      year: 2026,
      venue: 'NeurIPS 2025 Competition',
      citationCount: 0,
      url: 'https://arxiv.org/abs/2602.00982',
      arxivId: '2602.00982',
      role: 'co',
    },
    {
      title: 'Early-Stage Prediction of Review Effort in AI-Generated Pull Requests',
      authors: ['Duy-Minh Dao-Sy', 'Trung-Kiet Huynh', 'Phu-Quy Nguyen-Lam', 'Phu-Hoa Pham', 'Chi-Nguyen Tran', 'Duc-Huy Duong', 'Thanh-Binh Tran'],
      year: 2026,
      venue: 'MSR 2026',
      citationCount: 0,
      url: 'https://arxiv.org/abs/2601.00753',
      arxivId: '2601.00753',
      role: 'co',
    },
    {
      title: 'Understanding LLM Agent Behaviours via Game Theory: Strategy Recognition, Biases and Multi-Agent Dynamics',
      authors: ['Trung-Kiet Huynh', 'Duy-Minh Dao-Sy', 'Thi-Bich Cao', 'Phu-Hiep Le', 'Hieu-Duc Nguyen', 'Phu-Quy Nguyen-Lam', 'Chi-Nguyen Tran', 'et al.'],
      year: 2025,
      venue: 'arXiv 2025',
      citationCount: 1,
      url: 'https://arxiv.org/abs/2512.07462',
      arxivId: '2512.07462',
      role: 'co',
    },
    {
      title: 'Beyond Vision: Contextually Enriched Image Captioning with Multi-Modal Retrieval',
      authors: ['Phu-Quy Nguyen-Lam', 'Phu-Hoa Pham', 'Chi-Nguyen Tran', 'Duy-Minh Dao-Sy', 'Ngoc Nguyen-Ho-Minh', 'Trung-Kiet Huynh'],
      year: 2025,
      venue: 'arXiv 2025',
      citationCount: 0,
      url: 'https://arxiv.org/abs/2512.20042',
      arxivId: '2512.20042',
      role: 'co',
    },
    {
      title: 'Leveraging Lightweight Entity Extraction for Scalable Event-Based Image Retrieval',
      authors: ['Duy-Minh Dao-Sy', 'Trung-Kiet Huynh', 'Phu-Quy Nguyen-Lam', 'Phu-Hoa Pham', 'Chi-Nguyen Tran'],
      year: 2025,
      venue: 'ACM MM 2025',
      citationCount: 0,
      url: 'https://arxiv.org/abs/2512.21221',
      arxivId: '2512.21221',
      role: 'co',
    },
    {
      title: 'DRAGON: Dual-encoder Retrieval with Guided Ontology Reasoning for Medical Normalization',
      authors: ['Duy-Minh Dao-Sy', 'Phu-Quy Nguyen-Lam', 'Phu-Hoa Pham', 'Chi-Nguyen Tran', 'Trung-Kiet Huynh', 'Thanh-Binh Tran'],
      year: 2025,
      venue: 'ALTA 2025',
      citationCount: 1,
      url: 'https://aclanthology.org/2025.alta-main.18/',
      arxivId: null,
      role: 'co',
    },
    {
      title: 'Systematic Evaluation of Machine Learning and Transformer-Based Methods for Scientific Telescope Literature Classification',
      authors: ['Trung-Kiet Huynh', 'Duy-Minh Dao-Sy', 'Chi-Nguyen Tran', 'Phu-Quy Nguyen-Lam', 'Phu-Hoa Pham', 'Duc-Huy Duong', 'Dien Dinh', 'et al.'],
      year: 2025,
      venue: 'WASP @ IJCNLP-AACL 2025',
      citationCount: 0,
      url: 'https://aclanthology.org/2025.wasp-main.16/',
      arxivId: null,
      role: 'co',
    },
    {
      title: 'JHARNA-MT: A Copy-Augmented Hybrid of LoRA-Tuned NLLB and Lexical SMT with Minimum Bayes Risk Decoding for Low-Resource Indic Languages',
      authors: ['Duy-Minh Dao-Sy', 'Trung-Kiet Huynh', 'Chi-Nguyen Tran', 'Phu-Quy Nguyen-Lam', 'Phu-Hoa Pham', 'Duc-Huy Duong', 'et al.'],
      year: 2025,
      venue: 'MMLoSo 2025 (Oral)',
      citationCount: 0,
      url: 'https://aclanthology.org/2025.mmloso-1.13/',
      arxivId: null,
      role: 'co',
    },
  ];

  // ────────────────────────────────────────────
  // API FETCHING
  // ────────────────────────────────────────────
  async function fetchFromSemanticScholar(authorId) {
    if (!authorId) return null;
    const url = `https://api.semanticscholar.org/graph/v1/author/${authorId}?fields=name,paperCount,citationCount,hIndex,papers.title,papers.year,papers.venue,papers.citationCount,papers.externalIds,papers.url,papers.authors`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stats: {
        papers: data.paperCount || 0,
        citations: data.citationCount || 0,
        hIndex: data.hIndex || 0,
      },
      publications: (data.papers || []).map(p => {
        const authors = (p.authors || []).map(a => a.name);
        const firstAuthor = authors[0]?.toLowerCase() || '';
        const isFirst = firstAuthor.includes('chi-nguyen') || firstAuthor.includes('chi nguyen') || firstAuthor.includes('chí nguyên');
        return {
          title: p.title,
          authors,
          year: p.year || 0,
          venue: p.venue || 'Preprint',
          citationCount: p.citationCount || 0,
          url: p.url || '',
          arxivId: p.externalIds?.ArXiv || null,
          doi: p.externalIds?.DOI || null,
          role: isFirst ? 'first' : 'co',
        };
      }),
    };
  }

  async function fetchFromOpenAlex(authorId) {
    if (!authorId) return null;
    const url = `https://api.openalex.org/authors/${authorId}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stats: {
        papers: data.works_count || 0,
        citations: data.cited_by_count || 0,
        hIndex: data.summary_stats?.h_index || 0,
      },
    };
  }

  // ────────────────────────────────────────────
  // CACHE
  // ────────────────────────────────────────────
  function getCachedData() {
    try {
      const cached = localStorage.getItem(CONFIG.cacheKey);
      if (!cached) return null;
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp > CONFIG.cacheTTL) return null;
      return data;
    } catch {
      return null;
    }
  }

  function setCachedData(data) {
    try {
      localStorage.setItem(CONFIG.cacheKey, JSON.stringify({
        data,
        timestamp: Date.now(),
      }));
    } catch { /* ignore quota errors */ }
  }

  // ────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────
  function highlightAuthor(authors) {
    return authors.map(a => {
      const lower = a.toLowerCase();
      if (lower.includes('chi-nguyen') || lower.includes('chí nguyên') || lower.includes('chi nguyen')) {
        return `<span class="me">${a}</span>`;
      }
      return a;
    }).join(', ');
  }

  function renderPublications(pubs) {
    const container = document.getElementById('pub-list');
    if (!container) return;

    // Sort by year (newest first)
    const sorted = [...pubs].sort((a, b) => b.year - a.year);

    let html = '';
    let currentYear = null;

    sorted.forEach((pub, index) => {
      if (pub.year !== currentYear) {
        currentYear = pub.year;
        html += `<div class="pub-year-divider reveal">${currentYear}</div>`;
      }

      const links = [];
      if (pub.arxivId) {
        links.push(`<a href="https://arxiv.org/abs/${pub.arxivId}" target="_blank" rel="noopener" class="pub-link">📄 ArXiv</a>`);
      }
      if (pub.doi) {
        links.push(`<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener" class="pub-link">🔗 DOI</a>`);
      }
      if (pub.url) {
        links.push(`<a href="${pub.url}" target="_blank" rel="noopener" class="pub-link">🌐 Link</a>`);
      }

      const roleTag = pub.role === 'first'
        ? '<span class="pub-role pub-role-first">First Author</span>'
        : pub.role === 'co'
        ? '<span class="pub-role pub-role-co">Co-Author</span>'
        : '';

      html += `
        <div class="pub-card reveal" style="transition-delay: ${Math.min(index * 0.05, 0.4)}s">
          <div class="pub-header">
            <span class="pub-venue">${pub.venue}</span>
            ${pub.citationCount > 0 ? `<span class="pub-citations">📊 ${pub.citationCount} cited</span>` : ''}
          </div>
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-authors">${highlightAuthor(pub.authors)}</p>
          <div class="pub-links">${links.join('')}${roleTag}</div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Re-trigger scroll reveal for new elements
    if (window.initRevealObserver) window.initRevealObserver();
  }

  function updateStats(stats) {
    const statCards = document.querySelectorAll('.stat-number[data-target]');
    statCards.forEach(card => {
      const label = card.nextElementSibling?.textContent.trim().toLowerCase();
      if (label === 'publications' && stats.papers) card.dataset.target = stats.papers;
      if (label === 'citations' && stats.citations) card.dataset.target = stats.citations;
      if (label === 'h-index' && stats.hIndex) card.dataset.target = stats.hIndex;
    });
  }

  // ────────────────────────────────────────────
  // INIT
  // ────────────────────────────────────────────
  async function init() {
    // 1. Check cache first
    const cached = getCachedData();
    if (cached) {
      renderPublications(cached.publications || FALLBACK_PUBLICATIONS);
      if (cached.stats) updateStats(cached.stats);
      return;
    }

    // 2. Try APIs in parallel
    try {
      const [s2Result, oaResult] = await Promise.allSettled([
        fetchFromSemanticScholar(CONFIG.semanticScholarId),
        fetchFromOpenAlex(CONFIG.openAlexId),
      ]);

      const s2 = s2Result.status === 'fulfilled' ? s2Result.value : null;
      const oa = oaResult.status === 'fulfilled' ? oaResult.value : null;

      // Use S2 pubs if available, else fallback
      const publications = (s2?.publications?.length > 0) ? s2.publications : FALLBACK_PUBLICATIONS;

      // Merge stats: prefer S2, supplement with OA
      const stats = {
        papers: s2?.stats?.papers || oa?.stats?.papers || FALLBACK_PUBLICATIONS.length,
        citations: s2?.stats?.citations || oa?.stats?.citations || 2,
        hIndex: s2?.stats?.hIndex || oa?.stats?.hIndex || 1,
      };

      setCachedData({ publications, stats });
      renderPublications(publications);
      updateStats(stats);
    } catch (err) {
      console.warn('API fetch failed, using fallback data:', err);
      renderPublications(FALLBACK_PUBLICATIONS);
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
