import { Link } from '@tanstack/react-router'

const Header = () => {
  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
  ]
  return (
    <header>
      <h1 className='text-2xl font-bold mb-4'>Ahmad Albaihaqi</h1>

      <ul className='flex gap-4'>
        {links.map((i) => (
          <li key={i.title}>
            <Link to={i.url}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
