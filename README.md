# CryptoPulse

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.4-149ECA?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss)
![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.x-F7B93E?logo=prettier)

CryptoPulse is a modern cryptocurrency dashboard built with `Next.js 16`, `React 19`, and `TypeScript`. It consumes CoinGecko data to display market overview sections, trending coins, categories, a full all-coins table, and individual coin detail pages with charts and metrics.

## ✨ Highlights

- Live crypto market data from CoinGecko
- Overview section with reusable chart components
- All coins table with sticky columns and sticky headers
- Coin detail page with price performance, metrics, and external resource links
- FSD-inspired structure using `entities`, `widgets`, `views`, and `shared`
- Typed API layer with reusable fetcher utilities

## 🧱 Tech Stack

### Core

- `Next.js 16.2.1`
- `React 19.2.4`
- `TypeScript 5`

### Styling & UI

- `Tailwind CSS 4`
- `shadcn`
- `Radix UI`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `tw-animate-css`
- `lucide-react`

### Charts & Data Visualization

- `lightweight-charts`

### Tooling

- `ESLint 9`
- `Prettier 3`
- `Husky`
- `lint-staged`

### Analytics

- `@vercel/analytics`

## 📦 Main Dependencies

```json
{
  "next": "16.2.1",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "lightweight-charts": "^5.1.0",
  "lucide-react": "^1.7.0",
  "radix-ui": "^1.4.3",
  "shadcn": "^4.1.0"
}
```

## 🗂 Architecture

This project follows a lightweight FSD-style structure:

- `app`:
  Next.js App Router entry points and route files
- `views`:
  page-level composition
- `widgets`:
  larger UI blocks such as overview, all-coins table, coin detail widgets
- `entities`:
  domain data, API actions, models, and column definitions
- `shared`:
  reusable UI, helpers, types, formatting, and chart primitives

### Project Structure

```bash
src
├── app
│   ├── coins
│   │   └── [id]
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── entities
│   └── coins
│       ├── api
│       ├── model
│       └── ui
├── shared
│   ├── api
│   ├── lib
│   ├── types
│   └── ui
│       └── charts
├── views
│   ├── all-coins
│   ├── coin-id
│   └── landing
└── widgets
    ├── all-coins
    ├── coin-id
    ├── coin-overview
    ├── top-categories
    └── trending-coin
```

## 📄 Pages

### 🏠 Landing Page

- Coin overview
- Trending coins
- Top categories

### 🪙 All Coins Page

- Full market table
- Sticky rank and coin columns
- Sticky header with horizontal and vertical scrolling support

### 📈 Coin Details Page

- Coin information panel
- Reusable area chart with period switching
- Percentage performance table
- About section and CoinGecko links

## 🔌 Data Layer

All market data is fetched through a reusable shared fetcher:

- `src/shared/api/fetcher.ts`

The fetcher:

- builds CoinGecko URLs
- injects API headers
- supports query params
- supports Next.js `revalidate`
- throws useful request errors

### Environment Variables

Create a `.env.local` file:

```bash
BASE_URL=https://api.coingecko.com/api/v3
DEV_BASE_URL=https://api.coingecko.com/api/v3
COINGECKO_API_KEY=your_api_key_here
```

Notes:

- `BASE_URL` or `DEV_BASE_URL` must be available
- `COINGECKO_API_KEY` is required by the shared fetcher

## 🛠 Scripts

```bash
npm run dev         # Start local development server
npm run build       # Build for production
npm run start       # Run the production build
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript checks
```

## ✅ Code Quality

- `ESLint` for static analysis
- `Prettier` for formatting
- `Husky` for Git hooks
- `lint-staged` for checking staged files before commit

### lint-staged Rules

- `*.{js,jsx,ts,tsx}` → `eslint --fix` + `prettier --write`
- `*.{json,css,md}` → `prettier --write`

## 🎨 UI Notes

- Uses `next/font/google` with:
  - `Geist`
  - `Geist Mono`
  - `Space Grotesk`
- Includes reusable shared chart components:
  - `CandlestickChart`
  - `AreaChart`
- Uses sticky table behavior for large crypto data tables

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## 📌 Notes

- Production builds that rely on Google-hosted fonts may require network access during build time.
- Coin detail pages and overview widgets depend on CoinGecko response shape, so keep entity types in sync with API changes.
- Shared chart components live in `shared/ui/charts` and should stay generic.

## 👨‍💻 Authoring Direction

This codebase is organized to keep responsibilities clear:

- `entities` own data contracts and API access
- `widgets` own composition and interaction
- `views` assemble full screens
- `shared` stays reusable and framework-agnostic where possible

---

Built with `Next.js`, `TypeScript`, `Tailwind CSS`, and `Lightweight Charts`.
