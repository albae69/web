import Section from '../components/Section'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { devices, games, lastUpdated, steamProfileUrl } from '../data/now'

export const Route = createFileRoute({
  component: Now,
})

function Now() {
  usePageMeta(pages.now)

  return (
    <div className='page'>
      <header className='page-header'>
        <h1 className='page-title'>Now</h1>
        <p className='page-subtitle'>
          What I&apos;m up to right now. Updated {lastUpdated}.
        </p>
      </header>

      <Section title='Setup & devices'>
        <ul className='list'>
          {devices.map((device) => (
            <li className='list-item' key={device.name}>
              <span className='list-title'>{device.name}</span>
              <span className='list-desc'>
                {device.tag} — {device.detail}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title='Currently playing'>
        <ul className='list'>
          {games.map((game) => (
            <li className='list-item' key={game.title}>
              <span className='list-title'>{game.title}</span>
              <span className='list-desc'>
                {game.platform} — {game.note}
              </span>
              {game.url && (
                <span className='list-meta'>
                  <a href={game.url} target='_blank' rel='noreferrer'>
                    Steam ↗
                  </a>
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className='page-subtitle' style={{ fontSize: '0.9rem' }}>
          <a href={steamProfileUrl} target='_blank' rel='noreferrer'>
            Steam profile ↗
          </a>
        </p>
      </Section>
    </div>
  )
}
