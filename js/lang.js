/* lang.js — Language configuration and registry */

const LANGUAGES = {
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dataFile: 'data/de.js',
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

  return { getCurrent, getCode, getAvailable, getModeLabels };
})();
