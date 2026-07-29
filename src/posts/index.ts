import HelloWorld from './hello_word.mdx'
import Summary from './summary.mdx'
import Revamp from './revamp.mdx'

type Post = {
  title: string
  url: string
}

export const POSTS: Post[] = [
  { title: 'Hello World!', url: 'hello_world' },
  { title: 'Summary', url: 'summary' },
  { title: 'Revamping My Personal Website', url: 'revamp' },
]

export { HelloWorld, Summary, Revamp }
