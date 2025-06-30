<template>
   <div>
      <!-- Notification Modal -->
      <Teleport to="body">
         <Transition name="modal">
            <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click="closeModal">
               <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <!-- Background overlay -->
                  <Transition name="overlay">
                     <div v-if="isOpen" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                  </Transition>

                  <!-- Modal positioning -->
                  <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                  <!-- Modal content -->
                  <Transition name="content">
                     <div v-if="isOpen"
                        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        @click.stop>
                        <!-- Header -->
                        <div class="flex items-start justify-between mb-4">
                           <div class="flex items-center space-x-3">
                              <!-- Icon based on notification type -->
                              <div :class="[
                                 'w-10 h-10 rounded-full flex items-center justify-center',
                                 iconConfig.bgColor
                              ]">
                                 <component :is="iconConfig.icon" :class="['w-6 h-6', iconConfig.iconColor]" />
                              </div>
                              <div>
                                 <h3 class="text-lg font-semibold text-gray-900">
                                    {{ notification.title }}
                                 </h3>
                                 <p class="text-sm text-gray-500">
                                    {{ formatTime(notification.timestamp) }}
                                 </p>
                              </div>
                           </div>

                           <!-- Close button -->
                           <button @click="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors">
                              <CloseIcon class="w-6 h-6" />
                           </button>
                        </div>

                        <!-- Content -->
                        <div class="mb-6">
                           <p class="text-gray-700 leading-relaxed">
                              {{ notification.message }}
                           </p>

                           <!-- Additional details if present -->
                           <div v-if="notification.details" class="mt-4 p-4 bg-gray-50 rounded-lg">
                              <h4 class="text-sm font-medium text-gray-900 mb-2">Details:</h4>
                              <div class="space-y-2">
                                 <div v-for="(value, key) in notification.details" :key="key"
                                    class="flex justify-between text-sm">
                                    <span class="text-gray-600 capitalize">{{ formatKey(key) }}:</span>
                                    <span class="text-gray-900 font-medium">{{ value }}</span>
                                 </div>
                              </div>
                           </div>

                           <!-- Service status indicator if applicable -->
                           <div v-if="notification.type === 'service'" class="mt-4">
                              <div class="flex items-center space-x-2">
                                 <div :class="[
                                    'w-3 h-3 rounded-full',
                                    getStatusColor(notification.status)
                                 ]"></div>
                                 <span class="text-sm font-medium text-gray-700 capitalize">
                                    {{ notification.status }} Service
                                 </span>
                              </div>
                           </div>
                        </div>

                        <!-- Actions -->
                        <div class="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                           <button v-if="notification.actions?.secondary" @click="handleAction('secondary')"
                              class="w-full sm:w-auto px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                              {{ notification.actions.secondary.label }}
                           </button>

                           <button v-if="notification.actions?.primary" @click="handleAction('primary')" :class="[
                              'w-full sm:w-auto px-4 py-2 rounded-lg font-medium transition-colors',
                              notification.type === 'error'
                                 ? 'bg-red-600 hover:bg-red-700 text-white'
                                 : notification.type === 'warning'
                                    ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                           ]">
                              {{ notification.actions.primary.label }}
                           </button>

                           <!-- Default dismiss button if no actions -->
                           <button v-if="!notification.actions" @click="closeModal"
                              class="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                              Got it
                           </button>
                        </div>
                     </div>
                  </Transition>
               </div>
            </div>
         </Transition>
      </Teleport>

      <!-- Demo buttons for testing -->
      <div class="p-8 space-y-4">
         <h2 class="text-2xl font-bold text-gray-900 mb-6">Notification Modal Demo</h2>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button v-for="demo in demoNotifications" :key="demo.type" @click="showNotification(demo)" :class="[
               'px-4 py-3 rounded-lg font-medium transition-colors text-left',
               demo.type === 'success' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                  demo.type === 'warning' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                     demo.type === 'error' ? 'bg-red-100 text-red-800 hover:bg-red-200' :
                        demo.type === 'service' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                           'bg-blue-100 text-blue-800 hover:bg-blue-200'
            ]">
               <div class="font-semibold">{{ demo.title }}</div>
               <div class="text-sm opacity-75">{{ demo.type }}</div>
            </button>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
   modelValue: {
      type: Boolean,
      default: false
   },
   notification: {
      type: Object,
      default: () => ({
         type: 'info',
         title: 'Notification',
         message: 'This is a notification message.',
         timestamp: new Date(),
         details: null,
         actions: null,
         status: null
      })
   }
})

// Emits
const emit = defineEmits(['update:modelValue', 'action'])

// Reactive data
const isOpen = computed({
   get: () => props.modelValue,
   set: (value) => emit('update:modelValue', value)
})

