<template>
   <div class="bg-white rounded-2xl p-6 border border-gray-100">
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

      <div class="h-64 flex items-end space-x-2">
         <div v-for="(item, index) in data" :key="index" class="flex-1 flex flex-col items-center space-y-2">
            <div class="w-full flex flex-col space-y-1">
               <div class="w-full bg-purple-600 rounded-t transition-all duration-500"
                  :style="{ height: `${(item.revenue / maxRevenue) * 200}px` }"></div>
               <div class="w-full bg-blue-400 rounded-b transition-all duration-500"
                  :style="{ height: `${(item.services / maxServices) * 100}px` }"></div>
            </div>
            <span class="text-xs text-gray-600">{{ item.day }}</span>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   data: {
      type: Array,
      required: true
   }
})

const maxRevenue = computed(() => Math.max(...props.data.map(d => d.revenue)))
const maxServices = computed(() => Math.max(...props.data.map(d => d.services)))
</script>