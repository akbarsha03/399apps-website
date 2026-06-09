// Shared i18n primitives — language type, switcher list, path localizer.
// en = English (canonical), hi = Hinglish (Romanised Hindi + English),
// ta = Tanglish (Romanised Tamil + English), hindi = Devanagari, tamil = Tamil script.
// Brand names, product names and technical terms (GST, cloud, Docker…)
// stay in English on purpose — that's how the audience actually speaks.

export type Lang = 'en' | 'hi' | 'ta' | 'hindi' | 'tamil';

export const DEFAULT_LANG: Lang = 'en';

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'Hinglish', short: 'Hinglish' },
  { code: 'ta', label: 'Tanglish', short: 'Tanglish' },
  { code: 'hindi', label: 'हिन्दी · Hindi', short: 'हिन्दी' },
  { code: 'tamil', label: 'தமிழ் · Tamil', short: 'தமிழ்' },
];

export const NON_DEFAULT_LANGS: Lang[] = ['hi', 'ta', 'hindi', 'tamil'];

const LANG_CODES: Lang[] = ['en', 'hi', 'ta', 'hindi', 'tamil'];

export function isLang(value: string): value is Lang {
  return (LANG_CODES as string[]).includes(value);
}

// Build a path for a given language by swapping the leading lang prefix.
// localizedPath('/', 'hindi') -> '/hindi'   localizedPath('/hi', 'en') -> '/'
export function localizedPath(path: string, lang: Lang): string {
  // Leave absolute/external URLs untouched — a scheme (`https:`, `mailto:`, `tel:`)
  // or protocol-relative `//` href is not an internal route and must never get a
  // language prefix (e.g. the app sign-up CTA https://books.399apps.com/sign-up).
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;
  // Preserve hash and query so #anchors and ?intent= survive language switches.
  const hashIdx = path.indexOf('#');
  const queryIdx = path.indexOf('?');
  const splitIdx = [hashIdx, queryIdx].filter((i) => i >= 0).sort((a, b) => a - b)[0] ?? -1;
  const basePath = splitIdx >= 0 ? path.slice(0, splitIdx) : path;
  const suffix = splitIdx >= 0 ? path.slice(splitIdx) : '';
  const stripped = basePath.replace(/^\/(hindi|tamil|hi|ta)(?=\/|$)/, '') || '/';
  if (lang === DEFAULT_LANG) return (stripped === '/' ? '' : stripped) + suffix || '/';
  return (stripped === '/' ? `/${lang}` : `/${lang}${stripped}`) + suffix;
}

export const HTML_LANG_ATTR: Record<Lang, string> = {
  en: 'en-IN',
  hi: 'hi-Latn-IN',
  ta: 'ta-Latn-IN',
  hindi: 'hi-IN',
  tamil: 'ta-IN',
};

export const HREFLANGS: { code: string; lang: Lang }[] = [
  { code: 'en-IN', lang: 'en' },
  { code: 'hi-Latn-IN', lang: 'hi' },
  { code: 'ta-Latn-IN', lang: 'ta' },
  { code: 'hi-IN', lang: 'hindi' },
  { code: 'ta-IN', lang: 'tamil' },
];

// Pick the right entry from a per-lang record, falling back to English.
export function pickByLang<T>(record: Record<Lang, T>, lang: Lang): T {
  return record[lang] ?? record[DEFAULT_LANG];
}
