import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Load translations from the backend
  .use(Backend)
  // Detect the user's language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18n
  .init({
    fallbackLng: 'en', // Default language if detection fails
    debug: true, // Turn off in production
    backend: {
      loadPath: '/public/translations/{{lng}}.json', // Translation file path
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    supportedLngs: ['en', 'ru'], // Limit to only supported languages
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'], // Language detection order
      caches: ['cookie', 'localStorage'], // Cache detected language
    },
  });

export default i18n;
