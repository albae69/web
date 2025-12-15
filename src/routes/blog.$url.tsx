import type { ClassAttributes, HTMLAttributes } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { HelloWorld, Summary } from '../posts'

export const Route = createFileRoute({
  component: PostComponent,
})

function PostComponent() {
  const { pathname } = window.location

  const path = pathname.split('/')[2]

  return <div className='my-4'>{render(path)}</div>
}

const components = {
  em(
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) {
    return <i {...properties} />
  },
}

// why i am doing this? idk
function render(url: string) {
  switch (url) {
    case 'hello_world':
      return <HelloWorld components={components} />
    case 'summary':
      return <Summary components={components} />
    default:
      return null
  }
}
