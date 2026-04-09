/* images.js — Image/emoji provider for image flashcards */

const Images = (() => {
  const UNSPLASH_BASE = 'https://api.unsplash.com/search/photos';

  async function fetchImage(word) {
    const emoji = word.emoji;
    const searchTerm = word.imageSearch;

    // Check Unsplash cache first
    const cached = Storage.getCachedImage(searchTerm);
    if (cached) return { url: cached, emoji, source: 'cache' };

    // Try Unsplash if API key is configured
    const apiKey = Storage.getSettings().unsplashKey;
    if (apiKey) {
      try {
        const resp = await fetch(
          `${UNSPLASH_BASE}?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=squarish`,
          { headers: { Authorization: `Client-ID ${apiKey}` } }
        );
        if (resp.ok) {
          const data = await resp.json();
          if (data.results && data.results.length > 0) {
            const url = data.results[0].urls.small;
            Storage.setCachedImage(searchTerm, url);
            return { url, emoji, source: 'unsplash' };
          }
        }
      } catch (err) {
        console.warn('Unsplash fetch failed:', err.message);
      }
    }

    // Default: use the word's emoji (works great without any API key)
    return { url: null, emoji: emoji || '❓', source: 'emoji' };
  }

  return { fetchImage };
})();
