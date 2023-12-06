<template>
  <div>
    <h2
      class="gradient mb-5 w-full py-0.5 text-center text-sm font-bold tracking-wider shadow-lg xxs:py-1 xxs:text-base xs:py-1.5 xs:text-lg sm:py-2 sm:text-xl md:py-3 md:text-3xl"
    >
      <a
        :href="project.deployedUrl"
        target="_blank"
        class="container hover:opacity-70"
      >
        {{ project.title }}
      </a>
    </h2>
    <div class="group relative overflow-hidden">
      <img
        loading="lazy"
        :src="project.image"
        alt=""
        class="z-10 rounded-2xl object-fill shadow-2xl"
      />

      <div
        class="gradient absolute left-0 top-0 z-50 hidden h-full w-full rounded-2xl border-[0.1px] border-white border-opacity-80 px-4 py-1 opacity-95 group-hover:block xxs:px-6 xxs:py-2 xs:px-8 xs:py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 lg:px-20 lg:py-10"
      >
        <div class="flex h-full flex-col items-start justify-between">
          <p
            class="ml-6 flex gap-2 text-xs sm:ml-0 sm:text-sm md:text-base lg:text-lg"
          >
            Made with:
            <span v-for="(language, index) in project.languages" :key="index">
              {{ language
              }}<span v-if="index === project.languages.length - 2"> &</span>
              <span v-else-if="index !== project.languages.length - 1">,</span>
            </span>
          </p>
          <ol
            style="list-style-type: disc"
            class="ml-1 flex flex-col gap-0 xxs:ml-2 xs:ml-4 sm:ml-6 sm:gap-0.5 md:ml-8 md:gap-1 lg:ml-10 lg:gap-2"
          >
            <li
              v-for="feature in project.features"
              :key="feature.id"
              class="ml-6 text-xs xxs:text-sm xs:text-lg sm:ml-0 sm:text-2xl md:text-3xl lg:text-4xl"
            >
              {{ feature.description }}
            </li>
          </ol>
          <div class="ml-6 flex gap-4 sm:ml-0">
            <Button text="See Project" :url="project.deployedUrl" />
            <Button text="See Code" :url="project.codeUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
