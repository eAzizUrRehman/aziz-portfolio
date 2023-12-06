<template>
  <div class="gradient w-full text-white">
    <Navbar />
    <p
      class="container mx-auto w-fit py-1 text-xs font-semibold transition-all duration-300 ease-in-out xxs:py-1.5 xxs:text-sm xs:py-2 xs:text-base sm:py-3 sm:text-lg md:py-4 md:text-xl lg:py-6 lg:text-2xl"
    >
      {{ animatedWelcome || '&nbsp;' }}
    </p>
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      animatedWelcome: '',
      intervalId: null
    }
  },
  mounted() {
    this.animateWelcome()
  },
  methods: {
    animateWelcome() {
      let i = 0
      let direction = 'forward'
      const text = 'Welcome to my portfolio!...'
      const animate = () => {
        if (direction === 'forward') {
          if (i < text.length) {
            this.animatedWelcome = text.substring(0, i + 1)
            i++
          } else {
            direction = 'backward'
            i--
          }
        } else if (direction === 'backward') {
          if (i >= 0) {
            this.animatedWelcome = text.substring(0, i)
            i--
          } else {
            direction = 'forward'
            i++
          }
        }
        const speed = direction === 'forward' ? 200 : 25
        setTimeout(animate, speed)
      }
      animate()
    }
  },
  watch: {
    activeContent: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.animateWelcome()
        }
      },
      deep: true
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>
