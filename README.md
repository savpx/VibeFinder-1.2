# Vibe Finder

> Find your vibe.

**Vibe Finder** is a small, atmospheric website that helps you name how you feel. Answer ten short questions, and it picks a vibe that matches your mood — then opens a themed space with a quote, an ambient soundscape, and a little game made just for that feeling.

**Live site:** [vibefinder.tech](https://vibefinder.tech)

---

## What it does

1. **Answer ten quick questions** about your mood, energy, pace, and what you'd like to do right now.
2. **Get your vibe** — the site matches your answers to one of fourteen atmospheres.
3. **Step into it** — each vibe has its own colors, a description, a rotating quote, and a mini-game.
4. **Share it** — each result has a link, so you can send your vibe of the day to a friend.

There's no account, no sign-up, and nothing to install. It just works in your browser.

---

## The vibes

Fourteen moods, each with its own look and feel:

| Vibe | Feeling |
| --- | --- |
| **Quiet Cosmos** | Deep space, soft stars, room to slow down |
| **A Little Sunshine** | Warm light and a gentle boost of energy |
| **Neon After Dark** | City lights, midnight rhythm, a little magic |
| **Forest Pause** | Fresh green air and nature's quiet pace |
| **Night Walk** | A quiet city, glowing windows, neon signs |
| **Rainy Reverie** | Raindrops on glass and unhurried thoughts |
| **Still Water** | Clean lines, flowing water, a slow rhythm |
| **Bright Little Chaos** | Unexpected turns and playful energy |
| **Sunny Joy** | A light mood and small good things |
| **The Secret Room** | Soft shadows, small mysteries, curiosity |
| **Creative Studio** | Colors, shapes, and ideas to play with |
| **Forest Wind** | Green paths and living quiet |
| **Retro Arcade** | Pixel lights and a familiar game rhythm |
| **Home Comfort** | Warm light, soft things, a space that's yours |

---

## Mini-games

Each vibe comes with a different small game — calm, playful, or curious, but never stressful:

- **Create a Constellation** — connect stars in order
- **Gather the Sunshine** — catch little sparks of light
- **Neon Rhythm** — catch a moving pulse of light
- **Catch the Leaves** / **Catch a Leaf** — catch drifting leaves
- **Night Walk** — explore a quiet night street and find three traces of light
- **Catch the Raindrops** — touch raindrops on the glass
- **Breathing Water** — press and hold to let a wave breathe
- **Room in Motion** — tap things in the room and send them flying
- **Pop the Balloons** — pop balloons and build a combo
- **Quiet Search** — sweep a light and find hidden stars
- **Paint by Numbers** — color a sunset landscape
- **Retro Arcade** — a tiny pixel arcade round
- **Cozy Room** — arrange a cozy room your way
- **ASMR Keyboard Walk** — step across a keyboard that plays soft sounds

---

## Languages

The interface is available in four languages, with Russian as the default:

- 🇬🇧 English
- 🇷🇺 Русский
- 🇨🇳 简体中文
- 🇸🇦 العربية (with right-to-left layout)

Switch the language anytime from the button in the top-left corner.

---

## Sound

Vibe Finder has gentle audio — soft interface clicks, a transition sound, and a set of ASMR key sounds in the keyboard game. Sound starts after your first interaction (that's a browser rule), and you can keep your device muted if you prefer a silent visit.

---

## Accessibility & comfort

- Works with keyboard navigation.
- Respects your system's **"reduce motion"** setting.
- Readable, high-contrast text.
- Designed to work on phones, tablets, and desktops.

---

## Running it locally

The site is fully static, but it uses modern JavaScript modules, so it needs a simple local server (opening the file directly won't work).

```bash
cd VibeFinder
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

Any static server works equally well (for example `npx serve VibeFinder`).

---

## Built with

- **HTML**, **CSS**, and **JavaScript** (native ES modules)
- No frameworks, no build tools, no dependencies
- Pure static site, host-agnostic (served from the repository root)

---

## Feedback

Found a bug, or have an idea for a new vibe? Open an issue on the project repository.

---

**Vibe Finder. Find your vibe.** 🌌
