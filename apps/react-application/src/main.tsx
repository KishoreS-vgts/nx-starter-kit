import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app/app'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/dashboard',
    element: <App />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
