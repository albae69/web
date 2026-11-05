// Regenerates public/sitemap.xml.
// Usage: SITE_URL=https://example.com bun scripts/generate-sitemap.ts
import { writeFileSync } from 'node:fs'
import { posts } from '../src/data/writing'

const SITE_URL = process.env.SITE_URL ?? 'https://albae69.github.io'
const lastmod = new Date().toISOString().slice(0, 10)

const staticRoutes = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/writing', changefreq: 'weekly', priority: '0.9' },
  { loc: '/projects', changefreq: 'weekly', priority: '0.9' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/stack', changefreq: 'monthly', priority: '0.7' },
  { loc: '/til', changefreq: 'weekly', priority: '0.7' },
  { loc: '/now', changefreq: 'weekly', priority: '0.7' },
  { loc: '/resume', changefreq: 'monthly', priority: '0.8' },
]

const postRoutes = posts.map((post) => ({
  loc: `/writing/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
}))

const routes = [...staticRoutes, ...postRoutes]

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (route) =>
        `  <url><loc>${SITE_URL}${route.loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`,
    )
    .join('\n') +
  `\n</urlset>\n`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml written with ${routes.length} urls for ${SITE_URL}`)
