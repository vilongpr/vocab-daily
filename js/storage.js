/* storage.js — localStorage wrapper for progress and settings */

const Storage = (() => {
  const PREFIX = 'dd_';

  // Return local date string (YYYY-MM-DD) to avoid UTC timezone issues
  function getLocalDateStr(d) {
    if (!d) d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function get(key, defaultVal = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw !== null ? JSON.parse(raw) : defaultVal;
    } catch {
      return defaultVal;
    }
  }

  function set(key, value) {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  }

  function remove(key) {
    localStorage.removeItem(PREFIX + key);
  }

  // SRS data per word: { ef, interval, reps, nextReview, lastQuality }
  function getWordData(wordId) {
    const all = get('srs', {});
    return all[wordId] || null;
  }

  function setWordData(wordId, data) {
    const all = get('srs', {});
    all[wordId] = data;
    set('srs', all);
  }

  function getAllWordData() {
    return get('srs', {});
  }

  // Track which words have been introduced
  function getIntroducedWords() {
    return get('introduced', []);
  }

  function setIntroducedWords(list) {
    set('introduced', list);
  }

  // Session history: array of { date, total, correct, newWords }
  function getHistory() {
    return get('history', []);
  }

  function addSession(session) {
    const history = getHistory();
    history.push({ ...session, date: getLocalDateStr() });
    set('history', history);
  }

  // Streak tracking
  function getStreak() {
    const history = getHistory();
    if (history.length === 0) return 0;

    const today = getLocalDateStr();
    const dates = [...new Set(history.map(h => h.date))].sort().reverse();

    if (dates[0] !== today && dates[0] !== getPreviousDay(today)) return 0;

    let streak = 0;
    let expected = dates[0] === today ? today : getPreviousDay(today);
    if (dates[0] === today) {
      expected = today;
    }

    for (const d of dates) {
      if (d === expected) {
        streak++;
        expected = getPreviousDay(expected);
      } else if (d < expected) {
        break;
      }
    }
    return streak;
  }

  function getPreviousDay(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    d.setDate(d.getDate() - 1);
    return getLocalDateStr(d);
  }

  // Settings
  function getSettings() {
    return get('settings', {
      dailyNew: 5,
      unsplashKey: '',
      theme: 'system',
      language: 'de'
    });
  }

  function updateSettings(partial) {
    const current = getSettings();
    set('settings', { ...current, ...partial });
  }

  // Image cache
  function getCachedImage(term) {
    const cache = get('img_cache', {});
    return cache[term] || null;
  }

  function setCachedImage(term, url) {
    const cache = get('img_cache', {});
    cache[term] = url;
    set('img_cache', cache);
  }

  function resetAll() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(PREFIX)) keys.push(k);
    }
    keys.forEach(k => localStorage.removeItem(k));
  }

  return {
    get, set, remove,
    getWordData, setWordData, getAllWordData,
    getIntroducedWords, setIntroducedWords,
    getHistory, addSession, getStreak,
    getSettings, updateSettings,
    getCachedImage, setCachedImage,
    resetAll, getLocalDateStr
  };
})();
