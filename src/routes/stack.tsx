import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { stack } from '../data/stack'

export const Route = createFileRoute({
  component: Stack,
})

function Stack() {
  usePageMeta(pages.stack)

  return (
    <div className='page'>
      <header className='page-header'>
        <h1 className='page-title'>Stack</h1>
        <p className='page-subtitle'>
          Hardware, software, and tools I use every day.
        </p>
      </header>

      {stack.map((group) => (
        <section className='group' key={group.title}>
          <h2 className='group-title'>{group.title}</h2>
          <ul className='list'>
            {group.items.map((item) => {
              const content = (
                <>
                  <span className='list-title'>{item.name}</span>
                  <span className='list-desc'>{item.description}</span>
                </>
              )

              return (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      className='list-item'
                      href={item.href}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {content}
                    </a>
                  ) : (
                    <div className='list-item'>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
