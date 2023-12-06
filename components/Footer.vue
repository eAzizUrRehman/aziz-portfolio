<template>
  <footer class="mt-10 w-full pb-10">
    <div class="h-[0.6px] w-full bg-white opacity-10"></div>
    <div class="flex-center container flex-col">
      <NuxtLink to="/" class="w-fit">
        <img
          loading="lazy"
          :src="logo"
          alt="logo"
          width="100"
          class="mt-10 opacity-70 hover:opacity-100"
        />
      </NuxtLink>

      <ul class="flex-center mt-4 w-fit gap-2">
        <li v-for="link in navAndFooterLinks" :key="link.id">
          <div
            class="flex-center h-10 w-10 cursor-pointer rounded-full border-[1px] border-white p-2.5 opacity-70 hover:opacity-100"
          >
            <a :href="link.url" target="_blank">
              <img
                loading="lazy"
                :src="link.icon"
                :alt="link.name"
                class="w-full opacity-70 hover:opacity-100"
              />
            </a>
          </div>
        </li>
      </ul>
      <p class="mt-5 w-fit text-xs font-semibold tracking-widest opacity-70">
        {{ copyright }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    logo() {
      return this.$store.state.logo
    },
    navAndFooterLinks() {
      return this.$store.state.navAndFooterLinks
    },
    copyright() {
      return this.$store.state.copyright
    }
  }
}
</script>
