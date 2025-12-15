export const Route = createFileRoute({
  component: About,
})

function About() {
  return (
    <div className='my-4'>
      <p>
        Still figuring things out — feel free to check my{' '}
        <a
          href='https://github.com/albae69'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          GitHub
        </a>
        , though there’s not much to see (yet).
      </p>
      <p className='mt-2'>
        If you need extra help or a freelance dev, just{' '}
        <a
          href='mailto:ahmadalbaihaqi69@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          reach out 😀
        </a>
      </p>
    </div>
  )
}
