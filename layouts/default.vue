<template>
  <div class="w-full gradient text-white">
    <Navbar />
    <p
      class="w-fit mx-auto container transition-all duration-300 ease-in-out text-2xl font-semibold lg:py-6 md:py-4 sm:py-3 xs:py-2 xxs:py-1.5 py-1"
    >
      {{ animatedWelcome || "&nbsp;" }}
    </p>
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      animatedWelcome: "",
      intervalId: null,
    };
  },
  mounted() {
    this.animateWelcome();
  },
  methods: {
    animateWelcome() {
      let i = 0;
      let direction = "forward";
      const text = "Welcome to my portfolio!...";
      const animate = () => {
        if (direction === "forward") {
          if (i < text.length) {
            this.animatedWelcome = text.substring(0, i + 1);
            i++;
          } else {
            direction = "backward";
            i--;
          }
        } else if (direction === "backward") {
          if (i >= 0) {
            this.animatedWelcome = text.substring(0, i);
            i--;
          } else {
            direction = "forward";
            i++;
          }
        }
        const speed = direction === "forward" ? 200 : 25;
        setTimeout(animate, speed);
      };
      animate();
    },
  },
  watch: {
    activeContent: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.animateWelcome();
        }
      },
      deep: true,
    },
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
