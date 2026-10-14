import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'

export const Route = createFileRoute({
  component: Projects,
})

type Category = 'all' | 'mobile' | 'web' | 'backend' | 'cloud'

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'backend', label: 'Backend' },
  { id: 'cloud', label: 'Cloud' },
]

interface Project {
  name: string
  url: string
  tech: string[]
  points: string[]
  category: Category[]
  metrics: { label: string; value: string | number }[]
}

const projects: Project[] = [
  {
    name: 'EMR System — Hospital Information',
    url: '#',
    tech: ['Flutter', 'React', 'Go', 'MySQL'],
    points: [
      'EMR for 50+ medical staff across multiple hospitals',
      'BPJS & Insurance reports — from 2 days to <2 hours',
    ],
    category: ['mobile', 'web', 'backend'],
    metrics: [
      { label: 'Users', value: '50+' },
      { label: 'Daily Tx', value: '1,000+' },
    ],
  },
  {
    name: 'Auto Invoice Sync — Australian Client',
    url: '#',
    tech: ['React', 'Go', 'Docker', 'AWS Textract', 'S3', 'AppRunner'],
    points: ['Invoice extraction pipeline — 95% accuracy, 80% less manual entry'],
    category: ['web', 'cloud'],
    metrics: [{ label: 'Accuracy', value: '95%' }],
  },
  {
    name: 'Shieldtag — Company Landing Page',
    url: 'https://shieldtag.co',
    tech: ['Next.js', 'Strapi'],
    points: ['WIX → Next.js — 40% LCP, +25% organic traffic, 90+ Lighthouse'],
    category: ['web'],
    metrics: [{ label: 'Lighthouse', value: '90+' }],
  },
  {
    name: 'Hokben Mobile Apps',
    url: 'https://play.google.com/store/apps/details?id=id.co.hokben.revamp&hl=id&pli=1',
    tech: ['React Native'],
    points: ['Rating 3.8 → 4.6, +35% transactions via QRIS/VA/E-Wallet'],
    category: ['mobile'],
    metrics: [{ label: 'Rating', value: '4.6' }],
  },
  {
    name: 'DEX Crypto Trading App',
    url: '#',
    tech: ['React Native'],
    points: ['Real-time charts & order books — 500+ traders'],
    category: ['mobile'],
    metrics: [{ label: 'Traders', value: '500+' }],
  },
  {
    name: 'BUMA Superapps — Driver Behavior',
    url: '#',
    tech: ['React Native'],
    points: ['GPS + accelerometer analytics — 1,000+ drivers'],
    category: ['mobile'],
    metrics: [{ label: 'Drivers', value: '1,000+' }],
  },
  {
    name: 'SMART PLN — Mobile Application',
    url: '#',
    tech: ['React Native'],
    points: ['Infrastructure monitoring — 200+ technicians'],
    category: ['mobile'],
    metrics: [{ label: 'Technicians', value: '200+' }],
  },
  {
    name: 'WhatsApp Broadcast App',
    url: '#',
    tech: ['React', 'Bun'],
    points: ['Broadcast messaging with contact segmentation'],
    category: ['web'],
    metrics: [],
  },
]

function Projects() {
  usePageMeta({
    title: 'Projects',
    description: 'Project portfolio of Ahmad Albaihaqi.',
    path: '/projects',
  })
  const [active, setActive] = useState<Category>('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category.includes(active))

  return (
    <section style={{ paddingTop: '4rem' }}>
      <p className='eyebrow'>My Work</p>
      <h1 className='lead'>
        Projects <span>shipped over 5+ years.</span>
      </h1>

      <div className='body-copy' style={{ marginTop: '1.5rem' }}>
        <p>
          A selection of work across mobile, web, backend, and cloud — focused on
          performance, reliability, and measurable impact.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '2rem 0' }}>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            style={{
              background: 'transparent',
              border: 0,
              padding: '0 0 2px',
              fontSize: '.95rem',
              fontWeight: active === c.id ? 700 : 400,
              color: active === c.id ? '#16150f' : '#6f6a61',
              borderBottom: active === c.id ? '2px solid #16150f' : '2px solid transparent',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div>
        {filtered.map((p) => (
          <article key={p.name} className='row-link' style={{ borderTop: '1px solid #e0dacd' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{p.name}</h3>
              {p.url !== '#' && (
                <a href={p.url} target='_blank' rel='noreferrer' aria-label={`Open ${p.name}`}>
                  ↗
                </a>
              )}
            </div>
            {p.metrics.length > 0 && (
              <p style={{ margin: '.5rem 0', color: '#6f6a61', fontSize: '.95rem' }}>
                {p.metrics.map((m) => `${m.value} ${m.label}`).join(' · ')}
              </p>
            )}
            <ul style={{ margin: '.5rem 0', paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p style={{ margin: '.5rem 0 0', color: '#6f6a61', fontSize: '.9rem' }}>
              {p.tech.join(' · ')}
            </p>
          </article>
        ))}
        {filtered.length === 0 && <p>No projects in this category.</p>}
      </div>
    </section>
  )
}
