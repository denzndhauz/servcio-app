<template>
   <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
         <div
            class="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse">
         </div>
         <div
            class="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000">
         </div>
         <div
            class="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000">
         </div>
      </div>

      <div class="relative w-full max-w-md">
         <!-- Logo/Brand -->
         <div class="text-center mb-8">
            <div class="inline-flex items-center gap-2 mb-4">
               <div
                  class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
               </div>
               <span class="text-2xl font-bold text-gray-800">Servcio</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p class="text-gray-600">Sign in to your beauty business dashboard</p>
         </div>

         <!-- Login Form -->
         <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
               <!-- Email Field -->
               <div>
                  <label for="email" class="sr-only">Email address</label>
                  <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required
                     class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     :class="{ 'border-red-500': errors.email }" placeholder="Email address" />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                     {{ errors.email }}
                  </p>
               </div>

               <!-- Password Field -->
               <div>
                  <label for="password" class="sr-only">Password</label>
                  <input id="password" v-model="form.password" name="password" type="password"
                     autocomplete="current-password" required
                     class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     :class="{ 'border-red-500': errors.password }" placeholder="Password" />
                  <p v-if="errors.password" class="mt-1 text-sm text-red-600">
                     {{ errors.password }}
                  </p>
               </div>

               <!-- Remember Me -->
               <div class="flex items-center justify-between">
                  <div class="flex items-center">
                     <input id="remember-me" v-model="form.rememberMe" name="remember-me" type="checkbox"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                     <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                        Remember me
                     </label>
                  </div>

                  <div class="text-sm">
                     <NuxtLink to="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                     </NuxtLink>
                  </div>
               </div>

               <!-- Error Message -->
               <div v-if="loginError" class="rounded-md bg-red-50 p-4">
                  <div class="flex">
                     <div class="ml-3">
                        <h3 class="text-sm font-medium text-red-800">
                           Login Failed
                        </h3>
                        <div class="mt-2 text-sm text-red-700">
                           {{ loginError }}
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Submit Button -->
               <div>
                  <button type="submit" :disabled="isLoading || !isFormValid"
                     class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
                     <span v-if="isLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24">
                           <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                           </circle>
                           <path class="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                           </path>
                        </svg>
                     </span>
                     {{ isLoading ? 'Signing in...' : 'Sign in' }}
                  </button>
               </div>

               <!-- Register Link -->
               <div class="text-center">
                  <p class="text-sm text-gray-600">
                     Don't have an account?
                     <NuxtLink to="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign up here
                     </NuxtLink>
                  </p>
               </div>
            </form>

            <!-- Divider -->
            <div class="mt-6 relative">
               <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-200"></div>
               </div>
               <div class="relative flex justify-center text-sm">
                  <span class="px-4 bg-white text-gray-500">Or continue with</span>
               </div>
            </div>

            <!-- Social Login -->
            <div class="mt-6 grid grid-cols-2 gap-3">
               <button type="button"
                  class="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 bg-white/50 backdrop-blur-sm">
                  <svg class="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#4285f4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                     <path fill="#34a853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                     <path fill="#fbbc05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                     <path fill="#ea4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-700">Google</span>
               </button>
               <button type="button"
                  class="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 bg-white/50 backdrop-blur-sm">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                     <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-700">Facebook</span>
               </button>
            </div>

            <!-- Register Link -->
            <div class="mt-6 text-center">
               <p class="text-sm text-gray-600">
                  Don't have an account?
                  <NuxtLink to="/register" class="text-purple-600 hover:text-purple-700 font-medium">
                     Create one now
                  </NuxtLink>
               </p>
            </div>
         </div>

         <!-- Stats Preview -->
         <div class="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="text-center mb-4">
               <h3 class="text-lg font-semibold text-gray-800">Trusted by beauty professionals</h3>
            </div>
            <div class="grid grid-cols-3 gap-4 text-center">
               <div>
                  <div class="text-2xl font-bold text-purple-600">500+</div>
                  <div class="text-xs text-gray-600">Active Salons</div>
               </div>
               <div>
                  <div class="text-2xl font-bold text-purple-600">50K+</div>
                  <div class="text-xs text-gray-600">Services Tracked</div>
               </div>
               <div>
                  <div class="text-2xl font-bold text-purple-600">99.9%</div>
                  <div class="text-xs text-gray-600">Uptime</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

definePageMeta({
   middleware: 'guest'
})

// Meta tags for SEO
useHead({
   title: 'Sign In - Servcio',
   meta: [
      { name: 'description', content: 'Sign in to your Servcio account and access your beauty business dashboard.' }
   ]
})

const { login, isLoading } = useAuth()

// Form state
const form = reactive({
   email: '',
   password: '',
   rememberMe: false
})

// Error handling
const loginError = ref('')
const errors = reactive({
   email: '',
   password: ''
})

// Form validation
const isFormValid = computed(() => {
   return form.email.length > 0 &&
      form.password.length > 0 &&
      isValidEmail(form.email)
})

// Email validation helper
const isValidEmail = (email) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   return emailRegex.test(email)
}

// Clear errors when form changes
watch(() => form.email, () => {
   errors.email = ''
   loginError.value = ''
})

watch(() => form.password, () => {
   errors.password = ''
   loginError.value = ''
})

const showPassword = ref(false)

// Form submission handler
const handleLogin = async () => {
   // Clear previous errors
   loginError.value = ''
   errors.email = ''
   errors.password = ''

   // Validate form
   if (!form.email) {
      errors.email = 'Email is required'
      return
   }

   if (!isValidEmail(form.email)) {
      errors.email = 'Please enter a valid email address'
      return
   }

   if (!form.password) {
      errors.password = 'Password is required'
      return
   }

   if (form.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
      return
   }

   try {
      // Call the login function from useAuth
      await login({
         email: form.email,
         password: form.password
      })

      // Success! User will be redirected automatically by the login function
      // You can add additional success handling here if needed
      console.log('Login successful!')

   } catch (error) {
      // Handle login errors
      loginError.value = error.message || 'An error occurred during login'

      // Handle specific error types
      if (error.message?.includes('Invalid credentials')) {
         errors.email = 'Invalid email or password'
         errors.password = 'Invalid email or password'
      } else if (error.message?.includes('email')) {
         errors.email = error.message
      } else if (error.message?.includes('password')) {
         errors.password = error.message
      }
   }
}
</script>

<style scoped>
/* Additional custom styles if needed */
.animate-pulse {
   animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

   0%,
   100% {
      opacity: 0.3;
   }

   50% {
      opacity: 0.1;
   }
}
</style>