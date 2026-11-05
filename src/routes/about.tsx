import Section from '../components/Section'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../lib/pages'
import { site } from '../data/site'

const experience = [
  {
    role: 'Fullstack Developer (Contract)',
    company: 'IT Consulting Vendor — Hospital Information Systems',
    period: 'Aug 2024 — Present',
  },
  {
    role: 'Staff Frontend Developer (Contract)',
    company: 'PT. Karya Generasi Biru',
    period: 'Oct 2023 — May 2024',
  },
  {
    role: 'Frontend Developer (Part-time)',
    company: 'Shieldtag',
    period: 'Nov 2023 — Jun 2024',
  },
  {
    role: 'Mobile Developer (Project-based)',
    company: 'Coding Collective',
    period: 'Jul 2023 — Nov 2023',
  },
  {
    role: 'Mobile Developer (Contract)',
    company: 'PT. Merkle Inovasi Teknologi',
    period: 'Oct 2022 — May 2023',
  },
  {
    role: 'Mobile Developer (via Wiratek Solusi Asia)',
    company: 'Wiratek Solusi Asia',
    period: 'Nov 2021 — Aug 2022',
  },
  {
    role: 'Mobile Developer (Contract)',
    company: 'PT. Kreasi Alam Teknologi',
    period: 'Dec 2020 — Sep 2021',
  },
]

const education = [
  {
    title: "Bachelor's Degree in Information Engineering",
    detail: 'In progress',
  },
  {
    title: 'Pondok Programmer',
    detail: 'Frontend Developer Bootcamp, 2019–2022',
  },
  {
    title: 'SMK Negeri 1 Percut Sei Tuan',
    detail: 'Civil Engineering, 2015–2018',
  },
]

export const Route = createFileRoute({
  component: About,
})

function About() {
  usePageMeta(pages.about)

  return (
    <div className='page'>
      <header className='page-header'>
        <h1 className='page-title'>About</h1>
        <p className='page-subtitle'>Software engineer in {site.location}.</p>
      </header>

      <div className='prose'>
        <p>
          I&apos;m a software engineer based in {site.location}. For the last 5+
          years I&apos;ve worked across web, mobile, backend, and cloud — mostly
          in healthcare, fintech, and logistics.
        </p>
        <p>
          Currently I&apos;m a fullstack developer on hospital information
          systems: an EMR used by 50+ medical staff, claim-report automation
          that cut reporting from two days to two hours, and a Go + AWS Textract
          pipeline handling around 1,000 transactions a day.
        </p>
        <p>
          Previously I did mobile and frontend work: crypto trading apps for
          500+ traders, HokBen mobile with a 4.6 rating, and GPS analytics for
          1,000+ drivers. Outside work: Dota 2, mechanical keyboards, and a
          Steam backlog that keeps growing.
        </p>
      </div>

      <Section title='Work'>
        <div className='work-list'>
          {experience.map((job) => (
            <div className='work-item' key={`${job.company}-${job.period}`}>
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <span className='work-period'>{job.period}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title='Education'>
        <div className='work-list'>
          {education.map((item) => (
            <div className='work-item' key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title='Contact'>
        <ul className='list'>
          <li>
            <a className='list-item' href={`mailto:${site.email}`}>
              <span className='list-title'>Email</span>
              <span className='list-desc'>{site.email}</span>
            </a>
          </li>
          <li>
            <a
              className='list-item'
              href='https://github.com/albae69'
              target='_blank'
              rel='noreferrer'
            >
              <span className='list-title'>GitHub</span>
              <span className='list-desc'>github.com/albae69</span>
            </a>
          </li>
          <li>
            <a
              className='list-item'
              href='https://linkedin.com/in/albae69'
              target='_blank'
              rel='noreferrer'
            >
              <span className='list-title'>LinkedIn</span>
              <span className='list-desc'>linkedin.com/in/albae69</span>
            </a>
          </li>
        </ul>
      </Section>
    </div>
  )
}
