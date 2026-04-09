/* images.js — Emoji provider for image flashcards */

const Images = (() => {
  async function fetchImage(word) {
    return { url: null, emoji: word.emoji || '❓', source: 'emoji' };
  }

  return { fetchImage };
})();
