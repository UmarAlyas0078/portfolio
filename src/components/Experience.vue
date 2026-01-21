<script setup>
import { ref, onMounted } from 'vue'

const experiences = [
  {
    id: 1,
    role: 'Senior Android Developer',
    company: 'Joblogic Service Management Software',
    location: 'Lahore, Punjab, Pakistan',
    period: 'Apr 2023 - Present',
    type: 'Full-time',
    description: 'Expanded and sustained Android application for Joblogic, a field service management platform used by engineers and office staff. Designed modular architecture using MVVM and Clean Architecture, increasing scalability and reducing technical debt.',
    achievements: [
      'Designed modular architecture using MVVM and Clean Architecture, increasing scalability',
      'Delivered features including job scheduling, reporting, invoicing, compliance tracking',
      'Implemented biometric authentication, push notifications, and offline-first support',
      'Optimized performance, reduced crash rates, and collaborated with cross-functional teams',
      'Collaborated with international development teams from UK and Vietnam',
      'Revamped codebase adhering to best practices, reducing technical debt',
      'Used GitHub Copilot in pair-programming sessions to accelerate development'
    ],
    current: true
  },
  {
    id: 2,
    role: 'Android Developer',
    company: 'ElementaryLogics',
    location: 'Lahore, Punjab, Pakistan',
    period: 'Apr 2022 - Apr 2023',
    type: 'Full-time',
    description: 'Developed and optimized Android applications including Nowatt Lighting, The Pavilion, Pavilion Cafe, and Mela. Utilized Java and Kotlin for feature implementation and performance enhancements. Collaborated with cross-functional teams, conducted code reviews, and mentored junior developers.',
    achievements: [
      'Developed multiple Android applications: Nowatt Lighting, The Pavilion, Pavilion Cafe, and Mela',
      'Achieved 30% reduction in app loading times through optimization',
      'Improved server response time by 25% through backend optimization',
      'Enhanced app security and increased user downloads',
      'Conducted code reviews and mentored junior developers',
      'Collaborated effectively with cross-functional teams using Java and Kotlin'
    ],
    current: false
  },
  {
    id: 3,
    role: 'Android Developer',
    company: 'CodesOrbit',
    location: 'Islamabad, Pakistan',
    period: 'Sep 2020 - Mar 2022',
    type: 'Full-time',
    description: 'At CodesOrbit, I developed and optimized several Android applications, enhancing their functionality and performance. Key projects included Ezycapture, a video and image utility app with over 90k downloads on Play Store, and Skoped Micro, an app featuring a built-in micrometer for precise measurements and live broadcast capabilities.',
    achievements: [
      'Developed Ezycapture app with over 100k+ downloads on Play Store',
      'Built Skoped Micro with built-in micrometer for precise measurements',
      'Created Phone Skope advanced camera app with 4K and 360° photography features',
      'Developed PhoneSkope Editor with video editing capabilities (cropping, trimming, brightness adjustment)',
      'Fixed critical bugs and maintained high-quality codebase',
      'Added new features to enhance user experience across multiple apps'
    ],
    current: false
  }
]

const titleRef = ref(null)
const experienceVisible = ref(false)
const experienceRef = ref(null)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === titleRef.value || entry.target === experienceRef.value) {
          experienceVisible.value = true
        }
      }
    })
  }, observerOptions)

  if (titleRef.value) observer.observe(titleRef.value)
  if (experienceRef.value) observer.observe(experienceRef.value)
})
</script>

<template>
  <section id="experience" class="section-container bg-gray-50 dark:bg-gray-800">
    <h2 
      ref="titleRef"
      :class="['section-title transition-all duration-800 ease-out', experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      Work Experience
    </h2>
    
    <p 
      :class="['text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-800 delay-200 ease-out', experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      My 5-year professional journey in Android development, showcasing growth from Junior Android Developer to experienced mobile developer.
    </p>

    <div 
      ref="experienceRef"
      class="max-w-4xl mx-auto"
    >
      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-300 dark:bg-primary-700"></div>

        <!-- Experience Items -->
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :class="['relative mb-12 transition-all duration-700 ease-out', experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          :style="{ transitionDelay: experienceVisible ? `${300 + index * 200}ms` : '0ms' }"
        >
          <div
            :class="[
              'md:flex',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            ]"
          >
            <!-- Content Card -->
            <div class="md:w-1/2" :class="index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'">
              <div class="card relative">
                <!-- Current Badge -->
                <div v-if="exp.current" class="absolute -top-3 -right-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  Current
                </div>

                <!-- Role & Company -->
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ exp.role }}
                </h3>
                <div class="flex flex-wrap items-center gap-2 mb-3">
                  <span class="text-primary-600 dark:text-primary-400 font-semibold">
                    {{ exp.company }}
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">•</span>
                  <span class="text-gray-600 dark:text-gray-400">{{ exp.location }}</span>
                </div>

                <!-- Period & Type -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                    📅 {{ exp.period }}
                  </span>
                  <span class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                    {{ exp.type }}
                  </span>
                </div>

                <!-- Description -->
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ exp.description }}
                </p>

                <!-- Achievements -->
                <div class="space-y-2">
                  <h4 class="font-semibold text-gray-900 dark:text-white text-sm mb-2">Key Achievements:</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="achievement in exp.achievements"
                      :key="achievement"
                      class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Timeline Dot -->
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center">
              <div
                :class="[
                  'w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg',
                  exp.current ? 'bg-green-500' : 'bg-primary-500'
                ]"
              ></div>
            </div>

            <!-- Spacer for alternating layout -->
            <div class="hidden md:block md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Download CV Button -->
    <div class="text-center mt-12">
      <a
        href="/UmarAlyasResume.pdf"
        download
        class="inline-flex items-center gap-2 btn-primary"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download Full Resume
      </a>
    </div>
  </section>
</template>
