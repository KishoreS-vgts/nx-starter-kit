import { Navigate, Outlet } from 'react-router-dom'
import { useUserProfile } from '@react-monorepo/store'
export const PrivateRoutes = ({ role = '' }: { role: string }) => {
  const data = useUserProfile((state) => state.data)
  return data.isAuthenticated && data.role === role ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}
