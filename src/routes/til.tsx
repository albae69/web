import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { notes } from '../data/til'
import { formatPostDate } from '../data/writing'

export const Route = createFileRoute({
  component: Til,
})

function Til() {
  usePageMeta(pages.til)

  return (
    <div className='page'>
      <header className='page-header'>
        <h1 className='page-title'>TIL</h1>
        <p className='page-subtitle'>Short today-I-learned notes.</p>
      </header>

      <div className='notes'>
        {notes.map((note) => (
          <article className='note' key={note.title}>
            <span className='note-date'>{formatPostDate(note.date)}</span>
            <h2 className='note-title'>{note.title}</h2>
            <p className='note-body'>{note.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
