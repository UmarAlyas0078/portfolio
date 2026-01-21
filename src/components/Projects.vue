<script setup>
import { ref, onMounted } from 'vue'

const projects = [
  {
    id: 1,
    title: 'Joblogic Mobile',
    description: 'Real-time interface between Joblogic Service Management System and engineers\' mobile devices. Eliminates paper job sheets and expensive office trips through comprehensive mobile workforce management.',
    technologies: ['Java', 'Kotlin', 'XML', 'Flutter', 'Real-time APIs', 'Forms Builder'],
    image: '🔧',
    github: null,
    playstore: null,
    featured: true,
    company: 'Joblogic',
    features: [
      'Real-time Job Information',
      'Digital Time Sheets & Notes',
      'Parts & Expenses Tracking',
      'Photo & Signature Capture',
      'Bespoke Forms Builder',
      'Risk Assessment Forms',
      'Certificates Management',
      'Paperless Workflow'
    ]
  },
  {
    id: 2,
    title: 'TradeHero',
    description: 'An all-in-one mobile app for tradesmen to manage their business on the go. Easily create and manage appointments, quotes, jobs, and invoices. Seamlessly transition between tasks, send professional PDFs, and accept secure payments via Stripe. Perfect for plumbers, electricians, and other field professionals.',
    technologies: ['Flutter', 'Dart', 'Stripe Payment API', 'PDF Generation', 'REST APIs', 'Getx'],
    image: '🛠️',
    github: null,
    playstore: null,
    featured: true,
    company: 'Joblogic',
    features: [
      'Appointment Management',
      'Quote Creation & Management',
      'Job Tracking',
      'Invoice Generation',
      'PDF Export & Sharing',
      'Stripe Payment Integration',
      'Professional Business Management',
      'Field Service Optimization'
    ]
  },
  {
    id: 3,
    title: 'Ezycapture',
    description: 'Fast Video to Photo Converter - A Video and Image utility application with 100K+ downloads on Google Play. Extract frames from videos instantly or at timed intervals.',
    technologies: ['Java', 'Kotlin', 'XML', 'Video Processing', 'Gallery API'],
    image: '📹',
    github: null,
    playstore: null,
    featured: true,
    company: 'CodesOrbit',
    downloads: '100K+',
    features: [
      'Quick Capture - Manual frame extraction',
      'Time Capture - Automated interval capture',
      'Easy Mode - Automatic frame extraction',
      'Advanced Mode - Manual control',
      'Gallery Integration',
      'Batch Frame Processing'
    ]
  },
  {
    id: 4,
    title: 'Mela',
    description: 'A marketplace transforming shopping experiences for people of Pakistan by providing a single platform to browse offers from retailers. Provides huge savings and notifications about latest promotions in desired stores.',
    technologies: ['Java', 'Kotlin', 'XML', 'Geofencing', 'Location Services', 'REST APIs'],
    image: '🛍️',
    github: null,
    playstore: null,
    featured: true,
    company: 'ElementaryLogics',
    features: [
      'Browse & Save Promotions',
      'Store Locator & Directions',
      'Shopping List Creator',
      'Geofence Alerts (500m range)',
      'Customized Search & Filters',
      'Favorite Stores & Promotions',
      'Category-based Shopping',
      'Real-time Notifications'
    ]
  },
  {
    id: 5,
    title: 'The Pavilion',
    description: 'Book The Pavilion for different types of sports for your friends and family with few clicks. Features live booking time slot checking, instant booking, and pre-orders for food & drinks to be served at your arrival.',
    technologies: ['Java', 'Kotlin', 'XML', 'Real-time Booking API', 'SQLite', 'REST APIs'],
    image: '🏟️',
    github: null,
    playstore: null,
    featured: false,
    company: 'ElementaryLogics',
    features: [
      'Sports Facility Booking',
      'Live Time Slot Checking',
      'Instant Booking Engine',
      'Food & Drinks Pre-ordering',
      'Booking History',
      'Photo Stream',
      'Promotions & News',
      'Family-friendly Sports Venue'
    ]
  },
  {
    id: 6,
    title: 'Nowatt Lighting',
    description: 'Control all connected solar devices with advanced lighting scenarios. Choose from 1 million colors and create custom lighting experiences. Professional solar lighting control for aesthetic, connected, smart, and reliable devices.',
    technologies: ['Java', 'Kotlin', 'XML', 'IoT Integration', 'Bluetooth/WiFi', 'Color API'],
    image: '💡',
    github: null,
    playstore: null,
    featured: false,
    company: 'ElementaryLogics',
    features: [
      'Solar Device Control',
      '1 Million Color Selection',
      'Custom Lighting Scenarios',
      'Connected Smart Devices',
      'Professional Solar Lighting',
      'IoT Device Integration',
      'Remote Device Management',
      'Energy-efficient Controls'
    ]
  },
  {
    id: 7,
    title: 'Pavilion Cafe',
    description: 'A comprehensive cafe application where customers can customize their orders and add or remove multiple ingredients from special items. Features admin panel with thermal printer integration for order management.',
    technologies: ['Java', 'Kotlin', 'XML', 'Thermal Printer API', 'SQLite', 'REST APIs'],
    image: '☕',
    github: null,
    playstore: null,
    featured: false,
    company: 'ElementaryLogics',
    features: [
      'Custom Order Creation',
      'Ingredient Customization',
      'Add/Remove Multiple Ingredients',
      'Admin Panel',
      'Thermal Printer Integration',
      'Order Slip Printing',
      'Menu Management',
      'Order Tracking'
    ]
  },
  {
    id: 8,
    title: 'Phone Skope',
    description: 'An exciting new camera app that allows users to take better pictures and videos like a professional photographer. Features 4K camera and live 360° capabilities, making it the best camera app for Android devices.',
    technologies: ['Java', 'Kotlin', 'XML', 'Camera API', 'Camera2 API'],
    image: '📸',
    github: null,
    playstore: null,
    featured: false,
    company: 'CodesOrbit',
    features: [
      '4K Video Recording',
      'Slow-motion Video',
      '360° Camera Live',
      'Advanced Zoom (6x)',
      'Time-lapse Video',
      'Manual Controls',
      'Mirror Video',
      'Full 360° Rotation'
    ]
  },
  {
    id: 9,
    title: 'PhoneSkope Editor',
    description: 'A simple Video Editor app that makes your life easy by creating a painless interface that allows you to quickly edit your videos. Built at CodesOrbit with focus on user-friendly video editing capabilities.',
    technologies: ['Java', 'Kotlin', 'XML', 'Coroutines'],
    image: '🎬',
    github: null,
    playstore: null,
    featured: false,
    company: 'CodesOrbit',
    features: [
      'Video Cropping',
      'Video Trimming', 
      'Video Rotation',
      'Video Brightness Adjustment',
      'Video Contrast Adjustment'
    ]
  }
]

