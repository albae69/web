export const SITE_URL = 'https://albae69.github.io'

export const SITE_NAME = 'Ahmad Albaihaqi'
export const SITE_DESCRIPTION =
  "Hi I'm Ahmad Albaihaqi. I'm a software engineer"
export const OG_IMAGE = `${SITE_URL}/og-image.svg`

export type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function pageMeta(meta: PageMeta) {
  return {
    ...meta,
    url: absoluteUrl(meta.path),
    image: meta.image ?? OG_IMAGE,
  }
}
