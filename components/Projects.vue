<template>
  <div class="py-10 mx-auto grid grid-cols-1 gap-10">
    <div
      v-for="project in projects"
      :key="project.id"
      class="rounded-b-2xl container px-20"
    >
        <h2
          class="w-full text-center py-3 text-3xl mb-5 font-bold tracking-wider shadow-lg gradient"
        >
          <span class="container">
            <a :href="project.deployedUrl">
              {{ project.name }}
            </a>
          </span>
        </h2>
        <a :href="project.deployedUrl" class=" ">
          <img
            loading="lazy"
            :src="project.image"
            alt=""
            class="rounded-2xl object-fill shadow-2xl"
          />
        </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style></style>
