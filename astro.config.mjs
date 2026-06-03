import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://399apps.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-IN',
          hi: 'hi-Latn-IN',
          ta: 'ta-Latn-IN',
          hindi: 'hi-IN',
          tamil: 'ta-IN',
        },
      },
    }),
  ],
  compressHTML: true,
});
