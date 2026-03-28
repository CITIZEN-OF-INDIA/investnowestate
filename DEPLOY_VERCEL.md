# Vercel Deployment (InvestNow Estate)

This repo is a monorepo. The website app to deploy is:

- `artifacts/investnow-estate`

## Already Configured

The repo now includes a root `vercel.json` with:

- `installCommand`: `pnpm install --frozen-lockfile`
- `buildCommand`: `BASE_PATH=/ pnpm --filter @workspace/investnow-estate run build`
- `outputDirectory`: `artifacts/investnow-estate/dist/public`
- SPA rewrite to `index.html`

So you can deploy directly without custom overrides.

## Vercel Project Settings

Use these values when importing:

- Root Directory: `.`
- Framework Preset: `Other`
- Build Command: auto from `vercel.json`
- Output Directory: auto from `vercel.json`
- Install Command: auto from `vercel.json`

## Environment Variables

No required env vars for this frontend deploy.

Optional:

- `BASE_PATH=/` (already set in build command)

## CLI Deploy (optional)

```bash
npm i -g vercel
vercel login
vercel --prod
```

## If You Want Only This App as Root

Alternative configuration (instead of repo root deploy):

- Root Directory: `artifacts/investnow-estate`

But for this repo, root `.` is recommended because workspace dependencies are shared.
