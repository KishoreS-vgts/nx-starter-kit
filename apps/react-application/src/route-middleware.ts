// based on the role we need to render the initial route if they visit the login page
import routePaths from './routes.json'
const ROLES = ['admin', 'user', 'manager', 'sales']

export const getInitialRoute = (role: string) => {
  if (!ROLES.includes(role)) {
    throw new Error(`Invalid role: ${role}`)
  }
  return initRouters(role)
}
export const initRouters = (role: string): string => {
  switch (role) {
    case 'admin':
      return routePaths.admin.dashboard
    case 'user':
    case 'manager':
    case 'sales':
      return routePaths.users.dashboard
    default:
      return routePaths.root
  }
}
