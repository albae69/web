export const Route = createFileRoute({
  component: About,
})

function About() {
  return (
    <div className='p-2'>
      <p>
        emm..., still figure it out, just check my{' '}
        <a
          href='http://github.com/albae69'
          target='_blank'
          rel='noopener noreferrer'
        >
          guthib
        </a>{' '}
        - even there's nothing to see
      </p>
    </div>
  )
}
