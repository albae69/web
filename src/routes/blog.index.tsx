import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { POSTS, getAllTags, getPostsByTag, formatDate } from '../posts'
import ScrollReveal from '../components/ScrollReveal'

export const Route = createFileRoute({
  component: Blog,
})

function Blog() {
  const [activeTag, setActiveTag] = useState('all')
  const allTags = getAllTags()
  const filteredPosts = getPostsByTag(activeTag)
  const featuredPost = POSTS.find(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)

  return (
    <section className='py-8'>
      {/* Header */}
      <ScrollReveal direction='left' delay={0}>
        <span className='section-prefix mb-2 block'>// blog</span>
      </ScrollReveal>
      <ScrollReveal direction='up' delay={100}>
        <h2 className='text-3xl font-bold text-black dark:text-white mb-2'>Blog Posts</h2>
      </ScrollReveal>
      <ScrollReveal direction='up' delay={200}>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-6'>
          Thoughts on tech, coding, and building products
        </p>
      </ScrollReveal>

      {/* Tag Filter */}
      <ScrollReveal direction='up' delay={300}>
        <div className='flex flex-wrap gap-2 mb-8'>
          <button
            onClick={() => setActiveTag('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeTag === 'all'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            All
            <span className='ml-1 opacity-70'>({POSTS.length})</span>
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 capitalize ${
                activeTag === tag
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured Post */}
      {featuredPost && activeTag === 'all' && (
        <ScrollReveal direction='up' delay={400}>
          <div className='mb-6'>
            <h3 className='text-xs font-mono text-emerald-500 mb-3 uppercase tracking-wider'>★ Featured</h3>
            <Link
              to={`/blog/$url`}
              params={{ url: featuredPost.url }}
              className='block glass rounded-xl border border-emerald-200 dark:border-emerald-900 overflow-hidden no-underline hover:no-underline group'
            >
              {/* Gradient header */}
              <div className='bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2'>
                <span className='text-xs font-mono text-white/90'>Latest Post</span>
              </div>

              <div className='p-5'>
                <div className='flex items-start justify-between mb-2'>
                  <h4 className='text-lg font-bold text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors'>
                    {featuredPost.title}
                  </h4>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 ml-2 group-hover:translate-x-1 transition-transform'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='5' y1='12' x2='19' y2='12' />
                    <polyline points='12 5 19 12 12 19' />
                  </svg>
                </div>

                <p className='text-sm text-zinc-600 dark:text-zinc-400 mb-3'>
                  {featuredPost.description}
                </p>

                <div className='flex items-center justify-between'>
                  <div className='flex flex-wrap gap-1.5'>
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-[10px] font-mono capitalize'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-500'>
                    <span>{formatDate(featuredPost.date)}</span>
                    <span>·</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </ScrollReveal>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          <ScrollReveal direction='up' delay={500}>
            <h3 className='text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-3 uppercase tracking-wider'>
              {activeTag === 'all' ? 'All Posts' : `#${activeTag}`}
            </h3>
          </ScrollReveal>
          <div className='space-y-3'>
            {regularPosts.map((post, index) => (
              <ScrollReveal key={post.url} direction='up' delay={Math.min((index + 5) * 100, 700)}>
                <Link
                  to={`/blog/$url`}
                  params={{ url: post.url }}
                  className='glass rounded-xl p-4 border border-black/5 dark:border-white/10 glass-hover flex items-start gap-4 no-underline hover:no-underline group'
                >
                  {/* Date column */}
                  <div className='text-center shrink-0 w-12'>
                    <div className='text-xs text-zinc-400 dark:text-zinc-500'>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className='text-xl font-bold text-emerald-500'>
                      {new Date(post.date).getDate()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex-1 min-w-0'>
                    <h4 className='text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1'>
                      {post.title}
                    </h4>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-2'>
                      {post.description}
                    </p>
                    <div className='flex items-center gap-3'>
                      <div className='flex flex-wrap gap-1'>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className='px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded text-[10px] font-mono capitalize'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className='text-[10px] text-zinc-400 dark:text-zinc-500'>
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg
                    className='w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-1'
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <ScrollReveal direction='up' delay={400}>
          <div className='text-center py-16 glass rounded-xl border border-black/5 dark:border-white/10'>
            <div className='text-4xl mb-4'>📝</div>
            <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
              No posts found
            </h3>
            <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-4'>
              No posts with the tag "{activeTag}" yet.
            </p>
            <button
              onClick={() => setActiveTag('all')}
              className='text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
            >
              View all posts →
            </button>
          </div>
        </ScrollReveal>
      )}
    </section>
  )
}
