<template>
  <header class="w-full py-4 xxs:py-5 xs:py-6 sm:py-8 md:py-10">
    <div class="gradient w-full">
      <div class="container mx-auto flex w-full items-center justify-between">
        <NuxtLink to="/">
          <img
            loading="lazy"
            :src="logo"
            alt="logo"
            width=""
            class="w-20 hover:opacity-70 xxs:w-24 xs:w-32 sm:w-40 md:w-48"
          />
        </NuxtLink>
        <nav class="flex items-center gap-4">
          <ul v-for="link in navAndFooterLinks" :key="link.id">
            <li class="cursor-pointer">
              <a :href="link.url" target="_blank">
                <img
                  loading="lazy"
                  :src="link.icon"
                  alt=""
                  class="w-5 hover:opacity-70 xs:w-6 sm:w-7 md:w-9"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    logo() {
      return this.$store.state.logo
    },
    navAndFooterLinks() {
      return this.$store.state.navAndFooterLinks
    }
  }
}
</script>

<style scoped></style>
