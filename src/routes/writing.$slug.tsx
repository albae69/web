import { Link } from '@tanstack/react-router'
import { ChevronRightIcon } from '../components/Icons'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { formatPostDate, posts } from '../data/writing'

export const Route = createFileRoute({
  component: Post,
})

function Post() {
  const { slug } = Route.useParams()
  const post = posts.find((item) => item.slug === slug)

  usePageMeta(
    post
      ? {
          ...pages.writing,
          title: post.title,
          description: post.summary,
          path: `/writing/${post.slug}`,
        }
      : pages.writing,
  )

  if (!post) {
    return (
      <div className='page'>
        <header className='page-header'>
          <h1 className='page-title'>Post not found</h1>
          <p className='page-subtitle'>
            That essay doesn’t exist. <Link to='/writing'>Back to writing</Link>.
          </p>
        </header>
      </div>
    )
  }

  return (
    <article className='article'>
      <Link to='/writing' className='back-link'>
        <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
          <ChevronRightIcon size={14} />
        </span>
        Writing
      </Link>

      <header className='page-header'>
        <h1 className='article-title'>{post.title}</h1>
        <p className='article-meta'>{formatPostDate(post.date)}</p>
      </header>

      <div className='body-copy'>
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
