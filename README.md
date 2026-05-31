# Rain Alternative — Concept Preview

A front-end-only demo storefront for Rain Alternative (Edmonton, AB), built to
show the owner what a custom Next.js store could look and feel like. Populated
with **real products** pulled from the current catalog so the preview shows her
own inventory in a new design.

This is a presentation prototype, not the production build. There is no backend,
cart, checkout, or live inventory; "Add to cart" and rewards screens are mockups
that illustrate the planned features (real-time stock, member rewards, birthday
perks).

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4
- Static export friendly, deploys clean on Vercel's free tier

## Develop

```bash
npm install
npm run data     # refresh the product snapshot from the live catalog
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Before handing it over

Edit `lib/site.ts` to set your agency name and contact shown on the preview
banner and footer.

## Pages

- `/` home: hero, customer-facing value props, real product grid, rewards band
- `/products/[handle]` product detail with gallery, options, points-earned note
- `/rewards` member hub mock: points balance, tiers, birthday perk, redemptions
