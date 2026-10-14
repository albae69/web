import { usePageMeta } from '../hooks/usePageMeta'

export const Route = createFileRoute({
  component: Resume,
})

const skills: { label: string; items: string }[] = [
  {
    label: 'Frontend Web',
    items:
      'React.js, Next.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS',
  },
  {
    label: 'Backend and API',
    items: 'Go (Fiber), Node.js, Express.js, Strapi CMS, REST API, Webhooks',
  },
  {
    label: 'Mobile and Desktop',
    items: 'React Native (Android, iOS), Flutter (Android, iOS, Desktop)',
  },
  { label: 'Database', items: 'PostgreSQL, SQL, Firebase Firestore' },
  {
    label: 'Cloud and AWS',
    items: 'Amazon S3, Amazon ECR, AWS AppRunner, AWS Textract',
  },
  {
    label: 'Tools and Platforms',
    items: 'Git, GitHub, GitLab, Jira, Trello, ClickUp, Postman, Vercel, Figma',
  },
  {
    label: 'Domain Knowledge',
    items:
      'SEO Optimization, Payment Gateway Integration (QRIS, Virtual Account, E-Wallet), GPS Tracking, PDF Processing, System Integration',
  },
]

type Job = {
  title: string
  company: string
  period: string
  location: string
  points: string[]
}

const experience: Job[] = [
  {
    title: 'Fullstack Developer (Contract)',
    company: 'IT Consulting Vendor for Hospital Information Systems',
    period: 'Aug 2024 - Present',
    location: 'Remote',
    points: [
      'Developed Electronic Medical Record (EMR) system used by 50+ medical staff across multiple hospitals',
      'Built Flutter Desktop and Android app for real-time patient data entry',
      'Built React web app for BPJS and Insurance claim reports, reducing report processing time from 2 days to 2 hours',
      'Developed RESTful API with Go and Fiber handling around 1,000 daily transactions, deployed containerized via Amazon ECR and AWS AppRunner',
      'Built automated invoice extraction pipeline with AWS Textract with 95% accuracy, reducing manual input by 80%, stored on AWS S3',
    ],
  },
  {
    title: 'Staff Frontend Developer (Contract)',
    company: 'PT. Karya Generasi Biru',
    period: 'Oct 2023 - May 2024',
    location: 'Remote',
    points: [
      'Migrated legacy WIX website to Next.js with Strapi headless CMS, improving Largest Contentful Paint by 40%',
      'Implemented meta tags, structured data, and Open Graph across 20+ pages, increasing organic traffic by 25% in 3 months',
      'Integrated Facebook Pixel and Google Ads, increasing ad conversion rate by 15%',
      'Collaborated with UI/UX, Backend, and QA teams for responsive design and CMS integration',
    ],
  },
  {
    title: 'Frontend Developer (Part-time Contract)',
    company: 'Shieldtag',
    period: 'Nov 2023 - Jun 2024',
    location: 'Remote',
    points: [
      'Developed company landing page with Next.js and Strapi CMS headless architecture',
      'Achieved 90+ Lighthouse score on desktop and mobile via code-splitting and image optimization',
    ],
  },
  {
    title: 'Mobile Developer (Project-based)',
    company: 'Coding Collective',
    period: 'Jul 2023 - Nov 2023',
    location: 'Onsite, Yogyakarta',
    points: [
      'Developed internal React Native app for project management and employee attendance for 50+ staff',
      'Speaker at AMCC x Jogja Coding House Intermediate Class and ABP x Jogja Coding House Startup Talk 115 on React Native best practices',
    ],
  },
  {
    title: 'Mobile Developer (Contract)',
    company: 'PT. Merkle Inovasi Teknologi',
    period: 'Oct 2022 - May 2023',
    location: 'Hybrid, Tangerang Selatan',
    points: [
      'Developed v2 DEX crypto trading mobile app with React Native with real-time charts and order books for 500+ traders',
      'Built web app for Siloam Private Hospital with React.js for hospital data integration',
      'Released to Apple App Store and Google Play Store with no rejections',
    ],
  },
  {
    title: 'Mobile Developer (Outsourced via Wiratek Solusi Asia)',
    company: 'Wiratek Solusi Asia for PT. Merkle Inovasi Teknologi',
    period: 'Nov 2021 - Aug 2022',
    location: 'Remote',
    points: [
      'Updated HokBen mobile app (Android, iOS), improving Play Store rating from 3.8 to 4.6',
      'Integrated QRIS, Virtual Account, and E-Wallet payment gateways, increasing monthly transactions by 35% with 100+ daily transactions',
      'Built Driver Behavior analytics module for BUMA superapp using GPS and accelerometer data for 1000+ drivers',
    ],
  },
  {
    title: 'Mobile Developer (Contract)',
    company: 'PT. Kreasi Alam Teknologi',
    period: 'Dec 2020 - Sep 2021',
    location: 'Remote',
    points: [
      'Built and deployed SMART PLN mobile app with React Native for 200+ field technicians for real-time electrical infrastructure monitoring',
      'Performed bug fixing and release testing for Google Play Store',
    ],
  },
]

