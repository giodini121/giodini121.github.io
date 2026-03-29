# giorgiodini.github.io

Personal academic website (English), hosted on [GitHub Pages](https://pages.github.com/).

**Live site:** https://giorgiodini.github.io/

## Local setup

1. **`personal/profile.png`** — sidebar photo (included in the repo).
2. **`personal/academic_cv.pdf`** — CV PDF (included; replace this file when you update your CV).

Then open `index.html` in a browser or push this folder to GitHub:

```bash
cd giorgiodini.github.io
git remote add origin https://github.com/giorgiodini/giorgiodini.github.io.git
git push -u origin main
```

In the repository on GitHub: **Settings → Pages** → deploy from branch **`main`**, folder **`/ (root)`**.

## Edit content

- **Home:** `index.html` — bio and news section.
- **Research:** `research.html` — papers and links.
- **Teaching:** `teaching.html` — TA activities.
- **CV:** `cv.html` — layout; PDF path is `personal/academic_cv.pdf`.
- **Outside academia:** `outside.html` — hobbies and personal interests.

Theme colors: primary `#104e99`, accent `#f8bf3e`. Day/night toggle uses `scripts/theme.js` and CSS variables in `stylesheets/styles.css`.
