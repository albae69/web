import { Link } from '@tanstack/react-router'
import type { ComponentProps, ReactNode } from 'react'
import { ChevronRightIcon } from './Icons'

type SectionProps = {
  title: string
  href?: ComponentProps<typeof Link>['to']
  children: ReactNode
}

export default function Section({ title, href, children }: SectionProps) {
  return (
    <section className='section'>
      {href ? (
        <Link to={href} className='section-title'>
          {title}
          <ChevronRightIcon size={18} />
        </Link>
      ) : (
        <h2 className='section-title'>{title}</h2>
      )}
      {children}
    </section>
  )
}
