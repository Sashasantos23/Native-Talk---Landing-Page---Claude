# Native Talk — Landing Page

Marketing landing page for Native Talk — 1-on-1 conversational English lessons with Sasha, a native American teacher (online and in Americana-SP).

Built with **Vite + React + TypeScript + Tailwind (shadcn/ui)**. Fully static — the WhatsApp call-to-action buttons are plain links, so there is no backend required to run or host the site.

## Run locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:8080

## Build for production

```bash
npm run build
```

The production files are output to `dist/`.

## Deploy

Deployed as a static site on **Vercel** (framework preset: Vite). Any push to the connected GitHub repo triggers an automatic deploy.

## Project structure

- `src/pages/Index.tsx` — the single landing page
- `src/components/sections/` — page sections (Hero, HowItWorks, Pricing, FAQ, CTA, Navbar, Footer)
- `src/lib/whatsapp.ts` — central place for the WhatsApp number and message links
- `src/assets/` — images (teacher photo, etc.)
- `public/` — favicon, robots.txt
