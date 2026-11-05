import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { nav, site } from '../data/site'
import { GitHubIcon, LinkedInIcon, MailIcon, MenuIcon } from './Icons'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
} as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    if (!menu) return
    const toggle = toggleRef.current

    const focusables = Array.from(
      menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !first || !last) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [open])

  return (
    <>
      <header className='site-header'>
        <div className='header-inner'>
          <button
            ref={toggleRef}
            type='button'
            className='icon-button'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls='site-menu'
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
          <Link to='/' className='brand'>
            {site.name}
          </Link>
        </div>
      </header>

      {open && (
        <div className='menu-overlay'>
          <nav ref={menuRef} id='site-menu' aria-label='Site' className='menu-inner'>
            <ul className='menu-list'>
              <li>
                <Link
                  to='/'
                  className='menu-link'
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className='menu-link'
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span className='menu-label'>Elsewhere</span>
              <ul className='menu-socials'>
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.icon]
                  const external = social.href.startsWith('http')
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <Icon size={18} />
                        {social.label}
                      </a>
                    </li>
                  )
                })}
                <li>
                  <a
                    href='https://github.com/albae69'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Source
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
