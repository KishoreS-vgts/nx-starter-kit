export async function apiClient(endpoint: string, options: RequestInit = {}) {
  const token =
    localStorage.length > 0 && localStorage['userStore']
      ? JSON.parse(localStorage['userStore']).state.authToken
      : null

  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  }

  const response = await fetch(endpoint, config)

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'An error occurred')
  }

  return response.json()
}
