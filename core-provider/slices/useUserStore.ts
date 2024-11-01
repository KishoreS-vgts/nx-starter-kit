import { UserRole } from '@react-monorepo/core-types'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  isAuthenticated: boolean
}

interface AuthState {
  authToken: string | null
  setAuthToken: (token: string) => void
  clearAuthToken: () => void
}

interface UserProfileState {
  name: string
  role: UserRole | null
  shouldFetchProfile?: boolean
  setUserProfile: (
    name: string,
    role: UserRole,
    shouldFetchProfile?: boolean
  ) => void
  clearUserProfile: () => void
}

export const useUserStore = create<AuthState & UserProfileState & State>()(
  persist(
    (set) => ({
      // Auth state and actions
      authToken: null,
      setAuthToken: (token: string) => set({ authToken: token }),
      clearAuthToken: () => set({ authToken: null }),
      isAuthenticated: false,
      // User profile state and actions
      name: '',
      role: null,
      shouldFetchProfile: true,
      setUserProfile: (
        name: string,
        role: UserRole,
        shouldFetchProfile?: boolean
      ) => set({ name, role, shouldFetchProfile, isAuthenticated: true }),
      clearUserProfile: () =>
        set({
          name: '',
          role: null,
          shouldFetchProfile: true,
          isAuthenticated: false,
        }),
    }),
    {
      // Persist both parts separately in `localStorage`
      name: 'userStore',
      partialize: (state) => ({
        authToken: state.authToken,
        name: state.name,
        role: state.role,
        shouldFetchProfile: state.shouldFetchProfile,
        isAuthenticated: state.isAuthenticated,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
)
