import { Link } from '@tanstack/react-router'
import Section from '../components/Section'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { posts } from '../data/writing'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
} as const

export const Route = createFileRoute({
  component: Index,
})

function shortName(name: string) {
  return name.split(' — ')[0]
}

function Index() {
  usePageMeta(pages.home)

  return (
    <div className='page'>
      <div className='hero'>
        <img
          className='avatar'
          src={site.avatar}
          alt={site.name}
          width={60}
          height={60}
        />
        <h1 className='hero-name'>{site.name}</h1>
        <p className='hero-intro'>{site.intro}</p>
      </div>

      <div className='socials'>
        {site.socials.map((social) => {
          const Icon = socialIcons[social.icon]
          const external = social.href.startsWith('http')
          return (
            <a
              key={social.label}
              className='social-link'
              href={social.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={social.label}
            >
              <Icon />
            </a>
          )
        })}
      </div>

      <Section title='Writing' href='/writing'>
        <ul className='list'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to='/writing/$slug'
                params={{ slug: post.slug }}
                className='list-item'
              >
                <span className='list-title'>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title='Projects' href='/projects'>
        <ul className='list'>
          {projects.map((project) => {
            const content = (
              <>
                <span className='list-title'>{shortName(project.name)}</span>
                <span className='list-desc'>{project.points[0]}</span>
              </>
            )

            return (
              <li key={project.name}>
                {project.url.startsWith('http') ? (
                  <a
                    className='list-item'
                    href={project.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {content}
                  </a>
                ) : (
                  <Link to='/projects' className='list-item'>
                    {content}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </Section>
    </div>
  )
}
