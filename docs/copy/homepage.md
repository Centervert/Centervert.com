# Homepage Copy Lock

Source of truth for the new homepage. Derived from the 2026-04-03 Centervert Positioning Session documents. Zero em dashes per CLAUDE.md hard rule.

## Voice

Clear, confident, calm, practical, non-hype. Sound like a systems operator who can guide the client, not a salesperson with a menu.

## SEO

- **Title:** `Centervert | The systems your business runs on. One partner.`
- **Meta description:** `Software, infrastructure, automation, and managed support from one Greenville, SC team. Planning through rollout, with people who answer after go-live.`

## Hero

- **Eyebrow:** `Technology. Strategy. Execution.`
- **Headline (display serif):** `The systems your business runs on.`
- **Sub-headline (serif lighter weight):** `Planned, built, implemented, and supported by one partner.`
- **Body (Effra):** `Software, infrastructure, automation, and managed support from one Greenville team. You get people who plan it, build it, roll it out, and answer the phone when it misbehaves.`
- **Primary CTA:** `Book a Strategy Call` → `/book`
- **Secondary CTA:** `See how we work` → `#lifecycle`
- **Trust pill:** `"Replaced four vendors with one team." Sarah C., VP Operations`

## Logo / Tools marquee

- **Eyebrow (centered, small):** `We connect into the tools your business already runs on`
- Marquee tools: React, Next.js, Supabase, PostgreSQL, n8n, Zapier, Make, OpenAI, Microsoft 365, Google Workspace, Slack, HubSpot, Salesforce, Go High Level, ClickUp, UniFi

## Lifecycle section (the signature block)

- **Eyebrow:** `How Centervert Works`
- **Headline:** `One team across the full lifecycle of your systems.`
- **Sub:** `Most businesses juggle a consultant, a dev shop, an IT vendor, and an installer. We combine all four into one partner that plans, builds, implements, and supports the technology you depend on.`
- **Four stages** (each with label, short description, representative capabilities):

### Plan
We listen to how the business works, find the bottlenecks, evaluate what you already have, and map what should be improved, replaced, or built.
Capabilities: Discovery, operational review, systems strategy, process analysis, technology architecture.

### Build
We design and develop the software, workflows, and automations that fit how your business actually operates.
Capabilities: Custom software, web applications, AI and automation, platform optimization (Salesforce, HubSpot, ClickUp), integrations.

### Implement
We deploy the systems in the real world. Digital and physical. Because software has to live in a real environment.
Capabilities: Networking and Wi-Fi, low voltage and structured cabling, AV and control systems, deployment and rollout.

### Support
We stay involved. Managed services, optimization, and technology partnership so your systems keep working as your business grows.
Capabilities: Managed IT, help desk, cybersecurity, platform administration, ongoing strategy.

## Capabilities grid (the six services, reframed)

- **Eyebrow:** `What We Deliver`
- **Headline:** `Six capabilities. One connected system.`
- **Sub:** `Each capability is tagged to the stages of the lifecycle where it lives. Most engagements touch more than one.`

Cards (title, lifecycle tags, one-line description, link to service page):

1. **AI & Automation** [Plan · Build · Support] — AI agents, workflow automation, and practical AI consulting that strengthens how the business operates. → `/services/ai-automation`
2. **Custom Software** [Plan · Build] — Applications, portals, and platforms built around the way your business actually works. → `/services/custom-software`
3. **Web Design & Development** [Build] — Marketing sites and web experiences, from simple presence to the front end of a larger business system. → `/services/web-development`
4. **Brand Design** [Plan · Build] — Visual identity, strategy, and design that makes your business impossible to ignore. → `/services/brand-design`
5. **Low Voltage & AV** [Implement] — Networking, cabling, AV, and control systems. The physical side of the ecosystem. → `/services/low-voltage`
6. **Managed IT** [Support] — Endpoint management, cybersecurity, cloud, and 24/7 help desk. The ongoing support layer. → `/services/managed-it`

## Proof / case study (replaces static stats)

