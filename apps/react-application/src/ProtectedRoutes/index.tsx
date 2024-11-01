import { Navigate, Outlet } from 'react-router-dom'

import { useUserStore } from '@react-monorepo/core-provider'
import { UserRole } from '@react-monorepo/core-types'

export const PrivateRoutes = ({ role = null }: { role: UserRole | null }) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated)
  const userRole = useUserStore((state) => state.role)
  return isAuthenticated && userRole === role ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}
