import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'
import AnimatedCounter from '../components/AnimatedCounter'

export const Route = createFileRoute({
  component: Projects,
})

type Category = 'all' | 'mobile' | 'web' | 'backend' | 'cloud'

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'backend', label: 'Backend' },
  { id: 'cloud', label: 'Cloud & AWS' },
]

interface Project {
  name: string
  url: string
  tech: string[]
  points: string[]
  category: Category[]
  featured: boolean
  metrics: { label: string; value: string | number }[]
}

const projects: Project[] = [
  {
    name: 'EMR System — Hospital Information',
    url: '#',
    tech: ['Flutter', 'React', 'Go', 'MySQL'],
    points: [
      'Electronic Medical Record system used by 50+ medical staff across multiple hospitals',
      'Desktop & Android app for real-time patient data entry (Flutter)',
      'Web app for BPJS & Insurance claim reports — processing time from 2 days to <2 hours',
      'RESTful API with Go + Fiber handling 1,000+ daily transactions',
    ],
    category: ['mobile', 'web', 'backend'],
    featured: true,
    metrics: [
      { label: 'Users', value: '50+' },
      { label: 'Daily Transactions', value: '1,000+' },
      { label: 'Time Saved', value: '95%' },
    ],
  },
  {
    name: 'Auto Invoice Sync — Australian Client',
    url: '#',
    tech: ['React', 'Go', 'Docker', 'AWS Textract', 'AWS S3', 'AWS AppRunner', 'AWS EC2', 'SQL Server'],
    points: [
      'Built an automated invoice data extraction pipeline for an Australian client',
      'Integrated with their POS system for auto invoice sync',
      'Leveraged AWS Textract to extract invoice data with 95% accuracy',
      'Reduced manual data entry effort by 80%',
      'Processed documents stored securely on AWS S3',
      'Containerized deployment via Amazon ECR & AWS AppRunner',
    ],
    category: ['web', 'cloud'],
    featured: false,
    metrics: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Effort Reduced', value: '80%' },
    ],
  },
  {
    name: 'WhatsApp Broadcast App',
    url: '#',
    tech: ['React', 'Bun'],
    points: [
      'Built a web application for WhatsApp broadcast messaging to customers',
      'Developed contact management and audience segmentation features',
      'Integrated WhatsApp Business API for message delivery and tracking',
    ],
    category: ['web'],
    featured: false,
    metrics: [],
  },
  {
    name: 'Shieldtag — Company Landing Page',
    url: 'https://shieldtag.co',
    tech: ['Next.js', 'Strapi', 'REST API'],
    points: [
      'Migrated legacy WIX site to Next.js + Strapi headless CMS',
      'Improved Largest Contentful Paint (LCP) by 40%',
      'Dynamic meta tags, structured data & Open Graph across 20+ pages',
      'Boosted organic search traffic by 25% within 3 months',
      'Integrated Facebook Pixel & Google Ads — conversion rate up 15%',
    ],
    category: ['web'],
    featured: false,
    metrics: [
      { label: 'LCP Improvement', value: '40%' },
      { label: 'Traffic Increase', value: '25%' },
      { label: 'Lighthouse Score', value: '90+' },
    ],
  },
  {
    name: 'DEX Crypto Trading App',
    url: '#',
    tech: ['React Native'],
    points: [
      'Version 2 of a DEX crypto mobile trading application',
      'Real-time price charts and order books',
      'Served 500+ active traders',
      'Published on Apple App Store & Google Play Store',
    ],
    category: ['mobile'],
    featured: false,
    metrics: [
      { label: 'Active Traders', value: '500+' },
    ],
  },
  {
    name: 'Siloam Private Hospital — Web App',
    url: '#',
    tech: ['React', 'Next.js'],
    points: [
      'Built a web application for Siloam Private Hospital using React.js',
      'Secure and accurate data integration with backend hospital systems',
    ],
    category: ['web'],
    featured: false,
    metrics: [],
  },
  {
    name: 'Hokben Mobile Apps',
    url: 'https://play.google.com/store/apps/details?id=id.co.hokben.revamp&hl=id&pli=1',
    tech: ['React Native'],
    points: [
      'Revamped UI/UX and updated framework — Play Store rating 3.8 to 4.6',
      'Integrated multi-method payment gateways (QRIS, VA, E-Wallet)',
      'Boosted monthly transaction volume by 35%',
      '100+ daily transactions with 98% success rate',
    ],
    category: ['mobile'],
    featured: true,
    metrics: [
      { label: 'App Rating', value: '4.6' },
      { label: 'Transaction Boost', value: '35%' },
      { label: 'Success Rate', value: '98%' },
    ],
  },
  {
    name: 'BUMA Superapps — Driver Behavior',
    url: '#',
    tech: ['React Native'],
    points: [
      'Developed Driver Behavior analytics module for BUMA superapps',
      'Leveraged GPS and accelerometer data to monitor driving patterns',
      'Deployed across 1,000+ active drivers',
    ],
    category: ['mobile'],
    featured: false,
    metrics: [
      { label: 'Active Drivers', value: '1,000+' },
    ],
  },
  {
    name: 'SMART PLN — Mobile Application',
    url: '#',
    tech: ['React Native'],
    points: [
      'Built and deployed SMART PLN mobile application for electrical infrastructure monitoring',
      'Adopted by 200+ field technicians nationwide',
      'Maintained compliance before each Play Store release',
    ],
    category: ['mobile'],
    featured: false,
    metrics: [
      { label: 'Technicians', value: '200+' },
    ],
  },
]

