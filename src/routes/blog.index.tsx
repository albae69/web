import { Link } from '@tanstack/react-router'
import { POSTS } from '../posts'

export const Route = createFileRoute({
  component: Blog,
})

function Blog() {
  return (
    <div className='p-2'>
      <ul>
        {POSTS.map((item) => (
          <li key={item.title}>
            <Link to={`/blog/$url`} params={{ url: item.url }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
