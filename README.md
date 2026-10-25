# Portfolio

Personal portfolio for Vidya Sagar C, built with React, TypeScript and Vite.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

## Edit content

All content lives in `src/data/portfolio.ts`. Any field left as `""` or `[]`
is hidden, and a section with nothing in it disappears from the page and nav.

- **Hero animation:** each `hero.fields[].span` must appear verbatim, in order,
  in `hero.source`. A span that isn't found is skipped (with a console warning in dev).
- **Résumé:** put the PDF in `public/` and set `resume: "resume.pdf"`.
- **Title, meta description, favicon:** edit `index.html`.

## Deploy

`dist/` is a static site with relative asset paths, so it works on GitHub Pages
(including a `/repo-name/` sub-path), Netlify, Vercel or any static host.
