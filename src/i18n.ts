import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ge from './locales/ge/index.json';
import en from './locales/en/index.json';
import { useTranslation as useBaseTranslation } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      impex: en,
    },
    ge: {
      impex: ge,
    },
  },
});

export const useTranslation = () => useBaseTranslation('impex');
export default i18n;
