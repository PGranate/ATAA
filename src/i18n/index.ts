import { pt } from './pt';
import { es } from './es';
import { en } from './en';

export type Lang = 'pt' | 'es' | 'en';

export const dictionaries = { pt, es, en };

export function getDict(lang: Lang) {
  return dictionaries[lang];
}

export const locales: Lang[] = ['pt', 'es', 'en'];
