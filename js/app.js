/* app.js — Main app logic, routing, and event binding */

const App = (() => {
  function init() {
    Flashcard.init();
    loadTheme();
    updateBranding();
    updateModeLabels();
    bindEvents();
    initLanguageSelector();
    showView('dashboard');
    updateDashboard();
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
    document.getElementById('mode-icon-it').textContent = labels['img-target'].icon;
    document.getElementById('mode-title-it').textContent = labels['img-target'].title;
    document.getElementById('mode-desc-it').textContent = labels['img-target'].desc;
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

  function showView(name) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(`${name}-view`);
    if (view) view.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === name);
    });

    if (name === 'dashboard') updateDashboard();
    if (name === 'vocabulary') renderVocabulary();
  }

  // --- Vocabulary ---
  let vocabSortField = 'base';
  let vocabSortAsc = true;

  function renderVocabulary(filter = '') {
    const lang = Lang.getCurrent();
    const baseName = lang.base.name;
    const thBase = document.getElementById('vocab-th-base');
    const thTarget = document.getElementById('vocab-th-target');

    const query = filter.toLowerCase();
    let words = WORDS.filter(w =>
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

    document.getElementById('vocab-count').textContent = `${words.length} words`;
    document.getElementById('vocab-body').innerHTML = words.map(w =>
      `<tr><td>${w.base}</td><td>${w.target}</td><td><span class="pos-badge">${w.pos}</span></td></tr>`
    ).join('');
  }

  function updateDashboard() {
    document.getElementById('stat-learned').textContent = SRS.getTotalLearned();
    document.getElementById('stat-streak').textContent = Storage.getStreak();
    document.getElementById('stat-accuracy').textContent = SRS.getAccuracy() + '%';
    document.getElementById('stat-due').textContent = SRS.getDueCount(WORDS);

    // Word of the Day (deterministic per date)
    const today = new Date().toISOString().slice(0, 10);
    const dayHash = today.split('-').reduce((a, b) => a + parseInt(b), 0);
    const wod = WORDS[dayHash % WORDS.length];
    document.getElementById('wod-target').textContent = wod.target;
    document.getElementById('wod-base').textContent = wod.base;

    renderWeeklyChart();
  }

  function renderWeeklyChart() {
    const chart = document.getElementById('progress-chart');
    const history = Storage.getHistory();
    const today = new Date();
    const days = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
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

  function loadTheme() {
    const settings = Storage.getSettings();
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.getElementById('theme-toggle').textContent = settings.theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    const settings = Storage.getSettings();
    const newTheme = settings.theme === 'dark' ? 'light' : 'dark';
    Storage.updateSettings({ theme: newTheme });
    loadTheme();
  }

  function bindEvents() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => showView(btn.dataset.view));
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Vocabulary search and sort
    document.getElementById('vocab-search').addEventListener('input', (e) => {
      renderVocabulary(e.target.value);
    });
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
        // For image mode, only include words with clear visual representations
        const wordPool = mode === 'img-target'
          ? WORDS.filter(w => w.imageable)
          : WORDS;
        const queue = SRS.getTodayQueue(wordPool);
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

  return { init, showView, updateDashboard };
})();

// Boot the app
document.addEventListener('DOMContentLoaded', App.init);
