# BRAND Demo Clone

Demo storefront built with Next.js App Router + TypeScript + TailwindCSS, using local JSON data and Playwright reference captures from https://murmur.ro.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Lint

```bash
npm run lint
```

## Capture references from live site (Playwright)

```bash
npm run capture:murmur
```

This script:
- visits required routes from murmur.ro,
- captures full-page screenshots at `375`, `768`, `1440`,
- writes screenshots under `public/assets/murmur/reference/*`,
- writes style tokens to `data/style-tokens.json`.

## Data model

Main data files:
- `data/products.json`
- `data/collections.json`
- `data/muses.json`
- `data/stores.json`

Update these files to change product cards, collections, prices, discounts, variants, muses, and store info.

## Routes included

- `/`
- `/collections/[handle]`
- `/products/[slug]`
- `/pages/muses`
- `/pages/magazine-murmur`
- `/pages/contact`
- `/account/login`
- `/search`
- `/cart`
- `/blogs/descopera`
- `/policies/[slug]`
- `/dev/compare`

## Assets

Reference screenshots and media manifests are stored in:
- `public/assets/murmur/reference/mobile-375`
- `public/assets/murmur/reference/tablet-768`
- `public/assets/murmur/reference/desktop-1440`

Use these images to iterate visually on layout and spacing.
