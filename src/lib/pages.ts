import { posts } from '../data/writing'

export type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
}

// Single source of truth for per-route metadata.
// Used by the routes (via usePageMeta) and by scripts/prerender.ts,
// so the static HTML and the client-rendered tags stay in sync.
export const pages = {
  home: {
    title: 'Ahmad Albaihaqi | Software Engineer',
    description:
      'Ahmad Albaihaqi is a software engineer in Medan, Indonesia, building web, mobile, and cloud products.',
    path: '/',
  },
  about: {
    title: 'About',
    description:
      'About Ahmad Albaihaqi — Software Engineer with 5+ years across web, mobile, backend and cloud.',
    path: '/about',
  },
  projects: {
    title: 'Projects',
    description:
      'Selected projects by Ahmad Albaihaqi across healthcare, fintech, and logistics.',
    path: '/projects',
  },
  writing: {
    title: 'Writing',
    description:
      'Essays by Ahmad Albaihaqi on frontend, backend, and shipping software.',
    path: '/writing',
  },
  stack: {
    title: 'Stack',
    description: 'Hardware, software, and tools Ahmad Albaihaqi uses every day.',
    path: '/stack',
  },
  til: {
    title: 'TIL',
    description: 'Short today-I-learned notes from Ahmad Albaihaqi.',
    path: '/til',
  },
  now: {
    title: 'Now',
    description: 'What Ahmad Albaihaqi is up to now.',
    path: '/now',
  },
  resume: {
    title: 'Resume',
    description:
      'Resume of Ahmad Albaihaqi — Software Engineer with 5+ years across web, mobile, backend and cloud.',
    path: '/resume',
  },
} as const satisfies Record<string, PageMeta>

export function getStaticPages(): PageMeta[] {
  return [
    ...Object.values(pages),
    ...posts.map((post) => ({
      title: post.title,
      description: post.summary,
      path: `/writing/${post.slug}`,
    })),
  ]
}
