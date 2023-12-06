<template>
  <button
    class="gradient rounded-sm border-[0.1px] border-white border-opacity-20 px-1.5 py-0.5 text-xs hover:opacity-70 xxs:rounded xxs:px-2 xxs:py-1 xxs:text-sm xs:rounded-md xs:px-2.5 xs:py-1.5 xs:text-base sm:rounded-lg sm:px-3 sm:py-2 sm:text-lg md:rounded-xl md:px-3.5 md:py-2.5 md:text-xl lg:px-4 lg:py-3 lg:text-2xl"
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
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
