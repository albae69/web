import { Link } from '@tanstack/react-router'
import { nav, site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='site-footer'>
      <div className='footer-inner'>
        <span>
          © {year} {site.name}
        </span>
        <div className='footer-links'>
          {nav.slice(0, 4).map((item) => (
            <Link key={item.href} to={item.href}>
              {item.title}
            </Link>
          ))}
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