function Resume() {
  usePageMeta({
    title: 'Resume',
    description:
      'Resume of Ahmad Albaihaqi — Software Engineer with 5+ years across web, mobile, backend and cloud.',
    path: '/resume',
  })

  return (
    <section style={{ paddingTop: '4rem' }}>
      <style>
        {`
          @media print {
            header, footer, .no-print { display: none !important; }
            body { background: #fff !important; max-width: 100% !important; padding: 0 !important; }
            .ats-sheet { box-shadow: none !important; border: 0 !important; margin: 0 !important; max-width: 100% !important; }
          }
          @page { margin: 14mm; }
        `}
      </style>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ahmad Albaihaqi Lubis',
            jobTitle: 'Software Engineer',
            email: 'mailto:ahmadalbaihaqi69@gmail.com',
            address: 'Medan, North Sumatra, Indonesia',
            url: 'https://albae69.github.io',
            sameAs: [
              'https://github.com/albae69',
              'https://linkedin.com/in/albae69',
            ],
          }),
        }}
      />

      {/* ATS sheet: white paper, system font, semantic single column */}
      <article
        className='ats-sheet'
        style={{
          background: '#ffffff',
          color: '#111111',
          border: '1px solid #e0dacd',
          borderRadius: 12,
          padding: 'clamp(1.5rem, 5vw, 3rem)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '11pt',
          lineHeight: 1.5,
          maxWidth: '8.5in',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h1
            style={{ fontSize: '20pt', margin: '0 0 .3rem', letterSpacing: 0 }}
          >
            AHMAD ALBAIHAQI LUBIS
          </h1>
          <p style={{ margin: 0 }}>
            Medan, North Sumatra, Indonesia | +62 819 9204 2994
          </p>
          <p style={{ margin: '.2rem 0 0' }}>
            ahmadalbaihaqi69@gmail.com | https://albae69.github.io |{' '}
            https://linkedin.com/in/albae69 | https://github.com/albae69
          </p>
        </header>

        <section>
          <h2
            style={{
              fontSize: '13pt',
              margin: '1.2rem 0 .4rem',
              borderBottom: '1px solid #111',
              paddingBottom: '.2rem',
            }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ margin: '.4rem 0' }}>
            Software Engineer with 5+ years of experience in frontend, backend,
            mobile, and cloud development. Skilled in React, Next.js,
            TypeScript, Go, Node.js, React Native, Flutter, and AWS (S3, ECR,
            AppRunner, Textract). Experience in healthcare (EMR, BPJS/Insurance
            claims automation), fintech (crypto trading, payment gateway), and
            logistics (GPS tracking analytics). Highlights: claim reporting 2
            days to 2 hours; LCP −40% and +25% organic traffic after WIX to
            Next.js migration; Play Store rating 3.8 to 4.6.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: '13pt',
              margin: '1.2rem 0 .4rem',
              borderBottom: '1px solid #111',
              paddingBottom: '.2rem',
            }}
          >
            TECHNICAL SKILLS
          </h2>
          <ul style={{ margin: '.4rem 0', paddingLeft: '1.2rem' }}>
            {skills.map((s) => (
              <li key={s.label}>
                {s.label}: {s.items}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2
            style={{
              fontSize: '13pt',
              margin: '1.2rem 0 .4rem',
              borderBottom: '1px solid #111',
              paddingBottom: '.2rem',
            }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              style={{ marginBottom: '.9rem' }}
            >
              <h3 style={{ fontSize: '11pt', margin: '.8rem 0 0' }}>
                {job.title} - {job.company} | {job.period}
              </h3>
              <p style={{ fontStyle: 'italic', margin: '.1rem 0 .3rem' }}>
                {job.location}
              </p>
              <ul style={{ margin: '.2rem 0', paddingLeft: '1.2rem' }}>
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2
            style={{
              fontSize: '13pt',
              margin: '1.2rem 0 .4rem',
              borderBottom: '1px solid #111',
              paddingBottom: '.2rem',
            }}
          >
            EDUCATION
          </h2>
          <ul style={{ margin: '.4rem 0', paddingLeft: '1.2rem' }}>
            <li>
              Bachelor&apos;s Degree in Information Engineering - In Progress
            </li>
            <li>
              Pondok Programmer (2019 - 2022) - Frontend Developer Bootcamp -
              Intensive training in JavaScript, React, and software development
              lifecycle
            </li>
            <li>
              SMK Negeri 1 Percut Sei Tuan (2015 - 2018) - Civil Engineering
            </li>
          </ul>
        </section>

        <section>
          <h2
            style={{
              fontSize: '13pt',
              margin: '1.2rem 0 .4rem',
              borderBottom: '1px solid #111',
              paddingBottom: '.2rem',
            }}
          >
            LANGUAGES
          </h2>
          <ul style={{ margin: '.4rem 0', paddingLeft: '1.2rem' }}>
            <li>Bahasa Indonesia: Native</li>
            <li>English: Professional Working Proficiency</li>
          </ul>
        </section>
      </article>
    </section>
  )
}
