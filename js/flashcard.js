/* flashcard.js — Flashcard UI component */

const Flashcard = (() => {
  let currentQueue = [];
  let currentIndex = 0;
  let currentMode = 'target-base';
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
    elements.pronounceFront = document.getElementById('btn-pronounce-front');
    elements.pronounceBack = document.getElementById('btn-pronounce-back');

    // Pronounce buttons — stop propagation so clicking doesn't flip the card
    elements.pronounceFront.addEventListener('click', (e) => {
      e.stopPropagation();
      pronounceCurrent();
    });
    elements.pronounceBack.addEventListener('click', (e) => {
      e.stopPropagation();
      pronounceCurrent();
    });
  }

  function startSession(queue, mode) {
    currentQueue = queue;
    currentMode = mode;
    currentIndex = 0;
    isFlipped = false;
    sessionStats = { total: 0, correct: 0, newWords: 0, words: [] };

    const caughtUp = document.getElementById('caught-up');
    const container = elements.container;
    const tip = document.querySelector('.flashcard-tip');

    if (queue.length === 0) {
      // Show "all caught up" state
      caughtUp.style.display = '';
      container.style.display = 'none';
      elements.actions.style.display = 'none';
      tip.style.display = 'none';
      elements.counter.style.display = 'none';

      const learnBtn = document.getElementById('btn-caught-up-learn');
      const available = SRS.getAvailableNewCount(WORDS);
      if (available > 0) {
        learnBtn.disabled = false;
        const count = Math.min(5, available);
        learnBtn.textContent = `📚 Learn ${count} More Word${count !== 1 ? 's' : ''}`;
      } else {
        learnBtn.disabled = true;
        learnBtn.textContent = '📚 All Words Learned!';
      }
      return;
    }

    // Normal session — ensure card UI is visible
    caughtUp.style.display = 'none';
    container.style.display = '';
    tip.style.display = '';
    elements.counter.style.display = '';

    showCard();
  }

  async function showCard() {
    if (currentIndex >= currentQueue.length) {
      endSession();
      return;
    }

    const word = currentQueue[currentIndex];
    isFlipped = false;

    // Snap to front instantly (no animation) so the answer isn't revealed
    elements.card.style.transition = 'none';
    elements.card.classList.remove('flipped');
    // Force reflow, then restore the CSS transition for the user's flip
    elements.card.offsetHeight;
    elements.card.style.transition = '';

    elements.actions.style.display = 'none';
    elements.counter.textContent = `${currentIndex + 1} / ${currentQueue.length}`;

    // Reset image
    elements.image.style.display = 'none';
    elements.image.style.backgroundImage = '';
    elements.word.style.fontSize = '';

    // Show pronounce buttons only on the side with the target word
    const canSpeak = Speech.isSupported();
    if (currentMode === 'target-base') {
      elements.pronounceFront.style.display = canSpeak ? '' : 'none';
      elements.pronounceBack.style.display = 'none';
    } else {
      elements.pronounceFront.style.display = 'none';
      elements.pronounceBack.style.display = canSpeak ? '' : 'none';
    }

    if (currentMode === 'target-base') {
      elements.word.textContent = (word.emoji ? word.emoji + ' ' : '') + word.target;
      elements.hint.textContent = word.pos;
      elements.answer.textContent = word.base;
      elements.pos.textContent = '';
      elements.extra.textContent = word.target;
    } else if (currentMode === 'base-target') {
      elements.word.textContent = word.base;
      elements.hint.textContent = word.pos;
      elements.answer.textContent = (word.emoji ? word.emoji + ' ' : '') + word.target;
      elements.pos.textContent = word.pos;
      elements.extra.textContent = '';
    } else if (currentMode === 'img-target') {
      const lang = Lang.getCurrent();
      elements.word.textContent = '';
      elements.hint.textContent = `Guess the ${lang.name} word`;

      const img = await Images.fetchImage(word);
      if (img.url) {
        elements.image.style.display = 'block';
        elements.image.style.backgroundImage = `url(${img.url})`;
        elements.word.textContent = img.emoji || '';
      } else {
        // Emoji fallback — show the word-specific emoji large
        elements.image.style.display = 'none';
        elements.word.textContent = img.emoji || '🖼️';
        elements.word.style.fontSize = '4rem';
      }

      elements.answer.textContent = word.target;
      elements.pos.textContent = word.pos;
      elements.extra.textContent = word.base;
    }
  }

  function flip() {
    if (isFlipped) {
      isFlipped = false;
      elements.card.classList.remove('flipped');
      elements.actions.style.display = 'none';
    } else {
      isFlipped = true;
      elements.card.classList.add('flipped');
      elements.actions.style.display = 'grid';
    }
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
      target: word.target,
      base: word.base,
      correct
    });

    // "Don't Know" — re-queue the word later in this session
    if (quality === 0) {
      currentQueue.push(word);
    }

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
        <span>${w.target} — ${w.base}</span>
        <span class="${w.correct ? 'correct' : 'incorrect'}">${w.correct ? '✓' : '✗'}</span>
      </div>
    `).join('');

    // Show/hide "Learn More" button based on available words
    const learnMoreBtn = document.getElementById('btn-learn-more');
    const available = SRS.getAvailableNewCount(WORDS);
    if (available > 0) {
      learnMoreBtn.disabled = false;
      const count = Math.min(5, available);
      learnMoreBtn.textContent = `📚 Learn ${count} More Word${count !== 1 ? 's' : ''}`;
    } else {
      learnMoreBtn.disabled = true;
      learnMoreBtn.textContent = '📚 All Words Learned!';
    }

    App.showView('summary');
  }

  function pronounceCurrent() {
    if (currentIndex >= currentQueue.length) return;
    const word = currentQueue[currentIndex];
    const lang = Lang.getCurrent();
    Speech.speak(word.target, lang.speechCode || lang.code);
  }

  function handleKeyboard(e) {
    if (!document.getElementById('flashcard-view').classList.contains('active')) return;

    if (e.code === 'Space') {
      e.preventDefault();
      flip();
    } else if (e.key === 'p' || e.key === 'P') {
      pronounceCurrent();
    } else if (isFlipped) {
      if (e.key === '1') rate(0);      // Don't Know
      else if (e.key === '2') rate(1);  // Hard
      else if (e.key === '3') rate(3);  // Easy
    }
  }

  return { init, startSession, flip, rate, handleKeyboard };
})();
