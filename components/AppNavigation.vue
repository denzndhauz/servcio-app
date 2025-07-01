<template>
   <nav class="hidden md:flex space-x-8">
      <NuxtLink v-for="item in navigationItems" :key="item.name" :to="item.href" :class="[
         'font-medium transition-colors',
         $route.path === item.href
            ? 'text-purple-600'
            : 'text-gray-500 hover:text-gray-700'
      ]">
         {{ item.name }}
      </NuxtLink>
   </nav>
</template>

<script setup>
const navigationItems = [
   { name: 'Dashboard', href: '/dashboard' },
   { name: 'Services', href: '/services' },
   { name: 'Analytics', href: '/analytics' },
   { name: 'Settings', href: '/settings' }
]
</script>