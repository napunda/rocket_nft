<template>
  <div class="gallery">
    <div class="item-thumb" v-for="(item, key) in thumbs" :key="key">
      <a
        class="text-decoration-none"
        href="javascript:void(0);"
        @click="
          images = images;
          index = key;
        "
      >
        <img width="100%" :src="item.url" v-if="item.url" class="d-block" />
      </a>
    </div>
    <LightGallery
      interfaceColor="#ff5b50"
      :images="images"
      :index="index"
      :disable-scroll="true"
      @close="index = null"
    />
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  components: {
    LightGallery,
  },
  data() {
    return {
      thumbs: [
        { title: "Galeria", url: "/img/galeria/galeria-1.png" },
        { title: "Galeria", url: "/img/galeria/galeria-2.png" },
        { title: "Galeria", url: "/img/galeria/galeria-3.png" },
        { title: "Galeria", url: "/img/galeria/galeria-4.png" },
        { title: "Galeria", url: "/img/galeria/galeria-5.png" },
        { title: "Galeria", url: "/img/galeria/galeria-6.png" },
        { title: "Galeria", url: "/img/galeria/galeria-7.png" },
        { title: "Galeria", url: "/img/galeria/galeria-8.png" },
      ],
      images: [
        { title: "Galeria", url: "/img/galeria/galeria-1.png" },
        { title: "Galeria", url: "/img/galeria/galeria-2.png" },
        { title: "Galeria", url: "/img/galeria/galeria-3.png" },
        { title: "Galeria", url: "/img/galeria/galeria-4.png" },
        { title: "Galeria", url: "/img/galeria/galeria-5.png" },
        { title: "Galeria", url: "/img/galeria/galeria-6.png" },
        { title: "Galeria", url: "/img/galeria/galeria-7.png" },
        { title: "Galeria", url: "/img/galeria/galeria-8.png" },
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  .item-thumb:first-child {
    margin-bottom: 50px;
  }
}
@media (max-width: 1280px) {
  .item-thumb {
    margin: 0 !important;
  }
}
</style>

<style>
.light-gallery__image img[data-v-2951e615] {
  min-width: 800px !important;
}
</style>
