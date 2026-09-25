import { usePageMeta } from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import { ScribbleUnderline, StarDoodle } from '../components/Doodle'
import { devices, games, lastUpdated, steamProfileUrl } from '../data/now'

export const Route = createFileRoute({
  component: Now,
})

const deviceIcons: Record<string, string> = {
  laptop: '💻',
  phone: '📱',
  monitor: '🖥️',
  keyboard: '⌨️',
  mouse: '🖱️',
  watch: '⌚',
}

const statusStyle: Record<string, string> = {
  playing: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  finished: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700',
  backlog: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
}

const statusLabel: Record<string, string> = {
  playing: '● Playing',
  finished: '✓ Finished',
  backlog: '○ Backlog',
}

function Now() {
  usePageMeta({
    title: 'Now',
    description: 'What Ahmad Albaihaqi is up to now — devices and games.',
    path: '/now',
  })

  return (
    <section className='py-8 space-y-6'>
      <div>
        <ScrollReveal direction='left' delay={0}>
          <span className='section-prefix mb-2 inline-flex items-center gap-1.5'>
            // now
            <StarDoodle className='w-3.5 h-3.5 text-emerald-500' delay='0.7s' />
          </span>
        </ScrollReveal>
        <ScrollReveal direction='up' delay={100}>
          <h2 className='text-3xl font-bold text-black dark:text-white'>
            <span className='relative inline-block'>
              What I&apos;m up to
              <ScribbleUnderline className='absolute -bottom-2 left-0 w-full h-3 text-emerald-500' />
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction='up' delay={200}>
          <p className='text-sm text-zinc-500 dark:text-zinc-400 mt-2'>
            Device yang aku pakai dan game yang lagi dimainkan. Update:{' '}
            <span className='font-mono text-emerald-500'>{lastUpdated}</span>
          </p>
        </ScrollReveal>
      </div>

      {/* DEVICES */}
      <ScrollReveal direction='up' delay={400}>
        <div className='glass rounded-xl p-5 sm:p-6 border border-black/5 dark:border-white/10 glass-card'>
          <span className='font-mono text-xs text-emerald-400 block mb-1'>
            // devices
          </span>
          <h3 className='font-bold text-lg text-black dark:text-white mb-4'>
            Setup & Device
          </h3>
          <div className='grid gap-3 sm:grid-cols-2'>
            {devices.map((d) => (
              <div
                key={d.name}
                className='flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/5 dark:border-white/5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors'
              >
                <span className='text-xl shrink-0 mt-0.5'>{deviceIcons[d.icon] ?? '💻'}</span>
                <div className='min-w-0'>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <p className='text-sm font-semibold text-black dark:text-white leading-tight'>
                      {d.name}
                    </p>
                    <span className='px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-[10px] font-mono'>
                      {d.tag}
                    </span>
                  </div>
                  <p className='text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed'>
                    {d.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* GAMES */}
      <ScrollReveal direction='up' delay={500}>
        <div className='glass rounded-xl p-5 sm:p-6 border border-black/5 dark:border-white/10 glass-card'>
          <span className='font-mono text-xs text-emerald-400 block mb-1'>
            // currently_playing
          </span>
          <div className='flex items-center justify-between gap-3 mb-4'>
            <h3 className='font-bold text-lg text-black dark:text-white'>
              Game yang Lagi Dimainkan
            </h3>
            <a
              href={steamProfileUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171a21] text-white rounded-lg text-xs font-medium hover:bg-[#2a475e] transition-colors no-underline shrink-0'
            >
              <svg className='w-3.5 h-3.5' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-1.59 3.608-3.903c.447.016.794.517.794 1.129 0 .556-.288 1.024-.685 1.265l-2.244 3.099zm12.486-4.04c1.303 0 2.363-1.061 2.363-2.365 0-1.303-1.06-2.364-2.363-2.364-1.304 0-2.364 1.061-2.364 2.364 0 1.303 1.06 2.364 2.364 2.365z' />
              </svg>
              My Steam Profile
            </a>
          </div>
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {games.map((g) => (
              <div
                key={g.title}
                className='p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/5 dark:border-white/5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors'
              >
                <div className='flex items-start justify-between gap-2 mb-2'>
                  <span className='text-2xl'>🎮</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${statusStyle[g.status]}`}
                  >
                    {statusLabel[g.status]}
                  </span>
                </div>
                <p className='font-semibold text-sm text-black dark:text-white'>{g.title}</p>
                <p className='text-[11px] font-mono text-emerald-500 mt-0.5'>{g.platform}</p>
                <p className='text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed'>
                  {g.note}
                </p>
                {g.url && (
                  <div className='flex items-center gap-2 mt-3'>
                    <a
                      href={g.url}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171a21] text-white rounded-lg text-xs font-medium hover:bg-[#2a475e] transition-colors no-underline'
                    >
                      <svg className='w-3.5 h-3.5' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-1.59 3.608-3.903c.447.016.794.517.794 1.129 0 .556-.288 1.024-.685 1.265l-2.244 3.099zm12.486-4.04c1.303 0 2.363-1.061 2.363-2.365 0-1.303-1.06-2.364-2.363-2.364-1.304 0-2.364 1.061-2.364 2.364 0 1.303 1.06 2.364 2.364 2.365z' />
                      </svg>
                      View on Steam
                    </a>
                    {g.steamAppId && (
                      <a
                        href={`steam://store/${g.steamAppId}`}
                        className='inline-flex items-center px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg text-xs font-mono hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors no-underline'
                        title='Buka di aplikasi Steam'
                      >
                        Open in app
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
