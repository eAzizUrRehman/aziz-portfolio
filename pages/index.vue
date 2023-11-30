<template>
  <div
    class="grid grid-cols-1 gap-10 mx-auto md:py-10 sm:py-6 xs:py-3 xxs:py-2 py-1"
  >
    <div
      v-for="project in projects"
      :key="project.id"
      class="container rounded-b-2xl"
    >
      <h2
        class="w-full marker: mb-5 font-bold tracking-wider text-center shadow-lg md:py-3 sm:py-2 xs:py-1.5 xxs:py-1 py-0.5 gradient md:text-3xl sm:text-xl xs:text-lg xxs:text-base text-sm"
      >
        <a
          :href="project.deployedUrl"
          target="_blank"
          class="container hover:opacity-70"
        >
          {{ project.title }}
        </a>
      </h2>
      <div class="relative overflow-hidden group">
        <a :href="project.deployedUrl" target="_blank">
          <img
            loading="lazy"
            :src="project.image"
            alt=""
            class="z-10 object-fill shadow-2xl rounded-2xl"
          />
        </a>
        <div
          class="absolute top-0 left-0 z-50 hidden w-full h-full lg:px-20 md:px-16 sm:px-12 xs:px-8 xxs:px-6 px-4 lg:py-10 md:py-8 sm:py-6 xs:py-4 xxs:py-2 py-1 rounded-2xl opacity-95 group-hover:block gradient"
        >
          <div class="flex flex-col items-start justify-between h-full">
            <p class="flex gap-2 text-lg">
              Made with:
              <span v-for="(language, index) in project.languages" :key="index">
                {{ language
                }}<span v-if="index === project.languages.length - 2"> &</span>
                <span v-else-if="index !== project.languages.length - 1"
                  >,</span
                >
              </span>
            </p>
            <ol
              style="list-style-type: disc"
              class="flex flex-col lg:gap-2 md:gap-1 sm:gap-0.5 gap-0"
            >
              <li
                v-for="feature in project.features"
                :key="feature.id"
                class="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl xxs:text-lg text-base"
              >
                {{ feature.description }}
              </li>
            </ol>
            <div class="flex gap-4">
              <Button text="See Project" :url="project.deployedUrl" />
              <Button text="See Code" :url="project.codeUrl" />
            </div>
          </div>
        </div>
      </div>
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
