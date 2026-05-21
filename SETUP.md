# 399apps-website — one-time setup

Two manual steps to finish wiring this up. After they're done, every `git push` to `main` ships to Cloudflare Pages automatically.

## 1. Enable the GitHub Actions deploy workflow

The workflow file is committed at `.github/workflow-template/deploy.yml` instead of the live path because the `gh` CLI token used during bootstrap didn't have the `workflow` scope. To activate it:

**Option A — from your terminal (recommended):**

```bash
# Add workflow scope to the gh CLI (one-time, interactive)
gh auth refresh -s workflow -h github.com

# Move the workflow file into the live path and push
git mv .github/workflow-template/deploy.yml .github/workflows/deploy.yml
rmdir .github/workflow-template
git commit -m "ci: enable Cloudflare Pages deploy workflow"
git push
```

**Option B — via GitHub web UI:**

1. Open the repo on GitHub → **Add file → Create new file**.
2. Name it `.github/workflows/deploy.yml`.
3. Paste the contents of `.github/workflow-template/deploy.yml`.
4. Commit to `main`.
5. Delete `.github/workflow-template/deploy.yml` in a follow-up commit.

## 2. Add the Cloudflare secrets

The workflow needs two repository secrets:

| Secret | Where to get it |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard → **My Profile → API Tokens → Create Token → Edit Cloudflare Workers** template (covers Pages too). |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → **Workers & Pages** sidebar shows the Account ID on the right. |

Add them via:

```bash
gh secret set CLOUDFLARE_API_TOKEN
gh secret set CLOUDFLARE_ACCOUNT_ID
```

Or under **Settings → Secrets and variables → Actions → New repository secret**.

## 3. Create the Cloudflare Pages project (one-time)

Either:

- **Via dashboard:** Cloudflare → Workers & Pages → Create application → Pages → "Connect to Git" → pick `akbarsha03/399apps-website`. Build command: `npm run build`. Output: `dist`. Or skip "Connect to Git" and let the GitHub Action handle deploys (it uploads directly via wrangler).
- **Via CLI (one-shot from local):**
  ```bash
  npx wrangler pages project create 399apps-website --production-branch=main
  npm run deploy
  ```

## 4. Point the domain

In the Cloudflare Pages project → **Custom domains → Set up a custom domain → `399apps.com`** (and `www.399apps.com` if you want it). Cloudflare handles DNS + SSL.

---

That's it. Everything else is committed and ready.
