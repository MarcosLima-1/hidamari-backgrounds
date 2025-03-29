import { NotFound } from '@/components/status/not-found'
import { reportWebVitals } from '@/report-web-vitals'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree, defaultNotFoundComponent: () => <NotFound /> })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </StrictMode>
  )
}
reportWebVitals(console.log)
