export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return (
    <>
      <h1 className='text-[32px] font-bold mt-4'>Hi I'm Ahmad Albaihaqi.</h1>
      <h3 className='text-[18px] font-bold my-4'>
        I write code, ride motorcycle, and do nothing (jk).
      </h3>
      <p className='mb-2'>
        Currently living in{' '}
        <a target='_blank' href='https://www.google.com/search?q=medan'>
          Gotham City
        </a>{' '}
        - someone please hire me so I can leave this city peacefuly.
      </p>
      <p className='mb-2'>
        I'm trying to do something, but I don't know it yet, someone please
        <a href='mailto:ahmadalbaihaqi69@gmail.com'> tell </a>
        me what to do.
      </p>
    </>
  )
}
