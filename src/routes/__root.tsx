import { createRootRoute, Outlet } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() => import('@tanstack/react-router-devtools').then((m) => ({ default: m.TanStackRouterDevtools })))
  : null

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <Header />
      <main className='animate-fade-in px-5 sm:px-6 overflow-x-clip'>
        <Outlet />
      </main>
      <Footer />
      {TanStackRouterDevtools && (
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      )}
    </>
  ),
})