function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory))

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const regularProjects = filteredProjects.filter(p => !p.featured)

  return (
    <section className='py-8'>
      {/* Header */}
      <ScrollReveal direction='left' delay={0}>
        <span className='section-prefix mb-2 block'>// projects</span>
      </ScrollReveal>
      <ScrollReveal direction='up' delay={100}>
        <h2 className='text-3xl font-bold text-black dark:text-white mb-2'>Project Portfolio</h2>
      </ScrollReveal>
      <ScrollReveal direction='up' delay={200}>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-6'>
          <AnimatedCounter target={9} />+ projects completed over 6+ years
        </p>
      </ScrollReveal>

      {/* Category Filter */}
      <ScrollReveal direction='up' delay={300}>
        <div className='flex flex-wrap gap-2 mb-8'>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat.label}
              <span className='ml-1.5 text-xs opacity-70'>
                ({cat.id === 'all' ? projects.length : projects.filter(p => p.category.includes(cat.id)).length})
              </span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className='mb-8'>
          <ScrollReveal direction='up' delay={400}>
            <h3 className='text-xs font-mono text-emerald-500 mb-4 uppercase tracking-wider'>Featured</h3>
          </ScrollReveal>
          <div className='grid gap-5 md:grid-cols-2'>
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.name} direction='up' delay={Math.min((index + 5) * 100, 600)}>
                <div className='glass rounded-xl border border-emerald-200 dark:border-emerald-900 glass-card tilt-card overflow-hidden'>
                  {/* Featured badge */}
                  <div className='bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-1.5'>
                    <span className='text-xs font-mono text-white/90'>★ Featured Project</span>
                  </div>

                  <div className='p-5'>
                    {/* Title + Link */}
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='font-bold text-lg text-black dark:text-white'>{project.name}</h3>
                      {project.url !== '#' && (
                        <MagneticButton strength={0.3}>
                          <a
                            href={project.url}
                            target='_blank'
                            rel='noreferrer'
                            className='text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
                            title='Open link'
                          >
                            <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                              <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' />
                              <polyline points='15 3 21 3 21 9' />
                              <line x1='10' y1='14' x2='21' y2='3' />
                            </svg>
                          </a>
                        </MagneticButton>
                      )}
                    </div>

                    {/* Metrics */}
                    {project.metrics.length > 0 && (
                      <div className='flex gap-4 mb-4'>
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className='text-center'>
                            <div className='text-xl font-bold text-emerald-500'>{metric.value}</div>
                            <div className='text-[10px] text-zinc-500 dark:text-zinc-400 uppercase'>{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className='flex flex-wrap gap-1.5 mb-3'>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className='px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-md text-xs font-mono'
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Points */}
                    <ul className='space-y-1'>
                      {project.points.map((point, i) => (
                        <li key={i} className='text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2'>
                          <span className='text-emerald-300 dark:text-emerald-500 mt-0.5 shrink-0'>→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      {regularProjects.length > 0 && (
        <div>
          <ScrollReveal direction='up' delay={500}>
            <h3 className='text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-4 uppercase tracking-wider'>
              {featuredProjects.length > 0 ? 'Other Projects' : 'All Projects'}
            </h3>
          </ScrollReveal>
          <div className='grid gap-4 md:grid-cols-2'>
            {regularProjects.map((project, index) => (
              <ScrollReveal key={project.name} direction='up' delay={Math.min((index + 6) * 100, 800)}>
                <div className='glass rounded-xl p-4 border border-black/5 dark:border-white/10 glass-card tilt-card h-full'>
                  {/* Title + Link */}
                  <div className='flex items-start justify-between mb-2'>
                    <h3 className='font-bold text-base text-black dark:text-white'>{project.name}</h3>
                    {project.url !== '#' && (
                      <MagneticButton strength={0.3}>
                        <a
                          href={project.url}
                          target='_blank'
                          rel='noreferrer'
                          className='text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
                          title='Open link'
                        >
                          <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                            <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' />
                            <polyline points='15 3 21 3 21 9' />
                            <line x1='10' y1='14' x2='21' y2='3' />
                          </svg>
                        </a>
                      </MagneticButton>
                    )}
                  </div>

                  {/* Metrics (compact) */}
                  {project.metrics.length > 0 && (
                    <div className='flex gap-3 mb-2'>
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span key={metric.label} className='text-xs'>
                          <span className='font-bold text-emerald-500'>{metric.value}</span>
                          <span className='text-zinc-400 ml-1'>{metric.label}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className='flex flex-wrap gap-1 mb-2'>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className='px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded text-[10px] font-mono'
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Points (limited) */}
                  <ul className='space-y-0.5'>
                    {project.points.slice(0, 2).map((point, i) => (
                      <li key={i} className='text-xs text-zinc-500 dark:text-zinc-400 flex items-start gap-1.5'>
                        <span className='text-emerald-300 dark:text-emerald-500 mt-0.5 shrink-0'>→</span>
                        <span className='line-clamp-1'>{point}</span>
                      </li>
                    ))}
                    {project.points.length > 2 && (
                      <li className='text-[10px] text-zinc-400 dark:text-zinc-500 ml-3'>
                        +{project.points.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <ScrollReveal direction='up' delay={400}>
          <div className='text-center py-12'>
            <p className='text-zinc-400 dark:text-zinc-500'>No projects in this category.</p>
          </div>
        </ScrollReveal>
      )}
    </section>
  )
}
