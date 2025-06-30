<template>
   <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <AppHeader />

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Settings</h1>
            <p class="text-gray-600 mt-2">Manage your account, business, and application preferences</p>
         </div>

         <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <!-- Settings Navigation -->
            <div class="lg:col-span-1">
               <nav class="space-y-1">
                  <button v-for="tab in settingsTabs" :key="tab.id" @click="activeTab = tab.id" :class="[
                     'w-full text-left px-4 py-3 rounded-lg font-medium transition-colors',
                     activeTab === tab.id
                        ? 'bg-purple-100 text-purple-700 border border-purple-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  ]">
                     <div class="flex items-center space-x-3">
                        <component :is="tab.icon" class="w-5 h-5" />
                        <span>{{ tab.name }}</span>
                     </div>
                  </button>
               </nav>
            </div>

            <!-- Settings Content -->
            <div class="lg:col-span-3">
               <div class="bg-white rounded-lg shadow-sm border">
                  <!-- Profile Settings -->
                  <div v-if="activeTab === 'profile'" class="p-6">
                     <h2 class="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>

                     <div class="space-y-6">
                        <div class="flex items-center space-x-6">
                           <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                              <span class="text-white text-2xl font-medium">JD</span>
                           </div>
                           <div>
                              <button
                                 class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                 Change Photo
                              </button>
                              <p class="text-sm text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                           </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                              <input v-model="profile.firstName" type="text"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                              <input v-model="profile.lastName" type="text"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                              <input v-model="profile.email" type="email"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                              <input v-model="profile.phone" type="tel"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Business Settings -->
                  <div v-if="activeTab === 'business'" class="p-6">
                     <h2 class="text-xl font-semibold text-gray-900 mb-6">Business Settings</h2>

                     <div class="space-y-6">
                        <div>
                           <label class="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                           <input v-model="business.name" type="text"
                              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        </div>

                        <div>
                           <label class="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                           <select v-model="business.type"
                              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                              <option value="salon">Hair Salon</option>
                              <option value="spa">Spa</option>
                              <option value="barbershop">Barber Shop</option>
                              <option value="nails">Nail Salon</option>
                              <option value="beauty">Beauty Salon</option>
                           </select>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                              <input v-model="business.address" type="text"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                              <input v-model="business.city" type="text"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">State</label>
                              <input v-model="business.state" type="text"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                              <input v-model="business.zipCode" type="text"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           </div>
                           <div>
                              <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
                              <select v-model="business.country"
                                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                 <option value="US">United States</option>
                                 <option value="CA">Canada</option>
                                 <option value="UK">United Kingdom</option>
                                 <option value="AU">Australia</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Notifications Settings -->
                  <div v-if="activeTab === 'notifications'" class="p-6">
                     <h2 class="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>

                     <div class="space-y-6">
                        <div class="space-y-4">
                           <h3 class="text-lg font-medium text-gray-900">Email Notifications</h3>
                           <div class="space-y-3">
                              <label v-for="notification in emailNotifications" :key="notification.id"
                                 class="flex items-center">
                                 <input v-model="notification.enabled" type="checkbox"
                                    class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded">
                                 <div class="ml-3">
                                    <span class="text-sm font-medium text-gray-700">{{ notification.title }}</span>
                                    <p class="text-sm text-gray-500">{{ notification.description }}</p>
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <h3 class="text-lg font-medium text-gray-900">Push Notifications</h3>
                           <div class="space-y-3">
                              <label v-for="notification in pushNotifications" :key="notification.id"
                                 class="flex items-center">
                                 <input v-model="notification.enabled" type="checkbox"
                                    class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded">
                                 <div class="ml-3">
                                    <span class="text-sm font-medium text-gray-700">{{ notification.title }}</span>
                                    <p class="text-sm text-gray-500">{{ notification.description }}</p>
                                 </div>
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Security Settings -->
                  <div v-if="activeTab === 'security'" class="p-6">
                     <h2 class="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>

                     <div class="space-y-6">
                        <div class="bg-gray-50 p-4 rounded-lg">
                           <h3 class="text-lg font-medium text-gray-900 mb-2">Change Password</h3>
                           <p class="text-sm text-gray-600 mb-4">Update your password to keep your account secure</p>
                           <div class="space-y-4">
                              <div>
                                 <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                 <input type="password"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                              </div>
                              <div>
                                 <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                 <input type="password"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                              </div>
                              <div>
                                 <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New
                                    Password</label>
                                 <input type="password"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                              </div>
                           </div>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                           <h3 class="text-lg font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
                           <p class="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                           <div class="flex items-center justify-between">
                              <div>
                                 <p class="text-sm font-medium text-gray-700">Enable 2FA</p>
                                 <p class="text-sm text-gray-500">Secure your account with 2FA via authenticator app</p>
                              </div>
                              <button
                                 class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                 Enable
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Save Button -->
                  <div class="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
                     <button
                        class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                     </button>
                     <button
                        class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Save Changes
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import { ref } from 'vue'

// Meta tags for SEO
useHead({
   title: 'Settings - Servcio',
   meta: [
      { name: 'description', content: 'Manage your Servcio account settings, business information, and preferences.' }
   ]
})

// Reactive data
const activeTab = ref('profile')

const profile = ref({
   firstName: 'John',
   lastName: 'Doe',
   email: 'john.doe@example.com',
   phone: '+1 (555) 123-4567'
})

const business = ref({
   name: 'Elite Beauty Salon',
   type: 'salon',
   address: '123 Main Street',
   city: 'New York',
   state: 'NY',
   zipCode: '10001',
   country: 'US'
})

const emailNotifications = ref([
   {
      id: 'appointments',
      title: 'New Appointments',
      description: 'Get notified when new appointments are booked',
      enabled: true
   },
   {
      id: 'cancellations',
      title: 'Appointment Cancellations',
      description: 'Receive alerts when appointments are cancelled',
      enabled: true
   },
   {
      id: 'reviews',
      title: 'Customer Reviews',
      description: 'Get notified when customers leave reviews',
      enabled: false
   },
   {
      id: 'reports',
      title: 'Weekly Reports',
      description: 'Receive weekly business performance reports',
      enabled: true
   }
])

const pushNotifications = ref([
   {
      id: 'urgent',
      title: 'Urgent Notifications',
      description: 'Critical alerts and system notifications',
      enabled: true
   },
   {
      id: 'reminders',
      title: 'Appointment Reminders',
      description: 'Reminders for upcoming appointments',
      enabled: true
   },
   {
      id: 'marketing',
      title: 'Marketing Updates',
      description: 'New features and promotional offers',
      enabled: false
   }
])

const settingsTabs = [
   {
      id: 'profile',
      name: 'Profile',
      icon: 'UserIcon'
   },
   {
      id: 'business',
      name: 'Business',
      icon: 'BuildingIcon'
   },
   {
      id: 'notifications',
      name: 'Notifications',
      icon: 'BellIcon'
   },
   {
      id: 'security',
      name: 'Security',
      icon: 'ShieldIcon'
   }
]

// Icon components (using simple SVG icons)
const UserIcon = {
   template: `
     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
     </svg>
   `
}

const BuildingIcon = {
   template: `
     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
     </svg>
   `
}

const BellIcon = {
   template: `
     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM7 7h.01M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7z"/>
     </svg>
   `
}

const ShieldIcon = {
   template: `
     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
     </svg>
   `
}
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>