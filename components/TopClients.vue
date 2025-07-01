<template>
   <div class="bg-white rounded-2xl p-6 border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">Top Clients</h3>
      <div class="space-y-4">
         <div v-for="client in clients" :key="client.name" class="flex items-center justify-between">
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
               <p class="text-gray-900 font-semibold">${{ client.spent.toLocaleString() }}</p>
               <p class="text-gray-500 text-sm">total spent</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   clients: {
      type: Array,
      required: true
   }
})
</script>