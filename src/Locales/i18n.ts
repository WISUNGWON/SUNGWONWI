import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranKo from './Files/ko.json';
import tranEn from './Files/en.json';
import tranJp from './Files/jp.json';

export const languages = ['ko', 'en', 'jp'] as const;

export type Languages = typeof languages[number]; // 'ko', 'en', 'jp'

const resources = {
  ko: { translation: tranKo },
  en: { translation: tranEn },
  jp: { translation: tranJp },
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'ko' || 'en',
  fallbackLng: 'ko',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
