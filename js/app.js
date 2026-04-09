/* app.js — Main app logic, routing, and event binding */

const App = (() => {
  function init() {
    Flashcard.init();
    loadTheme();
    bindEvents();
    showView('dashboard');
    updateDashboard();
  }

  function showView(name) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(`${name}-view`);
    if (view) view.classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === name);
    });

    if (name === 'dashboard') updateDashboard();
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
    document.getElementById('wod-german').textContent = wod.german;
    document.getElementById('wod-english').textContent = wod.english;

    // Weekly progress chart
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

    // Start practice
    document.getElementById('btn-start-practice').addEventListener('click', () => {
      showView('mode');
    });

    // Mode selection
    document.querySelectorAll('.mode-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        const queue = SRS.getTodayQueue(WORDS);
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

    const apiKeyInput = document.getElementById('setting-api-key');
    apiKeyInput.value = Storage.getSettings().unsplashKey || '';
    apiKeyInput.addEventListener('change', () => {
      Storage.updateSettings({ unsplashKey: apiKeyInput.value.trim() });
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