- **Eyebrow:** `Proof`
- **Headline (editorial):** `One partner. Four vendors retired. A business that actually runs.`
- Story block: 2 to 3 paragraphs narrating an anchor client (pulled from KB `02-clients/` once confirmed). Stages of the lifecycle as chapter headers inside the story. Pull-quote. Outcome stats inline as small typographic moments (third stat label in code: `Help desk when the ticket queue does not sleep`).
- **CTA:** `Read more case studies` → `/work`

## "Software plus the real world" differentiator

- **Eyebrow:** `Why Centervert`
- **Headline:** `Software lives in a real environment.`
- **Sub:** `Most modern software partners stop at the code. Most IT vendors stop at the wires. Centervert does both, which is the difference between a product that looks good in a demo and a system that works in your building on a Monday morning.`
- **Dark card pill:** `Where we show up`
- **Bullet list:** matches `RealWorldDifferentiator` proof points in code (no “ecosystem” phrasing on the live card).
- **CTA:** `See our approach` → `/about`

## Scale Up callout (dark statement section, `AITrainingCallout.tsx`)

- **Eyebrow:** `Scale Up by Centervert`
- **Headline:** `Teach your team to actually use AI.` (second line in muted white)
- **Sub:** `Scale Up is Centervert's education and outreach initiative.` then existing hands-on / conference-session lines.
- **Right column:** small label `What a week often includes` plus disc list (see component for exact bullets).
- **CTA primary:** `Events and RSVP` → `/scaleup#events` (`routes.scaleUpEvents`)
- **CTA secondary:** `Book private training` → `/book`

## Testimonial carousel

- **H2:** `After the handoff, they still picked up.`

Three to five testimonials, single card at a time, auto-rotate with pause on hover. Each card: quote, name, role, company, optional logo.

Placeholder content until real approved quotes land. Draft first quote:
- `"Centervert rebuilt three of our internal tools in the time our old vendor was still writing the proposal. And they answer the phone."` — Operations leader, Greenville SC.

## FAQ

Section heading (H2): `What people ask before they hire us`. Intro line: `If it is not here, book a call and ask in plain language.`

1. **What makes Centervert different from a typical IT company?** — We work across the full lifecycle. Software, platforms, infrastructure, and managed support all from one team that understands how they connect.
2. **Can you work with our existing tools and platforms?** — Yes. We can often improve what you already have instead of replacing it. Salesforce, HubSpot, ClickUp, Monday, Go High Level, Microsoft 365, Google Workspace, and many more.
3. **Do you work with startups or only larger companies?** — Both. A lot of our work is with small and mid-sized teams that want serious systems discipline without hiring a full bench in-house. Scope follows your size and budget.
4. **What does a typical engagement look like?** — It starts with a strategy call. We scope one focused plan, execute, and stay available as the systems evolve. Most clients start with one capability and expand as they see results.
5. **How do you handle security and compliance?** — Security is part of the build, not a bolt-on later. We harden networks, treat code review seriously, and bring in HIPAA, SOC 2, or GDPR guidance when your situation calls for it.

## Final CTA

- **Eyebrow:** `Get Started`
- **Headline:** `Pick a time. We skip the deck.`
- **Sub:** `Thirty minutes on the calendar. No commitment, no slide stack, just a straight conversation about where you are and what is actually broken.`
- **Primary CTA:** `Book a Strategy Call` → `/book`
- **Secondary CTA:** `Call (864) 987-8282` → `tel:8649878282`
- **Fine print:** `Free strategy call. Cancel if your calendar shifts.`

## Footer

Structure:

- **Column 1 (brand):** Logo, one-line description, email `connect@centervert.com`, phone `(864) 987-8282`, `Greenville, SC`.
- **Column 2 — Work:** `Work`, `Case Studies` (points to `/work`), `Services`.
- **Column 3 — Services:** all six, each linking to the service page.
- **Column 4 — Company:** `About`, `Careers`, `News`, `Contact`.
- **Column 5 — Legal:** `Privacy`, `Terms`, `Cookies`.
- **Bottom row:** `© 2026 Centervert. All rights reserved.` · `Greenville, SC`. Small "Built by Centervert" mark from brand assets.
