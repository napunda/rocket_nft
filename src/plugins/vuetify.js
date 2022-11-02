import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pt from "vuetify/lib/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        grey: {
          base: "#252525",
          lighten1: "#5A5757",
        },
        primary: "#FF5B50",
        secondary: "#0E0E0E",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        darken: "#353535",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
  icons: {
    iconfont: "fa",
  },
});
