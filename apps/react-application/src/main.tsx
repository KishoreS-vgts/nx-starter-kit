import { StrictMode } from 'react'

import * as ReactDOM from 'react-dom/client'

import { ReactQueryProvider } from '@react-monorepo/core-provider'

import App from './App'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>
)
