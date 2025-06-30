<template>
   <div class="bg-white rounded-2xl p-6 border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">Service Performance</h3>
      <div class="space-y-4">
         <div v-for="service in services" :key="service.name" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
               <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: service.color }"></div>
               <span class="text-gray-700 font-medium">{{ service.name }}</span>
            </div>
            <div class="flex items-center space-x-4">
               <div class="text-right">
                  <p class="text-gray-900 font-semibold">${{ service.revenue.toLocaleString() }}</p>
                  <p class="text-gray-500 text-sm">{{ service.count }} services</p>
               </div>
               <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700" :style="{
                     width: `${service.percentage}%`,
                     backgroundColor: service.color
                  }"></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   services: {
      type: Array,
      required: true
   }
})
</script>