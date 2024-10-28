import { useUserProfile } from '@react-monorepo/core-provider'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = ({ role = '' }: { role: string }) => {
  const data = useUserProfile((state) => state.data)
  return data.isAuthenticated && data.role === role ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}
