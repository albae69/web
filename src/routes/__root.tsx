import { createRootRoute, Outlet } from '@tanstack/react-router'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
