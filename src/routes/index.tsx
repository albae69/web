import { Link } from '@tanstack/react-router'

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return (
    <section className='min-h-[70vh] flex flex-col justify-center py-16'>
      {/* Decorative prefix */}
      <span className='section-prefix mb-2 animate-fade-in'>//</span>

      {/* Main heading */}
      <h1 className='text-4xl md:text-5xl font-bold text-black leading-tight animate-fade-in-up delay-1'>
        Hi, I'm <span className='text-emerald-500 glow'>Ahmad Albaihaqi</span>
      </h1>

      {/* Subtitle */}
      <p className='text-lg md:text-xl text-zinc-500 mt-3 max-w-lg animate-fade-in-up delay-2'>
        <span className='text-emerald-500 font-medium'>6+years</span> of
        full-stack, mobile & cloud experience.{' '}
        <span className='text-zinc-800 font-medium'>React</span>,{' '}
        <span className='text-zinc-800 font-medium'>Flutter</span>,{' '}
        <span className='text-zinc-800 font-medium'>Go</span> — building things
        that matter.
      </p>

      {/* Decorative line */}
      <div className='flex items-center gap-2 mt-6 text-zinc-300 animate-fade-in-up delay-3'>
        <span className='font-mono text-xs'>——</span>
        <span className='w-2 h-2 rounded-full bg-emerald-300' />
        <span className='w-2 h-2 rounded-full bg-emerald-300' />
        <span className='w-2 h-2 rounded-full bg-emerald-300' />
      </div>

      {/* CTA Buttons */}
      <div className='flex flex-wrap gap-4 mt-8 animate-fade-in-up delay-4'>
        <Link
          to='/projects'
          className='px-6 py-3 bg-emerald-600 text-white rounded-xl text-base font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-200/50 border border-emerald-500 no-underline hover:no-underline hover:text-white'
        >
          View Projects &rarr;
        </Link>
        <a
          href='mailto:ahmadalbaihaqi69@gmail.com'
          className='px-6 py-3 bg-white/80 backdrop-blur-md rounded-xl text-base font-medium text-zinc-800 border border-zinc-200 hover:border-emerald-300 hover:bg-white hover:text-emerald-600 transition-all shadow-sm no-underline hover:no-underline'
        >
          Contact Me
        </a>
      </div>

      {/* Tech snippet */}
      <div className='mt-12 glass rounded-xl p-4 border border-black/5 animate-fade-in-up delay-5'>
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
          ].map((tech) => (
            <span
              key={tech}
              className='px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-lg text-xs font-mono'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
