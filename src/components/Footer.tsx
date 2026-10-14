import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ marginTop: '5rem', paddingBottom: '3rem' }}>
      <hr className='rule' style={{ margin: '0 0 2.5rem' }} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-between',
          marginBottom: '3rem',
        }}
      >
        <div>
          <span style={{ fontSize: '.85rem', color: '#6f6a61' }}>Say Hello</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: '.5rem 0 0' }}>
            <li>
              <a href='mailto:ahmadalbaihaqi69@gmail.com'>ahmadalbaihaqi69@gmail.com</a>
            </li>
            <li>
              <a href='https://github.com/albae69' target='_blank' rel='noreferrer'>
                github.com/albae69
              </a>
            </li>
          </ul>
        </div>

        <ul
          style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.4rem' }}
        >
          <li>
            <Link to='/projects'>My Work</Link>
          </li>
          <li>
            <Link to='/resume'>My Résumé</Link>
          </li>
        </ul>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '.9rem',
          color: '#6f6a61',
        }}
      >
        <span>© Ahmad Albaihaqi {year}</span>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '1.25rem' }}>
          <li>
            <a href='https://github.com/albae69' target='_blank' rel='noreferrer' aria-label='Ahmad on GitHub'>
              GH
            </a>
          </li>
          <li>
            <a href='https://linkedin.com/in/albae69' target='_blank' rel='noreferrer' aria-label='Ahmad on LinkedIn'>
              LN
            </a>
          </li>
          <li>
            <a href='mailto:ahmadalbaihaqi69@gmail.com' aria-label='Email Ahmad'>
              EM
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
