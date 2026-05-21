# 399apps.com

The marketing + app-store website for **[399apps.com](https://399apps.com)** — a small catalogue of affordable business SaaS: accounting, inventory, matrimonials and a job portal. Every product is available on the 399apps cloud or fully self-hostable.

Built, deployed and maintained by **[shabuilds.tech](https://shabuilds.tech)**.

## Stack

- **[Astro](https://astro.build)** (static, zero-JS by default) — for best-in-class SEO and Core Web Vitals.
- **Tailwind CSS** — design system + utilities.
- **Cloudflare Pages** — global edge deploy, with `wrangler` for releases.
- **GitHub Actions** — CI deploys on every push to `main`.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output to ./dist
npm run preview      # preview the build locally
```

## Project structure

```
src/
  components/        # Header, Footer, AppCard, FAQ, SEO, Icon, CTA…
  data/              # apps.ts (the catalogue) + site.ts
  layouts/Layout.astro
  pages/
    index.astro                        # /
    apps/[slug].astro                  # /apps/books, /apps/inventory, …
    pricing.astro
    self-hosting.astro
    white-label.astro
    cloud-vs-self-hosted.astro
    about.astro
    contact.astro
    privacy.astro
    terms.astro
    404.astro
  styles/global.css
public/
  robots.txt, favicon.svg, logo.svg, og-image.svg, _headers, _redirects
```

## SEO / AEO / GEO

- Per-page `<title>`, meta description, canonical, OG/Twitter cards.
- JSON-LD: `Organization`, `WebSite`, `ItemList`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList`.
- Auto-generated `sitemap-index.xml` (`@astrojs/sitemap`).
- `robots.txt` allows major AI/search crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) for AEO/GEO.
- Hreflang-ready (currently `en_IN`).
- Static HTML, zero render-blocking JS, edge-cached via Cloudflare.

## Deployment

Deploys to Cloudflare Pages via GitHub Actions on every push to `main`.

### Required secrets (Settings → Secrets and variables → Actions)

| Secret | Description |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Token with `Pages:Edit` permission. |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID. |

### Manual deploy (from a local machine with `wrangler` logged in)

```bash
npm run deploy
```

Custom domain `399apps.com` is configured in the Cloudflare Pages project → Custom Domains.

## Catalogue

| App | Slug | Mode | Audience |
| --- | --- | --- | --- |
| Nidhi Books | `/apps/books` | Cloud · Self-host | B2B · B2C |
| Nidhi Inventory | `/apps/inventory` | Cloud · Self-host | B2B · B2C |
| Books + Inventory Bundle | `/apps/books-inventory-bundle` | Cloud · Self-host | B2B · B2C |
| Nidhi Matrimonials | `/apps/matrimonials` | Cloud · Self-host | B2C |
| Nidhi Job Portal | `/apps/jobportal` | Cloud · Self-host | B2C / B2B |

## License

© 399apps. All rights reserved.
