import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <Header />
      <main className='animate-fade-in px-5 sm:px-6 overflow-x-clip'>
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
