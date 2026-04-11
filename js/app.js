/* app.js — Main app logic, routing, and event binding */

const App = (() => {
  let lastMode = 'target-base';
  let lastCategory = 'all';
  let lastReviewOnly = false;

  const ROUTABLE_VIEWS = ['dashboard', 'vocabulary', 'settings'];

  function init() {
    Flashcard.init();
    loadTheme();
    initThemeSelector();
    updateBranding();
    updateModeLabels();
    bindEvents();
    initLanguageSelector();
    initPiperLoadingUI();
    navigateToHash();
    window.addEventListener('hashchange', navigateToHash);
  }

  function navigateToHash() {
    const hash = location.hash.replace('#', '') || 'dashboard';
    const view = ROUTABLE_VIEWS.includes(hash) ? hash : 'dashboard';
    showView(view, true);
  }

  function updateBranding() {
    const lang = Lang.getCurrent();
    document.getElementById('app-logo').textContent = `${lang.flag} Vocab Daily`;
    document.title = `Vocab Daily — ${lang.name} Flashcards`;
  }

  function updateModeLabels() {
    const labels = Lang.getModeLabels();
    document.getElementById('mode-icon-tb').textContent = labels['target-base'].icon;
    document.getElementById('mode-title-tb').textContent = labels['target-base'].title;
    document.getElementById('mode-desc-tb').textContent = labels['target-base'].desc;
    document.getElementById('mode-icon-bt').textContent = labels['base-target'].icon;
    document.getElementById('mode-title-bt').textContent = labels['base-target'].title;
    document.getElementById('mode-desc-bt').textContent = labels['base-target'].desc;
  }

  function initLanguageSelector() {
    const select = document.getElementById('setting-language');
    const available = Lang.getAvailable();
    const current = Lang.getCode();

    select.innerHTML = available.map(l =>
      `<option value="${l.code}" ${l.code === current ? 'selected' : ''}>${l.flag} ${l.name} (${l.nativeName})</option>`
    ).join('');

    select.addEventListener('change', () => {
      Storage.updateSettings({ language: select.value });
      updateBranding();
      updateModeLabels();
      updateDashboard();
    });
  }

  function showView(name, fromHash) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(`${name}-view`);
    if (view) view.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === name);
    });

    // Update URL hash for routable views (avoid re-triggering hashchange)
    if (!fromHash && ROUTABLE_VIEWS.includes(name)) {
      history.replaceState(null, '', '#' + name);
    }

    if (name === 'dashboard') updateDashboard();
    if (name === 'vocabulary') renderVocabulary();
    if (name === 'summary') renderMasteryBar('mastery-bar-summary', 'mastery-legend-summary');
    if (name === 'mode') populateCategoryFilter();
  }

  // --- Vocabulary ---
  let vocabSortField = 'base';
  let vocabSortAsc = true;

  function renderVocabulary(filter = '') {
    const lang = Lang.getCurrent();
    const baseName = lang.base.name;
    const thBase = document.getElementById('vocab-th-base');
    const thTarget = document.getElementById('vocab-th-target');

    // Populate category dropdown
    const catSelect = document.getElementById('vocab-category-filter');
    const currentCat = catSelect.value || 'all';
    const cats = Categories.getSorted();
    catSelect.innerHTML = cats.map(([key, cat]) =>
      `<option value="${key}">${cat.emoji} ${cat.label}</option>`
    ).join('');
    catSelect.value = currentCat;

    const catKey = catSelect.value || 'all';
    const query = filter.toLowerCase();
    let words = Categories.filterWords(WORDS, catKey).filter(w =>
      !query || w.base.toLowerCase().includes(query) || w.target.toLowerCase().includes(query)
    );

    words.sort((a, b) => {
      const av = a[vocabSortField].toLowerCase();
      const bv = b[vocabSortField].toLowerCase();
      return vocabSortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
    });

    // Update column headers with sort arrows
    const arrow = vocabSortAsc ? ' ↑' : ' ↓';
    thBase.textContent = baseName + (vocabSortField === 'base' ? arrow : '');
    thTarget.textContent = lang.name + (vocabSortField === 'target' ? arrow : '');
    thBase.classList.toggle('active', vocabSortField === 'base');
    thTarget.classList.toggle('active', vocabSortField === 'target');

    const canSpeak = Speech.isSupported();
    const speakCol = canSpeak
      ? '<td class="vocab-speak"><button class="btn-pronounce-sm" aria-label="Hear pronunciation">🔊</button></td>'
      : '<td></td>';

    document.getElementById('vocab-count').textContent = `${words.length} words`;
    const body = document.getElementById('vocab-body');
    body.innerHTML = words.map(w =>
      `<tr data-target="${w.target}"><td class="vocab-emoji">${w.emoji || ''}</td><td>${w.base}</td><td>${w.target}</td><td><span class="pos-badge">${w.pos}</span></td>${speakCol}</tr>`
    ).join('');
  }

  function handleVocabSpeak(e) {
    const btn = e.target.closest('.btn-pronounce-sm');
    if (!btn) return;
    const row = btn.closest('tr');
    const word = row?.dataset.target;
    if (word) {
      const lang = Lang.getCurrent();
      Speech.speak(word, lang.speechCode || lang.code);
    }
  }

  function updateDashboard() {
    document.getElementById('stat-learned').textContent = SRS.getTotalLearned();
    document.getElementById('stat-streak').textContent = Storage.getStreak();
    document.getElementById('stat-accuracy').textContent = SRS.getAccuracy() + '%';
    document.getElementById('stat-due').textContent = SRS.getDueCount(WORDS);

    // Word of the Day (deterministic per date)
    const today = Storage.getLocalDateStr();
    const dayHash = today.split('-').reduce((a, b) => a + parseInt(b), 0);
    const wod = WORDS[dayHash % WORDS.length];
    document.getElementById('wod-target').textContent = wod.target;
    document.getElementById('wod-base').textContent = wod.base;

    renderWeeklyChart();
    renderMasteryBar('mastery-bar-dashboard', 'mastery-legend-dashboard');
  }

  function renderWeeklyChart() {
    const chart = document.getElementById('progress-chart');
    const history = Storage.getHistory();
    const today = new Date();
    const days = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = Storage.getLocalDateStr(d);
      const daySessions = history.filter(h => h.date === dateStr);
      const total = daySessions.reduce((s, h) => s + h.total, 0);
      const label = d.toLocaleDateString('en', { weekday: 'short' });
      days.push({ dateStr, total, label, isToday: i === 0 });
    }

    const maxVal = Math.max(...days.map(d => d.total), 1);

    chart.innerHTML = days.map(d => {
      const height = Math.max((d.total / maxVal) * 100, 4);
      return `
        <div class="chart-bar ${d.isToday ? 'today' : ''}" style="height: ${height}%">
          ${d.total > 0 ? `<span class="chart-bar-value">${d.total}</span>` : ''}
          <span class="chart-bar-label">${d.label}</span>
        </div>
      `;
    }).join('');
  }

  function populateCategoryFilter() {
    const select = document.getElementById('filter-category');
    if (select.options.length > 1) return; // already populated
    const cats = Categories.getSorted();
    select.innerHTML = cats.map(([key, cat]) =>
      `<option value="${key}">${cat.emoji} ${cat.label}</option>`
    ).join('');
    select.value = lastCategory;
  }

  function getFilteredWordPool(mode) {
    const category = document.getElementById('filter-category').value;
    const reviewOnly = document.getElementById('filter-review-only').checked;
    lastCategory = category;
    lastReviewOnly = reviewOnly;

    let pool = Categories.filterWords(WORDS, category);
    return { pool, reviewOnly };
  }

  function renderMasteryBar(barId, legendId) {
    const m = SRS.getMasteryBreakdown(WORDS);
    const pct = (n) => m.total > 0 ? ((n / m.total) * 100).toFixed(1) : 0;

    const bar = document.getElementById(barId);
    const legend = document.getElementById(legendId);

    bar.innerHTML = [
      { cls: 'seg-mastered', val: m.mastered },
      { cls: 'seg-familiar', val: m.familiar },
      { cls: 'seg-learning', val: m.learning },
      { cls: 'seg-new',      val: m.new },
    ].map(s => s.val > 0
      ? `<div class="seg ${s.cls}" style="width:${pct(s.val)}%"></div>`
      : ''
    ).join('');

    legend.innerHTML = [
      { cls: 'mastered', label: 'Mastered', val: m.mastered },
      { cls: 'familiar', label: 'Familiar', val: m.familiar },
      { cls: 'learning', label: 'Learning', val: m.learning },
      { cls: 'new',      label: 'New',      val: m.new },
    ].map(s =>
      `<span class="mastery-legend-item"><span class="mastery-dot ${s.cls}"></span>${s.label}: ${s.val}</span>`
    ).join('');
  }

  function loadTheme() {
    const settings = Storage.getSettings();
    document.documentElement.setAttribute('data-theme', settings.theme);
    const themeSelect = document.getElementById('setting-theme');
    if (themeSelect) themeSelect.value = settings.theme;
  }

  function initThemeSelector() {
    const themeSelect = document.getElementById('setting-theme');
    themeSelect.value = Storage.getSettings().theme;
    themeSelect.addEventListener('change', () => {
      Storage.updateSettings({ theme: themeSelect.value });
      loadTheme();
    });
  }

  function bindEvents() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => showView(btn.dataset.view));
    });

    // Word of the Day pronunciation
    document.getElementById('btn-wod-speak').addEventListener('click', () => {
      const word = document.getElementById('wod-target').textContent;
      if (word && word !== '—') {
        const lang = Lang.getCurrent();
        Speech.speak(word, lang.speechCode || lang.code);
      }
    });

    // Vocabulary search and sort
    document.getElementById('vocab-search').addEventListener('input', (e) => {
      renderVocabulary(e.target.value);
    });
    document.getElementById('vocab-category-filter').addEventListener('change', () => {
      renderVocabulary(document.getElementById('vocab-search').value);
    });
    document.getElementById('vocab-body').addEventListener('click', handleVocabSpeak);
    document.getElementById('vocab-th-base').addEventListener('click', () => {
      if (vocabSortField === 'base') vocabSortAsc = !vocabSortAsc;
      else { vocabSortField = 'base'; vocabSortAsc = true; }
      renderVocabulary(document.getElementById('vocab-search').value);
    });
    document.getElementById('vocab-th-target').addEventListener('click', () => {
      if (vocabSortField === 'target') vocabSortAsc = !vocabSortAsc;
      else { vocabSortField = 'target'; vocabSortAsc = true; }
      renderVocabulary(document.getElementById('vocab-search').value);
    });

    // Start practice
    document.getElementById('btn-start-practice').addEventListener('click', () => {
      showView('mode');
    });

    // Mode selection
    document.querySelectorAll('.mode-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        lastMode = mode;
        const { pool, reviewOnly } = getFilteredWordPool(mode);
        const queue = reviewOnly
          ? SRS.getReviewQueue(pool)
          : SRS.getTodayQueue(pool);
        showView('flashcard');
        Flashcard.startSession(queue, mode);
      });
    });

    // Flashcard interactions
    document.getElementById('flashcard-container').addEventListener('click', () => {
      Flashcard.flip();
    });

    document.getElementById('btn-fail').addEventListener('click', () => Flashcard.rate(0));
    document.getElementById('btn-hard').addEventListener('click', () => Flashcard.rate(1));
    document.getElementById('btn-easy').addEventListener('click', () => Flashcard.rate(3));

    // Exit session
    document.getElementById('btn-exit-session').addEventListener('click', () => {
      showView('dashboard');
    });

    // Back to dashboard from summary
    document.getElementById('btn-back-dashboard').addEventListener('click', () => {
      showView('dashboard');
    });

    // Learn more words from summary
    document.getElementById('btn-learn-more').addEventListener('click', () => {
      const pool = Categories.filterWords(WORDS, lastCategory);
      const queue = SRS.getExtraQueue(pool, 5);
      if (queue.length > 0) {
        showView('flashcard');
        Flashcard.startSession(queue, lastMode);
      }
    });

    // "Caught up" screen buttons
    document.getElementById('btn-caught-up-learn').addEventListener('click', () => {
      const pool = Categories.filterWords(WORDS, lastCategory);
      const queue = SRS.getExtraQueue(pool, 5);
      if (queue.length > 0) {
        Flashcard.startSession(queue, lastMode);
      }
    });

    document.getElementById('btn-caught-up-back').addEventListener('click', () => {
      showView('dashboard');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', Flashcard.handleKeyboard);

    // Settings
    const dailySlider = document.getElementById('setting-daily');
    const dailyVal = document.getElementById('setting-daily-val');
    dailySlider.value = Storage.getSettings().dailyNew;
    dailyVal.textContent = dailySlider.value;

    dailySlider.addEventListener('input', () => {
      dailyVal.textContent = dailySlider.value;
      Storage.updateSettings({ dailyNew: parseInt(dailySlider.value) });
    });

    // Reset
    document.getElementById('btn-reset').addEventListener('click', () => {
      if (confirm('Are you sure? This will erase all your progress.')) {
        Storage.resetAll();
        location.reload();
      }
    });
  }

  function initPiperLoadingUI() {
    if (typeof Speech.onPiperStatusChange !== 'function') return;
    Speech.onPiperStatusChange((status) => {
      const loading = status === 'downloading';
      document.querySelectorAll('.btn-pronounce, .btn-pronounce-sm').forEach(btn => {
        btn.classList.toggle('piper-loading', loading);
        btn.title = loading ? 'Downloading voice model…' : '';
      });
    });
  }

  return { init, showView, updateDashboard };
})();

// Boot the app
document.addEventListener('DOMContentLoaded', App.init);
