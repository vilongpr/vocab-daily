/* srs.js — SM-2 Spaced Repetition Engine */

const SRS = (() => {
  const MIN_EF = 1.3;

  // Initialize a new word's SRS data
  function initWord() {
    return {
      ef: 2.5,       // easiness factor
      interval: 0,   // days until next review
      reps: 0,       // successful repetitions in a row
      nextReview: new Date().toISOString().slice(0, 10),
      lastQuality: null
    };
  }

  /**
   * SM-2 algorithm: grade a word response.
   * quality: 0=fail, 1=hard, 2=good, 3=easy (mapped from UI buttons)
   * SM-2 uses 0-5, we map: fail→1, hard→2, good→4, easy→5
   */
  function grade(wordData, quality) {
    const q = mapQuality(quality);
    const data = { ...wordData };

    if (q < 3) {
      // Failed: reset repetitions
      data.reps = 0;
      data.interval = 0;
    } else {
      if (data.reps === 0) {
        data.interval = 1;
      } else if (data.reps === 1) {
        data.interval = 3;
      } else {
        data.interval = Math.round(data.interval * data.ef);
      }
      data.reps++;
    }

    // Update easiness factor
    data.ef = data.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (data.ef < MIN_EF) data.ef = MIN_EF;

    // Calculate next review date
    const next = new Date();
    next.setDate(next.getDate() + Math.max(data.interval, 1));
    data.nextReview = next.toISOString().slice(0, 10);
    data.lastQuality = quality;

    return data;
  }

  // Map our 0-3 quality to SM-2's 0-5 scale
  function mapQuality(q) {
    switch (q) {
      case 0: return 1;  // fail
      case 1: return 2;  // hard
      case 2: return 4;  // good
      case 3: return 5;  // easy
      default: return 3;
    }
  }

  /**
   * Build today's review queue.
   * Returns an array of word objects to study.
   */
  function getTodayQueue(allWords) {
    const today = new Date().toISOString().slice(0, 10);
    const introduced = Storage.getIntroducedWords();
    const settings = Storage.getSettings();
    const allSRS = Storage.getAllWordData();

    // Words due for review
    const dueWords = introduced.filter(wordId => {
      const data = allSRS[wordId];
      return data && data.nextReview <= today;
    });

    // Introduce new words if needed
    const newWordsNeeded = Math.max(0, settings.dailyNew - getNewWordsToday());
    const availableNew = shuffle(
      allWords.filter(w => !introduced.includes(w.id))
    ).slice(0, newWordsNeeded);

    // Register new words
    if (availableNew.length > 0) {
      const newIds = availableNew.map(w => w.id);
      Storage.setIntroducedWords([...introduced, ...newIds]);

      for (const w of availableNew) {
        Storage.setWordData(w.id, initWord());
      }
    }

    // Combine: new words first, then due reviews (shuffled)
    const newIds = availableNew.map(w => w.id);
    const queue = [...newIds, ...shuffle(dueWords)];

    // Resolve to full word objects
    const wordMap = new Map(allWords.map(w => [w.id, w]));
    return queue.map(id => wordMap.get(id)).filter(Boolean);
  }

  function getNewWordsToday() {
    const today = new Date().toISOString().slice(0, 10);
    const history = Storage.getHistory();
    return history
      .filter(h => h.date === today)
      .reduce((sum, h) => sum + (h.newWords || 0), 0);
  }

  function getDueCount(allWords) {
    const today = new Date().toISOString().slice(0, 10);
    const introduced = Storage.getIntroducedWords();
    const allSRS = Storage.getAllWordData();
    const settings = Storage.getSettings();

    const dueReviews = introduced.filter(wordId => {
      const data = allSRS[wordId];
      return data && data.nextReview <= today;
    }).length;

    const newAvailable = allWords.filter(w => !introduced.includes(w.id)).length;
    const newToday = Math.min(
      Math.max(0, settings.dailyNew - getNewWordsToday()),
      newAvailable
    );

    return dueReviews + newToday;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getTotalLearned() {
    const allSRS = Storage.getAllWordData();
    return Object.values(allSRS).filter(d => d.reps >= 1).length;
  }

  function getAccuracy() {
    const history = Storage.getHistory();
    if (history.length === 0) return 0;
    const total = history.reduce((s, h) => s + h.total, 0);
    const correct = history.reduce((s, h) => s + h.correct, 0);
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  }

  return {
    initWord, grade, getTodayQueue, getDueCount,
    getTotalLearned, getAccuracy, shuffle
  };
})();
