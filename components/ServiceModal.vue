<template>
   <div>
      <!-- Modal Overlay -->
      <Teleport to="body">
         <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click="handleOverlayClick">
            <div class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
               <!-- Background overlay -->
               <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

               <!-- Modal positioning -->
               <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

               <!-- Modal content -->
               <div
                  class="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
                  @click.stop>
                  <!-- Modal Header -->
                  <div class="flex items-center justify-between mb-6">
                     <h3 class="text-lg font-semibold text-gray-900">
                        {{ isEditing ? 'Edit Service' : 'Add New Service' }}
                     </h3>
                     <button @click="closeModal"
                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        <span class="sr-only">Close</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </button>
                  </div>

                  <!-- Form -->
                  <form @submit.prevent="handleSubmit" class="space-y-6">
                     <!-- Service Type -->
                     <div>
                        <label for="serviceType" class="block text-sm font-medium text-gray-700 mb-2">
                           Service Type
                        </label>
                        <select id="serviceType" v-model="form.serviceType" required
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm">
                           <option value="">Select a service</option>
                           <option value="Hair Cut">Hair Cut</option>
                           <option value="Facial Treatment">Facial Treatment</option>
                           <option value="Manicure">Manicure</option>
                           <option value="Pedicure">Pedicure</option>
                           <option value="Hair Color">Hair Color</option>
                           <option value="Massage">Massage</option>
                           <option value="Eyebrow Threading">Eyebrow Threading</option>
                           <option value="Other">Other</option>
                        </select>
                     </div>

                     <!-- Custom Service Type (if Other is selected) -->
                     <div v-if="form.serviceType === 'Other'">
                        <label for="customServiceType" class="block text-sm font-medium text-gray-700 mb-2">
                           Custom Service Type
                        </label>
                        <input id="customServiceType" v-model="form.customServiceType" type="text" required
                           placeholder="Enter custom service type"
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                     </div>

                     <!-- Client Name -->
                     <div>
                        <label for="clientName" class="block text-sm font-medium text-gray-700 mb-2">
                           Client Name
                        </label>
                        <input id="clientName" v-model="form.clientName" type="text" required
                           placeholder="Enter client name"
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                     </div>

                     <!-- Duration -->
                     <div>
                        <label for="duration" class="block text-sm font-medium text-gray-700 mb-2">
                           Duration (minutes)
                        </label>
                        <input id="duration" v-model.number="form.duration" type="number" min="1" max="300" required
                           placeholder="Enter duration in minutes"
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                     </div>

                     <!-- Price -->
                     <div>
                        <label for="price" class="block text-sm font-medium text-gray-700 mb-2">
                           Price ($)
                        </label>
                        <input id="price" v-model.number="form.price" type="number" min="0" step="0.01" required
                           placeholder="Enter price"
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                     </div>

                     <!-- Status -->
                     <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                           Status
                        </label>
                        <div class="flex space-x-4">
                           <label class="flex items-center">
                              <input v-model="form.status" type="radio" value="Active"
                                 class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" />
                              <span class="ml-2 text-sm text-gray-700">Active</span>
                           </label>
                           <label class="flex items-center">
                              <input v-model="form.status" type="radio" value="Pending"
                                 class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" />
                              <span class="ml-2 text-sm text-gray-700">Pending</span>
                           </label>
                           <label class="flex items-center">
                              <input v-model="form.status" type="radio" value="Completed"
                                 class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" />
                              <span class="ml-2 text-sm text-gray-700">Completed</span>
                           </label>
                        </div>
                     </div>

                     <!-- Notes (Optional) -->
                     <div>
                        <label for="notes" class="block text-sm font-medium text-gray-700 mb-2">
                           Notes (Optional)
                        </label>
                        <textarea id="notes" v-model="form.notes" rows="3" placeholder="Add any additional notes..."
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                     </div>

                     <!-- Form Actions -->
                     <div class="flex justify-end space-x-3 pt-4">
                        <button type="button" @click="closeModal"
                           class="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                           Cancel
                        </button>
                        <button type="submit" :disabled="isSubmitting"
                           class="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                           <span v-if="isSubmitting">
                              {{ isEditing ? 'Updating...' : 'Creating...' }}
                           </span>
                           <span v-else>
                              {{ isEditing ? 'Update Service' : 'Create Service' }}
                           </span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </Teleport>
   </div>
</template>

<script setup lang="ts">
interface ServiceFormData {
   serviceType: string
   customServiceType: string
   clientName: string
   duration: number | null
   price: number | null
   status: 'Active' | 'Pending' | 'Completed'
   notes: string
}

interface Service extends ServiceFormData {
   id?: string
   timeRemaining?: number
}

interface Props {
   isOpen: boolean
   service?: Service | null
}

interface Emits {
   (e: 'close'): void
   (e: 'save', service: Service): void
}

const props = withDefaults(defineProps<Props>(), {
   isOpen: false,
   service: null
})

const emit = defineEmits<Emits>()

// Reactive state
const isSubmitting = ref(false)

// Form data
const form = reactive<ServiceFormData>({
   serviceType: '',
   customServiceType: '',
   clientName: '',
   duration: null,
   price: null,
   status: 'Pending',
   notes: ''
})

// Computed
const isEditing = computed(() => !!props.service?.id)

// Watch for prop changes to populate form
watch(
   () => props.service,
   (newService) => {
      if (newService) {
         form.serviceType = newService.serviceType
         form.customServiceType = newService.customServiceType || ''
         form.clientName = newService.clientName
         form.duration = newService.duration
         form.price = newService.price
         form.status = newService.status
         form.notes = newService.notes || ''
      }
   },
   { immediate: true }
)

// Watch for modal close to reset form
watch(
   () => props.isOpen,
   (isOpen) => {
      if (!isOpen) {
         resetForm()
      }
   }
)

// Methods
const resetForm = () => {
   form.serviceType = ''
   form.customServiceType = ''
   form.clientName = ''
   form.duration = null
   form.price = null
   form.status = 'Pending'
   form.notes = ''
}

const closeModal = () => {
   emit('close')
}

const handleOverlayClick = (event: Event) => {
   if (event.target === event.currentTarget) {
      closeModal()
   }
}

const handleSubmit = async () => {
   if (isSubmitting.value) return

   isSubmitting.value = true

   try {
      const serviceData: Service = {
         ...form,
         serviceType: form.serviceType === 'Other' ? form.customServiceType : form.serviceType,
         duration: form.duration!,
         price: form.price!,
         timeRemaining: form.duration! // Initialize time remaining to full duration
      }

      if (isEditing.value && props.service?.id) {
         serviceData.id = props.service.id
      }

      emit('save', serviceData)
      closeModal()
   } catch (error) {
      console.error('Error saving service:', error)
      // Handle error (you might want to show a toast notification here)
   } finally {
      isSubmitting.value = false
   }
}

// Keyboard event handler
const handleKeydown = (event: KeyboardEvent) => {
   if (event.key === 'Escape') {
      closeModal()
   }
}

// Add/remove event listener for escape key
watch(
   () => props.isOpen,
   (isOpen) => {
      if (isOpen) {
         document.addEventListener('keydown', handleKeydown)
      } else {
         document.removeEventListener('keydown', handleKeydown)
      }
   }
)

// Cleanup on unmount
onUnmounted(() => {
   document.removeEventListener('keydown', handleKeydown)
})
</script>