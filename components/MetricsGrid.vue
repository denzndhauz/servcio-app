<template>
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard v-for="metric in metrics" :key="metric.title" :title="metric.title" :value="metric.value"
         :change="metric.change" :icon="metric.icon" :color="metric.color" />
   </div>
</template>

<script setup>
defineProps({
   metrics: {
      type: Array,
      required: true
   }
})
</script>