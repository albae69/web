// Regenerates public/sitemap.xml from src/posts.
// Usage: SITE_URL=https://example.com bun scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs'

const SITE_URL = process.env.SITE_URL ?? 'https://albae69.github.io'

// Keep in sync with src/posts/index.ts urls
const posts = [
  'standout_ai_era',
  'frontend_dev_dead',
  'future_coding_ai',
  'interactive_features',
  'revamp',
  'my_stack',
  'pre_ai_farm',
  'git_account_consolidation',
  'hello_world',
  'summary',
]

const staticRoutes = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/projects', changefreq: 'weekly', priority: '0.9' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.9' },
]

const urls = [
  ...staticRoutes,
  ...posts.map((url) => ({
    loc: `/blog/${url}`,
    changefreq: 'yearly',
    priority: '0.6',
  })),
]

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url><loc>${SITE_URL}${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
    )
    .join('\n') +
  `\n</urlset>\n`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml written with ${urls.length} urls for ${SITE_URL}`)
