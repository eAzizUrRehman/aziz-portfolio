<template>
  <button
    class="gradient lg:px-4 md:px-3.5 sm:px-3 xs:px-2.5 xxs:px-2 px-1.5 lg:py-3 md:py-2.5 sm:py-2 xs:py-1.5 xxs:py-1 py-0.5 lg:text-2xl md:text-xl sm:text-lg xs:text-base xxs:text-sm text-xs md:rounded-xl sm:rounded-lg xs:rounded-md xxs:rounded rounded-sm hover:opacity-70"
  >
    <a :href="url" target="_blank">
      {{ text }}
    </a>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