// Demo notifications for testing
const demoNotifications = ref([
   {
      type: 'service',
      title: 'New Appointment Booked',
      message: 'Sarah M. has booked a facial treatment for tomorrow at 2:00 PM. Please confirm the appointment and prepare the necessary equipment.',
      timestamp: new Date(),
      details: {
         customer: 'Sarah M.',
         service: 'Facial Treatment',
         duration: '30 minutes',
         price: '$85'
      },
      status: 'pending',
      actions: {
         primary: { label: 'Confirm Booking', action: 'confirm' },
         secondary: { label: 'View Details', action: 'view' }
      }
   },
   {
      type: 'success',
      title: 'Payment Received',
      message: 'Payment of $120 has been successfully processed for today\'s services. The transaction has been recorded in your daily revenue.',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      details: {
         amount: '$120',
         method: 'Credit Card',
         customer: 'John D.',
         services: '2 services'
      },
      actions: {
         primary: { label: 'View Transaction', action: 'view_transaction' }
      }
   },
   {
      type: 'warning',
      title: 'Service Running Late',
      message: 'The manicure service for Lisa K. is running 15 minutes behind schedule. This may affect subsequent appointments.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      details: {
         customer: 'Lisa K.',
         service: 'Manicure',
         delay: '15 minutes',
         nextAppointment: '3:30 PM'
      },
      status: 'active',
      actions: {
         primary: { label: 'Adjust Schedule', action: 'reschedule' },
         secondary: { label: 'Notify Customer', action: 'notify' }
      }
   },
   {
      type: 'error',
      title: 'Equipment Malfunction',
      message: 'The facial steamer in room 2 has stopped working. Please use alternative equipment or reschedule the appointment.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      details: {
         equipment: 'Facial Steamer',
         location: 'Room 2',
         affectedServices: '2 appointments',
         urgency: 'High'
      },
      actions: {
         primary: { label: 'Call Maintenance', action: 'maintenance' },
         secondary: { label: 'Reschedule', action: 'reschedule' }
      }
   },
   {
      type: 'info',
      title: 'Daily Revenue Update',
      message: 'You\'ve reached 85% of your daily revenue goal. Keep up the great work! You\'re only $180 away from your target.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      details: {
         currentRevenue: '$1,420',
         dailyGoal: '$1,600',
         remaining: '$180',
         servicesCompleted: '12'
      },
      actions: {
         primary: { label: 'View Analytics', action: 'analytics' }
      }
   }
])

// Methods
const closeModal = () => {
   isOpen.value = false
}

const handleAction = (actionType) => {
   const action = props.notification.actions[actionType]
   emit('action', action.action, props.notification)
   closeModal()
}

const formatTime = (timestamp) => {
   const now = new Date()
   const diff = now - new Date(timestamp)
   const minutes = Math.floor(diff / 60000)

   if (minutes < 1) return 'Just now'
   if (minutes < 60) return `${minutes} min ago`

   const hours = Math.floor(minutes / 60)
   if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`

   return new Date(timestamp).toLocaleDateString()
}

const formatKey = (key) => {
   return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

const getStatusColor = (status) => {
   const colors = {
      active: 'bg-green-500',
      pending: 'bg-yellow-500',
      completed: 'bg-blue-500',
      cancelled: 'bg-red-500'
   }
   return colors[status] || 'bg-gray-500'
}

// Icon configuration based on notification type
const iconConfig = computed(() => {
   const configs = {
      service: {
         icon: 'CalendarIcon',
         bgColor: 'bg-purple-100',
         iconColor: 'text-purple-600'
      },
      success: {
         icon: 'CheckCircleIcon',
         bgColor: 'bg-green-100',
         iconColor: 'text-green-600'
      },
      warning: {
         icon: 'ExclamationTriangleIcon',
         bgColor: 'bg-yellow-100',
         iconColor: 'text-yellow-600'
      },
      error: {
         icon: 'XCircleIcon',
         bgColor: 'bg-red-100',
         iconColor: 'text-red-600'
      },
      info: {
         icon: 'InformationCircleIcon',
         bgColor: 'bg-blue-100',
         iconColor: 'text-blue-600'
      }
   }
   return configs[props.notification.type] || configs.info
})

// Demo function
const currentNotification = ref({})
const showNotification = (notification) => {
   currentNotification.value = notification
   isOpen.value = true
}

// Icon Components
const CalendarIcon = {
   template: `
     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
     </svg>
   `
}

const CheckCircleIcon = {
   template: `
     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
     </svg>
   `
}

const ExclamationTriangleIcon = {
   template: `
     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
     </svg>
   `
}

const XCircleIcon = {
   template: `
     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
     </svg>
   `
}

const InformationCircleIcon = {
   template: `
     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
     </svg>
   `
}

const CloseIcon = {
   template: `
     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
     </svg>
   `
}
</script>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
   transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
   opacity: 0;
}

.overlay-enter-active,
.overlay-leave-active {
   transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
   opacity: 0;
}

.content-enter-active,
.content-leave-active {
   transition: all 0.3s ease;
}

.content-enter-from,
.content-leave-to {
   opacity: 0;
   transform: translateY(-20px) scale(0.95);
}
</style>