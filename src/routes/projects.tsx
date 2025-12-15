export const Route = createFileRoute({
  component: Projects,
})

function Projects() {
  return (
    <div className='p-2'>
      <ul className='space-y-2'>
        <li className='italic'>
          <a href='https://shieldtag.co' target='_blank' rel='noreferrer'>
            Shieldtag
          </a>{' '}
          <br />
          <p>Next.js, Strapi, REST API</p>
          <p>
            - Developed a full-stack web application using Next.js and Strapi
            CMS
          </p>
          <p>
            - Implemented dynamic content management, API integration, and
            responsive UI
          </p>
          <p>- Focused on performance, SEO, and maintainable code structure</p>
        </li>
        <li className='italic'>
          <a
            href='https://play.google.com/store/apps/details?id=id.co.hokben.revamp&hl=id&pli=1'
            target='_blank'
            rel='noreferrer'
          >
            Hokben Mobile Apps
          </a>{' '}
          <p>
            - Contributed to the development and maintenance of a production
            mobile application
          </p>
          <p>
            - Implemented new UI designs based on Figma (homepage, menu,
            rewards, news)
          </p>
          <p>
            - Fixed bugs and enhanced existing features to improve user
            experience
          </p>
          <p>
            -Collaborated with designers and developers in an active production
            environment
          </p>
        </li>
      </ul>
      <p className='my-2'>
        These are my most notable projects. I’ve also contributed through bug
        fixes and converting Figma designs into React and React Native
        implementations. My current stack includes React, Flutter, and Golang
        for backend.
      </p>
    </div>
  )
}
