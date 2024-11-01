import { lazy } from 'react'

import { Navigate } from 'react-router-dom'

import { Route } from '@react-monorepo/core-types'

import NotFound from './pages/404.page'

const Login = lazy(() => import('./pages/Login.page'))
const DashBoard = lazy(() => import('./pages/DashBoard.page'))

// permissions can be sent from the backend so that we can maintain a secure routing

export const appRoutes: Route[] = [
  {
    path: '/login',
    element: <Login />,
    roles: ['user', 'admin'],
  },
  {
    path: '/',
    element: <Navigate to="/login" />,
    roles: ['user', 'admin'],
  },
  {
    path: '*',
    element: <NotFound />,
    roles: ['user', 'admin'],
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
    roles: ['admin'],
    protected: true,
  },
  {
    path: '/user/dashboard',
    element: <div>Hello user welcome</div>,
    roles: ['user'],
    protected: true,
  },
]
