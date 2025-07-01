export interface User {
   id: string
   email: string
   name: string
   role?: string
   [key: string]: any
}

export interface AuthState {
   user: User | null
   token: string | null
   isLoggedIn: boolean
   isLoading: boolean
}

export interface LoginCredentials {
   email: string
   password: string
}

export interface RegisterCredentials {
   name: string
   email: string
   password: string
   passwordConfirmation?: string
}

export interface AuthResponse {
   user: User
   token: string
   refreshToken?: string
}

export interface AuthConfig {
   baseURL?: string
   endpoints?: {
      login?: string
      register?: string
      logout?: string
      me?: string
      refresh?: string
      forgotPassword?: string
      resetPassword?: string
   }
}

export const useAuth = (authConfig: AuthConfig = {}) => {
   const user = useState<User | null>('auth.user', () => null)
   const token = useState<string | null>('auth.token', () => null)
   const isLoggedIn = useState<boolean>('auth.isLoggedIn', () => false)
   const isLoading = useState<boolean>('auth.isLoading', () => false)

   const config = useRuntimeConfig()

   // Get base URL from config, runtime config, or default
   const baseURL = authConfig.baseURL ||
      config.public?.authBaseURL ||
      config.public?.apiBase ||
      ''

   // API endpoints configuration with customizable paths
   const defaultEndpoints = {
      login: '/api/auth/login',
      register: '/api/auth/register',
      logout: '/api/auth/logout',
      me: '/api/auth/me',
      refresh: '/api/auth/refresh',
      forgotPassword: '/api/auth/forgot-password',
      resetPassword: '/api/auth/reset-password'
   }

   const endpoints = {
      ...defaultEndpoints,
      ...authConfig.endpoints
   }

   // Helper to construct full URL
   const getFullURL = (endpoint: string): string => {
      if (endpoint.startsWith('http')) {
         return endpoint // Already a full URL
      }
      return baseURL ? `${baseURL.replace(/\/$/, '')}${endpoint}` : endpoint
   }

   // Create authenticated fetch instance
   const createAuthenticatedFetch = (authToken: string) => {
      return $fetch.create({
         baseURL,
         headers: {
            Authorization: `Bearer ${authToken}`
         }
      })
   }

   // Login function
   const login = async (credentials: LoginCredentials): Promise<void> => {
      try {
         isLoading.value = true

         const response = await $fetch<AuthResponse>(getFullURL(endpoints.login), {
            method: 'POST',
            body: credentials
         })

         // Store authentication data
         token.value = response.token
         user.value = response.user
         isLoggedIn.value = true

         // Store token in cookie for persistence
         const tokenCookie = useCookie('auth-token', {
            httpOnly: false,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7 // 7 days
         })
         tokenCookie.value = response.token

         // Store refresh token if provided
         if (response.refreshToken) {
            const refreshTokenCookie = useCookie('refresh-token', {
               httpOnly: false,
               secure: true,
               sameSite: 'strict',
               maxAge: 60 * 60 * 24 * 30 // 30 days
            })
            refreshTokenCookie.value = response.refreshToken
         }

         await navigateTo('/dashboard')
      } catch (error: any) {
         throw new Error(error.data?.message || 'Login failed')
      } finally {
         isLoading.value = false
      }
   }

   // Register function
   const register = async (credentials: RegisterCredentials): Promise<void> => {
      try {
         isLoading.value = true

         const response = await $fetch<AuthResponse>(getFullURL(endpoints.register), {
            method: 'POST',
            body: credentials
         })

         // Auto-login after successful registration
         token.value = response.token
         user.value = response.user
         isLoggedIn.value = true

         const tokenCookie = useCookie('auth-token')
         tokenCookie.value = response.token

         await navigateTo('/dashboard')
      } catch (error: any) {
         throw new Error(error.data?.message || 'Registration failed')
      } finally {
         isLoading.value = false
      }
   }

   // Logout function
   const logout = async (): Promise<void> => {
      try {
         // Call logout endpoint if token exists
         if (token.value) {
            const authFetch = createAuthenticatedFetch(token.value)
            await authFetch(endpoints.logout, {
               method: 'POST'
            })
         }
      } catch (error) {
         // Continue with logout even if API call fails
         console.warn('Logout API call failed:', error)
      } finally {
         // Clear all auth data
         token.value = null
         user.value = null
         isLoggedIn.value = false

         // Clear cookies
         const tokenCookie = useCookie('auth-token')
         const refreshTokenCookie = useCookie('refresh-token')
         tokenCookie.value = null
         refreshTokenCookie.value = null

         // Redirect to login
         await navigateTo('/login')
      }
   }

   // Fetch current user
   const fetchUser = async (): Promise<void> => {
      try {
         if (!token.value) return

         const authFetch = createAuthenticatedFetch(token.value)
         const userData = await authFetch<User>(endpoints.me)

         user.value = userData
         isLoggedIn.value = true
      } catch (error) {
         // Token might be invalid, clear auth data
         await logout()
         throw error
      }
   }

   // Refresh token
   const refreshToken = async (): Promise<boolean> => {
      try {
         const refreshTokenCookie = useCookie('refresh-token')

         if (!refreshTokenCookie.value) {
            return false
         }

         const response = await $fetch<AuthResponse>(getFullURL(endpoints.refresh), {
            method: 'POST',
            body: {
               refreshToken: refreshTokenCookie.value
            }
         })

         // Update tokens
         token.value = response.token
         user.value = response.user
         isLoggedIn.value = true

         // Update cookies
         const tokenCookie = useCookie('auth-token')
         tokenCookie.value = response.token

         if (response.refreshToken) {
            refreshTokenCookie.value = response.refreshToken
         }

         // Redirect to login
         await navigateTo('/login')
         return true
      } catch (error) {
         await logout()
         return false
      }
   }

   // Initialize auth state from cookies
   const initAuth = async (): Promise<void> => {
      const tokenCookie = useCookie('auth-token')

      if (tokenCookie.value) {
         token.value = tokenCookie.value

         try {
            await fetchUser()
         } catch (error) {
            // If fetching user fails, try to refresh token
            const refreshed = await refreshToken()
            if (refreshed) {
               await fetchUser()
            }
         }
      }
   }

   // Forgot password
   const forgotPassword = async (email: string): Promise<void> => {
      try {
         await $fetch(getFullURL(endpoints.forgotPassword), {
            method: 'POST',
            body: { email }
         })
      } catch (error: any) {
         throw new Error(error.data?.message || 'Failed to send reset email')
      }
   }

   // Reset password
   const resetPassword = async (token: string, password: string, passwordConfirmation: string): Promise<void> => {
      try {
         await $fetch(getFullURL(endpoints.resetPassword), {
            method: 'POST',
            body: {
               token,
               password,
               password_confirmation: passwordConfirmation
            }
         })
      } catch (error: any) {
         throw new Error(error.data?.message || 'Failed to reset password')
      }
   }

   // Utility function to make authenticated API calls
   const makeAuthenticatedRequest = async <T>(
      endpoint: string,
      options: any = {}
   ): Promise<T> => {
      if (!token.value) {
         throw new Error('No authentication token available')
      }

      const authFetch = createAuthenticatedFetch(token.value)
      return await authFetch<T>(endpoint, options)
   }

   return {
      // State
      user: readonly(user),
      token: readonly(token),
      isLoggedIn: readonly(isLoggedIn),
      isLoading: readonly(isLoading),

      // Actions
      login,
      register,
      logout,
      fetchUser,
      refreshToken,
      initAuth,
      forgotPassword,
      resetPassword,

      // Utilities
      createAuthenticatedFetch,
      makeAuthenticatedRequest
   }
}