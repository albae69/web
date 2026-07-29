import { Link, useParams } from '@tanstack/react-router'
import type { ClassAttributes, HTMLAttributes } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { HelloWorld, Summary, Revamp } from '../posts'

export const Route = createFileRoute({
  component: PostComponent,
})

const components = {
  em(
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>,
  ) {
    return <i {...properties} />
  },
}

function PostComponent() {
  const { url } = useParams({ from: Route.id })

  return (
    <article className='py-8'>
      <Link
        to='/blog'
        className='font-mono text-xs text-emerald-400 hover:text-emerald-600 transition-colors no-underline mb-4 inline-flex items-center gap-1'
      >
        <svg
          className='w-3.5 h-3.5'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>
        Back to blog
      </Link>

      <div className='glass rounded-xl p-6 border border-black/5 mt-4'>
        {render(url)}
      </div>
    </article>
  )
}

function render(url: string) {
  switch (url) {
    case 'hello_world':
      return <HelloWorld components={components} />
    case 'summary':
      return <Summary components={components} />
    case 'revamp':
      return <Revamp components={components} />
    default:
      return (
        <p className='text-zinc-500'>
          Post not found.{' '}
          <Link to='/blog' className='text-emerald-500'>
            See all posts
          </Link>
        </p>
      )
  }
}
