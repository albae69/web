import { Link } from '@tanstack/react-router'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { formatPostDate, posts } from '../data/writing'

export const Route = createFileRoute({
  component: Writing,
})

function Writing() {
  usePageMeta(pages.writing)

  return (
    <div className='page'>
      <header className='page-header'>
        <h1 className='page-title'>Writing</h1>
        <p className='page-subtitle'>
          Essays on frontend, backend, and shipping software.
        </p>
      </header>

      <ul className='list'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to='/writing/$slug'
              params={{ slug: post.slug }}
              className='list-item'
            >
              <span className='list-title'>{post.title}</span>
              <span className='list-meta'>{formatPostDate(post.date)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
