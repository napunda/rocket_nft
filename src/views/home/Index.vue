<template>
  <v-sheet>
    <BannerTop />
    <About />
  </v-sheet>
</template>

<script>
import BannerTop from "./BannerTop.vue";
import About from "./About.vue";
export default {
  components: { BannerTop, About },
};
</script>
