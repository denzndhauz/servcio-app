<template>
   <div>
      <!-- Navigation -->
      <nav class="bg-white shadow-lg fixed w-full z-50">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
               <div class="flex items-center">
                  <div class="flex-shrink-0 flex items-center">
                     <div
                        class="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                           </path>
                        </svg>
                     </div>
                     <span class="ml-3 text-xl font-bold text-gray-900">Servicio</span>
                  </div>
                  <div class="hidden md:ml-10 md:flex md:space-x-8">
                     <a href="#features"
                        class="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
                     <a href="#pricing"
                        class="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
                     <a href="#testimonials"
                        class="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
                     <a href="#contact"
                        class="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                  </div>
               </div>
               <div class="flex items-center space-x-4">
                  <NuxtLink to="/login"
                     class="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Login
                  </NuxtLink>
                  <button @click="scrollToDemo"
                     class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                     Get Started
                  </button>
               </div>
            </div>
         </div>
      </nav>

      <!-- Hero Section -->
      <section
         class="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div class="space-y-8">
                  <div class="space-y-4">
                     <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Monitor Your
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                           Beauty Business
                        </span>
                        in Real-Time
                     </h1>
                     <p class="text-xl text-gray-600 leading-relaxed">
                        Servicio helps spas, barber shops, and salons track service quality, monitor customer
                        satisfaction, and optimize operations with powerful analytics.
                     </p>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-4">
                     <button @click="scrollToDemo"
                        class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
                        Start Free Trial
                     </button>
                     <button @click="watchDemo"
                        class="flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                           <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clip-rule="evenodd"></path>
                        </svg>
                        Watch Demo
                     </button>
                  </div>

                  <div class="flex items-center space-x-8 pt-4">
                     <div class="text-center">
                        <div class="text-2xl font-bold text-gray-900">500+</div>
                        <div class="text-sm text-gray-600">Active Salons</div>
                     </div>
                     <div class="text-center">
                        <div class="text-2xl font-bold text-gray-900">50K+</div>
                        <div class="text-sm text-gray-600">Services Tracked</div>
                     </div>
                     <div class="text-center">
                        <div class="text-2xl font-bold text-gray-900">99.9%</div>
                        <div class="text-sm text-gray-600">Uptime</div>
                     </div>
                  </div>
               </div>

               <div class="relative">
                  <div
                     class="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div class="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white">
                        <div class="flex items-center justify-between mb-4">
                           <h3 class="text-lg font-semibold">Live Dashboard</h3>
                           <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <div class="space-y-3">
                           <div class="flex justify-between items-center">
                              <span class="text-sm opacity-90">Active Services</span>
                              <span class="font-bold">{{ liveStats.activeServices }}</span>
                           </div>
                           <div class="flex justify-between items-center">
                              <span class="text-sm opacity-90">Customer Satisfaction</span>
                              <span class="font-bold">{{ liveStats.satisfaction }}%</span>
                           </div>
                           <div class="flex justify-between items-center">
                              <span class="text-sm opacity-90">Today's Revenue</span>
                              <span class="font-bold">${{ liveStats.revenue }}</span>
                           </div>
                        </div>
                     </div>
                     <div class="mt-4 space-y-2">
                        <div class="flex items-center space-x-2">
                           <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                           <span class="text-sm text-gray-600">Hair Cut - John D. (15 min remaining)</span>
                        </div>
                        <div class="flex items-center space-x-2">
                           <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span class="text-sm text-gray-600">Facial Treatment - Sarah M. (30 min remaining)</span>
                        </div>
                        <div class="flex items-center space-x-2">
                           <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                           <span class="text-sm text-gray-600">Manicure - Lisa K. (45 min remaining)</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-20 bg-white">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
               <h2 class="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Monitor Your Business</h2>
               <p class="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive tools designed specifically for beauty
                  and wellness businesses</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div v-for="feature in features" :key="feature.title"
                  class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <div
                     class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <component :is="feature.icon" class="w-6 h-6 text-white" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
               </div>
            </div>
         </div>
      </section>

      <!-- Pricing Section -->
      <section id="pricing" class="py-20 bg-gray-50">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
               <h2 class="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
               <p class="text-xl text-gray-600">Choose the plan that fits your business size</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div v-for="plan in pricingPlans" :key="plan.name" class="bg-white rounded-xl shadow-lg p-8 relative"
                  :class="plan.popular ? 'border-2 border-purple-500 transform scale-105' : ''">
                  <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                     <span
                        class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most
                        Popular</span>
                  </div>

                  <div class="text-center mb-8">
                     <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
                     <div class="text-4xl font-bold text-gray-900 mb-2">
                        ${{ plan.price }}
                        <span class="text-lg text-gray-600 font-normal">/month</span>
                     </div>
                     <p class="text-gray-600">{{ plan.description }}</p>
                  </div>

                  <ul class="space-y-3 mb-8">
                     <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                           </path>
                        </svg>
                        <span class="text-gray-700">{{ feature }}</span>
                     </li>
                  </ul>

                  <button class="w-full py-3 px-6 rounded-lg font-semibold transition-all"
                     :class="plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'">
                     {{ plan.buttonText }}
                  </button>
               </div>
            </div>
         </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="py-20 bg-white">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
               <h2 class="text-4xl font-bold text-gray-900 mb-4">Loved by Beauty Professionals</h2>
               <p class="text-xl text-gray-600">See what our customers say about Servicio</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-gray-50 rounded-xl p-6">
                  <div class="flex items-center mb-4">
                     <div class="flex text-yellow-400">
                        <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                  </div>
                  <p class="text-gray-700 mb-4 italic">"{{ testimonial.content }}"</p>
                  <div class="flex items-center">
                     <div
                        class="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {{testimonial.name.split(' ').map(n => n[0]).join('')}}
                     </div>
                     <div class="ml-3">
                        <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                        <div class="text-sm text-gray-600">{{ testimonial.business }}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- CTA Section -->
      <section id="contact" class="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
         <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p class="text-xl text-purple-100 mb-8">Join hundreds of beauty professionals who trust Servicio</p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button @click="startTrial"
                  class="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Start 14-Day Free Trial
               </button>
               <button @click="contactSales"
                  class="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
                  Contact Sales
               </button>
            </div>

            <p class="text-purple-200 text-sm mt-6">No credit card required • Cancel anytime • 24/7 support</p>
         </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div>
                  <div class="flex items-center mb-4">
                     <div
                        class="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                           </path>
                        </svg>
                     </div>
                     <span class="ml-2 text-lg font-bold">Servicio</span>
                  </div>
                  <p class="text-gray-400 text-sm">Monitoring beauty businesses with precision and care.</p>
               </div>

               <div>
                  <h4 class="font-semibold mb-4">Product</h4>
                  <ul class="space-y-2 text-sm text-gray-400">
                     <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
                     <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
                     <li><a href="#" class="hover:text-white transition-colors">API</a></li>
                     <li><a href="#" class="hover:text-white transition-colors">Integrations</a></li>
                  </ul>
               </div>

               <div>
                  <h4 class="font-semibold mb-4">Support</h4>
                  <ul class="space-y-2 text-sm text-gray-400">
                     <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
                     <li><a href="#" class="hover:text-white transition-colors">Contact Us</a></li>
                     <li><a href="#" class="hover:text-white transition-colors">Status</a></li>
                     <li><a href="#" class="hover:text-white transition-colors">Updates</a></li>
                  </ul>
               </div>

               <div>
                  <h4 class="font-semibold mb-4">Connect</h4>
                  <div class="flex space-x-4">
                     <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path
                              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                     </a>
                     <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path
                              d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                     </a>
                     <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
               <p>&copy; 2025 Servicio. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
         </div>
      </footer>
   </div>
