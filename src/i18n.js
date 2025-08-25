import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation, // English translations
    },
    ar: {
      translation: arTranslation, // Arabic translations
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
