import { Link, useParams } from '@tanstack/react-router'
import { useState, useEffect, type ClassAttributes, type HTMLAttributes, type ReactNode } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Highlight, themes } from 'prism-react-renderer'
import { POSTS, formatDate, getPostComponent } from '../posts'
import ScrollReveal from '../components/ScrollReveal'
import { Squiggle, StarDoodle } from '../components/Doodle'
import { useTheme } from '../hooks/useTheme'

export const Route = createFileRoute({
  component: PostComponent,
})

function CodeBlock({ children, className }: { children: string; className?: string }) {
  const { theme } = useTheme()
  const language = className?.replace('language-', '') || 'plaintext'

  return (
    <Highlight
      theme={theme === 'dark' ? themes.nightOwl : themes.github}
      code={children.trim()}
      language={language as any}
    >
      {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${highlightClassName} rounded-xl p-4 overflow-x-auto my-4 text-sm font-mono border border-zinc-800 dark:border-zinc-900`}
          style={{
            ...style,
            backgroundColor: theme === 'dark' ? '#0d1117' : '#f6f8fa',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className='table-row'>
              <span className='table-cell pr-4 text-right text-zinc-500 dark:text-zinc-600 select-none w-8'>
                {i + 1}
              </span>
              <span className='table-cell'>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const components = {
  em(
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>,
  ) {
    return <i {...properties} />
  },
  pre(
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLPreElement> &
      HTMLAttributes<HTMLPreElement>,
  ) {
    const children = properties.children as ReactNode
    const childArray = Array.isArray(children) ? children : [children]
    const codeChild = childArray.find(
      (child) => typeof child === 'object' && child !== null && 'props' in child,
    ) as { props?: { className?: string; children?: string } } | undefined

    if (codeChild?.props?.className?.includes('language-')) {
      return <CodeBlock className={codeChild.props.className}>{codeChild.props.children || ''}</CodeBlock>
    }

    return (
      <pre
        {...properties}
        className='bg-zinc-900 dark:bg-zinc-950 text-zinc-100 rounded-xl p-4 overflow-x-auto my-4 text-sm font-mono border border-zinc-800 dark:border-zinc-900'
      />
    )
  },
  code(
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>,
  ) {
    const isInline = !properties.className?.toString().includes('language-')
    if (isInline) {
      return (
        <code
          {...properties}
          className='px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded text-[0.875em] font-mono'
        />
      )
    }
    return <code {...properties} />
  },
}

function PostContent({ url, components }: { url: string; components: any }) {
  const [PostComponent, setPostComponent] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    const loader = getPostComponent(url)
    if (loader) {
      loader().then((module) => {
        setPostComponent(() => module.default)
      })
    }
  }, [url])

  if (!PostComponent) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin' />
      </div>
    )
  }

  return <PostComponent components={components} />
}

function PostComponent() {
  const { url } = useParams({ from: Route.id })
  const post = POSTS.find(p => p.url === url)

  return (
    <article className='py-8'>
      <ScrollReveal direction='left' delay={0}>
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
      </ScrollReveal>

      {/* Post Header */}
      {post && (
        <ScrollReveal direction='up' delay={100}>
          <div className='mb-6'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-xs font-mono text-zinc-400 dark:text-zinc-500'>
                {formatDate(post.date)}
              </span>
              <span className='text-zinc-300 dark:text-zinc-600'>·</span>
              <span className='text-xs font-mono text-zinc-400 dark:text-zinc-500'>
                {post.readingTime} read
              </span>
            </div>
            <div className='flex flex-wrap gap-1.5'>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className='px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-[10px] font-mono capitalize'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Post Content */}
      <div className='glass rounded-xl p-6 border border-black/5 dark:border-white/10'>
        <PostContent url={url} components={components} />
      </div>

      {/* Post Footer */}
      <ScrollReveal direction='up' delay={300}>
        <div className='mt-8 pt-6 border-t border-black/5 dark:border-white/10'>
          <div className='flex items-center justify-center mb-4 text-zinc-300 dark:text-zinc-600'>
            <Squiggle className='w-16 h-3' />
            <StarDoodle className='w-3 h-3 text-emerald-400 ml-2' delay='1.2s' />
          </div>
          <div className='flex items-center justify-between'>
            <Link
              to='/blog'
              className='text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors no-underline'
            >
              ← More posts
            </Link>
            <a
              href='mailto:ahmadalbaihaqi69@gmail.com'
              className='text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors no-underline'
            >
              Feedback? →
            </a>
          </div>
        </div>
      </ScrollReveal>
    </article>
  )
}
