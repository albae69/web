// Regenerates public/sitemap.xml.
// Usage: SITE_URL=https://example.com bun scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs'

const SITE_URL = process.env.SITE_URL ?? 'https://albae69.github.io'

const staticRoutes = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/projects', changefreq: 'weekly', priority: '0.9' },
  { loc: '/now', changefreq: 'weekly', priority: '0.7' },
  { loc: '/resume', changefreq: 'monthly', priority: '0.8' },
]

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  staticRoutes
    .map(
      (u) =>
        `  <url><loc>${SITE_URL}${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
    )
    .join('\n') +
  `\n</urlset>\n`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml written with ${staticRoutes.length} urls for ${SITE_URL}`)
