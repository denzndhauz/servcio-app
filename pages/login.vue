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
            <form @submit.prevent="handleSubmit" class="space-y-6">
               <!-- Email -->
               <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                     Email Address
                  </label>
                  <input id="email" v-model="form.email" type="email" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                     placeholder="your@email.com" />
               </div>

               <!-- Password -->
               <div>
                  <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                     Password
                  </label>
                  <div class="relative">
                     <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" required
                        class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your password" />
                     <button type="button" @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                        <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M14.12 14.12l1.415 1.415" />
                        </svg>
                     </button>
                  </div>
               </div>

               <!-- Remember Me & Forgot Password -->
               <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                     <input id="remember" v-model="form.rememberMe" type="checkbox"
                        class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                     <label for="remember" class="text-sm text-gray-600">
                        Remember me
                     </label>
                  </div>
                  <NuxtLink to="/forgot-password" class="text-sm text-purple-600 hover:text-purple-700 font-medium">
                     Forgot password?
                  </NuxtLink>
               </div>

               <!-- Submit Button -->
               <button type="submit" :disabled="isLoading"
                  class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 focus:ring-4 focus:ring-purple-300 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  <span v-if="!isLoading">Sign In</span>
                  <span v-else class="flex items-center justify-center gap-2">
                     <svg class="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                     </svg>
                     Signing In...
                  </span>
               </button>
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

// Meta tags for SEO
useHead({
   title: 'Sign In - Servcio',
   meta: [
      { name: 'description', content: 'Sign in to your Servcio account and access your beauty business dashboard.' }
   ]
})

// Form state
const form = reactive({
   email: '',
   password: '',
   rememberMe: false
})

const showPassword = ref(false)
const isLoading = ref(false)

// Form submission handler
const handleSubmit = async () => {
   isLoading.value = true

   try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Here you would typically make an API call to authenticate the user
      console.log('Login data:', form)

      // Redirect to dashboard
      await navigateTo('/dashboard')
   } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials and try again.')
   } finally {
      isLoading.value = false
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