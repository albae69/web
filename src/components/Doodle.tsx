import type { SVGProps } from 'react'

interface DoodleProps extends SVGProps<SVGSVGElement> {
  delay?: string
  duration?: string
}

function DrawnPath({
  d,
  delay = '0.8s',
  duration = '0.8s',
  strokeWidth = 4,
  opacity = 1,
}: {
  d: string
  delay?: string
  duration?: string
  strokeWidth?: number
  opacity?: number
}) {
  return (
    <path
      d={d}
      pathLength={1}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
      className="doodle-draw"
      style={{ animationDelay: delay, animationDuration: duration }}
    />
  )
}

export function ScribbleUnderline({ delay = '0.9s', duration = '0.7s', ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 220 14" fill="none" aria-hidden="true" {...rest}>
      <DrawnPath d="M4 9 C 50 3, 90 12, 130 7 S 190 4, 216 8" delay={delay} duration={duration} strokeWidth={5} />
      <DrawnPath
        d="M10 12 C 60 8, 120 13, 210 10"
        delay="1.3s"
        duration="0.7s"
        strokeWidth={2.5}
        opacity={0.45}
      />
    </svg>
  )
}

export function Squiggle({ delay = '1s', duration = '0.8s', ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 12" fill="none" aria-hidden="true" {...rest}>
      <DrawnPath d="M2 7 q 6 -6 12 0 t 12 0 t 12 0 t 12 0 t 12 0" delay={delay} duration={duration} strokeWidth={2.5} />
    </svg>
  )
}

export function ArrowDoodle({ delay = '1.2s', duration = '0.7s', ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" aria-hidden="true" {...rest}>
      <DrawnPath d="M8 4 C 24 14, 34 28, 36 44" delay={delay} duration={duration} strokeWidth={3.5} />
      <DrawnPath d="M27 37 L37 46 L41 35" delay="1.7s" duration="0.4s" strokeWidth={3.5} />
    </svg>
  )
}

export function StarDoodle({ delay = '1.1s', ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="doodle-pop" style={{ animationDelay: delay }} {...rest}>
      <path
        d="M12 2 C 13 8, 15 11, 21 12 C 15 13, 13 16, 12 22 C 11 16, 9 13, 3 12 C 9 11, 11 8, 12 2 Z"
        fill="currentColor"
      />
    </svg>
  )
}
