import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'

const containerClass =
  'relative mx-auto aspect-square w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80'

export default function LazyAvatarOrbit() {
  const [AvatarOrbit, setAvatarOrbit] = useState<ComponentType | null>(null)

  useEffect(() => {
    let mounted = true
    const events = ['pointerdown', 'pointermove', 'keydown', 'touchstart'] as const

    const loadOrbit = () => {
      if (!mounted) return
      void import('./AvatarOrbit').then(({ default: component }) => {
        if (mounted) setAvatarOrbit(() => component)
      })
    }

    for (const event of events) {
      window.addEventListener(event, loadOrbit, { once: true, passive: true })
    }

    return () => {
      mounted = false
      for (const event of events) window.removeEventListener(event, loadOrbit)
    }
  }, [])

  if (AvatarOrbit) return <AvatarOrbit />

  // ponytail: static image keeps first paint light; add an explicit opt-in if 3D should load without interaction.
  return (
    <div className={`${containerClass} overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-emerald-50 shadow-lg dark:bg-emerald-950/40`}>
      <img
        src='/profile-320.webp'
        alt='Ahmad Albaihaqi'
        width={320}
        height={320}
        decoding='async'
        fetchPriority='high'
        className='h-full w-full object-cover'
      />
    </div>
  )
}
