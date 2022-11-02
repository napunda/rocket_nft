<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/shell/Header/Index.vue";
export default {
  data: () => ({
    //
  }),
  components: {
    Header,
  },
};
</script>

<style>
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1277px !important;
  }
}
</style>
