import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'

// Handle GitHub Pages 404 redirect
function redirectFrom404() {
  const l = window.location
  if (l.search && l.search.includes('?/')) {
    const path = l.search.slice(2).replace(/~and~/g, '&')
    const hash = l.hash || ''
    window.history.replaceState(null, '', path + hash)
  }
}

redirectFrom404()

// Create a new router instance
const router = createRouter({ routeTree, basepath: '/' })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const appReady = new Promise<void>((resolve) => {
    const observer = new MutationObserver(() => {
      if (!rootElement.firstChild) return
      observer.disconnect()
      resolve()
    })
    observer.observe(rootElement, { childList: true })
  })

  const bootImage = document.querySelector<HTMLImageElement>('#boot-screen img')
  const bootReady =
    !bootImage || document.documentElement.classList.contains('skip-boot')
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          if (bootImage.complete) {
            resolve()
            return
          }
          bootImage.addEventListener('load', () => resolve(), { once: true })
          bootImage.addEventListener('error', () => resolve(), { once: true })
        })

  void Promise.all([appReady, bootReady]).then(() => {
    // ponytail: fixed shell hold stabilizes slow-mobile LCP; replace with a paint signal if startup timing changes.
    window.setTimeout(() => {
      requestAnimationFrame(() => document.documentElement.classList.add('app-ready'))
    }, 500)
  })

  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <CustomCursor />
      <BackToTop />
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
