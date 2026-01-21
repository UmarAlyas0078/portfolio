<script setup>
const skills = [
  {
    category: 'Mobile Development',
    items: [
      { name: 'Android', level: 95, color: 'bg-green-500' },
      { name: 'Kotlin', level: 90, color: 'bg-purple-500' },
      { name: 'Java', level: 85, color: 'bg-red-500' },
      { name: 'Flutter', level: 80, color: 'bg-blue-500' },
      { name: 'Dart', level: 80, color: 'bg-cyan-500' }
    ]
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'Jetpack Compose', level: 85, color: 'bg-green-600' },
      { name: 'MVVM Architecture', level: 90, color: 'bg-indigo-500' },
      { name: 'Coroutines', level: 85, color: 'bg-yellow-500' },
      { name: 'Retrofit', level: 90, color: 'bg-orange-500' },
      { name: 'Hilt/Dagger', level: 80, color: 'bg-pink-500' }
    ]
  },
  {
    category: 'Backend & Services',
    items: [
      { name: 'Firebase', level: 85, color: 'bg-yellow-600' },
      { name: 'REST APIs', level: 90, color: 'bg-blue-600' },
      { name: 'Room Database', level: 90, color: 'bg-pink-600' },
      { name: 'SQLite', level: 85, color: 'bg-gray-600' },
      { name: 'Git', level: 90, color: 'bg-red-600' }
    ]
  }
]

const technologies = [
  { name: 'Android', icon: '🤖' },
  { name: 'Kotlin', icon: '🔷' },
  { name: 'Java', icon: '☕' },
  { name: 'Flutter', icon: '🦋' },
  { name: 'Dart', icon: '🎯' },
  { name: 'Jetpack Compose', icon: '🎨' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'REST API', icon: '🌐' },
  { name: 'Git', icon: '📦' },
  { name: 'Material Design', icon: '💎' }
]
</script>

<template>
  <section id="skills" class="section-container bg-gray-50 dark:bg-gray-800">
    <h2 class="section-title">Skills & Technologies</h2>

    <!-- Technology Badges -->
    <div class="flex flex-wrap justify-center gap-4 mb-16">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="card px-6 py-3 flex items-center gap-3 hover:shadow-xl"
      >
        <span class="text-2xl">{{ tech.icon }}</span>
        <span class="font-semibold text-gray-800 dark:text-gray-200">{{ tech.name }}</span>
      </div>
    </div>

    <!-- Skill Progress Bars -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="skillGroup in skills"
        :key="skillGroup.category"
        class="card"
      >
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {{ skillGroup.category }}
        </h3>
        
        <div class="space-y-4">
          <div
            v-for="skill in skillGroup.items"
            :key="skill.name"
          >
            <div class="flex justify-between mb-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                :class="skill.color"
                class="h-2.5 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Skills -->
    <div class="mt-16 text-center">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Other Skills</h3>
      <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        <span
          v-for="skill in ['CI/CD', 'Unit Testing', 'UI/UX Design', 'Agile/Scrum', 'Code Review', 'Performance Optimization', 'Material Design', 'Clean Architecture', 'Dependency Injection', 'RxJava']"
          :key="skill"
          class="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
