import { create } from 'zustand'

type State = {
  name: string
  email: string
  id: number
}

export const useUser = create<State>((set) => ({
  name: 'Developer',
  email: 'iamafooldev@gmail.com',
  id: 1002,
}))