</template>

<script setup>
// Page meta
useHead({
   title: 'Servicio - Service Monitoring for Beauty Businesses',
   meta: [
      { name: 'description', content: 'Monitor your spa, barber shop, or salon with real-time analytics, customer satisfaction tracking, and powerful business insights.' }
   ]
})

// Live stats animation
const liveStats = reactive({
   activeServices: 12,
   satisfaction: 97,
   revenue: 2840
})

// Animate stats on mount
onMounted(() => {
   const interval = setInterval(() => {
      liveStats.activeServices = Math.floor(Math.random() * 20) + 8
      liveStats.satisfaction = Math.floor(Math.random() * 5) + 95
      liveStats.revenue = Math.floor(Math.random() * 1000) + 2500
   }, 3000)

   onUnmounted(() => {
      clearInterval(interval)
   })
})

// Features data
const features = [
   {
      title: 'Real-Time Monitoring',
      description: 'Track all services in real-time with live updates on customer satisfaction and service progress.',
      icon: 'MonitorIcon'
   },
   {
      title: 'Customer Analytics',
      description: 'Deep insights into customer preferences, booking patterns, and satisfaction scores.',
      icon: 'ChartIcon'
   },
   {
      title: 'Staff Performance',
      description: 'Monitor staff productivity, service quality, and customer feedback for each team member.',
      icon: 'UsersIcon'
   },
   {
      title: 'Revenue Tracking',
      description: 'Complete financial overview with revenue tracking, profit margins, and growth analytics.',
      icon: 'DollarIcon'
   },
   {
      title: 'Appointment Management',
      description: 'Streamlined booking system with automated reminders and waitlist management.',
      icon: 'CalendarIcon'
   },
   {
      title: 'Quality Assurance',
      description: 'Automated quality checks and customer feedback collection after each service.',
      icon: 'ShieldIcon'
   }
]

