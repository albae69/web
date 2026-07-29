import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

const links = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Projects', url: '/projects' },
  { title: 'Blog', url: '/blog' },
] as const

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <header className='sticky top-0 z-50 py-4 mb-8 glass border-b border-black/5'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link
          to='/'
          className='no-underline hover:no-underline hover:text-inherit'
        >
          <span className='font-mono text-xs text-emerald-500 block leading-none'>
            // albae69
          </span>
          <span className='font-sans font-bold text-lg text-black'>
            Ahmad Albaihaqi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-1'>
          {links.map((link) => {
            const isActive = pathname === link.url
            return (
              <Link
                key={link.title}
                to={link.url}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors text-zinc-600'
          aria-label='Toggle menu'
        >
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
            {mobileOpen ? (
              <path
                d='M5 5L15 15M15 5L5 15'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            ) : (
              <path
                d='M3 5H17M3 10H17M3 15H17'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className='md:hidden mt-4 pt-4 border-t border-black/5 flex flex-col gap-1'>
          {links.map((link) => {
            const isActive = pathname === link.url
            return (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all no-underline ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header
