import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import ErrorPage from './pages/Error.Page'
import NotFound from './pages/404.page'
import { PrivateRoutes } from './ProtectedRoutes'
import { useUserProfile } from '@react-monorepo/store'
import routePaths from './routes.json'

const Login = lazy(() => import('./pages/Login.page'))
const DashBoard = lazy(() => import('./pages/DashBoard.page'))

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <Router>
        <RoleBasedRoutes />
      </Router>
    </Suspense>
  )
}

function RoleBasedRoutes() {
  const userRole = useUserProfile((state) => state.data).role
  console.log(userRole)

  return (
    <Routes>
      <Route
        path={routePaths.root}
        element={<Navigate to={routePaths.login} replace />}
      />
      <Route path={routePaths.login} element={<Login />} />

      {/* Role-based routes */}
      {userRole === 'admin' ? (
        <Route element={<PrivateRoutes role="admin" />} key="admin-dashboard">
          <Route
            path={routePaths.admin.dashboard}
            element={<div>Admin Dashboard</div>}
            errorElement={<ErrorPage />}
          />
          <Route
            path={routePaths.admin.profile}
            element={<div>Admin Profile</div>}
            errorElement={<ErrorPage />}
          />
        </Route>
      ) : userRole === 'user' ? (
        <Route element={<PrivateRoutes role="user" />} key="dashboard">
          <Route
            path={routePaths.users.dashboard}
            element={<DashBoard />}
            errorElement={<ErrorPage />}
          />
          <Route
            path={routePaths.users.profile}
            element={<div>User Profile</div>}
            errorElement={<ErrorPage />}
          />
        </Route>
      ) : (
        <Route
          path={routePaths.notFound}
          element={<Navigate to={routePaths.login} replace />}
        />
      )}

      <Route path={routePaths.notFound} element={<NotFound />} />
    </Routes>
  )
}
