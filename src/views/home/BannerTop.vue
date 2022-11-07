<template>
  <v-sheet class="banner-top" height="100%" color="grey">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div class="white--text text-body-1">
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </div>
          <div class="d-flex mt-14">
            <img src="../../assets/avatars-agrupado.png" alt="" />
            <div
              class="d-flex flex-column text-body-1 white--text justify-end ml-1"
            >
              <span class="font-weight-bold">+10 </span> Artistas selecionados
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="text-h2 white--text font-weight-bold">
            Descubra a verdadeira arte digital e colecione diversas
            <span class="primary--text">NFTs</span>
          </div>
        </v-col>
        <v-col class="d-flex justify-end" cols="2"
          ><img height="200px" src="../../assets/badge.svg" alt=""
        /></v-col>
      </v-row>
      <Gallery />
    </v-container>
  </v-sheet>
</template>

<script>
import Gallery from "../../components/Gallery.vue";
export default {
  components: { Gallery },
};
</script>

<style scoped lang="scss">
.banner-top {
  padding-top: 197px;
  background-image: url("../../assets/bg.png");
  background-position: center;
  background-size: cover;
}
</style>
