// Generates static HTML for each route after `vite build`.
//
// The app is a client-side SPA, so without this step every route would share
// the metadata from index.html. Social crawlers (WhatsApp, LinkedIn, X) do not
// execute JavaScript, so they would always show the home page preview.
//
// For each route we emit:
//   dist/about.html          -> served for /about
//   dist/about/index.html    -> served for /about/
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getStaticPages, type PageMeta } from '../src/lib/pages'
import { OG_IMAGE, SITE_NAME, absoluteUrl } from '../src/lib/seo'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceOrThrow(html: string, pattern: RegExp, replacement: string) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: pattern not found: ${pattern}`)
  }
  return html.replace(pattern, replacement)
}

function setMeta(
  html: string,
  attr: 'name' | 'property',
  key: string,
  content: string,
) {
  const pattern = new RegExp(
    `<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>`,
  )
  return replaceOrThrow(
    html,
    pattern,
    `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`,
  )
}

function setCanonical(html: string, url: string) {
  return replaceOrThrow(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
  )
}

const routes: PageMeta[] = getStaticPages()

for (const page of routes) {
  const fullTitle =
    page.path === '/' ? page.title : `${page.title} | ${SITE_NAME}`
  const url = absoluteUrl(page.path)
  const image = page.image ? absoluteUrl(page.image) : OG_IMAGE

  let html = template
  html = replaceOrThrow(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(fullTitle)}</title>`,
  )
  html = setMeta(html, 'name', 'description', page.description)
  html = setMeta(html, 'property', 'og:title', fullTitle)
  html = setMeta(html, 'property', 'og:description', page.description)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'property', 'og:image', image)
  html = setMeta(html, 'name', 'twitter:title', fullTitle)
  html = setMeta(html, 'name', 'twitter:description', page.description)
  html = setMeta(html, 'name', 'twitter:image', image)
  html = setCanonical(html, url)

  if (page.path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    continue
  }

  const route = page.path.replace(/^\//, '')
  writeFileSync(join(dist, `${route}.html`), html)
  mkdirSync(join(dist, route), { recursive: true })
  writeFileSync(join(dist, route, 'index.html'), html)
}

console.log(`prerendered ${routes.length} routes`)
