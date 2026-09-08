import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return progress
}
