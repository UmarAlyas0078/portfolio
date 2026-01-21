import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

export function useScrollAnimation(options = {}) {
  const element = ref(null)
  const isVisible = ref(false)
  let observer = null
  
  const { threshold = 0.1, rootMargin = '0px' } = options

  const setupObserver = () => {
    if (!element.value || observer) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (observer && element.value) {
              observer.unobserve(element.value)
            }
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element.value)
  }

  onMounted(() => {
    nextTick(() => {
      setupObserver()
    })
  })

  onUnmounted(() => {
    if (observer && element.value) {
      observer.unobserve(element.value)
      observer.disconnect()
    }
  })

  watch(element, (newVal) => {
    if (newVal && !observer) {
      nextTick(() => {
        setupObserver()
      })
    }
  })

  return { element, isVisible }
}