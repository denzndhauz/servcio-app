<template>
   <div class="bg-white rounded-2xl p-6 border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">Peak Hours Analysis</h3>
      <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
         <div v-for="day in weeklyData" :key="day.day" class="text-center">
            <p class="text-sm font-medium text-gray-700 mb-2">{{ day.day }}</p>
            <div class="h-32 flex flex-col justify-end">
               <div class="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t transition-all duration-700"
                  :style="{ height: `${(day.bookings / maxBookings) * 100}%` }"></div>
            </div>
            <p class="text-xs text-gray-500 mt-2">{{ day.bookings }} bookings</p>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   weeklyData: {
      type: Array,
      required: true
   }
})

const maxBookings = computed(() => Math.max(...props.weeklyData.map(d => d.bookings)))
</script>