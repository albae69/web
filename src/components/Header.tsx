import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const links = [
  { title: 'My Work', url: '/projects' },
  { title: 'About', url: '/about' },
  { title: 'Now', url: '/now' },
] as const

const socials = [
  { label: 'GH', href: 'https://github.com/albae69', aria: 'Ahmad on GitHub' },
  { label: 'LN', href: 'https://linkedin.com/in/albae69', aria: 'Ahmad on LinkedIn' },
  { label: 'EM', href: 'mailto:ahmadalbaihaqi69@gmail.com', aria: 'Email Ahmad' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open ])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open ])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(244,241,235,0.92)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e0dacd',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 0',
          }}
        >
          <Link
            to='/'
            aria-label='Logo, go to homepage.'
            style={{ textDecoration: 'none', lineHeight: 1 }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: '1.6rem',
                letterSpacing: '-0.04em',
                color: '#16150f',
              }}
            >
              albae<span style={{ color: '#8a8478' }}>.</span>
            </span>
          </Link>

          <button
            type='button'
            aria-label={open ? 'Close contact menu' : 'Open contact menu'}
            aria-controls='contact-menu'
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 44,
              height: 44,
              display: 'grid',
              placeItems: 'center',
              background: 'transparent',
              border: 0,
            }}
          >
            <span style={{ display: 'block', width: 28, position: 'relative', height: 16 }}>
              <span
                style={{
                  position: 'absolute',
                  top: open ? 7 : 2,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: '#16150f',
                  transform: open ? 'rotate(45deg)' : 'none',
                  transition: 'transform .25s ease, top .25s ease',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: open ? 7 : 12,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: '#16150f',
                  transform: open ? 'rotate(-45deg)' : 'none',
                  transition: 'transform .25s ease, top .25s ease',
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <nav
          id='contact-menu'
          aria-label='Contact menu'
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: '#f4f1eb',
            padding: '6rem 1.5rem 2rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem' }}>
              <li style={{ borderTop: '1px solid #e0dacd' }}>
                <Link
                  to='/'
                  style={{
                    display: 'block',
                    padding: '1rem 0',
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
              </li>
              {links.map((l) => (
                <li key={l.url} style={{ borderTop: '1px solid #e0dacd' }}>
                  <Link
                    to={l.url}
                    style={{
                      display: 'block',
                      padding: '1rem 0',
                      fontSize: '2rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      textDecoration: 'none',
                    }}
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
              <li style={{ borderTop: '1px solid #e0dacd', borderBottom: '1px solid #e0dacd' }}>
                <Link
                  to='/resume'
                  style={{
                    display: 'block',
                    padding: '1rem 0',
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                  }}
                >
                  My Résumé
                </Link>
              </li>
            </ul>

            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '.85rem', color: '#6f6a61' }}>Say Hello</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: '.5rem 0 0' }}>
                <li>
                  <a href='mailto:ahmadalbaihaqi69@gmail.com' style={{ fontSize: '1.15rem' }}>
                    ahmadalbaihaqi69@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/albae69'
                    target='_blank'
                    rel='noreferrer'
                    style={{ fontSize: '1.15rem' }}
                  >
                    github.com/albae69
                  </a>
                </li>
              </ul>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '1.25rem',
              }}
            >
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.aria} style={{ fontSize: '.9rem' }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  )
}
