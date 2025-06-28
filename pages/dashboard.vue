<template>
   <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-100">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
               <div class="flex items-center space-x-4">
                  <div
                     class="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                     <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                        </path>
                     </svg>
                  </div>
                  <h1 class="text-2xl font-bold text-gray-900">Servicio</h1>
               </div>
               <nav class="hidden md:flex space-x-8">
                  <a href="/dashboard" class="text-purple-600 font-medium">Dashboard</a>
                  <a href="/services" class="text-gray-500 hover:text-gray-700 font-medium">Services</a>
                  <a href="/analytics" class="text-gray-500 hover:text-gray-700 font-medium">Analytics</a>
                  <a href="#" class="text-gray-500 hover:text-gray-700 font-medium">Settings</a>
               </nav>
               <div class="flex items-center space-x-4">
                  <div class="relative">
                     <div class="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
                     <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                        </path>
                     </svg>
                  </div>
                  <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                     <span class="text-white text-sm font-medium">JD</span>
                  </div>
               </div>
            </div>
         </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <!-- Header Section -->
         <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Monitor Your Beauty Business in Real-Time</h1>
            <p class="text-gray-600">Track service quality, monitor customer satisfaction, and optimize operations with
               powerful analytics.</p>
         </div>

         <!-- Live Dashboard Card -->
         <div class="mb-8">
            <div
               class="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
               <!-- Background decoration -->
               <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32">
               </div>
               <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24">
               </div>

               <div class="relative z-10">
                  <div class="flex items-center justify-between mb-6">
                     <h2 class="text-2xl font-bold">Live Dashboard</h2>
                     <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span class="text-sm opacity-90">Live</span>
                     </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <!-- Active Services -->
                     <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <div class="text-sm opacity-90 mb-2">Active Services</div>
                        <div class="text-4xl font-bold mb-2">{{ stats.activeServices }}</div>
                        <div class="text-sm opacity-75">Currently in progress</div>
                     </div>

                     <!-- Customer Satisfaction -->
                     <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <div class="text-sm opacity-90 mb-2">Customer Satisfaction</div>
                        <div class="text-4xl font-bold mb-2">{{ stats.satisfaction }}%</div>
                        <div class="text-sm opacity-75">Average rating today</div>
                     </div>

                     <!-- Today's Revenue -->
                     <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <div class="text-sm opacity-90 mb-2">Today's Revenue</div>
                        <div class="text-4xl font-bold mb-2">${{ stats.revenue.toLocaleString() }}</div>
                        <div class="text-sm opacity-75">+12% from yesterday</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Active Services -->
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Current Services -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
               <h3 class="text-xl font-bold text-gray-800 mb-4">Active Services</h3>
               <div class="space-y-4">
                  <div v-for="service in activeServices" :key="service.id"
                     class="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                     <div class="flex items-center gap-3">
                        <div :class="service.statusColor" class="w-3 h-3 rounded-full"></div>
                        <div>
                           <div class="font-medium text-gray-800">{{ service.name }}</div>
                           <div class="text-sm text-gray-600">{{ service.client }}</div>
                        </div>
                     </div>
                     <div class="text-right">
                        <div class="text-sm font-medium text-gray-800">{{ service.timeRemaining }}</div>
                        <div class="text-xs text-gray-500">remaining</div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
               <h3 class="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
               <div class="grid grid-cols-2 gap-4">
                  <button class="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group">
                     <div
                        class="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                     </div>
                     <div class="text-sm font-medium text-gray-800">Add Service</div>
                  </button>

                  <button class="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group">
                     <div
                        class="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                     </div>
                     <div class="text-sm font-medium text-gray-800">New Client</div>
                  </button>

                  <button class="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group">
                     <div
                        class="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 01-2 2m-3 7h3m-3 4h3m3-4h3m-3 4h3" />
                        </svg>
                     </div>
                     <div class="text-sm font-medium text-gray-800">View Reports</div>
                  </button>

                  <button class="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors group">
                     <div
                        class="w-12 h-12 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                     </div>
                     <div class="text-sm font-medium text-gray-800">Settings</div>
                  </button>
               </div>
            </div>
         </div>

         <!-- Statistics Cards -->
         <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
               <div class="text-3xl font-bold text-gray-800 mb-2">500+</div>
               <div class="text-sm text-gray-600 mb-4">Active Salons</div>
               <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 75%"></div>
               </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
               <div class="text-3xl font-bold text-gray-800 mb-2">50K+</div>
               <div class="text-sm text-gray-600 mb-4">Services Tracked</div>
               <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
               </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
               <div class="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
               <div class="text-sm text-gray-600 mb-4">Uptime</div>
               <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 99%"></div>
               </div>
            </div>
         </div>

         <!-- Recent Activity -->
         <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="flex items-center justify-between mb-6">
               <h3 class="text-xl font-bold text-gray-800">Recent Activity</h3>
               <button class="text-purple-600 hover:text-purple-700 text-sm font-medium">View All</button>
            </div>

            <div class="space-y-4">
               <div v-for="activity in recentActivity" :key="activity.id"
                  class="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl">
                  <div :class="activity.iconBg" class="w-10 h-10 rounded-full flex items-center justify-center">
                     <component :is="activity.icon" class="w-5 h-5" :class="activity.iconColor" />
                  </div>
                  <div class="flex-1">
                     <div class="font-medium text-gray-800">{{ activity.title }}</div>
                     <div class="text-sm text-gray-600">{{ activity.description }}</div>
                  </div>
                  <div class="text-sm text-gray-500">{{ activity.time }}</div>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// Meta tags for SEO