// Pricing plans
const pricingPlans = [
   {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small salons',
      features: [
         'Up to 3 staff members',
         'Basic analytics',
         'Customer feedback',
         'Email support',
         'Mobile app access'
      ],
      buttonText: 'Start Free Trial',
      popular: false
   },
   {
      name: 'Professional',
      price: 79,
      description: 'Most popular for growing businesses',
      features: [
         'Up to 15 staff members',
         'Advanced analytics',
         'Custom reports',
         'Priority support',
         'API access',
         'Integrations'
      ],
      buttonText: 'Start Free Trial',
      popular: true
   },
   {
      name: 'Enterprise',
      price: 199,
      description: 'For large chains and franchises',
      features: [
         'Unlimited staff',
         'Multi-location support',
         'Custom integrations',
         'Dedicated support',
         'White-label options',
         'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      popular: false
   }
]

// Testimonials
const testimonials = [
   {
      name: 'Maria Rodriguez',
      business: 'Elegant Spa & Wellness',
      content: 'Servicio transformed how we manage our spa. Customer satisfaction is up 40% since we started using their monitoring system.'
   },
   {
      name: 'James Wilson',
      business: 'The Modern Barber',
      content: 'The real-time analytics help me make better business decisions. I can see exactly which services are most profitable.'
   },
   {
      name: 'Sarah Chen',
      business: 'Beauty & Beyond Salon',
      content: 'Our staff loves the performance tracking features. It has motivated everyone to provide even better service quality.'
   }
]

// Methods
const scrollToDemo = () => {
   document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
}

const watchDemo = () => {
   // In a real app, this would open a demo video modal
   alert('Demo video would open here!')
}

const startTrial = () => {
   navigateTo('/register')
}

const contactSales = () => {
   // In a real app, this would open a contact form modal
   alert('Contact sales form would open here!')
}
</script>

<script>
// Define icon components for features
const MonitorIcon = {
   template: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
  <rect x="8" y="8" width="48" height="32" rx="4" fill="#4A4A4A"/>
  <rect x="16" y="16" width="32" height="16" rx="2" fill="#FFFFFF"/>
  <rect x="24" y="44" width="16" height="4" rx="1" fill="#4A4A4A"/>
  <rect x="20" y="50" width="24" height="4" rx="1" fill="#6B6B6B"/>
</svg>`
}

export default {
   components: {
      MonitorIcon,
   }
}
</script>