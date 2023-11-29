<template>
  <header class="w-full py-10">
    <div class="w-full gradient">
      <div class="container px-20 w-full mx-auto flex justify-between items-center">
        <router-link to="/">
          <img loading="lazy" :src="logo" alt="logo" width="200" class="" />
        </router-link>
        <nav class="flex gap-4">
          <ul v-for="link in navAndFooterLinks" :key="link.id">
            <li class="cursor-pointer">
              <a :href="link.url" target="_blank">
                <img
                  loading="lazy"
                  :src="link.icon"
                  alt=""
                  width="30"
                  class="inline ml-3"
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