useHead({
   title: 'Dashboard - Servicio',
   meta: [
      { name: 'description', content: 'Monitor your beauty business in real-time with Servicio dashboard.' }
   ]
})

// Dashboard stats
const stats = reactive({
   activeServices: 13,
   satisfaction: 95,
   revenue: 3474
})

// Active services data
const activeServices = ref([
   {
      id: 1,
      name: 'Hair Cut',
      client: 'John D.',
      timeRemaining: '15 min remaining',
      statusColor: 'bg-green-500'
   },
   {
      id: 2,
      name: 'Facial Treatment',
      client: 'Sarah M.',
      timeRemaining: '30 min remaining',
      statusColor: 'bg-blue-500'
   },
   {
      id: 3,
      name: 'Manicure',
      client: 'Lisa K.',
      timeRemaining: '45 min remaining',
      statusColor: 'bg-purple-500'
   }
])

// Recent activity data
const recentActivity = ref([
   {
      id: 1,
      title: 'New appointment scheduled',
      description: 'Hair styling with Maria Rodriguez for tomorrow 2:00 PM',
      time: '5 min ago',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      icon: 'CheckIcon'
   },
   {
      id: 2,
      title: 'Service completed',
      description: 'Facial treatment for John Smith - 5 star rating received',
      time: '12 min ago',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      icon: 'StarIcon'
   },
   {
      id: 3,
      title: 'Payment received',
      description: 'Manicure service payment of $45 processed successfully',
      time: '25 min ago',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      icon: 'CreditCardIcon'
   },
   {
      id: 4,
      title: 'New customer registered',
      description: 'Welcome Amanda Johnson to your salon',
      time: '1 hour ago',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      icon: 'UserPlusIcon'
   }
])

// Simulate real-time updates
onMounted(() => {
   setInterval(() => {
      // Update stats occasionally to simulate real-time data
      if (Math.random() > 0.7) {
         stats.activeServices = Math.floor(Math.random() * 20) + 10
         stats.satisfaction = Math.floor(Math.random() * 10) + 90
         stats.revenue = Math.floor(Math.random() * 2000) + 2500
      }
   }, 5000)
})
</script>

<script>
// Icon components (simplified for this example)
const CheckIcon = {
   template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
}

const StarIcon = {
   template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`
}

const CreditCardIcon = {
   template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>`
}

const UserPlusIcon = {
   template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>`
}

export default {
   components: {
      CheckIcon,
      StarIcon,
      CreditCardIcon,
      UserPlusIcon
   }
}
</script>

<style scoped>
/* Custom animations */
@keyframes pulse {

   0%,
   100% {
      opacity: 1;
   }

   50% {
      opacity: 0.5;
   }
}

.animate-pulse {
   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>