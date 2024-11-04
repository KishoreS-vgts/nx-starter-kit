import React, { Suspense, useMemo } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { useUserStore } from '@react-monorepo/core-provider'
import { Route as RouteType } from '@react-monorepo/core-types'
import { Loader } from '@react-monorepo/core-ui'

import { PrivateRoutes } from './ProtectedRoutes'
import { appRoutes } from './routeConfig'

export default function App() {
  const { role } = useUserStore((state) => state)

  const filteredRoutes: RouteType[] = useMemo(
    () =>
      role
        ? appRoutes.filter((route) => route.roles.includes(role))
        : appRoutes,
    [role]
  )

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          {filteredRoutes.map((route) => {
            const Element = route.element
            const Layout = route.layout || React.Fragment

            const WrappedElement = (
              <Layout>
                <Element />
              </Layout>
            )

            return route.protected ? (
              <Route
                element={<PrivateRoutes role={role} />}
                key={route.path}
                path={route.path}
              >
                <Route element={WrappedElement} path={route.path} />
              </Route>
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element={WrappedElement}
              />
            )
          })}
        </Routes>
      </Router>
    </Suspense>
  )
}
