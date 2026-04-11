/* speech.js — Text-to-speech using Piper TTS (WASM) with Web Speech API fallback */

import * as tts from '@mintplex-labs/piper-tts-web';

const Speech = (() => {
  // --- Web Speech API fallback ---
  const voiceCache = {};

  function webSpeechSupported() {
    return 'speechSynthesis' in window;
  }

  function loadVoices() {
    if (!webSpeechSupported()) return;
    speechSynthesis.getVoices();
  }

  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  loadVoices();

  function getVoice(langCode) {
    if (voiceCache[langCode]) return voiceCache[langCode];
    const voices = speechSynthesis.getVoices();
    const prefix = langCode.split('-')[0];
    const voice =
      voices.find(v => v.lang === langCode) ||
      voices.find(v => v.lang.startsWith(prefix)) ||
      null;
    if (voice) voiceCache[langCode] = voice;
    return voice;
  }

  function webSpeak(text, langCode) {
    if (!webSpeechSupported() || !text) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.9;
    const voice = getVoice(langCode);
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }

  // --- Piper TTS ---
  const piperState = {
    // 'idle' | 'downloading' | 'ready' | 'error'
    status: 'idle',
    voiceId: null,
    listeners: [],      // callbacks notified when status changes
  };

  function onPiperStatusChange(fn) {
    piperState.listeners.push(fn);
  }

  function notifyListeners() {
    piperState.listeners.forEach(fn => fn(piperState.status));
  }

  async function ensurePiperReady(voiceId) {
    if (piperState.status === 'ready' && piperState.voiceId === voiceId) return true;
    if (piperState.status === 'downloading') return false;

    piperState.status = 'downloading';
    piperState.voiceId = voiceId;
    notifyListeners();

    try {
      const stored = await tts.stored();
      if (!stored.includes(voiceId)) {
        await tts.download(voiceId, (progress) => {
          // progress.url, progress.total, progress.loaded
        });
      }
      piperState.status = 'ready';
      notifyListeners();
      return true;
    } catch (e) {
      console.warn('Piper TTS failed to load, falling back to Web Speech API:', e);
      piperState.status = 'error';
      notifyListeners();
      return false;
    }
  }

  async function piperSpeak(text, voiceId) {
    try {
      const wav = await tts.predict({ text, voiceId });
      const audio = new Audio();
      audio.src = URL.createObjectURL(wav);
      await audio.play();
    } catch (e) {
      console.warn('Piper TTS synthesis failed, falling back:', e);
      return false;
    }
    return true;
  }

  // --- Public API ---

  function isSupported() {
    return webSpeechSupported() || (typeof WebAssembly !== 'undefined');
  }

  function getPiperStatus() {
    return piperState.status;
  }

  async function speak(text, langCode) {
    if (!text) return;

    // Check if the current language has a Piper voice configured
    const lang = typeof Lang !== 'undefined' ? Lang.getCurrent() : null;
    const piperVoiceId = lang?.piperVoiceId;
    const isTargetLang = lang && (langCode === lang.speechCode || langCode === lang.code);

    if (piperVoiceId && isTargetLang) {
      // Try Piper first for the target language
      const ready = await ensurePiperReady(piperVoiceId);
      if (ready) {
        const ok = await piperSpeak(text, piperVoiceId);
        if (ok) return;
      }
    }

    // Fallback to Web Speech API
    webSpeak(text, langCode);
  }

  return { isSupported, speak, getPiperStatus, onPiperStatusChange };
})();

// Expose globally for classic scripts (app.js, flashcard.js)
window.Speech = Speech;
