import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en/translations.json';
import translationJP from './locales/jp/translations.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  jp: {
    translation: translationJP
  }
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // use en if detected lng is not available
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;