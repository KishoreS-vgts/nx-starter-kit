// Error message can be displayed using toaster
import { useEffect } from 'react'

import { useUserStore } from '@react-monorepo/core-provider'
import { LoginType, UserRole } from '@react-monorepo/core-types'
import { apiClient } from '@react-monorepo/core-utils'

import { useMutation, useQuery } from '@tanstack/react-query'

// Function to log in and retrieve the auth token
async function loginPost(data: LoginType) {
  const response = await apiClient('http://localhost:3001/token.json', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return response.token
}

// Function to fetch profile data
async function fetchUserProfile(token: string | null) {
  if (!token) return
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await apiClient('http://localhost:3001/data.json')
  return response
}

// Custom hook to handle login and profile fetching
export function useAuthAndProfile() {
  const { setAuthToken, authToken, setUserProfile, shouldFetchProfile } =
    useUserStore()

  // Mutation for login to get the auth token
  const {
    mutateAsync,
    error: authError,
    isPending,
  } = useMutation({
    mutationFn: loginPost,
    onSuccess: (token) => setAuthToken(token),
  })

  const {
    error: profileError,
    isLoading,
    data: profileData,
    isSuccess,
  } = useQuery({
    queryKey: ['profile', authToken],
    queryFn: () => fetchUserProfile(authToken),
    enabled: !!authToken && shouldFetchProfile,
  })

  useEffect(() => {
    if (isSuccess) {
      setUserProfile(
        profileData.name,
        UserRole[profileData.role as keyof typeof UserRole],
        false
      )
    }
  }, [isSuccess, setUserProfile, profileData])

  return {
    mutate: mutateAsync,
    isError: authError || profileError,
    isLoading: isPending || isLoading,
  }
}
