import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { categories, projects } from '../data/projects'
import type { Category } from '../data/projects'

export const Route = createFileRoute({
  component: Projects,
})

function shortName(name: string) {
  return name.split(' — ')[0]
}

function Projects() {
  usePageMeta(pages.projects)

  const [active, setActive] = useState<Category>('all')
  const filtered =
    active === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(active))

  return (
    <div className='page'>
      <header className='page-header'>
        <h1 className='page-title'>Projects</h1>
        <p className='page-subtitle'>
          Selected work across healthcare, fintech, and logistics.
        </p>
      </header>

      <div className='filters'>
        {categories.map((category) => (
          <button
            key={category.id}
            type='button'
            className='filter'
            aria-pressed={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <ul className='list'>
        {filtered.map((project) =>
          project.url.startsWith('http') ? (
            <li key={project.name}>
              <a
                className='list-item'
                href={project.url}
                target='_blank'
                rel='noreferrer'
              >
                <span className='list-title'>{shortName(project.name)}</span>
                <span className='list-desc'>{project.points[0]}</span>
              </a>
            </li>
          ) : (
            <li key={project.name} className='list-item'>
              <span className='list-title'>{shortName(project.name)}</span>
              <span className='list-desc'>{project.points[0]}</span>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
