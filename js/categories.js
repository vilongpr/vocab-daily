/* categories.js — Thematic category definitions */

const Categories = (() => {
  const ALL = {
    'all':           { label: 'All Words',         emoji: '📚' },
    'food-drink':    { label: 'Food & Drink',      emoji: '🍽️' },
    'travel':        { label: 'Travel & Transport', emoji: '✈️' },
    'home':          { label: 'Home & Furniture',   emoji: '🏠' },
    'nature':        { label: 'Nature & Weather',   emoji: '🌿' },
    'body':          { label: 'Body',               emoji: '🫀' },
    'people':        { label: 'Family & People',    emoji: '👨‍👩‍👧‍👦' },
    'animals':       { label: 'Animals',            emoji: '🐾' },
    'colors':        { label: 'Colors',             emoji: '🎨' },
    'numbers':       { label: 'Numbers',            emoji: '🔢' },
    'time':          { label: 'Time & Seasons',     emoji: '⏰' },
    'clothing':      { label: 'Clothing',           emoji: '👕' },
    'kitchen':       { label: 'Kitchen',            emoji: '🍳' },
    'health':        { label: 'Health & Medicine',  emoji: '🏥' },
    'education':     { label: 'Education',          emoji: '🎓' },
    'work':          { label: 'Work & Society',     emoji: '💼' },
    'entertainment': { label: 'Entertainment',      emoji: '🎭' },
    'emotions':      { label: 'Emotions & Abstract',emoji: '💭' },
    'greetings':     { label: 'Greetings & Basics', emoji: '👋' },
    'verbs':         { label: 'Verbs',              emoji: '🏃' },
    'adjectives':    { label: 'Adjectives',         emoji: '✨' },
    'adverbs':       { label: 'Adverbs',            emoji: '📍' },
  };

  function getAll() { return ALL; }

  function getLabel(key) {
    return ALL[key] ? ALL[key].label : key;
  }

  function getEmoji(key) {
    return ALL[key] ? ALL[key].emoji : '📁';
  }

  function filterWords(words, categoryKey) {
    if (!categoryKey || categoryKey === 'all') return words;
    return words.filter(w => w.category === categoryKey);
  }

  return { getAll, getLabel, getEmoji, filterWords };
})();
