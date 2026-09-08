import { useState, useEffect } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }

    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = ''
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Inner dot - follows cursor exactly */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${x - 4}px, ${y - 4}px)`,
        }}
      >
        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
      </div>

      {/* Outer ring - follows with delay */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${x - 20}px, ${y - 20}px)`,
          transition: 'transform 0.15s ease-out, width 0.2s, height 0.2s, opacity 0.2s',
        }}
      >
        <div
          className={`border border-emerald-500/50 rounded-full transition-all duration-200 ${
            isHovering ? 'w-10 h-10 -ml-1 -mt-1 bg-emerald-500/10' : 'w-10 h-10'
          }`}
        />
      </div>
    </>
  )
}
