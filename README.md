# Personal website

A plain HTML/CSS site. There is no build step, framework, or install.

```
index.html          About: bio, research summary, current interests, highlights
research.html       Selected research projects
publications.html   Paper list, grouped by year
education.html      Education, industry collaboration, skills
assets/style.css    All styling (colors are at the top; dark mode is automatic)
assets/Jianyou_Wang_CV.pdf   Linked from the "CV" tab
assets/photo.jpg    Headshot shown on the About page
```

## Preview locally

```sh
cd ~/Desktop/andre-personal-website
python3 -m http.server 8000
# open http://localhost:8000
```

## Common edits

- **Add a paper:** in `publications.html`, copy one `<li class="pub">…</li>` block and edit it.
- **Add a news item:** in `index.html`, add a line under "Highlights".
- **Add a tab:** copy a page (e.g. `education.html`), change its content, and add a
  `<li><a href="newpage.html">…</a></li>` to the `<nav>` in *every* page.
- **Update the CV:** replace `assets/Jianyou_Wang_CV.pdf` (keep the same filename).

## Publishing

Live at https://wjyandre.github.io (GitHub Pages, repo `wjyandre/wjyandre.github.io`, branch `master`).
After editing, publish with:

```sh
git add -A && git commit -m "Update site" && git push
```

The site refreshes within a minute or two.
