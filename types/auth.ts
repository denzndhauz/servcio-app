export interface AuthError {
   message: string
   code?: string
   field?: string
}

export interface AuthModule {
   user: Ref<User | null>
   token: Ref<string | null>
   isLoggedIn: Ref<boolean>
   isLoading: Ref<boolean>
   login: (credentials: LoginCredentials) => Promise<void>
   register: (credentials: RegisterCredentials) => Promise<void>
   logout: () => Promise<void>
   fetchUser: () => Promise<void>
   refreshToken: () => Promise<boolean>
   initAuth: () => Promise<void>
   forgotPassword: (email: string) => Promise<void>
   resetPassword: (token: string, password: string, passwordConfirmation: string) => Promise<void>
}

// Example usage in a page component:
/*
<template>
  <div>
    <div v-if="isLoggedIn">
      <h1>Welcome, {{ user?.name }}!</h1>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <h1>Please log in</h1>
    </div>
  </div>
</template>

<script setup>
const { user, isLoggedIn, logout } = useAuth()
</script>
*/

// Example login form component:
/*
<template>
  <form @submit.prevent="handleLogin">
    <div>
      <label>Email:</label>
      <input v-model="email" type="email" required />
    </div>
    <div>
      <label>Password:</label>
      <input v-model="password" type="password" required />
    </div>
    <button type="submit" :disabled="isLoading">
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
definePageMeta({
  middleware: 'guest'
})

const { login, isLoading } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  try {
    error.value = ''
    await login({
      email: email.value,
      password: password.value
    })
  } catch (err) {
    error.value = err.message
  }
}
</script>
*/