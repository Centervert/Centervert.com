# Static assets

## What ships in production

These paths are referenced from application code. Other files under `public/brand/logos/` are kept as a full brand kit for design and future pages but are not required for the current build.

| Path | Used by |
|------|---------|
| `/brand/space/spacex-uj3hvdfQujI-unsplash.jpg` | [`src/components/sections/Hero.tsx`](../src/components/sections/Hero.tsx) |
| `/brand/space/centervert.space.overlay.3.jpg` | [`src/components/sections/AITrainingCallout.tsx`](../src/components/sections/AITrainingCallout.tsx) |
| `/brand/logos/centervert.logo.horizontal.evergreen.png` | [`Logo`](../src/components/ui/Logo.tsx) (footer, nav when scrolled) |
| `/brand/logos/centervert.logo.horizontal.smoke.png` | [`Logo`](../src/components/ui/Logo.tsx) (nav over dark hero) |
| `/brand/logos/center.builtby.footer.evergreen.png` | [`src/components/sections/Footer.tsx`](../src/components/sections/Footer.tsx) |
| `/brand/fonts/*` | [`src/lib/fonts.ts`](../src/lib/fonts.ts) loads **Recia** as default UI (`font-sans`, `body`) and **Effra** for quotations (`font-quote` / `.font-quote` in [`globals.css`](../src/app/globals.css)) |
| `/brand/logos/centervert.logo.icon.smoke.png` | Favicon via [`layout.tsx`](../src/app/layout.tsx) `metadata.icons` |

## Logo matrix

[`Logo`](../src/components/ui/Logo.tsx) builds paths as `/brand/logos/centervert.logo.{variant}.{color}.png`. Additional `icon` and `vertical` variants and other colors exist on disk for brand use; add new pages only after confirming the matching PNG exists.
