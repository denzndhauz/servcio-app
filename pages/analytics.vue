<template>
   <div class="min-h-screen bg-gray-50">
      <AppHeader />

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <!-- Page Header -->
         <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Analytics</h2>
            <p class="text-gray-600">Track your business performance and gain insights into your operations</p>
         </div>

         <!-- Time Period Selector -->
         <TimePeriodSelector v-model="selectedPeriod" class="mb-6" />

         <!-- Key Metrics -->
         <MetricsGrid :metrics="keyMetrics" class="mb-8" />

         <!-- Revenue Chart -->
         <RevenueChart :data="chartData" class="mb-8" />

         <!-- Service Performance & Client Insights -->
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ServicePerformance :services="servicePerformance" />
            <TopClients :clients="topClients" />
         </div>

         <!-- Business Hours Analysis -->
         <PeakHoursAnalysis :weekly-data="weeklyData" />
      </main>
   </div>
</template>

<script setup>
// Page meta
definePageMeta({
   title: 'Analytics - Servcio'
})

// Reactive data
const selectedPeriod = ref('7d')

// Key metrics
const keyMetrics = ref([
   {
      title: 'Total Revenue',
      value: '$24,580',
      change: '+12%',
      icon: 'revenue',
      color: 'green'
   },
   {
      title: 'Total Clients',
      value: '342',
      change: '+8%',
      icon: 'clients',
      color: 'blue'
   },
   {
      title: 'Services Completed',
      value: '1,247',
      change: '+15%',
      icon: 'services',
      color: 'purple'
   },
   {
      title: 'Avg Rating',
      value: '4.8/5',
      change: '4.8',
      icon: 'rating',
      color: 'yellow'
   }
])

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

// Use Nuxt's built-in head management
useHead({
   title: 'Analytics - Servcio',
   meta: [
      { name: 'description', content: 'Comprehensive analytics dashboard for your beauty business performance tracking' }
   ]
})
</script>