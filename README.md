# giodini121.github.io

Personal academic website (English), hosted on [GitHub Pages](https://pages.github.com/).

**Target URL:** https://giodini121.github.io/

## Why the site is not at the root URL

GitHub only publishes **your main site** at `https://USERNAME.github.io/` when the repository name is **exactly** `USERNAME.github.io`.

Your GitHub username is **`giodini121`**, but the repository is still named **`giorgiodini.github.io`**. That name does **not** match, so **`https://giodini121.github.io/` stays empty (404)**.

### Fix (do this on GitHub once)

1. Open **[github.com/giodini121/giorgiodini.github.io/settings](https://github.com/giodini121/giorgiodini.github.io/settings)**.
2. Under **Repository name**, change **`giorgiodini.github.io`** → **`giodini121.github.io`** and click **Rename**.
3. On your PC, point Git at the new URL:

```bash
git remote set-url origin https://github.com/giodini121/giodini121.github.io.git
git push
```

4. **Settings → Pages**: source **Deploy from a branch**, branch **`main`**, folder **`/ (root)`** (if it isn’t already).
5. Wait **1–5 minutes**, then open **https://giodini121.github.io/** again.

Until you rename, a **project** site would only appear under  
`https://giodini121.github.io/giorgiodini.github.io/` (subfolder), not at the domain root.

---

## Local setup

1. **`personal/profile.png`** — sidebar photo (included in the repo).
2. **`personal/academic_cv.pdf`** — CV PDF (included; replace this file when you update your CV).

Clone / remote after rename:

```bash
git clone https://github.com/giodini121/giodini121.github.io.git
```

## Edit content

- **Home:** `index.html` — bio and news section.
- **Research:** `research.html` — papers and links.
- **Teaching:** `teaching.html` — TA activities.
- **CV:** `cv.html` — layout; PDF path is `personal/academic_cv.pdf`.
- **Outside academia:** `outside.html` — hobbies and personal interests.

Theme colors: primary `#104e99`, accent `#f8bf3e`. Day/night toggle uses `scripts/theme.js` and CSS variables in `stylesheets/styles.css`.
