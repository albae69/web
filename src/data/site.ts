export const site = {
  name: 'Ahmad Albaihaqi',
  avatar: '/profile-240.webp',
  location: 'Medan, Indonesia',
  intro:
    "I'm a software engineer in Medan, Indonesia, building web, mobile, and cloud products.",
  email: 'ahmadalbaihaqi69@gmail.com',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/albae69',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/albae69',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:ahmadalbaihaqi69@gmail.com',
      icon: 'mail',
    },
  ],
} as const

export type SocialIcon = (typeof site.socials)[number]['icon']

export const nav = [
  { title: 'Writing', href: '/writing' },
  { title: 'Projects', href: '/projects' },
  { title: 'About', href: '/about' },
  { title: 'Stack', href: '/stack' },
  { title: 'TIL', href: '/til' },
  { title: 'Now', href: '/now' },
  { title: 'Résumé', href: '/resume' },
] as const
