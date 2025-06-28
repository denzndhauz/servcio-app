<template>
   <div class="min-h-screen bg-gray-50">
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
                  <a href="/dashboard" class="text-gray-500 hover:text-gray-700 font-medium">Dashboard</a>
                  <a href="/services" class="text-gray-500 hover:text-gray-700 font-medium">Services</a>
                  <a href="/analytics" class="text-purple-600 font-medium">Analytics</a>
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
         <!-- Page Header -->
         <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Analytics</h2>
            <p class="text-gray-600">Track your business performance and gain insights into your operations</p>
         </div>

         <!-- Time Period Selector -->
         <div class="mb-6">
            <div class="flex space-x-2">
               <button v-for="period in timePeriods" :key="period.value" @click="selectedPeriod = period.value" :class="[
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  selectedPeriod === period.value
                     ? 'bg-purple-600 text-white'
                     : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
               ]">
                  {{ period.label }}
               </button>
            </div>
         </div>

         <!-- Key Metrics -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-2xl p-6 border border-gray-100">
               <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                     <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span class="text-green-500 text-sm font-medium">+12%</span>
               </div>
               <div>
                  <p class="text-gray-600 text-sm mb-1">Total Revenue</p>
                  <p class="text-2xl font-bold text-gray-900">${{ totalRevenue.toLocaleString() }}</p>
               </div>
            </div>

            <div class="bg-white rounded-2xl p-6 border border-gray-100">
               <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                     <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                        </path>
                     </svg>
                  </div>
                  <span class="text-blue-500 text-sm font-medium">+8%</span>
               </div>
               <div>
                  <p class="text-gray-600 text-sm mb-1">Total Clients</p>
                  <p class="text-2xl font-bold text-gray-900">{{ totalClients }}</p>
               </div>
            </div>

            <div class="bg-white rounded-2xl p-6 border border-gray-100">
               <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                     <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                     </svg>
                  </div>
                  <span class="text-purple-500 text-sm font-medium">+15%</span>
               </div>
               <div>
                  <p class="text-gray-600 text-sm mb-1">Services Completed</p>
                  <p class="text-2xl font-bold text-gray-900">{{ servicesCompleted }}</p>
               </div>
            </div>

            <div class="bg-white rounded-2xl p-6 border border-gray-100">
               <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                     <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                        </path>
                     </svg>
                  </div>
                  <span class="text-yellow-500 text-sm font-medium">4.8</span>
               </div>
               <div>
                  <p class="text-gray-600 text-sm mb-1">Avg Rating</p>
                  <p class="text-2xl font-bold text-gray-900">4.8/5</p>
               </div>
            </div>
         </div>

         <!-- Revenue Chart -->
         <div class="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <div class="flex items-center justify-between mb-6">
               <h3 class="text-lg font-semibold text-gray-900">Revenue Trends</h3>
               <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-2">
                     <div class="w-3 h-3 bg-purple-600 rounded-full"></div>
                     <span class="text-sm text-gray-600">Revenue</span>
                  </div>
                  <div class="flex items-center space-x-2">
                     <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                     <span class="text-sm text-gray-600">Services</span>
                  </div>
               </div>
            </div>

            <!-- Simple Chart Visualization -->
            <div class="h-64 flex items-end space-x-2">
               <div v-for="(item, index) in chartData" :key="index" class="flex-1 flex flex-col items-center space-y-2">
                  <div class="w-full flex flex-col space-y-1">
                     <!-- Revenue Bar -->
                     <div class="w-full bg-purple-600 rounded-t"
                        :style="{ height: `${(item.revenue / Math.max(...chartData.map(d => d.revenue))) * 200}px` }">
                     </div>
                     <!-- Services Bar -->
                     <div class="w-full bg-blue-400 rounded-b"
                        :style="{ height: `${(item.services / Math.max(...chartData.map(d => d.services))) * 100}px` }">
                     </div>
                  </div>
                  <span class="text-xs text-gray-600">{{ item.day }}</span>
               </div>
            </div>
         </div>

         <!-- Service Performance & Client Insights -->
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Service Performance -->
            <div class="bg-white rounded-2xl p-6 border border-gray-100">
               <h3 class="text-lg font-semibold text-gray-900 mb-6">Service Performance</h3>
               <div class="space-y-4">
                  <div v-for="service in servicePerformance" :key="service.name"
                     class="flex items-center justify-between">
                     <div class="flex items-center space-x-3">
                        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: service.color }"></div>
                        <span class="text-gray-700 font-medium">{{ service.name }}</span>
                     </div>
                     <div class="flex items-center space-x-4">
                        <div class="text-right">
                           <p class="text-gray-900 font-semibold">${{ service.revenue }}</p>
                           <p class="text-gray-500 text-sm">{{ service.count }} services</p>
                        </div>
                        <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div class="h-full rounded-full" :style="{
                              width: `${service.percentage}%`,
                              backgroundColor: service.color
                           }"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Top Clients -->
            <div class="bg-white rounded-2xl p-6 border border-gray-100">
               <h3 class="text-lg font-semibold text-gray-900 mb-6">Top Clients</h3>
               <div class="space-y-4">
                  <div v-for="(client, index) in topClients" :key="client.name"
                     class="flex items-center justify-between">
                     <div class="flex items-center space-x-3">
                        <div
                           class="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                           <span class="text-white text-sm font-medium">{{ client.initials }}</span>
                        </div>
                        <div>
                           <p class="text-gray-900 font-medium">{{ client.name }}</p>
                           <p class="text-gray-500 text-sm">{{ client.visits }} visits</p>
                        </div>
                     </div>
                     <div class="text-right">
                        <p class="text-gray-900 font-semibold">${{ client.spent }}</p>
                        <p class="text-gray-500 text-sm">total spent</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Business Hours Analysis -->
         <div class="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">Peak Hours Analysis</h3>
            <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
               <div v-for="day in weeklyData" :key="day.day" class="text-center">
                  <p class="text-sm font-medium text-gray-700 mb-2">{{ day.day }}</p>
                  <div class="h-32 flex flex-col justify-end">
                     <div class="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"
                        :style="{ height: `${(day.bookings / Math.max(...weeklyData.map(d => d.bookings))) * 100}%` }">
                     </div>
                  </div>
                  <p class="text-xs text-gray-500 mt-2">{{ day.bookings }} bookings</p>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
