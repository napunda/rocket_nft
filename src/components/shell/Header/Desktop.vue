<template>
  <v-sheet class="desktop-header" height="197px" color="transparent">
    <v-container class="d-flex justify-space-between pt-14">
      <div class="text-h3 white--text font-weight-bold">
        Rocket <span class="primary--text">NFTs</span>
      </div>
      <nav class="d-flex align-center">
        <v-btn
          text
          class="text-none mr-15 white--text text-body-1 font-weight-regular"
          >Comprar NFT</v-btn
        >
        <v-btn
          text
          class="text-none mr-15 white--text text-body-1 font-weight-regular"
          >Sobre</v-btn
        >
        <v-btn
          text
          class="text-none mr-15 white--text text-body-1 font-weight-regular"
          >FAQ</v-btn
        >
      </nav>
      <v-btn
        @click="dialog = true"
        height="50px"
        width="230px"
        class="text-none px-4 rounded-0 text-body-2"
        color="white"
      >
        <img
          class="mr-3"
          height="30px"
          src="../../../assets/MetaMask logo.svg"
          alt="Metal Mask"
        />
        Conectar carteira
      </v-btn>
    </v-container>

    <v-dialog v-model="dialog" width="500">
      <div class="pa-10 white">
        <img
          class="mr-3"
          height="30px"
          src="../../../assets/metal-mask.svg"
          alt="Metal Mask"
        />
        <form action="" class="py-5">
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field type="password" label="Password"></v-text-field>
        </form>
        <div class="d-flex justify-end">
          <v-btn class="text-none" color="primary">Login</v-btn>
        </div>
      </div>
    </v-dialog>
  </v-sheet>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss">
.desktop-header {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
