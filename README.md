# 📚 Vocab Daily — Language Flashcards

Learn vocabulary in any language with spaced repetition flashcards. Built as a static site for GitHub Pages — no backend, no build step.

## Features

- **Language-agnostic** — ships with German, easily extendable to Spanish, French, etc.
- **598 curated German words** — nouns, verbs, adjectives, and adverbs (no filler words)
- **3 flashcard modes**:
  - Target → Base (e.g., German → English)
  - Base → Target (e.g., English → German)
  - Image → Target (see an image, guess the word)
- **Spaced repetition (SM-2)** — words you struggle with come back more often
- **5 new words/day** (configurable) — steady vocabulary growth
- **Progress tracking** — streak, accuracy, words learned
- **Mobile-friendly** — responsive design for daily phone practice
- **Dark/light mode** — easy on the eyes

## Getting Started

1. Clone or fork this repository
2. Enable GitHub Pages (Settings → Pages → Source: `main` branch)
3. Visit `https://<your-username>.github.io/flashcards`

### Adding a New Language

1. Create a word list file in `data/` (e.g., `data/es.js`) following the same format as `data/de.js`
   - Each word needs: `id`, `target` (the word to learn), `base` (translation), `pos`, `imageSearch`
2. Register the language in `js/lang.js` under the `LANGUAGES` object
3. Add a `<script src="data/es.js">` tag in `index.html`

### Image Mode (Optional)

Get a free API key at [unsplash.com/developers](https://unsplash.com/developers) and enter it in Settings.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Flip card |
| `1` | Don't Know |
| `2` | Hard |
| `3` | Good |
| `4` | Easy |

## Tech Stack

- Vanilla HTML/CSS/JavaScript (zero dependencies)
- SM-2 spaced repetition algorithm
- localStorage for progress persistence
- Unsplash API for image flashcards
- GitHub Pages for hosting

## License

MIT
