<template>
  <footer class="mt-10 pb-10 w-full">
    <div class="w-full h-[0.6px] bg-white opacity-10"></div>
    <div class="container flex-center flex-col">
      <NuxtLink to="/" class="w-fit">
        <img
          loading="lazy"
          :src="logo"
          alt="logo"
          width="100"
          class="mt-10 hover:opacity-100 opacity-70"
        />
      </NuxtLink>

      <ul class="w-fit mt-4 flex-center gap-2">
        <li v-for="link in navAndFooterLinks" :key="link.id">
          <div
            class="w-10 h-10 p-2.5 rounded-full border-[1px] border-white flex-center cursor-pointer hover:opacity-100 opacity-70"
          >
            <a :href="link.url" target="_blank">
              <img
                loading="lazy"
                :src="link.icon"
                :alt="link.name"
                class="w-full hover:opacity-100 opacity-70"
              />
            </a>
          </div>
        </li>
      </ul>
      <p class="mt-5 text-xs font-semibold tracking-widest w-fit opacity-70">
        {{ copyright }}
      </p>
    </div>
  </footer>
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
    copyright() {
      return this.$store.state.copyright;
    },
  },
};
</script>
