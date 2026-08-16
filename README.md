# Work Focus Tracker

A sleek, mobile-first web app for tracking personal daily learning progress, running focused work sessions with a Pomodoro-style timer, and building structured skill roadmaps.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)

---

## Overview

Work Focus Tracker is a personal productivity dashboard for anyone building a habit around deep, tracked work — daily schedules, timed focus sessions, and long-term skill growth, all in one dark, distraction-free interface that installs like a native app on your phone.

## Features

- **Daily Schedule & Consistency Tracking**
  Progress rings, task checklists, and streak tracking to keep daily consistency visible at a glance.

- **Interactive Focus Engine**
  A built-in timer with Pomodoro (25/5), fully custom countdowns, and stopwatch modes — sessions auto-log to your daily totals when they finish, with an audio cue so you never lose track.

- **Dynamic Skill Roadmap Engine**
  Add any skill you're building and get a structured 4-tier roadmap (Foundations → Intermediate → Advanced → Mastery) with checkable tasks, curated resources, and milestone checkpoints — spanning domains like design, engineering, and finance.

- **Local Storage & Offline Support**
  All progress is saved directly on-device via `localStorage` — no account, no server. Installable as a PWA for a full home-screen app experience on iOS and Android.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| UI Library | [React](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [Lucide Icons](https://lucide.dev/) |
| Persistence | Browser `localStorage` |
| Deployment | [Vercel](https://vercel.com/) |

## Quick Setup

```bash
# clone the repository
git clone https://github.com/YOUR-USERNAME/work-focus-tracker.git
cd work-focus-tracker

# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Deploy to Vercel

The fastest path to a live, installable app:

1. Push this repository to your own GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import the repository — Vercel auto-detects the Next.js framework, no config needed.
4. Click **Deploy**.

Or deploy straight from your terminal:

```bash
npm install -g vercel
vercel
```

Once live, open the deployed URL on your phone and use **Add to Home Screen** (iOS Safari) or **Install app** (Android Chrome) for the full app experience.

## Project Structure

```
app/          Next.js App Router pages, layout, and global styles
components/   UI components (timer, checklists, roadmap engine, etc.)
lib/          Shared data and localStorage helpers
public/       PWA manifest, service worker, and icons
```

## License

MIT — free to use, modify, and adapt for your own workflow.
