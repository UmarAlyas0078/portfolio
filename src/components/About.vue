<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Apps Published', value: '10+' },
  { label: 'Happy Clients', value: '10+' }
]

const titleRef = ref(null)
const imageRef = ref(null)
const contentRef = ref(null)
const statsRef = ref(null)

const titleVisible = ref(false)
const imageVisible = ref(false)
const contentVisible = ref(false)
const statsVisible = ref(false)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === titleRef.value) titleVisible.value = true
        if (entry.target === imageRef.value) imageVisible.value = true
        if (entry.target === contentRef.value) contentVisible.value = true
        if (entry.target === statsRef.value) statsVisible.value = true
      }
    })
  }, observerOptions)

  if (titleRef.value) observer.observe(titleRef.value)
  if (imageRef.value) observer.observe(imageRef.value)
  if (contentRef.value) observer.observe(contentRef.value)
  if (statsRef.value) observer.observe(statsRef.value)
})
</script>

<template>
  <section id="about" class="section-container bg-white dark:bg-gray-900">
    <h2 
      ref="titleRef"
      :class="['section-title transition-all duration-800 ease-out', titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      About Me
    </h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Left: Image/Illustration -->
      <div 
        ref="imageRef"
        :class="['flex justify-center transition-all duration-800 delay-200 ease-out', imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']"
      >
        <div class="relative">
          <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl">
            <svg class="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-50 animate-pulse"></div>
        </div>
      </div>

      <!-- Right: Content -->
      <div 
        ref="contentRef"
        :class="['space-y-6 transition-all duration-800 delay-300 ease-out', contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10']"
      >
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Senior Android Developer | Mobile Technology Enthusiast
        </h3>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a passionate mobile developer with <strong>5+ years of experience</strong> specializing in Android development using Kotlin and Java. I've expanded my expertise to include Flutter, enabling me to build beautiful cross-platform applications.
        </p>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          My journey in mobile development has been driven by a love for creating intuitive, performant, and user-friendly applications. I specialize in modern Android development with Jetpack Compose, MVVM architecture, and clean code principles.
        </p>

        <div class="pt-4">
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Do:</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600 dark:text-gray-400">Native Android app development with Kotlin & Java</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600 dark:text-gray-400">Cross-platform development with Flutter & Dart</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600 dark:text-gray-400">Modern UI with Jetpack Compose & Material Design</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600 dark:text-gray-400">Backend integration with REST APIs & Firebase</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div 
      ref="statsRef"
      :class="['grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-800 delay-500 ease-out', statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        :class="['card text-center transition-all duration-500', statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5']"
        :style="{ transitionDelay: statsVisible ? `${600 + index * 100}ms` : '0ms' }"
      >
        <div class="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
          {{ stat.value }}
        </div>
        <div class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </section>
</template>
