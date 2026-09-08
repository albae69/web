import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import ThemeToggle from './ThemeToggle'

const links = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Projects', url: '/projects' },
  { title: 'Blog', url: '/blog' },
] as const

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const scrollProgress = useScrollProgress()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 glass border-b border-black/5 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="no-underline hover:no-underline hover:text-inherit"
        >
          <span className="font-mono text-xs text-emerald-500 block leading-none">
            // albae69
          </span>
          <span className="font-sans font-bold text-lg text-black dark:text-white">
            Ahmad Albaihaqi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.url
            return (
              <Link
                key={link.title}
                to={link.url}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>

        {/* Right side - Theme toggle + Mobile toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="pt-4 pb-2 border-t border-black/5 flex flex-col gap-1">
          {links.map((link, index) => {
            const isActive = pathname === link.url
            return (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all no-underline ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
