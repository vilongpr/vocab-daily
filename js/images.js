/* images.js — Unsplash API integration for image flashcards */

const Images = (() => {
  const UNSPLASH_BASE = 'https://api.unsplash.com/search/photos';
  const FALLBACK_EMOJIS = {
    noun: '📦', verb: '🏃', adjective: '🎨', adverb: '⚡', default: '💬'
  };

  async function fetchImage(searchTerm, pos) {
    // Check cache first
    const cached = Storage.getCachedImage(searchTerm);
    if (cached) return { url: cached, source: 'cache' };

    const apiKey = Storage.getSettings().unsplashKey;
    if (!apiKey) {
      return { url: null, emoji: getEmoji(pos), source: 'fallback' };
    }

    try {
      const resp = await fetch(
        `${UNSPLASH_BASE}?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=squarish`,
        { headers: { Authorization: `Client-ID ${apiKey}` } }
      );

      if (!resp.ok) throw new Error(`Unsplash ${resp.status}`);

      const data = await resp.json();
      if (data.results && data.results.length > 0) {
        const url = data.results[0].urls.small;
        Storage.setCachedImage(searchTerm, url);
        return { url, source: 'unsplash' };
      }
    } catch (err) {
      console.warn('Image fetch failed:', err.message);
    }

    return { url: null, emoji: getEmoji(pos), source: 'fallback' };
  }

  function getEmoji(pos) {
    return FALLBACK_EMOJIS[pos] || FALLBACK_EMOJIS.default;
  }

  return { fetchImage };
})();
