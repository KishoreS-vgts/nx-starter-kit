import { UserRole } from '@react-monorepo/core-types'

import { create } from 'zustand'

type State = {
  isAuthenticated: boolean
  name: string
  email: string
  role: UserRole
}

export const useUser = create<State>((set) => ({
  isAuthenticated: false,
  name: '',
  email: '',
  role: UserRole['Admin'],

  // make all in one function
  setLoginData: (items: State) => set(items),
}))
