<template>
  <div>
    <div
      class="mx-auto flex flex-col gap-2 py-1 xxs:gap-3 xxs:py-2 xs:gap-4 xs:py-3 sm:gap-6 sm:py-6 md:gap-8 md:py-10 lg:gap-10"
    >
      <h2
        class="mx-auto text-lg font-bold xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Projects
      </h2>
      <div
        v-for="project in projects"
        :key="project.id"
        class="container my-4 rounded-b-2xl"
      >
        <Project :project="project" />
      </div>
    </div>
    <div class="h-[0.6px] w-full bg-white opacity-10"></div>
    <div
      class="mx-auto flex flex-col gap-2 py-1 xxs:gap-3 xxs:py-2 xs:gap-4 xs:py-3 sm:gap-6 sm:py-6 md:gap-8 md:py-10 lg:gap-10"
    >
      <h2
        class="mx-auto text-lg font-bold xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Mini Projects
      </h2>
      <div
        v-for="project in miniProjects"
        :key="project.id"
        class="container my-4 rounded-b-2xl"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    },
    miniProjects() {
      return this.$store.state.miniProjects
    }
  }
}
</script>
