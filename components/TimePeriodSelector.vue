<template>
   <div class="flex space-x-2">
      <button v-for="period in timePeriods" :key="period.value" @click="$emit('update:modelValue', period.value)"
         :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            modelValue === period.value
               ? 'bg-purple-600 text-white'
               : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
         ]">
         {{ period.label }}
      </button>
   </div>
</template>

<script setup>
defineProps({
   modelValue: {
      type: String,
      required: true
   }
})

defineEmits(['update:modelValue'])

const timePeriods = [
   { label: 'Today', value: '1d' },
   { label: '7 Days', value: '7d' },
   { label: '30 Days', value: '30d' },
   { label: '3 Months', value: '3m' },
   { label: 'Year', value: '1y' }
]
</script>