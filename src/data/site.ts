export const SITE = {
  name: '399apps',
  domain: '399apps.com',
  url: 'https://399apps.com',
  tagline: 'Affordable business software, made for India and the world.',
  description:
    '399apps is a suite of clean, affordable business SaaS — GST-ready accounting and inventory — available on the cloud or fully self-hostable. Built for B2B, B2C and white-label.',
  email: 'hello@shabuilds.tech',
  whatsapp: '+91 00000 00000',
  builderName: 'shabuilds',
  builderUrl: 'https://shabuilds.tech',
  founded: '2025',
  social: {
    twitter: 'https://x.com/shabuilds',
    github: 'https://github.com/akbarsha03',
    linkedin: 'https://www.linkedin.com/in/akbarsha03',
  },
};

/**
 * Absolute canonical URL for an internal path, normalized to a trailing slash so
 * canonical == served URL == sitemap URL (matches Astro `trailingSlash: 'always'`).
 * The site root stays `/`; any `#hash` or `?query` is preserved after the slash.
 * Use for every page-level URL we emit: canonical, og:url, hreflang, JSON-LD url/offers.url.
 */
export function canonicalUrl(path = '/'): string {
  const m = path.match(/^([^#?]*)([#?].*)?$/) ?? ['', path, ''];
  const rawPath = m[1] || '/';
  const suffix = m[2] ?? '';
  const clean = ('/' + rawPath).replace(/\/{2,}/g, '/');
  const withSlash = clean === '/' ? '/' : clean.replace(/\/$/, '') + '/';
  return new URL(withSlash + suffix, SITE.url).toString();
}

export const NAV = [
  { label: 'Apps', href: '/#apps' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Self-Hosting', href: '/self-hosting' },
  { label: 'White Label', href: '/white-label' },
  { label: 'Contact', href: '/contact' },
];
