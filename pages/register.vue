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
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
            <p class="text-gray-600">Join thousands of beauty professionals</p>
         </div>

         <!-- Registration Form -->
         <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <form @submit.prevent="handleSubmit" class="space-y-6">
               <!-- Business Name -->
               <div>
                  <label for="businessName" class="block text-sm font-medium text-gray-700 mb-2">
                     Business Name
                  </label>
                  <input id="businessName" v-model="form.businessName" type="text" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                     placeholder="Your salon or spa name" />
               </div>

               <!-- Full Name -->
               <div>
                  <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">
                     Full Name
                  </label>
                  <input id="fullName" v-model="form.fullName" type="text" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                     placeholder="Your full name" />
               </div>

               <!-- Email -->
               <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                     Email Address
                  </label>
                  <input id="email" v-model="form.email" type="email" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                     placeholder="your@email.com" />
               </div>

               <!-- Phone -->
               <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                     Phone Number
                  </label>
                  <input id="phone" v-model="form.phone" type="tel" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                     placeholder="+1 (555) 123-4567" />
               </div>

               <!-- Business Type -->
               <div>
                  <label for="businessType" class="block text-sm font-medium text-gray-700 mb-2">
                     Business Type
                  </label>
                  <select id="businessType" v-model="form.businessType" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm">
                     <option value="">Select your business type</option>
                     <option value="salon">Hair Salon</option>
                     <option value="spa">Spa</option>
                     <option value="barbershop">Barbershop</option>
                     <option value="nail-salon">Nail Salon</option>
                     <option value="beauty-clinic">Beauty Clinic</option>
                     <option value="other">Other</option>
                  </select>
               </div>

               <!-- Password -->
               <div>
                  <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                     Password
                  </label>
                  <div class="relative">
                     <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" required
                        class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Create a strong password" />
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

               <!-- Confirm Password -->
               <div>
                  <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                     Confirm Password
                  </label>
                  <input id="confirmPassword" v-model="form.confirmPassword" type="password" required
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                     placeholder="Confirm your password" />
               </div>

               <!-- Terms and Conditions -->
               <div class="flex items-start gap-3">
                  <input id="terms" v-model="form.acceptTerms" type="checkbox" required
                     class="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                  <label for="terms" class="text-sm text-gray-600">
                     I agree to the <a href="#" class="text-purple-600 hover:text-purple-700 font-medium">Terms of
                        Service</a> and <a href="#" class="text-purple-600 hover:text-purple-700 font-medium">Privacy
                        Policy</a>
                  </label>
               </div>

               <!-- Submit Button -->
               <button type="submit" :disabled="isLoading"
                  class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 focus:ring-4 focus:ring-purple-300 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  <span v-if="!isLoading">Create Account</span>
                  <span v-else class="flex items-center justify-center gap-2">
                     <svg class="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                     </svg>
                     Creating Account...
                  </span>
               </button>
            </form>

            <!-- Login Link -->
            <div class="mt-6 text-center">
               <p class="text-sm text-gray-600">
                  Already have an account?
                  <NuxtLink to="/login" class="text-purple-600 hover:text-purple-700 font-medium">
                     Sign in here
                  </NuxtLink>
               </p>
            </div>
         </div>

         <!-- Features Preview -->
         <div class="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">What you'll get:</h3>
            <div class="space-y-3">
               <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                     <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <span class="text-sm text-gray-700">Real-time service monitoring</span>
               </div>
               <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                     <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <span class="text-sm text-gray-700">Customer satisfaction tracking</span>
               </div>
               <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                     <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <span class="text-sm text-gray-700">Powerful analytics dashboard</span>
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
   title: 'Register - Servicio',
   meta: [
      { name: 'description', content: 'Create your Servicio account and start monitoring your beauty business in real-time.' }
   ]
})

// Form state
const form = reactive({
   businessName: '',
   fullName: '',
   email: '',
   phone: '',
   businessType: '',
   password: '',
   confirmPassword: '',
   acceptTerms: false
})

const showPassword = ref(false)
const isLoading = ref(false)

// Form submission handler
const handleSubmit = async () => {
   if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!')
      return
   }

   isLoading.value = true

   try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Here you would typically make an API call to register the user
      console.log('Registration data:', form)

      // Redirect to dashboard or login page
      await navigateTo('/dashboard')
   } catch (error) {
      console.error('Registration failed:', error)
      alert('Registration failed. Please try again.')
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