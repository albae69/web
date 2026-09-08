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
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <CustomCursor />
      <BackToTop />
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
