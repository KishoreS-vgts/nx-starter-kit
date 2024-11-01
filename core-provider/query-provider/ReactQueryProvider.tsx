import { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'

import queryClient from './query-client'

interface ReactQueryProviderProps {
  children: ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
