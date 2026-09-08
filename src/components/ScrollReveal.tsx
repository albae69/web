import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  delay?: number
  duration?: number
  className?: string
  triggerOnce?: boolean
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce })

  const getTransform = () => {
    if (!inView) {
      switch (direction) {
        case 'up':
          return 'translateY(40px)'
        case 'down':
          return 'translateY(-40px)'
        case 'left':
          return 'translateX(40px)'
        case 'right':
          return 'translateX(-40px)'
        case 'scale':
          return 'scale(0.95)'
        default:
          return 'translateY(40px)'
      }
    }
    return 'translate(0) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
