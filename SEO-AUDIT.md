# Centervert 2027 — SEO Audit

**Date:** March 2026  
**Scope:** Full site (Next.js App Router)

---

## Executive summary

The site has a solid SEO base: unique titles and meta descriptions on key pages, a single H1 per page, LocalBusiness schema, and semantic structure. Gaps addressed in this audit: **no sitemap or robots.txt**, **no Open Graph/Twitter metadata** for social sharing, **no metadataBase** for canonical/social URLs, and **admin/order/status routes** were crawlable. Recommended next steps: add an OG image, consider service-level schema, and optionally add a dedicated `/services` index page for internal linking.

---

## 1. Metadata

### 1.1 Root layout ✅ (updated)

- **Title:** Default + template `"%s | Centervert"` — good.
- **Description:** Present, under 160 chars, includes location and value prop.
- **metadataBase:** Added — ensures canonical and social URLs resolve to `https://www.centervert.com`.
- **Open Graph:** Added — `type`, `locale`, `url`, `siteName`, `title`, `description`.
- **Twitter:** Added — `summary_large_image`, `title`, `description`.

### 1.2 Homepage ✅

- **Title:** Absolute (overrides template); includes "Centervert | AI, Software & Managed IT | Greenville, SC".
- **Description:** Unique, includes "Greenville, SC" and "Replace 4-5 vendors with one partner".

### 1.3 Service pages ✅

| Page              | Title                         | Meta description |
|-------------------|-------------------------------|------------------|
| AI & Automation   | AI & Automation \| Centervert | Unique, includes use cases |
| Custom Software   | Custom Software Development \| Centervert | Crawl/Walk/Run, discovery |
| Web Development   | Web Design & Development \| Centervert | Marketing, funnels, e‑commerce, SEO |
| Brand Design      | Brand Design & Identity \| Centervert | Logo, visual identity, strategy |
| Low Voltage       | Low Voltage & AV Systems \| Centervert | Conference AV, security, signage, certs |
| Managed IT        | Managed IT Services \| Centervert | Packages, cybersecurity |

All within typical title length (~50–60 chars with template) and description length (~150–160 chars).

### 1.4 Other key pages ✅

- **About** — "About Centervert", unique description (team, Greenville, 18 people).
- **News** — Via `news/layout.tsx`: "News", company updates/insights.
- **Marketplace** — "AI Marketplace | Centervert", pay-once AI services.
- **Privacy / Terms / Cookies** — Each has title and short description.

### 1.5 Gaps / recommendations

- **OG/Twitter image:** Not set. Add a default `openGraph.images` and `twitter.images` (e.g. 1200×630) for better social previews.
- **Marketplace title:** "AI Marketplace | Centervert" is good; consider matching template so it becomes "AI Marketplace | Centervert" (already consistent).
- **Admin:** Now has `robots: { index: false, follow: false }` via `admin/layout.tsx`.

---

## 2. Technical SEO

### 2.1 Sitemap ✅ (added)

- **File:** `src/app/sitemap.ts`
- **URLs included:** Home, About, News, Marketplace, Privacy, Terms, Cookies, all 6 service pages.
- **Output:** `https://www.centervert.com/sitemap.xml`
- **Excluded:** `/admin`, `/marketplace/order`, `/marketplace/status/[id]` (not in sitemap; order/status are in robots disallow).

**Note:** Order and status pages are dynamic; they are intentionally omitted from the sitemap. Add them later if you want them indexed (usually you don’t).

### 2.2 Robots.txt ✅ (added)

- **File:** `src/app/robots.ts`
- **Allow:** `/` (all except disallowed).
- **Disallow:** `/admin`, `/api/`, `/marketplace/order`, `/marketplace/status/`.
- **Sitemap:** `https://www.centervert.com/sitemap.xml`.

### 2.3 Canonical / metadataBase ✅

- **metadataBase** in root layout ensures generated canonical and OG URLs use `https://www.centervert.com`. No duplicate-content issue from missing canonicals for static pages.

### 2.4 Structured data ✅

- **LocalBusiness** (JSON-LD) in root layout: name, address, phone, email, url. Good for local/search.
- **Recommendation:** Optionally add `Service` or `ProfessionalService` schema on each service page for richer snippets.

---

## 3. Content & structure

### 3.1 Headings

- **One H1 per page** — Confirmed on homepage, about, news, marketplace, all service pages, legal pages, admin.
- **H1 content:** Descriptive and page-specific (e.g. "Managed IT Services", "Identities That Make You Impossible to Ignore").
- **Hierarchy:** Logical (H1 → H2 → H3) on sampled pages.

### 3.2 Images

- **Decorative hero images:** Use `alt=""` (correct).
- **Logo:** `alt="Centervert"` in footers and nav — good.
- **Recommendation:** Audit any content images (e.g. news, marketplace) to ensure meaningful `alt` text where relevant.

### 3.3 Internal linking

- **Nav:** Services (anchor), AI Marketplace, News, Connect/Book a Call.
- **Footer:** Full service list, About, News, Legal — good for crawl and UX.
- **Homepage:** Service cards link to each service page ("View packages").
- **Recommendation:** Consider a `/services` index page and/or a "Services" nav dropdown to strengthen internal linking to service pages.

---

## 4. URLs

- **Structure:** Clean: `/`, `/about`, `/news`, `/marketplace`, `/services/[slug]`, `/privacy`, `/terms`, `/cookies`.
- **No redundant parameters** in static routes.
- **Dynamic:** `/marketplace/order`, `/marketplace/status/[id]` — correctly excluded from sitemap and disallowed in robots.

---

## 5. What was added in this audit

1. **`src/app/sitemap.ts`** — Generates `/sitemap.xml` with all public pages and priorities/changeFrequency.
2. **`src/app/robots.ts`** — Generates `/robots.txt` with allow/disallow and sitemap URL.
3. **Root `layout.tsx`** — `metadataBase`, `openGraph`, `twitter` added for canonical and social sharing.
4. **`src/app/admin/layout.tsx`** — `robots: { index: false, follow: false }` so admin is not indexed.

---

## 6. Recommended next steps (optional)

| Priority | Action |
|----------|--------|
| High     | Add default OG image (1200×630) and set `openGraph.images` / `twitter.images` in layout or per-page. |
| Medium   | Add `Service` or `ProfessionalService` JSON-LD on each `/services/*` page. |
| Medium   | Add `/services` index page and link from nav for stronger internal linking. |
| Low      | Add `article` schema for news posts if you want rich results for articles. |
| Low      | Review and add `alt` text for any content images that aren’t purely decorative. |

---

## 7. Quick reference

- **Sitemap:** `https://www.centervert.com/sitemap.xml`
- **Robots:** `https://www.centervert.com/robots.txt`
- **Default title:** Centervert | AI, Software & Managed IT | Greenville, SC
- **Schema:** LocalBusiness in root layout (global).
