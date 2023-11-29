<template>
  <div class="w-full gradient text-white  ">
    <Navbar />
    <main>
      <Projects />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Projects,
    Footer,
  },
};
</script>
