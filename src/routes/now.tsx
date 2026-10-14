import { usePageMeta } from '../hooks/usePageMeta'
import { devices, games, lastUpdated, steamProfileUrl } from '../data/now'

export const Route = createFileRoute({
  component: Now,
})

function Now() {
  usePageMeta({
    title: 'Now',
    description: 'What Ahmad Albaihaqi is up to now.',
    path: '/now',
  })

  return (
    <section style={{ paddingTop: '4rem' }}>
      <p className='eyebrow'>Now</p>
      <h1 className='lead'>
        What I&apos;m up to <span>right now.</span>
      </h1>

      <div className='body-copy' style={{ marginTop: '1.5rem' }}>
        <p>
          Devices I use and games I&apos;m playing. Update:{' '}
          <span style={{ color: '#6f6a61' }}>{lastUpdated}</span>
        </p>
      </div>

      <hr className='rule' />

      <h2 style={{ fontSize: '1.6rem', margin: '0 0 1rem' }}>Setup &amp; Devices</h2>
      <div>
        {devices.map((d) => (
          <div key={d.name} style={{ padding: '1rem 0', borderTop: '1px solid #e0dacd' }}>
            <h3 style={{ fontSize: '1.05rem', margin: 0 }}>
              {d.name} <span style={{ fontWeight: 400, color: '#6f6a61' }}>— {d.tag}</span>
            </h3>
            <p style={{ margin: '.3rem 0 0', color: '#6f6a61' }}>{d.detail}</p>
          </div>
        ))}
      </div>

      <hr className='rule' />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.6rem', margin: 0 }}>Currently playing</h2>
        <a href={steamProfileUrl} target='_blank' rel='noreferrer' style={{ fontSize: '.95rem' }}>
          Steam Profile ↗
        </a>
      </div>
      <div style={{ marginTop: '1rem' }}>
        {games.map((g) => (
          <div key={g.title} style={{ padding: '1.2rem 0', borderTop: '1px solid #e0dacd' }}>
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>
              {g.title} <span style={{ fontWeight: 400, color: '#6f6a61' }}>· {g.platform}</span>
            </h3>
            <p style={{ margin: '.3rem 0', fontSize: '.9rem', color: '#6f6a61' }}>{g.status}</p>
            <p style={{ margin: '.3rem 0 0' }}>{g.note}</p>
            {g.url && (
              <p style={{ margin: '.5rem 0 0' }}>
                <a href={g.url} target='_blank' rel='noreferrer'>
                  View on Steam ↗
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
