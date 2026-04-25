// src/i18n.ts

import en from './content/i18n/en.json';
import id from './content/i18n/id.json';
import jv from './content/i18n/jv.json';

const translations = { en, id, jv };

type Locale = keyof typeof translations;

export function useTranslations(locale: Locale = 'en') {
  return function t(path: string) {
    return path.split('.').reduce((obj: any, key) => obj?.[key], translations[locale]) || path;
  };
}