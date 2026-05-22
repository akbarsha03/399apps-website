# 399apps-website — setup notes

Everything below is **done**. Kept as a record of what's wired up; you can delete this file once you no longer need the reference.

## ✅ GitHub Actions deploy workflow
Lives at `.github/workflows/deploy.yml`. Pushes to `main` build the Astro site and deploy to Cloudflare Pages via wrangler.

## ✅ Repo secrets
Set via `gh secret set`:
- `CLOUDFLARE_API_TOKEN` — token with Pages:Edit (and CF account access).
- `CLOUDFLARE_ACCOUNT_ID` — `24398b7dc01c449faa28e1f8b3c2dca4`.

Rotate at any time from Cloudflare → My Profile → API Tokens.

## ✅ Cloudflare Pages project
`399apps-website` exists in the Cloudflare account. Deploys are pushed by the GitHub Action (no "Connect to Git" needed — the Action uploads `dist/` directly via wrangler).

Manual one-off deploy from a local machine with wrangler logged in:
```bash
npm run deploy
```

## ✅ Custom domain
`399apps.com` (and `www.399apps.com`) bound to the Pages project; Cloudflare handles DNS + SSL.

## Resend (contact form)
The `/api/contact` Pages Function uses a `RESEND_API_KEY` Pages secret (already set in the production env). Rotate via:
```bash
echo 'NEW_KEY' | npx wrangler pages secret put RESEND_API_KEY --project-name=399apps-website
```

Optional Pages env vars to override defaults without redeploying:
- `SALES_TO` — recipient (default `hello@shabuilds.tech`)
- `SALES_FROM` — sender (default `399apps Contact <hello@mails.shabuilds.tech>`)
