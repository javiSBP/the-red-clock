import i18next from "https://deno.land/x/i18next@v23.4.1/index.js";
import enTranslation from "./locales/en.json" assert { type: "json" };
import esTranslation from "./locales/es.json" assert { type: "json" };

// Get user language from "accept-language" header middleware
export interface Language {
  language: string | null;
}

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18next.init({
  // debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
});

export default (lng: string | undefined | null) =>
  i18next.getFixedT(lng || systemLocale);
