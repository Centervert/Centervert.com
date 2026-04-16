This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Shipped static assets for the site live under `public/brand/` (see [docs/assets.md](docs/assets.md)). Marketing and meta copy guardrails: [docs/content-voice.md](docs/content-voice.md). Do not commit QA screenshots or `current-site-*.png` captures to this repo; they are listed in `.gitignore`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Canonical Git remote:

```bash
git@github.com:Centervert/Centervert.com.git
```

Web: [`Centervert/Centervert.com`](https://github.com/Centervert/Centervert.com).

In Vercel, point your production project at **this** repository (Project → **Settings** → **Git**), or import `Centervert/Centervert.com` as a new project on the **Centervert** team.

1. **Framework preset:** Next.js (if an old project still shows Vite, switch it under **Settings** → **General**).
2. **Environment variables:** **Settings** → **Environment Variables**: add every name from [`.env.example`](./.env.example) for **Production** (and **Preview** if you want PR previews to hit Supabase). Values come from Supabase → Project Settings → API. Do not commit secrets; `.env.local` stays gitignored.
3. **Database:** Run the SQL migrations in [docs/BOOKING_SETUP.md](docs/BOOKING_SETUP.md) on your Supabase project before relying on **Book a call** or **Scale Up RSVP**.

More detail: [Next.js on Vercel](https://nextjs.org/docs/app/building-your-application/deploying).