// Page meta
definePageMeta({
   title: 'Analytics - Servicio'
})

// Reactive data
const selectedPeriod = ref('7d')

const timePeriods = [
   { label: 'Today', value: '1d' },
   { label: '7 Days', value: '7d' },
   { label: '30 Days', value: '30d' },
   { label: '3 Months', value: '3m' },
   { label: 'Year', value: '1y' }
]

// Key metrics
const totalRevenue = ref(24580)
const totalClients = ref(342)
const servicesCompleted = ref(1247)

// Chart data for revenue trends
const chartData = ref([
   { day: 'Mon', revenue: 1200, services: 15 },
   { day: 'Tue', revenue: 1800, services: 22 },
   { day: 'Wed', revenue: 2200, services: 28 },
   { day: 'Thu', revenue: 1600, services: 18 },
   { day: 'Fri', revenue: 2800, services: 35 },
   { day: 'Sat', revenue: 3200, services: 42 },
   { day: 'Sun', revenue: 2400, services: 28 }
])

// Service performance data
const servicePerformance = ref([
   { name: 'Hair Cut', revenue: 8500, count: 185, percentage: 85, color: '#8B5CF6' },
   { name: 'Facial Treatment', revenue: 6200, count: 98, percentage: 70, color: '#06B6D4' },
   { name: 'Manicure', revenue: 4800, count: 145, percentage: 60, color: '#10B981' },
   { name: 'Hair Color', revenue: 3200, count: 42, percentage: 45, color: '#F59E0B' },
   { name: 'Massage', revenue: 1880, count: 28, percentage: 25, color: '#EF4444' }
])

// Top clients data
const topClients = ref([
   { name: 'Sarah Johnson', initials: 'SJ', visits: 12, spent: 1240 },
   { name: 'Emily Davis', initials: 'ED', visits: 10, spent: 980 },
   { name: 'Lisa Martinez', initials: 'LM', visits: 9, spent: 875 },
   { name: 'Ashley Wilson', initials: 'AW', visits: 8, spent: 720 },
   { name: 'Jessica Brown', initials: 'JB', visits: 7, spent: 650 }
])

// Weekly booking data
const weeklyData = ref([
   { day: 'Mon', bookings: 18 },
   { day: 'Tue', bookings: 22 },
   { day: 'Wed', bookings: 28 },
   { day: 'Thu', bookings: 24 },
   { day: 'Fri', bookings: 35 },
   { day: 'Sat', bookings: 42 },
   { day: 'Sun', bookings: 28 }
])

// Methods
const formatCurrency = (amount) => {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
   }).format(amount)
}

// Use Nuxt's built-in head management
useHead({
   title: 'Analytics - Servicio',
   meta: [
      { name: 'description', content: 'Comprehensive analytics dashboard for your beauty business performance tracking' }
   ]
})
</script>

<style scoped>
/* Additional animations and transitions */
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}

/* Chart animations */
@keyframes growUp {
   from {
      height: 0;
   }

   to {
      height: var(--final-height);
   }
}

.chart-bar {
   animation: growUp 0.8s ease-out forwards;
}
</style>