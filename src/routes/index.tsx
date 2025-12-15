export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return (
    <>
      <h1 className='text-[32px] font-bold mt-4'>Hi I'm Ahmad Albaihaqi.</h1>
      <p>
        I write code, ride motorcycles, and pretend I’m doing something (jk).
      </p>
    </>
  )
}
