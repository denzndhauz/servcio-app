<template>
   <div class="relative">
      <div v-if="hasNotifications" class="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
      <svg class="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" fill="none"
         stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
         </path>
      </svg>
   </div>
</template>

<script setup>
const hasNotifications = ref(true)

const showModal = ref(false)
const currentNotification = ref({
   type: 'service',
   title: 'New Appointment',
   message: 'Sarah M. booked a facial treatment',
   timestamp: new Date(),
   actions: {
      primary: { label: 'Confirm', action: 'confirm' },
      secondary: { label: 'View', action: 'view' }
   }
})

const handleNotificationAction = (action, notification) => {
   console.log('Action:', action, 'Notification:', notification)
}
</script>