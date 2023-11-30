<template>
  <header class="w-full md:py-10 sm:py-6 xs:py-3 xxs:py-2 py-1">
    <div class="w-full gradient">
      <div class="container w-full mx-auto flex justify-between items-center">
        <NuxtLink to="/">
          <img
            loading="lazy"
            :src="logo"
            alt="logo"
            width=""
            class="hover:opacity-70 md:w-48 sm:w-40 xs:w-32 xxs:w-24 w-20"
          />
        </NuxtLink>
        <nav class="flex gap-4">
          <ul v-for="link in navAndFooterLinks" :key="link.id">
            <li class="cursor-pointer">
              <a :href="link.url" target="_blank">
                <img
                  loading="lazy"
                  :src="link.icon"
                  alt=""
                  width="30"
                  class="ml-3 hover:opacity-70"
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
      return this.$store.state.logo;
    },
    navAndFooterLinks() {
      return this.$store.state.navAndFooterLinks;
    },
  },
};
</script>

<style scoped></style>
