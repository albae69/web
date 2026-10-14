import { Link } from '@tanstack/react-router'
import { usePageMeta } from '../hooks/usePageMeta'

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  usePageMeta({
    title: 'Ahmad Albaihaqi | Software Engineer',
    description: "Hi I'm Ahmad Albaihaqi. I'm a software engineer",
    path: '/',
  })

  return (
    <section style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
      <p className='eyebrow'>Hey, I&apos;m Bae</p>
      <h1 className='lead'>
        A Software Engineer{' '}
        <span>
          building reliable web &amp; mobile products for production.
        </span>
      </h1>

      <div className='body-copy' style={{ marginTop: '2.5rem' }}>
        <p>
          I have 5+ years of experience building web apps, mobile apps, and the
          APIs + cloud behind them — React/Next.js, Flutter, Go, and AWS — that
          teams can actually maintain and ship on.
        </p>
        <p>
          Currently I&apos;m a Fullstack Developer on hospital information
          systems: an EMR used by 50+ medical staff, claim-report automation
          that cut reporting from 2 days to 2 hours, and a Go + AWS Textract
          pipeline at around 1,000 transactions/day.
        </p>
        <p>
          Previously I did mobile &amp; frontend across fintech, healthcare, and
          logistics — crypto trading apps for 500+ traders, HokBen mobile with
          a 4.6 rating, GPS analytics for 1,000+ drivers.
        </p>
        <p style={{ color: '#6f6a61' }}>
          Outside work: Dota 2, mechanical keyboards, and a Steam backlog that
          keeps growing.
        </p>

        <Link
          to='/projects'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            marginTop: '1rem',
            fontSize: '1.15rem',
            fontWeight: 600,
            textDecoration: 'none',
            borderBottom: '2px solid #16150f',
            paddingBottom: '.2rem',
          }}
        >
          See my work
          <span aria-hidden>↗</span>
        </Link>

        <div style={{ marginTop: '3rem' }}>
          <a
            href='mailto:ahmadalbaihaqi69@gmail.com'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              fontSize: '1.05rem',
            }}
          >
            Contact me
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
