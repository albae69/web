import HelloWorld from './hello_word.mdx'
import Summary from './summary.mdx'

type Post = {
  title: string
  url: string
}

export const POSTS: Post[] = [
  { title: 'Hello World!', url: 'hello_world' },
  { title: 'Summary', url: 'summary' },
]

export { HelloWorld, Summary }
