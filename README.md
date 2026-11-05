# albae69.github.io

Personal portfolio of **Ahmad Albaihaqi** — software engineer working across web, mobile, backend, and cloud. Live at [https://albae69.github.io](https://albae69.github.io).

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite 6](https://vite.dev) with [TanStack Router](https://tanstack.com/router) file-based routing
- [Tailwind CSS 4](https://tailwindcss.com) (used through the Vite plugin)
- Static hosting on GitHub Pages

## Development

This repo uses [Bun](https://bun.sh) as its package manager (`bun.lock` is the only lockfile).

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite dev server |
| `bun run build` | Type-check, build to `dist/`, then prerender each route |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run ESLint |
| `bun run prerender` | Re-run the static HTML/meta generation on an existing `dist/` |
| `bun run sitemap` | Regenerate `public/sitemap.xml` (requires `SITE_URL` to override the default) |

## Structure

```
src/
  routes/          Home, about, projects, writing (+ /writing/$slug), stack, til, now, resume
  components/      Header, Footer, Section, Icons, ScrollToTop
  hooks/           usePageMeta (per-route SEO tags)
  lib/pages.ts     Single source of truth for route titles, descriptions, paths
  lib/seo.ts       Canonical URL and Open Graph defaults
  data/site.ts     Name, intro, avatar, social links, navigation
  data/writing.ts  Essays shown on / and /writing
  data/projects.ts Projects shown on / and /projects
  data/stack.ts    Groups shown on /stack
  data/til.ts      Notes shown on /til
  data/now.ts      Devices and games shown on /now
  index.css        Theme tokens, layout, and component styles
public/            Static assets, sitemap, robots.txt, 404 redirect
scripts/           Sitemap generator and post-build prerender
```

Most content lives in `src/data/`; the route files handle layout and filtering. To add an essay, add an entry to `src/data/writing.ts` and run `bun run sitemap`. `cv.md` remains the long-form source CV used by the résumé page.

## Deploy

Deployment is manual: this repo is the source, and the built output is copied into a separate GitHub Pages repository.

```bash
bun run build
# then copy the contents of dist/ into the Pages repo and push from there
```

Details:

- `scripts/prerender.ts` runs as part of `bun run build`. It writes a static HTML file per route — including each writing post — with route-specific `<title>`, description, canonical, and Open Graph tags. Social crawlers that do not run JavaScript now get the right preview. Both `about.html` and `about/index.html` are emitted so clean and trailing-slash URLs work on GitHub Pages.
- Copy `dist/404.html` as well; it redirects unknown paths back to `index.html` with the original path preserved.
- If underscore-prefixed files or directories are ever added to the output, include a `.nojekyll` file in the Pages repo.
- After changing routes, regenerate the sitemap with `bun run sitemap` and commit `public/sitemap.xml` before building.

## Notes

- The theme follows the operating system (`prefers-color-scheme`) with semantic CSS variables; there is no manual toggle.
- Analytics (Firebase + Google Analytics) load lazily on the first user interaction, keeping them off the critical path.
- Print styles for `/resume` hide the site chrome (`.site-header`, `.site-footer`) and render an ATS-friendly single-column sheet.
