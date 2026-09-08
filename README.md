# Our Story — Cinematic Birthday Website

## 1. Add your photos, videos & music
Drop your own files into the `assets/` folder using these exact names (the site is already wired up to look for them):

```
assets/
├── hero.jpg                (full-screen hero photo)
├── photo1.jpg – photo10.jpg (main gallery + story cards + scrapbook)
├── final1.jpg – final5.jpg  (closing collage)
├── video1.mp4, video2.mp4, video3.mp4
└── romantic-song.mp3
```

Until you add real files, each section shows an elegant dark placeholder instead of a broken image, so the site always looks intentional.

## 2. Edit your names & dates
Open `script.js` and edit the block at the very top marked:

```js
// ===== PERSONAL DETAILS — EDIT HERE =====
const CONFIG = {
  BOYFRIEND_NAME: "...",
  MY_NAME: "...",
  ...
}
```

The same `CONFIG` object holds the timeline entries, photo captions, video captions, scrapbook captions, and "reasons I love you" cards — edit the text directly there.

## 3. Edit the love letter
Open `index.html` and find the section marked:

```html
<!-- ===== LOVE LETTER — EDIT HERE ===== -->
```

Replace the paragraph text with your own words.

## 4. Open it
Just open `index.html` in a browser (or upload the whole folder anywhere that serves static files). No build step, no dependencies — pure HTML/CSS/JS.
