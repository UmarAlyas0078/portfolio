<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' or 'error'
const statusMessage = ref('')

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'umarilyas000@gmail.com',
    link: 'mailto:umarilyas000@gmail.com'
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/umar-alyas',
    link: 'https://www.linkedin.com/in/umar-alyas'
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/UmarAlyas0078',
    link: 'https://github.com/UmarAlyas0078'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  try {
    // Replace with your Formspree endpoint or EmailJS configuration
    const response = await fetch('https://formspree.io/f/xreeadrq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })
    
    if (response.ok) {
      submitStatus.value = 'success'
      statusMessage.value = 'Thank you! Your message has been sent successfully.'
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    submitStatus.value = 'error'
    statusMessage.value = 'Oops! Something went wrong. Please try again or email me directly.'
  } finally {
    isSubmitting.value = false
    
    // Clear status after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
      statusMessage.value = ''
    }, 5000)
  }
}

const titleRef = ref(null)
const contactVisible = ref(false)
const contactRef = ref(null)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === titleRef.value || entry.target === contactRef.value) {
          contactVisible.value = true
        }
      }
    })
  }, observerOptions)

  if (titleRef.value) observer.observe(titleRef.value)
  if (contactRef.value) observer.observe(contactRef.value)
})
</script>

<template>
  <section id="contact" class="section-container bg-white dark:bg-gray-900">
    <h2 
      ref="titleRef"
      :class="['section-title transition-all duration-800 ease-out', contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      Get In Touch
    </h2>
    
    <p 
      :class="['text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-800 delay-200 ease-out', contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
    </p>

    <div 
      ref="contactRef"
      class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
    >
      <!-- Contact Information -->
      <div 
        :class="['space-y-8 transition-all duration-800 delay-300 ease-out', contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']"
      >
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Let's connect! You can reach me through any of these channels:
          </p>
        </div>

        <div class="space-y-4">
          <a
            v-for="info in contactInfo"
            :key="info.label"
            :href="info.link"
            target="_blank"
            rel="noopener noreferrer"
            class="card flex items-center gap-4 hover:shadow-xl transition-all duration-300"
          >
            <div class="text-4xl">{{ info.icon }}</div>
            <div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ info.label }}</div>
              <div class="text-gray-900 dark:text-white font-semibold">{{ info.value }}</div>
            </div>
          </a>
        </div>

        <!-- Social Links -->
        <div class="pt-6">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/umar-alyas"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/UmarAlyas0078"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div 
        :class="['card transition-all duration-800 delay-400 ease-out', contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10']"
      >
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Send Me a Message
        </h3>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name *
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <!-- Status Message -->
          <div
            v-if="submitStatus"
            :class="[
              'p-4 rounded-lg',
              submitStatus === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            ]"
          >
            {{ statusMessage }}
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
