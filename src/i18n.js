import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "react-i18next";

import translationCAT from "./translation/cat/translation.json";
import translationES from "./translation/es/translation.json";
import translationEN from "./translation/en/translation.json";
import translationEU from "./translation/eu/translation.json";

const resources = {
  cat: {
    translation: translationCAT,
  },
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
  eu: {
    translation: translationEU,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option

    keySeparator: false,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18n;
/*
function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);*/