const titleRef = ref(null)
const projectsVisible = ref(false)
const projectsRef = ref(null)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === titleRef.value) {
          setTimeout(() => { projectsVisible.value = true }, 200)
        }
        if (entry.target === projectsRef.value) {
          projectsVisible.value = true
        }
      }
    })
  }, observerOptions)

  if (titleRef.value) observer.observe(titleRef.value)
  if (projectsRef.value) observer.observe(projectsRef.value)
})
</script>

<template>
  <section id="projects" class="section-container bg-white dark:bg-gray-900">
    <h2 
      ref="titleRef"
      :class="['section-title transition-all duration-800 ease-out', projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      Featured Projects
    </h2>
    
    <p 
      :class="['text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-800 delay-200 ease-out', projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      Here are some of my recent projects that showcase my skills in mobile development. Each project demonstrates different aspects of modern app development.
    </p>

    <div 
      ref="projectsRef"
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :class="['card group transition-all duration-700 ease-out', projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        :style="{ transitionDelay: projectsVisible ? `${300 + index * 100}ms` : '0ms' }"
      >
        <!-- Project Icon/Image -->
        <div class="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
          <span class="text-7xl">{{ project.image }}</span>
        </div>

        <!-- Featured Badge -->
        <div class="flex gap-2 mb-3">
          <div v-if="project.featured" class="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
            ⭐ Featured
          </div>
          <div v-if="project.downloads" class="inline-block px-3 py-1 bg-green-400 text-green-900 text-xs font-semibold rounded-full">
            📈 {{ project.downloads }} Downloads
          </div>
        </div>

        <!-- Project Title -->
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {{ project.title }}
        </h3>

        <!-- Project Description -->
        <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {{ project.description }}
        </p>

        <!-- Features List (if available) -->
        <div v-if="project.features" class="mb-4">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <ul class="space-y-1">
            <li
              v-for="feature in project.features.slice(0, 3)"
              :key="feature"
              class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Company Badge (if available) -->
        <div v-if="project.company" class="mb-4">
          <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
            @ {{ project.company }}
          </span>
        </div>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-md"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Links -->
        <div class="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            GitHub
          </a>
          
          <a
            v-if="project.playstore"
            :href="project.playstore"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Play Store
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
