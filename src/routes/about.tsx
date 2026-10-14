import { usePageMeta } from '../hooks/usePageMeta'

export const Route = createFileRoute({
  component: About,
})

const skills = [
  {
    category: 'Frontend Web',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & API',
    items: ['Go (Fiber)', 'Node.js', 'Express.js', 'Strapi CMS', 'REST API', 'Webhooks'],
  },
  {
    category: 'Mobile & Desktop',
    items: ['React Native (Android, iOS)', 'Flutter (Android, iOS, Desktop)'],
  },
  { category: 'Database', items: ['PostgreSQL', 'SQL', 'Firebase Firestore'] },
  {
    category: 'Cloud & AWS',
    items: ['Amazon S3', 'Amazon ECR', 'AWS AppRunner', 'AWS Textract'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Trello', 'ClickUp', 'Postman', 'Vercel', 'Figma'],
  },
]

const experiences = [
  {
    role: 'Fullstack Developer (Contract)',
    company: 'IT Consulting Vendor — Hospital Information Systems',
    period: 'Aug 2024 — Present',
    points: [
      'EMR system used by 50+ medical staff — Flutter Desktop + Android for real-time entry',
      'React web app for BPJS & Insurance claim reports — from 2 days to 2 hours',
      'Go + Fiber REST API handling 1000+ daily transactions, AWS Textract 95% accuracy',
    ],
  },
  {
    role: 'Staff Frontend Developer (Contract)',
    company: 'PT. Karya Generasi Biru',
    period: 'Oct 2023 — May 2024',
    points: [
      'Migrated WIX to Next.js + Strapi — 40% LCP improvement',
      'SEO on 20+ pages — 25% organic traffic in 3 months',
    ],
  },
  {
    role: 'Frontend Developer (Part-time)',
    company: 'Shieldtag',
    period: 'Nov 2023 — Jun 2024',
    points: ['Next.js + Strapi landing page — 90+ Lighthouse score'],
  },
  {
    role: 'Mobile Developer (Project-based)',
    company: 'Coding Collective',
    period: 'Jul 2023 — Nov 2023',
    points: ['Internal React Native app for 50+ staff', 'Speaker on React Native best practices'],
  },
  {
    role: 'Mobile Developer (Contract)',
    company: 'PT. Merkle Inovasi Teknologi',
    period: 'Oct 2022 — May 2023',
    points: [
      'DEX crypto trading app v2 — 500+ traders',
      'Web app for Siloam Private Hospital',
    ],
  },
  {
    role: 'Mobile Developer (via Wiratek Solusi Asia)',
    company: 'Wiratek Solusi Asia',
    period: 'Nov 2021 — Aug 2022',
    points: [
      'HokBen app — rating 3.8 → 4.6, +35% transactions via QRIS/VA/E-Wallet',
      'BUMA Driver Behavior — GPS analytics for 1,000+ drivers',
    ],
  },
  {
    role: 'Mobile Developer (Contract)',
    company: 'PT. Kreasi Alam Teknologi',
    period: 'Dec 2020 — Sep 2021',
    points: ['SMART PLN app — 200+ field technicians'],
  },
]

function About() {
  usePageMeta({
    title: 'About',
    description: 'About Ahmad Albaihaqi — Software Engineer with 5+ years across web, mobile, backend and cloud.',
    path: '/about',
  })

  return (
    <section style={{ paddingTop: '4rem' }}>
      <p className='eyebrow'>Hey, I&apos;m Bae</p>
      <h1 className='lead'>
        Software Engineer <span>based in Medan, Indonesia.</span>
      </h1>

      <div className='body-copy' style={{ marginTop: '2rem' }}>
        <p>
          <strong>Software Engineer</strong> with 5+ years across frontend,
          backend, mobile, and cloud. I work with React, Next.js, TypeScript,
          Go, Flutter, and AWS across <strong>healthcare</strong>,{' '}
          <strong>fintech</strong>, and <strong>logistics</strong>.
        </p>
        <p>
          Highlights: claim reporting 2 days → 2 hours; LCP −40% and +25%
          organic traffic after a WIX → Next.js migration; Play Store rating
          3.8 → 4.6.
        </p>
      </div>

      <hr className='rule' />

      <h2 style={{ fontSize: '1.6rem', margin: '0 0 1rem' }}>Skills</h2>
      <div>
        {skills.map((g) => (
          <div
            key={g.category}
            style={{ padding: '1.2rem 0', borderTop: '1px solid #e0dacd' }}
          >
            <h3 style={{ fontSize: '1rem', margin: '0 0 .5rem' }}>{g.category}</h3>
            <p style={{ margin: 0, color: '#6f6a61' }}>{g.items.join(' · ')}</p>
          </div>
        ))}
      </div>

      <hr className='rule' />

      <h2 style={{ fontSize: '1.6rem', margin: '0 0 1rem' }}>Experience</h2>
      <div>
        {experiences.map((exp) => (
          <article
            key={exp.role + exp.period}
            style={{ padding: '1.5rem 0', borderTop: '1px solid #e0dacd' }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '.5rem',
                marginBottom: '.5rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{exp.role}</h3>
                <p style={{ margin: '.2rem 0 0', color: '#6f6a61' }}>{exp.company}</p>
              </div>
              <span style={{ fontSize: '.9rem', color: '#6f6a61' }}>{exp.period}</span>
            </div>
            <ul style={{ margin: '.8rem 0 0', paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <hr className='rule' />

      <h2 style={{ fontSize: '1.6rem', margin: '0 0 1rem' }}>Contact</h2>
      <p>
        <a href='mailto:ahmadalbaihaqi69@gmail.com'>ahmadalbaihaqi69@gmail.com</a>
        <br />
        <a href='https://github.com/albae69' target='_blank' rel='noreferrer'>
          github.com/albae69
        </a>
        <br />
        <a href='https://linkedin.com/in/albae69' target='_blank' rel='noreferrer'>
          linkedin.com/in/albae69
        </a>
        <br />
        <span style={{ color: '#6f6a61' }}>Medan, Sumatera Utara</span>
      </p>

      <h2 style={{ fontSize: '1.6rem', margin: '2.5rem 0 1rem' }}>Education</h2>
      <p>
        Bachelor&apos;s Degree in Information Engineering — In Progress
        <br />
        Pondok Programmer (2019–2022) — Frontend Developer Bootcamp
        <br />
        SMK Negeri 1 Percut Sei Tuan (2015–2018) — Civil Engineering
      </p>
    </section>
  )
}
