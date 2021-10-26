import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en", // set default locale
  fallbackLocale: "en",
  silentTranslationWarn: true,
  messages: {
    en: {
      Starter: "Starter",
      Page: "Page",
    },
    fr: {
      Starter: "Kit de démarrage",
      Page: "Page",
    },
    ch: {
      Starter: "入门套件",
      Page: "页",
    },
    gr: {
      Starter: "Starter-Kit",
      Page: "Seite",
    },
  },
});
