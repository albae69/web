import { Link } from '@tanstack/react-router'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'
import AnimatedCounter from '../components/AnimatedCounter'

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return (
    <section className='min-h-[70vh] flex flex-col justify-center py-16'>
      <div className='flex flex-col lg:flex-row items-start lg:items-center gap-12'>
        {/* Left content */}
        <div className='flex-1'>
          {/* Decorative prefix */}
          <ScrollReveal direction='left' delay={0}>
            <span className='section-prefix mb-2'>//</span>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal direction='up' delay={100}>
            <h1 className='text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight'>
              Ahmad Albaihaqi
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction='up' delay={200}>
            <p className='text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mt-3 max-w-lg'>
              Software Engineer. I build web, mobile & cloud apps.
            </p>
          </ScrollReveal>

          {/* Tech tags */}
          <ScrollReveal direction='up' delay={250}>
            <div className='flex flex-wrap gap-2 mt-4'>
              {['React', 'Flutter', 'Go', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-mono border border-emerald-200 dark:border-emerald-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Availability */}
          <ScrollReveal direction='up' delay={280}>
            <div className='flex items-center gap-2 mt-4'>
              <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
              <span className='text-xs text-zinc-500 dark:text-zinc-400'>
                Available for freelance & full-time
              </span>
            </div>
          </ScrollReveal>

          {/* Decorative line */}
          <ScrollReveal direction='scale' delay={300}>
            <div className='flex items-center gap-2 mt-6 text-zinc-300 dark:text-zinc-600'>
              <span className='font-mono text-xs'>——</span>
              <span className='w-2 h-2 rounded-full bg-emerald-300 animate-float' />
              <span className='w-2 h-2 rounded-full bg-emerald-300 animate-float delay-1' />
              <span className='w-2 h-2 rounded-full bg-emerald-300 animate-float delay-2' />
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction='up' delay={400}>
            <div className='flex flex-wrap gap-4 mt-8'>
              <MagneticButton strength={0.2}>
                <Link
                  to='/projects'
                  className='px-6 py-3 bg-emerald-600 text-white rounded-xl text-base font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/50 border border-emerald-500 no-underline hover:no-underline hover:text-white'
                >
                  See My Work →
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href='mailto:ahmadalbaihaqi69@gmail.com'
                  className='px-6 py-3 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-xl text-base font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-500 hover:bg-white dark:hover:bg-zinc-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm no-underline hover:no-underline'
                >
                  Let's Talk
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right - Profile Avatar */}
        <ScrollReveal direction='right' delay={300}>
          <div className='relative'>
            <div className='w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl animate-float'>
              <img
                src='/profile.jpeg'
                alt='Ahmad Albaihaqi'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Decorative dots */}
            <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl -z-10' />
            <div className='absolute -top-4 -left-4 w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl -z-10' />
          </div>
        </ScrollReveal>
      </div>

      {/* Stats Section */}
      <ScrollReveal direction='up' delay={500}>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
          {[
            { label: 'Projects Shipped', value: 9, suffix: '+' },
            { label: 'Years Experience', value: 6, suffix: '+' },
            { label: 'Technologies', value: 20, suffix: '+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className='glass dark:bg-zinc-800/50 rounded-xl p-4 text-center border border-black/5 dark:border-white/10'
            >
              <div className='text-2xl md:text-3xl font-bold text-emerald-500'>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className='text-xs text-zinc-500 dark:text-zinc-400 mt-1'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Tech snippet */}
      <ScrollReveal direction='up' delay={600}>
        <div className='mt-12 glass dark:bg-zinc-800/50 rounded-xl p-4 border border-black/5 dark:border-white/10 glass-card'>
          <span className='font-mono text-xs text-emerald-400 block mb-1'>
            $ tech_stack
          </span>
          <div className='flex flex-wrap gap-2'>
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Go',
              'Node.js',
              'React Native',
              'Flutter',
              'PostgreSQL',
              'MySQL',
              'SQL Server',
              'AWS',
              'Tailwind',
              'Docker',
              'Github Copilot',
              'OpenCode',
              '9Router',
            ].map((tech) => (
              <span
                key={tech}
                className='px-2.5 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-mono hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
