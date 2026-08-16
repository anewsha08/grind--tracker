# Grind Control

Your 14-week DSA · Qualcomm · GRE tracker, focus timer, and dynamic skill roadmap
generator — as a real Next.js app you can install on your phone.

- **14-Week Combined Grind Schedule** — every day of the Striver/NeetCode plan
  (weeks 1–6) plus phase milestones for Qualcomm and GRE across all 14 weeks,
  all checkable.
- **Focus timer** — Stopwatch, Focus 25/5, or a Custom countdown, with a sound
  cue and auto-logging when a session finishes.
- **Dynamic Skill Roadmap Generator** — add any app or skill you want to build,
  tag it by complexity, and get a 4-level roadmap (Foundations → Intermediate →
  Advanced → Mastery).
- **Saves on your phone** — all data lives in your browser's `localStorage`,
  no account or database needed.
- **Installable (PWA)** — add it to your home screen and it opens like a
  native app.

---

## Deploy it — no coding required

You need a free [GitHub](https://github.com/signup) account and a free
[Vercel](https://vercel.com/signup) account (you can sign up for Vercel with
your GitHub account in one click).

### Step 1 — Put the code on GitHub
1. Unzip the project folder you downloaded.
2. Go to [github.com/new](https://github.com/new), name the repository
   `grind-control` (or anything you like), and click **Create repository**.
3. On the next page, click **uploading an existing file**, then drag the
   *contents* of the unzipped folder into the browser window.
4. Click **Commit changes**.

### Step 2 — Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Find the `grind-control` repository in the list and click **Import**.
3. Leave every setting as-is (Vercel auto-detects Next.js) and click **Deploy**.
4. Wait about a minute. You'll get a live link like
   `https://grind-control-yourname.vercel.app`.

That's it — the app is live and will save your progress every time you use it.

### Already have the repo on GitHub? One-click redeploy button
Once your code is on GitHub, you can put a button like this in your own
README to redeploy anytime (replace the URL with your repo's URL):

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/grind-control)
```

---

## Add it to your phone's home screen

**iPhone (Safari):**
1. Open your `vercel.app` link in Safari.
2. Tap the **Share** icon (square with an arrow) at the bottom.
3. Scroll down and tap **Add to Home Screen** → **Add**.

**Android (Chrome):**
1. Open your `vercel.app` link in Chrome.
2. Tap the **⋮** menu (top right).
3. Tap **Install app** (or **Add to Home screen**) → **Install**.

It'll now open full-screen, no browser bar, just like any other app on your
phone.

---

## Running it on your own computer (optional)

If you want to preview or edit the app before deploying:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To build the production version yourself:

```bash
npm run build
npm start
```

---

## Project structure

```
app/                 Next.js App Router pages, layout, and global styles
components/          React components (timer, checklists, roadmap, etc.)
lib/                 Shared data (the 14-week schedule) and storage helpers
public/manifest.json PWA manifest (name, icons, theme color)
public/sw.js         Service worker for offline app-shell caching
public/icons/        App icons (192px and 512px)
```

All progress data is stored under the `grind-control-data-v1` key in your
browser's `localStorage` — it stays on your device and isn't sent anywhere.
Clearing your browser data (or using a different browser/device) will start
you fresh, since there's no server or account behind it.
