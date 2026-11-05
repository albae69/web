import { createRootRoute, Outlet } from '@tanstack/react-router'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function RootLayout() {
  return (
    <>
      <a href='#main' className='skip-link'>
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id='main' tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
