/* speech.js — Text-to-speech using the Web Speech API */

const Speech = (() => {
  const voiceCache = {};
  let voicesLoaded = false;

  function isSupported() {
    return 'speechSynthesis' in window;
  }

  function loadVoices() {
    if (!isSupported()) return;
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) voicesLoaded = true;
  }

  // Some browsers (Chrome) load voices asynchronously
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  function getVoice(langCode) {
    if (voiceCache[langCode]) return voiceCache[langCode];

    const voices = speechSynthesis.getVoices();
    // Prefer exact match (e.g. de-DE), then prefix match (de)
    const prefix = langCode.split('-')[0];
    const voice =
      voices.find(v => v.lang === langCode) ||
      voices.find(v => v.lang.startsWith(prefix)) ||
      null;

    if (voice) voiceCache[langCode] = voice;
    return voice;
  }

  function speak(text, langCode) {
    if (!isSupported() || !text) return;

    // Cancel any in-progress speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.9;

    const voice = getVoice(langCode);
    if (voice) utterance.voice = voice;

    speechSynthesis.speak(utterance);
  }

  // Pre-load voices
  loadVoices();

  return { isSupported, speak };
})();
