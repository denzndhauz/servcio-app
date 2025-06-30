<template>
   <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <!-- Header -->
      <AppHeader />
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
               <button @click="showAddModal = true"
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
                           <h4 class="font-medium text-gray-900">{{ service.name }} - {{ service.client }}</h4>
                           <p class="text-sm text-gray-500">{{ service.duration }} min remaining • ${{ service.price }}
                           </p>
                        </div>
                     </div>

                     <div class="flex items-center space-x-3">
                        <select v-model="service.status" @change="updateServiceStatus(service)"
                           class="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           <option value="active">Active</option>
                           <option value="pending">Pending</option>
                           <option value="completed">Completed</option>
                           <option value="cancelled">Cancelled</option>
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

      <!-- Add Service Modal -->
      <div v-if="showAddModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         <div class="bg-white rounded-xl max-w-md w-full p-6">
            <div class="flex items-center justify-between mb-4">
               <h3 class="text-lg font-semibold text-gray-900">Add New Service</h3>
               <button @click="showAddModal = false" class="text-gray-400 hover:text-gray-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                     </path>
                  </svg>
               </button>
            </div>

            <form @submit.prevent="addService" class="space-y-4">
               <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select v-model="newService.name"
                     class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                     <option value="">Select service</option>
                     <option value="Hair Cut">Hair Cut</option>
                     <option value="Facial Treatment">Facial Treatment</option>
                     <option value="Manicure">Manicure</option>
                     <option value="Pedicure">Pedicure</option>
                     <option value="Hair Color">Hair Color</option>
                     <option value="Massage">Massage</option>
                  </select>
               </div>

               <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                  <input v-model="newService.client" type="text"
                     class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="Enter client name">
               </div>

               <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                  <input v-model="newService.duration" type="number"
                     class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="e.g., 60">
               </div>

               <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input v-model="newService.price" type="number" step="0.01"
                     class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="e.g., 45.00">
               </div>

               <div class="flex space-x-3 pt-4">
                  <button type="button" @click="showAddModal = false"
                     class="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                     Cancel
                  </button>
                  <button type="submit"
                     class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                     Add Service
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script setup>
// Page meta
definePageMeta({
   title: 'Services Management - Servcio'
})

// Reactive data
const showAddModal = ref(false)

const services = ref([
   {
      id: 1,
      name: 'Hair Cut',
      client: 'John D.',
      duration: 15,
      price: 35,
      status: 'active'
   },
   {
      id: 2,
      name: 'Facial Treatment',
      client: 'Sarah M.',
      duration: 30,
      price: 85,
      status: 'active'
   },
   {
      id: 3,
      name: 'Manicure',
      client: 'Lisa K.',
      duration: 45,
      price: 25,
      status: 'pending'
   },
   {
      id: 4,
      name: 'Hair Color',
      client: 'Emma R.',
      duration: 0,
      price: 120,
      status: 'completed'
   },
   {
      id: 5,
      name: 'Pedicure',
      client: 'Mike T.',
      duration: 20,
      price: 40,
      status: 'active'
   }
])

const newService = ref({
   name: '',
   client: '',
   duration: '',
   price: '',
   status: 'pending'
})

// Computed properties
const activeServicesCount = computed(() =>
   services.value.filter(s => s.status === 'active').length
)

const pendingServicesCount = computed(() =>
   services.value.filter(s => s.status === 'pending').length
)

const completedTodayCount = computed(() =>
   services.value.filter(s => s.status === 'completed').length
)

const todayRevenue = computed(() =>
   services.value
      .filter(s => s.status === 'completed')
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
   return colors[status] || 'bg-gray-500'
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
      name: newService.value.name,
      client: newService.value.client,
      duration: parseInt(newService.value.duration) || 0,
      price: parseFloat(newService.value.price) || 0,
      status: newService.value.status
   }

   services.value.push(service)

   // Reset form
   newService.value = {
      name: '',
      client: '',
      duration: '',
      price: '',
      status: 'pending'
   }

   showAddModal.value = false
   alert('Service added successfully!')
}

const editService = (service) => {
   // Implement edit functionality
   console.log('Edit service:', service)
   alert('Edit functionality would open a modal with pre-filled form')
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