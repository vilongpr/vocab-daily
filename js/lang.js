/* lang.js — Language configuration and registry */

const LANGUAGES = {
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dataFile: 'data/de.js',
    speechCode: 'de-DE',
    piperVoiceId: 'de_DE-thorsten-medium',
    piperVoices: [
      { id: 'de_DE-thorsten-medium', label: 'Thorsten (medium)', gender: 'male', quality: 'medium' },
      { id: 'de_DE-thorsten-high', label: 'Thorsten (high)', gender: 'male', quality: 'high' },
      { id: 'de_DE-thorsten-low', label: 'Thorsten (low)', gender: 'male', quality: 'low' },
      { id: 'de_DE-thorsten_emotional-medium', label: 'Thorsten Emotional', gender: 'male', quality: 'medium' },
      { id: 'de_DE-kerstin-low', label: 'Kerstin', gender: 'female', quality: 'low' },
      { id: 'de_DE-karlsson-low', label: 'Karlsson', gender: 'male', quality: 'low' },
      { id: 'de_DE-ramona-low', label: 'Ramona', gender: 'female', quality: 'low' },
      { id: 'de_DE-eva_k-x_low', label: 'Eva K', gender: 'female', quality: 'x-low' },
      { id: 'de_DE-pavoque-low', label: 'Pavoque', gender: 'male', quality: 'low' },
    ],
    // Base language the learner already speaks
    base: { code: 'en', name: 'English', flag: '🇬🇧' }
  }
  // Future languages:
  // es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dataFile: 'data/es.js', base: { code: 'en', name: 'English', flag: '🇬🇧' } },
  // fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dataFile: 'data/fr.js', base: { code: 'en', name: 'English', flag: '🇬🇧' } },
};

const Lang = (() => {
  function getCurrent() {
    const settings = Storage.getSettings();
    return LANGUAGES[settings.language] || LANGUAGES.de;
  }

  function getCode() {
    return getCurrent().code;
  }

  function getAvailable() {
    return Object.values(LANGUAGES);
  }

  // Dynamic mode labels based on selected language
  function getModeLabels() {
    const lang = getCurrent();
    return {
      'target-base': {
        icon: `${lang.flag} → ${lang.base.flag}`,
        title: `${lang.name} → ${lang.base.name}`,
        desc: `See ${lang.name}, guess ${lang.base.name}`
      },
      'base-target': {
        icon: `${lang.base.flag} → ${lang.flag}`,
        title: `${lang.base.name} → ${lang.name}`,
        desc: `See ${lang.base.name}, guess ${lang.name}`
      },
      'img-target': {
        icon: `🖼️ → ${lang.flag}`,
        title: `Image → ${lang.name}`,
        desc: `See image, guess the word`
      }
    };
  }

  function getPiperVoiceId() {
    const lang = getCurrent();
    const settings = Storage.getSettings();
    const saved = settings.piperVoice;
    // Validate saved voice still exists for this language
    if (saved && lang.piperVoices?.some(v => v.id === saved)) return saved;
    return lang.piperVoiceId;
  }

  return { getCurrent, getCode, getAvailable, getModeLabels, getPiperVoiceId };
})();
