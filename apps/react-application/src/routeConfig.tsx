import { lazy } from 'react'

import { Route } from '@react-monorepo/core-types'

import Layout from './Layout'
import NotFound from './pages/404.page'

const Login = lazy(() => import('./pages/Login.page'))
const DashBoard = lazy(() => import('./pages/DashBoard.page'))
const User = lazy(() => import('./pages/User.page'))
// permissions can be sent from the backend so that we can maintain a secure routing

export const appRoutes: Route[] = [
  {
    path: '/login',
    element: Login,
    roles: ['user', 'admin'],
  },
  {
    path: '*',
    element: NotFound,
    roles: ['user', 'admin'],
  },
  {
    path: '/dashboard',
    element: DashBoard,
    roles: ['admin'],
    protected: true,
    layout: Layout,
  },
  {
    path: '/admin/profile',
    element: User,
    roles: ['admin'],
    protected: true,
    layout: Layout,
  },
  {
    path: '/user/dashboard',
    element: User,
    roles: ['user'],
    protected: true,
  },
]
