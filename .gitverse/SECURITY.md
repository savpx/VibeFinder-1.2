# Security Policy

## Overview

Vibe Finder is a fully static, client-side application. It runs entirely in the
browser and is served as plain assets (`index.html`, `css/`, `js/`, `audio/`) from the
repository root. There is **no backend, no serverless function, and no Telegram bot**
integration — those components have been removed. This narrows the attack surface to the
front end and to any accidental leakage of configuration.

We still take security seriously. Thank you for helping keep Vibe Finder and its users
safe.

## Supported Versions

We provide security fixes for the latest version of the site on the `main` branch.

| Version | Supported |
| ------- | --------- |
| Latest (`main`) | :white_check_mark: |
| Older snapshots | :x: |

## Reporting a Vulnerability

Please report suspected vulnerabilities **privately**. Do **not** open a public issue,
and do **not** disclose the details in public channels before we have had a chance to
respond.

Send your report by email to:

**security@vibefinder.tech**

If possible, please include:

- A clear description of the issue and its potential impact.
- Steps to reproduce, including the affected browser and version.
- Any proof-of-concept, screenshots, or sample input that helps us understand it.
- Your assessment of severity, and whether the issue is already public.

## What We Care About Most

Because this is a static front-end project, the highest-value reports are typically:

- **Exposed configuration or secrets** — for example, credentials, API keys, tokens, or
  private endpoints accidentally committed or referenced in the client bundle. This is our
  top priority.
- **Cross-Site Scripting (XSS)** — untrusted input reaching the DOM without proper
  escaping, including via URL fragments / hash routing.
- **Dependency and supply-chain issues** in any third-party code that ships to the
  browser.
- **Content injection or open-redirect behavior** in shared links.

## Our Process

1. We acknowledge your report as soon as possible.
2. We investigate and confirm the issue, and keep you informed of progress.
3. We prepare and, where relevant, release a fix.
4. With your permission, we are happy to credit you for the disclosure.

We ask that you give us a reasonable window to address the issue before any public
disclosure, and that you avoid privacy violations, data destruction, or disruption to
other users while researching.

Thank you for contributing to the safety of the project. 🌌
