import { Suspense } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { useUserStore } from '@react-monorepo/core-provider'
import { Route as RouteType } from '@react-monorepo/core-types'
import { Loader } from '@react-monorepo/core-ui'

import { PrivateRoutes } from './ProtectedRoutes'
import { appRoutes } from './routeConfig'

export default function App() {
  const { role } = useUserStore((state) => state)

  const filterRoutes = (routes: RouteType[]) => {
    if (!role) {
      return routes
    }
    return routes.filter((route) => route.roles.includes(role))
  }

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          {filterRoutes(appRoutes).map((route) =>
            route.protected ? (
              <Route
                element={<PrivateRoutes role={role} />}
                key={route.path}
                path={route.path}
              >
                <Route element={route.element} path={route.path} />
              </Route>
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            )
          )}
        </Routes>
      </Router>
    </Suspense>
  )
}
