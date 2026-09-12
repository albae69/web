import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { ScribbleUnderline, StarDoodle } from '../components/Doodle'

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
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQL', 'Firebase Firestore'],
  },
  {
    category: 'Cloud & AWS',
    items: ['Amazon S3', 'Amazon ECR', 'AWS AppRunner', 'AWS Textract'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Trello', 'ClickUp', 'Postman', 'Vercel', 'Figma'],
  },
  {
    category: 'Other Expertise',
    items: [
      'SEO Optimization',
      'Payment Gateway Integration',
      'GPS Tracking',
      'PDF Processing',
      'System Integration',
    ],
  },
]

const experiences = [
  {
    role: 'Fullstack Developer (Contract)',
    company: 'IT Consulting Vendor — Hospital Information Systems',
    period: 'Aug 2024 — Present',
    highlight: 'EMR, BPJS/Insurance claims, AWS',
    points: [
      'EMR system used by 50+ medical staff — Flutter Desktop + Android for real-time entry',
      'React web app for BPJS & Insurance claim reports — from 2 days to 2 hours',
      'Go + Fiber REST API handling 1000+ daily transactions, AWS Textract pipeline 95% accuracy, deployed on ECR + AppRunner',
    ],
  },
  {
    role: 'Staff Frontend Developer',
    company: 'PT. Karya Generasi Biru',
    period: 'Oct 2023 — May 2024',
    highlight: 'Next.js migration, SEO',
    points: [
      'Migrated WIX to Next.js + Strapi — 40% LCP improvement',
      'Meta tags, structured data, Open Graph on 20+ pages — 25% organic traffic in 3 months',
      'Facebook Pixel & Google Ads integration — 15% ad conversion lift',
    ],
  },
  {
    role: 'Frontend Developer (Part-time Contract)',
    company: 'Shieldtag',
    period: 'Nov 2023 — Jun 2024',
    highlight: 'Landing Page',
    points: [
      'Company landing page with Next.js + Strapi headless CMS',
      '90+ Lighthouse score on desktop & mobile via code-splitting and image optimization',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'Coding Collective',
    period: 'Jul 2023 — Nov 2023',
    highlight: 'Internal apps, Speaker',
    points: [
      'Internal React Native app for project management and attendance — 50+ staff',
      'Speaker at AMCC x Jogja Coding House and Startup Talk #115 on React Native',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'PT. Merkle Inovasi Teknologi',
    period: 'Oct 2022 — May 2023',
    highlight: 'Fintech & Healthcare',
    points: [
      'DEX crypto trading app v2 (React Native) — real-time charts and order books, 500+ traders',
      'Web app for Siloam Private Hospital (React.js) — App Store and Play Store release with no rejections',
    ],
  },
  {
    role: 'Mobile Developer (Outsourced via Wiratek Solusi Asia)',
    company: 'Wiratek Solusi Asia',
    period: 'Nov 2021 — Aug 2022',
    highlight: 'E-Commerce & Logistics',
    points: [
      'HokBen mobile app — Play Store rating 3.8 -> 4.6, QRIS/VA/E-Wallet integration, +35% monthly transactions',
      'BUMA Driver Behavior module — GPS + accelerometer analytics for 1,000+ drivers',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'PT. Kreasi Alam Teknologi',
    period: 'Dec 2020 — Sep 2021',
    highlight: 'Field operations app',
    points: [
      'SMART PLN mobile app (React Native) — 200+ field technicians, real-time infrastructure monitoring',
    ],
  },
]

function About() {
  return (
    <section className='py-8 space-y-8'>
      {/* HEADER */}
      <div>
        <ScrollReveal direction='left' delay={0}>
          <span className='section-prefix mb-2 inline-flex items-center gap-1.5'>
            // about
            <StarDoodle className='w-3.5 h-3.5 text-emerald-500' delay='0.7s' />
          </span>
        </ScrollReveal>
        <ScrollReveal direction='up' delay={100}>
          <h2 className='text-3xl font-bold text-black dark:text-white'>
            <span className='relative inline-block'>
              Ahmad Albaihaqi Lubis
              <ScribbleUnderline className='absolute -bottom-2 left-0 w-full h-3 text-emerald-500' />
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction='up' delay={200}>
          <p className='text-zinc-500 dark:text-zinc-400 mt-1'>
            Software Engineer — Medan, Indonesia
          </p>
        </ScrollReveal>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <ScrollReveal direction='up' delay={300}>
        <div className='glass rounded-xl p-6 border border-black/5 dark:border-white/10 glass-card'>
          <span className='font-mono text-xs text-emerald-400 block mb-3'>
            // professional_summary
          </span>
          <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
            <strong className='text-zinc-900 dark:text-zinc-100'>Software Engineer</strong> with{' '}
            <AnimatedCounter target={5} />+ years of experience in Frontend, Backend, Mobile, and
            Cloud development. Skilled in React, Next.js, TypeScript, Go, Node.js, React Native,
            Flutter, and AWS. Worked across{' '}
            <strong className='text-zinc-900 dark:text-zinc-100'>healthcare</strong> (EMR,
            BPJS/Insurance claims),{' '}
            <strong className='text-zinc-900 dark:text-zinc-100'>fintech</strong> (crypto trading,
            payment gateways), and{' '}
            <strong className='text-zinc-900 dark:text-zinc-100'>logistics</strong> (GPS tracking
            analytics).
          </p>
        </div>
      </ScrollReveal>

      {/* SKILLS */}
      <ScrollReveal direction='up' delay={400}>
        <div className='glass rounded-xl p-6 border border-black/5 dark:border-white/10 glass-card'>
          <span className='font-mono text-xs text-emerald-400 block mb-4'>
            // skills
          </span>
          <div className='grid gap-5 sm:grid-cols-2'>
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className='text-sm font-semibold text-black dark:text-white mb-2'>
                  {group.category}
                </h4>
                <div className='flex flex-wrap gap-1.5'>
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className='px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-mono hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* EXPERIENCE TIMELINE */}
      <ScrollReveal direction='up' delay={500}>
        <div className='glass rounded-xl p-6 border border-black/5 dark:border-white/10 glass-card'>
          <span className='font-mono text-xs text-emerald-400 block mb-4'>
            // experience
          </span>
          <div className='space-y-6'>
            {experiences.map((exp, idx) => (
              <div key={idx} className='relative pl-5 border-l-2 border-zinc-200 dark:border-zinc-700'>
                <div className='absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow' />
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1'>
                  <div>
                    <h3 className='font-semibold text-black dark:text-white text-sm'>
                      {exp.role}
                    </h3>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>{exp.company}</p>
                  </div>
                  <span className='text-xs font-mono text-emerald-500 shrink-0'>
                    {exp.period}
                  </span>
                </div>
                <p className='text-xs text-emerald-400 font-mono mb-1'>
                  // {exp.highlight}
                </p>
                <ul className='space-y-0.5'>
                  {exp.points.map((pt, i) => (
                    <li
                      key={i}
                      className='text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5'
                    >
                      <span className='text-emerald-300 mt-0.5'>&#8594;</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CONTACT & EDUCATION */}
      <div className='grid gap-5 sm:grid-cols-2'>
        {/* Contact */}
        <ScrollReveal direction='left' delay={600}>
          <div className='glass rounded-xl p-6 border border-black/5 dark:border-white/10 glass-card h-full'>
            <span className='font-mono text-xs text-emerald-400 block mb-3'>
              // contact
            </span>
            <div className='space-y-3'>
              <a
                href='mailto:ahmadalbaihaqi69@gmail.com'
                className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors no-underline hover-underline'
              >
                <svg
                  className='w-4 h-4 shrink-0'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='2' y='4' width='20' height='16' rx='2' />
                  <path d='M22 4L12 13 2 4' />
                </svg>
                ahmadalbaihaqi69@gmail.com
              </a>
              <a
                href='https://github.com/albae69'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors no-underline hover-underline'
              >
                <svg
                  className='w-4 h-4 shrink-0'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
                </svg>
                github.com/albae69
              </a>
              <a
                href='https://linkedin.com/in/albae69'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors no-underline hover-underline'
              >
                <svg
                  className='w-4 h-4 shrink-0'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
                linkedin.com/in/albae69
              </a>
              <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                <svg
                  className='w-4 h-4 shrink-0'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                Medan, Sumatera Utara
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education & Languages */}
        <ScrollReveal direction='right' delay={700}>
          <div className='glass rounded-xl p-6 border border-black/5 dark:border-white/10 glass-card h-full'>
            <span className='font-mono text-xs text-emerald-400 block mb-3'>
              // education
            </span>
            <div className='space-y-3 mb-5'>
              <div>
                <p className='text-sm font-medium text-black dark:text-white'>
                  Bachelor&apos;s Degree in Information Engineering
                </p>
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>In Progress</p>
              </div>
              <div>
                <p className='text-sm font-medium text-black dark:text-white'>
                  Pondok Programmer
                </p>
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                  Bootcamp Programming — Frontend Developer (2019–2022)
                </p>
              </div>
              <div>
                <p className='text-sm font-medium text-black dark:text-white'>
                  SMK Negeri 1 Percut Sei Tuan
                </p>
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                  Civil Engineering (2015–2018)
                </p>
              </div>
            </div>
            <hr className='border-dashed border-zinc-200 dark:border-zinc-700 my-4' />
            <span className='font-mono text-xs text-emerald-400 block mb-3'>
              // languages
            </span>
            <div className='space-y-1'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-zinc-700 dark:text-zinc-300'>Indonesian</span>
                <span className='text-xs font-mono text-zinc-400'>Native</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-zinc-700 dark:text-zinc-300'>English</span>
                <span className='text-xs font-mono text-zinc-400'>
                  Professional Working
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
