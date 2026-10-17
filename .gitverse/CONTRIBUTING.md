# Contributing to Vibe Finder

First of all, thank you for taking the time to contribute. Vibe Finder is a small,
atmospheric project, and every thoughtful contribution helps it stay calm, warm, and
pleasant to use.

## Project overview

Vibe Finder is a **pure static Single Page Application (SPA)** built with:

- **HTML** — a single [`index.html`](../index.html) entry point.
- **CSS** — hand-written styles in [`css/style.css`](../css/style.css).
- **JavaScript** — native **ES modules** in the [`js/`](../js) folder.

There are **no bundlers and no frameworks**. We deliberately avoid Webpack, Vite, Rollup,
React, Vue, or any other build tooling. Files are served exactly as they are authored, so
please keep the codebase runnable directly from the repository root.

Local preview:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## How to contribute — workflow

1. **Open an issue first.**
   Describe the bug, the idea, or the improvement you have in mind. For bugs, include
   steps to reproduce, the browser you use, and a screenshot if it helps. Discussing the
   change before writing code keeps everyone aligned.

2. **Create a branch.**
   Use a short, descriptive name, for example:
   - `feature/calm-transition`
   - `fix/survey-back-button`
   - `docs/contributing-guide`

3. **Make your change in the spirit of the design system.**
   - Match the existing **Apple Human Interface Guidelines (HIG) design tokens** already
     defined in [`css/style.css`](../css/style.css) — use the CSS custom properties such
     as `--label-primary`, `--material-bg`, `--radius-container`, `--radius-control`,
     `--type-body-size`, and `--ease-spring` instead of hard-coded values.
   - Keep animations gentle and atmospheric (respect `prefers-reduced-motion`).
   - Preserve accessibility: semantic HTML, keyboard navigation, ARIA labels, and
     sufficient contrast.

4. **Test locally.**
   Run the local server and walk through the full flow: home → survey → results screen.
   Confirm that the UI click sounds and the ASMR keyboard sounds continue to work, and
   that the browser console is free of errors.

5. **Submit a Merge Request.**
   Push your branch and open a **Merge Request** against the main branch. In the
   description, reference the related issue, explain what you changed and why, and note
   anything reviewers should look at closely. Keep the diff focused — one logical change
   per request.

## Coding guidelines

- Write clear, readable code with meaningful names.
- Prefer small, focused functions and native browser APIs.
- Keep comments purposeful; explain *why*, not *what*.
- Do not introduce new dependencies, build steps, or frameworks.
- Keep the localization dictionary structure intact (`ru`, `en`, `zh`, `ar` + RTL rules)
  in [`js/i18n/index.js`](../js/i18n/index.js).

## Commit messages

Write concise, imperative commit messages, for example:

- `fix: correct progress bar width on mobile`
- `feat: add reduced-motion fallback for particles`
- `docs: clarify branch naming in contributing guide`

## Code of Conduct

By participating in this project, you agree to abide by our
[Code of Conduct](CODE_OF_CONDUCT.md). Be kind, be patient, and help keep this a
welcoming space.

Thank you for helping Vibe Finder feel a little more like home. 🌌
