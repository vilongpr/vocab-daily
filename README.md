# 🇩🇪 Deutsch Daily — German Flashcards

Learn the most common German words with spaced repetition flashcards. Built as a static site for GitHub Pages — no backend, no build step.

## Features

- **598 curated German words** — common nouns, verbs, adjectives, and adverbs (no filler words like articles or determiners)
- **3 flashcard modes**:
  - 🇩🇪→🇬🇧 German → English
  - 🇬🇧→🇩🇪 English → German
  - 🖼️→🇩🇪 Image → German (with Unsplash API)
- **Spaced repetition (SM-2)** — words you struggle with come back more often
- **5 new words/day** (configurable) — steady vocabulary growth
- **Progress tracking** — streak, accuracy, words learned
- **Mobile-friendly** — responsive design for daily phone practice
- **Dark/light mode** — easy on the eyes

## Getting Started

1. Clone or fork this repository
2. Enable GitHub Pages (Settings → Pages → Source: `main` branch)
3. Visit `https://<your-username>.github.io/german-flashcards`

### Image Mode (Optional)

To enable image-based flashcards:
1. Get a free API key at [unsplash.com/developers](https://unsplash.com/developers)
2. Enter the key in Settings within the app

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
