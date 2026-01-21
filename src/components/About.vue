<script setup>
const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '30+' },
  { label: 'Apps Published', value: '10+' },
  { label: 'Happy Clients', value: '20+' }
]
</script>

<template>
  <section id="about" class="section-container bg-white dark:bg-gray-900">
    <h2 class="section-title">About Me</h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Left: Image/Illustration -->
      <div class="flex justify-center">
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
      <div class="space-y-6">
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Professional Android & Flutter Developer
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
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="card text-center"
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
