import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

export default function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const hash = useRouterState({ select: (s) => s.location.hash })

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
