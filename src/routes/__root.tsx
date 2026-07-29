import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className='animate-fade-in'>
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
