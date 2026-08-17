# Penny-chan!

An interactive, anime-style birthday web experience built with **SvelteKit** — featuring
a cinematic loading sequence, a fully-voiced visual-novel style dialogue with player
choices, and a Live2D video scene of Alice herself.

---

## ✨ Features

- **💬 Interactive dialogue** — a visual-novel style conversation with choice prompts
  and an auto-play mode, written in Filipino (Tagalog).
- **🔊 Voiced scenes** — every dialogue line has its own audio, layered over a looping
  background music track.
- **🎬 Cinematic intro & loop** — Tendou Arisu Live2D video that plays an intro and
  seamlessly loops.
- **✨ Particle loading screen** — interactive tsParticles background with rotating
  quotes and a live asset progress bar.
- **⚡ Smart preloading** — assets are preloaded, cached, and skipped on repeat visits
  for instant start.
- **📱 Landscape-first** — optimised for landscape screens, with a gentle prompt to
  rotate your device.

---

## 🧰 Tech Stack

| | |
|---|---|
| **Framework** | [SvelteKit](https://kit.svelte.dev/) 5 (Svelte 5 runes) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 |
| **Particles** | [tsParticles](https://particles.js.org/) |
| **Motion** | Svelte transitions, tweens & easing |
| **Deployment** | Vercel (`@sveltejs/adapter-vercel`) |

---

## 🚀 Getting Started

> Package manager is your choice — `bun` or `npm` both work.

```bash
# install dependencies
npm install          # or bun install

# start the dev server
npm run dev

# production build
npm run build
npm run preview
```

Open http://localhost:5173 and enjoy. 🎉

---

## 🛠️ Customizing

Everything that makes the site personal lives in a few easy-to-edit places:

| What | Where |
|---|---|
| **Dialogue lines** (Filipino) | `src/lib/constants.ts` → `DIALOGUES` |
| **Loading-screen quotes** | `src/lib/constants.ts` → `LOADING_QUOTES` |
| **Birthday / age** | `src/lib/components/ui/dialogue/dialogue-text.svelte` |
| **Page title & meta** | `src/routes/+layout.svelte` |
| **Voiced dialogue audio** | `static/audio/1.wav … 10.wav` |
| **Intro / loop video & BGM** | `static/video/`, `static/audio/` |
| **Particle config** | `src/lib/constants.ts` → `PARTICLES_CONFIG` |

### ✍️ Writing your own dialogue

`DIALOGUES` is an array of scenes. Each scene has:

- `text` — the subtitle shown on screen (supports the `{age}` placeholder).
- `audio` — the voice line played for this scene.
- `playAfter` — delay (ms) before the next scene can start.
- `choices` — optional player replies. A scene **must** have a choice to stop
  auto-play and wait for the player to respond.

> ⚠️ Voice lines are recorded audio files. After editing the `text`, re-record the
> matching `static/audio/*.wav` so the speech matches the subtitles.

---

## 📁 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte        # page shell, meta tags
│   └── +page.svelte          # composes loading + dialogue UI
└── lib/
    ├── components/ui/
    │   ├── dialogue/         # dialogue provider, scenes, choices, auto-mode
    │   └── loading/          # particles, quotes, progress bar, continue btn
    ├── hooks/                # engine, assets loader, quote manager
    └── constants.ts          # dialogues, quotes, assets, particles config
```

---

## ☁️ Deployment

The project ships with the **Vercel adapter**:

```bash
npm run build
```

Then either connect the repo on [Vercel](https://vercel.com) or push and let your
configured CI deploy it automatically.

---

## 🙏 Credits

- **Penny** — the inspiration. Happy birthday from across the ocean. 🌷
- **Tendou Arisu** — the lovable speaker, from *Blue Archive* (image is Live2D fan art).
- **Original project** — this site is an adapted fork of the **hbd-kizu** project by
  Kiizuha (rushkii). Thanks for the beautiful foundation!

---

Made with 💛, from one friend to another.
