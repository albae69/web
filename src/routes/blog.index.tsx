import { Link } from '@tanstack/react-router'
import { POSTS } from '../posts'

export const Route = createFileRoute({
  component: Blog,
})

function Blog() {
  return (
    <section className='py-8'>
      <span className='section-prefix mb-2 block animate-fade-in'>// blog</span>
      <h2 className='text-3xl font-bold text-black mb-6 animate-fade-in-up delay-1'>
        Blog Posts
      </h2>

      {POSTS.length === 0 ? (
        <p className='text-zinc-400 text-sm animate-fade-in-up delay-2'>
          No posts yet.
        </p>
      ) : (
        <div className='space-y-3'>
          {POSTS.map((post, index) => (
            <Link
              key={post.url}
              to={`/blog/$url`}
              params={{ url: post.url }}
              className={`glass rounded-xl p-4 border border-black/5 glass-hover flex items-center gap-4 no-underline hover:no-underline group animate-fade-in-up delay-${Math.min(index + 2, 6)}`}
            >
              <span className='font-mono text-xs text-emerald-400 w-8 shrink-0'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='flex-1 min-w-0'>
                <span className='text-sm font-medium text-zinc-800 group-hover:text-emerald-600 transition-colors'>
                  {post.title}
                </span>
              </div>
              <svg
                className='w-4 h-4 text-zinc-300 group-hover:text-emerald-400 transition-colors shrink-0'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='9 18 15 12 9 6' />
              </svg>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
