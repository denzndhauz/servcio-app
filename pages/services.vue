<template>
   <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <!-- Header -->
      <AppHeader />

      <ServiceModal :is-open="showModal" :service="selectedService" @close="showModal = false"
         @save="handleSaveService" />

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <!-- Page Header -->
         <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Manage Your Services</h2>
            <p class="text-gray-600">Monitor, update, and optimize your beauty business services in real-time</p>
         </div>

         <!-- Quick Stats -->
         <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <div class="flex items-center justify-between">
                  <div>
                     <p class="text-sm text-gray-600 mb-1">Active Services</p>
                     <p class="text-2xl font-bold text-gray-900">{{ activeServicesCount }}</p>
                  </div>
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                     <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
               </div>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <div class="flex items-center justify-between">
                  <div>
                     <p class="text-sm text-gray-600 mb-1">Pending Services</p>
                     <p class="text-2xl font-bold text-gray-900">{{ pendingServicesCount }}</p>
                  </div>
                  <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                     <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
               </div>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <div class="flex items-center justify-between">
                  <div>
                     <p class="text-sm text-gray-600 mb-1">Completed Today</p>
                     <p class="text-2xl font-bold text-gray-900">{{ completedTodayCount }}</p>
                  </div>
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                     <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </div>
               </div>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <div class="flex items-center justify-between">
                  <div>
                     <p class="text-sm text-gray-600 mb-1">Revenue Today</p>
                     <p class="text-2xl font-bold text-gray-900">${{ todayRevenue }}</p>
                  </div>
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                     <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
                        </path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>

         <!-- Services Management Section -->
         <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
               <h3 class="text-lg font-semibold text-gray-900">Current Services</h3>
               <button @click="showModal = true"
                  class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span>Add Service</span>
               </button>
            </div>

            <div class="p-6">
               <div class="space-y-4">
                  <div v-for="service in services" :key="service.id"
                     class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors duration-200">
                     <div class="flex items-center space-x-4">
                        <div class="w-3 h-3 rounded-full" :class="getStatusColor(service.status)"></div>
                        <div>
                           <h4 class="font-medium text-gray-900">{{ service.serviceType }} - {{ service.clientName }}
                           </h4>
                           <p class="text-sm text-gray-500">{{ service.duration }} min remaining • ${{ service.price }}
                           </p>
                        </div>
                     </div>

                     <div class="flex items-center space-x-3">
                        <select v-model="service.status" @change="updateServiceStatus(service)"
                           class="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           <option value="Active">Active</option>
                           <option value="Pending">Pending</option>
                           <option value="Completed">Completed</option>
                           <option value="Cancelled">Cancelled</option>
                        </select>

                        <button @click="editService(service)"
                           class="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                              </path>
                           </svg>
                        </button>

                        <button @click="deleteService(service.id)"
                           class="text-gray-400 hover:text-red-600 transition-colors duration-200">
                           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                              </path>
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
// Page meta
definePageMeta({
   title: 'Services Management - Servcio'
})

const showModal = ref(false)
const selectedService = ref(null)

const handleSaveService = (service) => {
   // Handle saving the service
   console.log('Saving service:', service)
}

// Reactive data
const showAddModal = ref(false)

const services = ref([
   {
      id: 1,
      serviceType: 'Hair Cut',
      clientName: 'John D.',
      duration: 15,
      price: 35,
      status: 'Active',
      notes: 'First-time client, prefers a fade cut'
   },
   {
      id: 2,
      serviceType: 'Facial Treatment',
      clientName: 'Sarah M.',
      duration: 30,
      price: 85,
      status: 'Active',
      notes: 'First-time client, prefers a fade cut'
   },
   {
      id: 3,
      serviceType: 'Manicure',
      clientName: 'Lisa K.',
      duration: 45,
      price: 25,
      status: 'Pending',
      notes: 'First-time client, prefers a fade cut'
   },
   {
      id: 4,
      serviceType: 'Hair Color',
      clientName: 'Emma R.',
      duration: 0,
      price: 120,
      status: 'Completed',
      notes: 'First-time client, prefers a fade cut'
   },
   {
      id: 5,
      serviceType: 'Pedicure',
      clientName: 'Mike T.',
      duration: 20,
      price: 40,
      status: 'Active',
      notes: 'First-time client, prefers a fade cut'
   }
])

const newService = ref({
   serviceType: '',
   clientName: '',
   duration: '',
   price: '',
   status: 'Pending'
})

// Computed properties
const activeServicesCount = computed(() =>
   services.value.filter(s => s.status === 'Active').length
)

const pendingServicesCount = computed(() =>
   services.value.filter(s => s.status === 'Pending').length
)

const completedTodayCount = computed(() =>
   services.value.filter(s => s.status === 'Completed').length
)

const todayRevenue = computed(() =>
   services.value
      .filter(s => s.status === 'Completed')
      .reduce((total, s) => total + s.price, 0)
)

// Methods
const getStatusColor = (status) => {
   const colors = {
      active: 'bg-green-500',
      pending: 'bg-yellow-500',
      completed: 'bg-blue-500',
      cancelled: 'bg-red-500'
   }
   return colors[status.toLowerCase()] || 'bg-gray-500'
}

const updateServiceStatus = (service) => {
   // Simulate API call
   console.log(`Updated ${service.name} status to ${service.status}`)

   // Show success notification (you can integrate with a toast library)
   setTimeout(() => {
      alert(`${service.name} status updated to ${service.status}`)
   }, 100)
}

const addService = () => {
   if (!newService.value.name || !newService.value.client) {
      alert('Please fill in all required fields')
      return
   }

   const service = {
      id: Date.now(),
      serviceType: newService.value.serviceType,
      clientName: newService.value.clientName,
      duration: parseInt(newService.value.duration) || 0,
      price: parseFloat(newService.value.price) || 0,
      status: newService.value.status
   }

   services.value.push(service)

   // Reset form
   newService.value = {
      serviceType: '',
      clientName: '',
      duration: '',
      price: '',
      status: 'Pending'
   }

   showAddModal.value = false
   alert('Service added successfully!')
}

const editService = (service) => {
   // Implement edit functionality
   console.log('Edit service:', service)
   // Set the selected service for editing
   selectedService.value = service

   showModal.value = true
}

const deleteService = (serviceId) => {
   if (confirm('Are you sure you want to delete this service?')) {
      services.value = services.value.filter(s => s.id !== serviceId)
      alert('Service deleted successfully!')
   }
}

// Use Nuxt's built-in head management
useHead({
   title: 'Services Management - Servcio',
   meta: [
      { name: 'description', content: 'Manage your beauty business services with real-time monitoring and updates' }
   ]
})
</script>

<style scoped>
/* Additional custom styles if needed */
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
   opacity: 0;
}
</style>