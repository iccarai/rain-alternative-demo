# Rain Alternative — Concept Preview

A presentation storefront for **Rain Alternative** (Edmonton, AB), built to show
the owner what a custom store could look and feel like. Populated with **real
products** pulled from the current catalog so the preview shows her own inventory
in a new "Neon Underground" design.

- **Live:** https://rain-alternative-demo.vercel.app
- **Repo:** https://github.com/iccarai/rain-alternative-demo

This is a concept preview, not the production build (no real backend or payment).
But the storefront is genuinely interactive: working cart, browsable category
pages, search, and a member-rewards mock illustrate the planned features
(real-time stock, member rewards, birthday perks).

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4
- Deploys on Vercel; pushes to `main` auto-deploy to production

## Features in the demo

- Working cart (add / quick-add, drawer, qty, subtotal, localStorage) 
- Real navigation: `/collections/[handle]` category pages
- `/search` live catalog search
- `/about` brand + visit-us page
- Mobile menu, generated favicon + OG image

## Develop

```bash
npm install
npm run data     # refresh the product snapshot from the live catalog
npm run dev      # http://localhost:3000
npm run build    # production build
npm run -s --   # see package.json scripts
```

Visual QA (Playwright): `node scripts/shots.mjs` and `node scripts/verify.mjs`.

## Before handing it over

Edit `lib/site.ts` to set the agency name and contact shown on the preview
banner and footer.
