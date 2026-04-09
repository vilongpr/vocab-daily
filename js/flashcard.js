/* flashcard.js — Flashcard UI component */

const Flashcard = (() => {
  let currentQueue = [];
  let currentIndex = 0;
  let currentMode = 'de-en';
  let isFlipped = false;
  let sessionStats = { total: 0, correct: 0, newWords: 0, words: [] };

  const elements = {};

  function init() {
    elements.container = document.getElementById('flashcard-container');
    elements.card = document.getElementById('flashcard');
    elements.front = document.getElementById('card-front');
    elements.word = document.getElementById('card-word');
    elements.hint = document.getElementById('card-hint');
    elements.image = document.getElementById('card-image');
    elements.answer = document.getElementById('card-answer');
    elements.pos = document.getElementById('card-pos');
    elements.extra = document.getElementById('card-extra');
    elements.counter = document.getElementById('card-counter');
    elements.actions = document.getElementById('flashcard-actions');
  }

  function startSession(queue, mode) {
    currentQueue = queue;
    currentMode = mode;
    currentIndex = 0;
    isFlipped = false;
    sessionStats = { total: 0, correct: 0, newWords: 0, words: [] };

    if (queue.length === 0) {
      App.showView('dashboard');
      return;
    }

    showCard();
  }

  async function showCard() {
    if (currentIndex >= currentQueue.length) {
      endSession();
      return;
    }

    const word = currentQueue[currentIndex];
    isFlipped = false;
    elements.card.classList.remove('flipped');
    elements.actions.style.display = 'none';
    elements.counter.textContent = `${currentIndex + 1} / ${currentQueue.length}`;

    // Reset image
    elements.image.style.display = 'none';
    elements.image.style.backgroundImage = '';

    if (currentMode === 'de-en') {
      elements.word.textContent = word.german;
      elements.hint.textContent = word.pos;
      elements.answer.textContent = word.english;
      elements.pos.textContent = '';
      elements.extra.textContent = word.german;
    } else if (currentMode === 'en-de') {
      elements.word.textContent = word.english;
      elements.hint.textContent = word.pos;
      elements.answer.textContent = word.german;
      elements.pos.textContent = word.pos;
      elements.extra.textContent = '';
    } else if (currentMode === 'img-de') {
      elements.word.textContent = '?';
      elements.hint.textContent = 'Guess the German word';

      const img = await Images.fetchImage(word.imageSearch || word.english, word.pos);
      if (img.url) {
        elements.image.style.display = 'block';
        elements.image.style.backgroundImage = `url(${img.url})`;
        elements.word.textContent = '';
      } else {
        elements.image.style.display = 'none';
        elements.word.textContent = img.emoji || '🖼️';
        elements.hint.textContent = word.english;
      }

      elements.answer.textContent = word.german;
      elements.pos.textContent = word.pos;
      elements.extra.textContent = word.english;
    }
  }

  function flip() {
    if (isFlipped) return;
    isFlipped = true;
    elements.card.classList.add('flipped');
    elements.actions.style.display = 'grid';
  }

  function rate(quality) {
    if (!isFlipped) return;

    const word = currentQueue[currentIndex];
    const srsData = Storage.getWordData(word.id) || SRS.initWord();
    const wasNew = srsData.reps === 0;
    const updated = SRS.grade(srsData, quality);
    Storage.setWordData(word.id, updated);

    const correct = quality >= 2;
    sessionStats.total++;
    if (correct) sessionStats.correct++;
    if (wasNew) sessionStats.newWords++;
    sessionStats.words.push({
      german: word.german,
      english: word.english,
      correct
    });

    currentIndex++;
    showCard();
  }

  function endSession() {
    Storage.addSession({
      total: sessionStats.total,
      correct: sessionStats.correct,
      newWords: sessionStats.newWords
    });

    document.getElementById('summary-total').textContent = sessionStats.total;
    document.getElementById('summary-correct').textContent = sessionStats.correct;
    document.getElementById('summary-new').textContent = sessionStats.newWords;

    const wordsDiv = document.getElementById('summary-words');
    wordsDiv.innerHTML = sessionStats.words.map(w => `
      <div class="summary-word-row">
        <span>${w.german} — ${w.english}</span>
        <span class="${w.correct ? 'correct' : 'incorrect'}">${w.correct ? '✓' : '✗'}</span>
      </div>
    `).join('');

    App.showView('summary');
  }

  function handleKeyboard(e) {
    if (!document.getElementById('flashcard-view').classList.contains('active')) return;

    if (e.code === 'Space') {
      e.preventDefault();
      flip();
    } else if (isFlipped) {
      if (e.key === '1') rate(0);
      else if (e.key === '2') rate(1);
      else if (e.key === '3') rate(2);
      else if (e.key === '4') rate(3);
    }
  }

  return { init, startSession, flip, rate, handleKeyboard };
})();
