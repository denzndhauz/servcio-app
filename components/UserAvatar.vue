<template>
   <div
      class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
      <span class="text-white text-sm font-medium">{{ initials }}</span>
   </div>
</template>

<script setup>
const props = defineProps({
   name: {
      type: String,
      default: 'John Doe'
   }
})

const initials = computed(() => {
   return props.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
})
</script>