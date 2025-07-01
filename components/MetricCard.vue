<template>
   <div class="bg-white rounded-2xl p-6 border border-gray-100">
      <div class="flex items-center justify-between mb-4">
         <div :class="`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`">
            <component :is="iconComponent" />
         </div>
         <span :class="`text-sm font-medium ${changeColor}`">{{ change }}</span>
      </div>
      <div>
         <p class="text-gray-600 text-sm mb-1">{{ title }}</p>
         <p class="text-2xl font-bold text-gray-900">{{ value }}</p>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   title: String,
   value: String,
   change: String,
   icon: String,
   color: String
})

const iconBgColor = computed(() => {
   const colors = {
      green: 'bg-green-100',
      blue: 'bg-blue-100',
      purple: 'bg-purple-100',
      yellow: 'bg-yellow-100'
   }
   return colors[props.color] || 'bg-gray-100'
})

const changeColor = computed(() => {
   const colors = {
      green: 'text-green-500',
      blue: 'text-blue-500',
      purple: 'text-purple-500',
      yellow: 'text-yellow-500'
   }
   return colors[props.color] || 'text-gray-500'
})

const iconComponent = computed(() => {
   const icons = {
      revenue: () => h('div', { class: 'w-3 h-3 bg-green-500 rounded-full' }),
      clients: () => h('svg', {
         class: 'w-6 h-6 text-blue-600',
         fill: 'none',
         stroke: 'currentColor',
         viewBox: '0 0 24 24'
      }, [
         h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
         })
      ]),
      services: () => h('svg', {
         class: 'w-6 h-6 text-purple-600',
         fill: 'none',
         stroke: 'currentColor',
         viewBox: '0 0 24 24'
      }, [
         h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
         })
      ]),
      rating: () => h('svg', {
         class: 'w-6 h-6 text-yellow-600',
         fill: 'none',
         stroke: 'currentColor',
         viewBox: '0 0 24 24'
      }, [
         h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            d: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
         })
      ])
   }
   return icons[props.icon] || icons.revenue
})
</script>