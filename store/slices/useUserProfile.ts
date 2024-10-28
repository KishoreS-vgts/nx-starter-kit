import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface State {
  email: string
  isAuthenticated: boolean
  role: string
}
interface StoreState {
  data: State
  addItem: (item: State) => void
  clearItems: () => void
}
export const useUserProfile = create<StoreState>()(
  persist(
    (set) => ({
      data: {
        email: '',
        isAuthenticated: false,
        role: '',
      },
      addItem: (item: State) => {
        console.log({ item })
        set((state) => ({
          data: {
            ...state.data,
            ...item,
          },
        }))
      },

      clearItems: () =>
        set({ data: { email: '', isAuthenticated: false, role: '' } }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
