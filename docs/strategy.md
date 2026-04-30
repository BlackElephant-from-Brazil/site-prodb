# ProDB — Strategy & Creative Brief (Phase A)

**Date:** 2026-04-30
**Owner:** Build team (executor: Claude Opus 4.7)
**Status:** Draft pending review. Locked brief at the bottom — everything downstream inherits from §7.

---

## 1. Executive summary

The current ProDB site is competent but generic — it sells "a cloud solution" rather than positioning ProDB as a specific kind of partner. After a divergent pass across three positioning angles, three narrative arcs, and three visual moods, the recommended direction is:

- **Angle:** "Cloud especialista brasileira" — the specialist alternative to commodity hosts and unfriendly hyperscalers, leading with operational quality (support, monitoring, SLA) backed by compliance proof (ISO suite) and pricing predictability (BRL, transparent).
- **Arc:** Hero–Offer–Anchor hybrid — confident numeric claim above the fold, three-pain micro-frame, dual solution split, five pillars, certifications grouped by purpose, customer + testimonial, support model with names, blog, final dual CTA.
- **Mood:** "Engineered Confidence with Brazilian warmth" — deep navy + slate, single cyan primary, amber as a sparing humanizing accent, geometric sans (Geist) display + mono for technical detail, isometric SVG infrastructure motifs.

This combination scores highest on the decision matrix (§6) for its mix of B2B credibility, conversion likelihood, and differentiation against the Brazilian cloud field.

---

## 2. Current-site audit (relevant findings)

What the live site does:

- **Hero copy is hollow.** "A solução em nuvem que impulsiona o seu sucesso" reads as filler. No claim, no number, no specific buyer.
- **CTA stack is split four ways.** "Quero proteger meus dados", "Quero meu servidor na nuvem", "Fale com um especialista", "Vamos crescer juntos" — no single primary on the homepage.
- **Trust density is low above the fold.** Certifications appear lower-page; logos are decorative; no SLA, no support time, no customer count surfaces in the first viewport.
- **Pricing UX adds friction, not lift.** Each of three plans opens a separate identical popup form. Users repeat themselves.
- **Differentiator section is generic.** "Segurança de ponta", "Soluções sob medida", "Atendimento humanizado" without a single number or named system.
- **No problem framing.** The site assumes the visitor already knows why they need ProDB. Most CTOs need a pain mirror first.
- **Partner logos without context.** Seven partners listed; zero case-study text; zero quotes.
- **Blog teaser exists but lacks preview.** Titles only; no excerpt to earn the click.

What this implies for the rebuild:

- Lead with a specific, claim-backed headline.
- One primary CTA per viewport. Reduce the homepage to two stable conversion paths (specialist conversation + backup trial) and route everything else through navigation.
- Move trust signals (certifications, SLA, response time, customer count) into the first 600px.
- Replace the three-modal pricing pattern with one form that pre-fills the chosen plan.
- Add a problem-framing block — three named pains — before the solution split.
- Pair every partner logo with at least one named result, even if marked TODO until the customer interview lands.

---

## 3. Three strategic positioning angles

Each angle is internally consistent: a different ICP center of gravity, a different primary pain, a different proof requirement, a different competitive frame.

### Angle A — "The Brazilian alternative to hyperscaler bill shock"

- **ICP center:** IT directors at SMBs/mid-market who own the cloud bill and have been audited by their CFO twice this year.
- **Primary pain:** Bills that fluctuate with USD/BRL, surprise egress charges, support that's an additional tier ($).
- **Headline thesis:** "Cloud em reais, com fatura previsível e sem letra miúda."
- **Proof needed:** Real before/after cost comparisons (case studies), transparent pricing in BRL up front, FX hedging story, regional latency benchmark.
- **Competitive frame:** Anti-hyperscaler-reseller. Anti-USD-billing.
- **Risks:** Commoditizes ProDB as "the cheap option"; invites bid-down behavior; can erode brand maturity; vulnerable to a hyperscaler price cut.
- **Conversion mechanic:** ROI calculator above the fold; comparison table; quote requests routed to sales fast.

### Angle B — "A cloud especialista que atende — não que cobra extra para atender" *(recommended core)*

- **ICP center:** IT managers and CTOs whose last incident was a four-hour wait for a Tier-1 ticket reply written in English.
- **Primary pain:** Slow tickets, English-only support, no proactive monitoring, "you broke it, you fix it" model.
- **Headline thesis:** "Cloud brasileira com operação proativa e suporte humano em português 24/7 — incluído."
- **Proof needed:** Verified average response time, NPS, named SRE engineers, NOC photo, real customer quote about an incident that was prevented.
- **Competitive frame:** Anti-commodity-host (Locaweb/UOL who promise support but stack tickets) AND anti-hyperscaler (where premium support is priced separately).
- **Risks:** Support is a soft differentiator — buyers say they want it but often buy on price; numeric claims need to be defensible (so we mark TODOs where we don't have verified data yet).
- **Conversion mechanic:** Support-forward UI surfaces (named avg response time, channel grid), specialist-call CTA leading.

### Angle C — "Compliance-grade cloud privada — para quem o auditor visita"

- **ICP center:** Regulated mid-market — fintechs (Bacen oversight), healthtechs (LGPD), retailers (PCI-DSS), ESG-conscious corporates.
- **Primary pain:** Hyperscaler shared-responsibility models are auditor-unfriendly; data residency outside Brazil is an LGPD problem; ISO certs from "the parent company" don't transfer to local entities.
- **Headline thesis:** "A cloud que passa na auditoria — ISO 27001, SOC, PCI-DSS e Tier III, sob CNPJ brasileiro."
- **Proof needed:** Full cert inventory (ProDB has 9), audit-pack download, named compliance officer, regional data residency map, attested controls list.
- **Competitive frame:** Anti-hyperscaler (sovereignty), anti-other-Brazilian-hosts (most lack the full ISO suite).
- **Risks:** Narrows the ICP — heavily-regulated buyers are ~30% of mid-market; leaves SaaS/growth segment on the table; reads stiff if executed without warmth.
- **Conversion mechanic:** Audit-pack download (gated); compliance-officer contact; longer sales-cycle CTAs.

### Recommendation

**Angle B (core) with C as substrate and A as practical close.** Pure A commoditizes. Pure C narrows. Pure B is the differentiator — and it ladders cleanly:

- **Substrate (C, compliance):** "You can trust us — these certs prove it."
- **Experience (B, support):** "You can rely on us — this is how we operate."
- **Close (A, predictable BRL):** "You can budget us — this is what it costs."

This matches the prompt's stated ICP pain triad ("hyperscaler bill creep, support friction with US-based providers, LGPD compliance pressure") without picking just one.

---

## 4. Three homepage narrative arcs

### Arc 1 — PASOR (Problem → Agitate → Solution → Offer → Reassurance)

Classic landing-page DR. Pros: high conversion on cold traffic. Cons: feels salesy; risks denting brand maturity for a B2B audience that researches.

### Arc 2 — SPRO (Solution → Proof → Reassurance → Offer)

Brand-forward. Pros: trust-dense above the fold; signals maturity. Cons: slower time-to-CTA; better suits warm/researched traffic; risks under-converting cold.

### Arc 3 — HOA hybrid (Hero+Offer-anchor → micro-PASOR → Solution split → Pillars → Certs → Customers → Support → Blog → Final CTA) *(recommended)*

Confident hero claim with a number → trust strip → dual CTA (specialist call + backup trial); then a tight 3-card problem mirror; then the dual solution; then 5 pillars with numbers; then certifications grouped (Security / Operations / Governance); then logo wall + one numeric testimonial; then named-people support model; then blog teaser; then a single final dual-CTA band.

Pros: serves cold and warm; CTA visible <8s; trust density rises throughout; aligns 1:1 with the prompt's §6 spec; rewards both skim and deep read. Cons: longer page demands section-level discipline.

---

## 5. Three visual moods

### Mood 1 — Engineered Confidence (Linear × Vercel × Stripe) *(recommended core)*

- **Adjectives:** precise, calm, geometric, technical, premium, modern.
- **References:** Linear, Vercel, Stripe Dashboard, Cloudflare marketing.
- **Surfaces:** deep navy backgrounds, single accent, generous whitespace, ultra-clean type, isometric SVG infrastructure motifs, mono type for IPs and configs.
- **Risk:** "Yet another modern SaaS site" if executed without distinctive flourishes.
- **Distinguishers we'll keep:** ambient gradient orb behind hero, hand-drawn-feel annotation arrows on diagrams, live-data ticker on stats.

### Mood 2 — Brazilian Pragmatic (Cloudflare × DigitalOcean × Nubank-execution-quality)

- **Adjectives:** honest, capable, no-bullshit, warmer-blue, professional, accessible.
- **References:** Cloudflare, DigitalOcean, Magalu Cloud, Nubank for execution polish.
- **Surfaces:** balanced navy/warm-gray palette, terracotta or amber accent, slight texture, real photography paired with vector.
- **Risk:** Warm accents read cheap if not exact; less "premium" signal than Mood 1.

### Mood 3 — Editorial Authority (Stripe Press × Browser Company × Mailchimp 2.0)

- **Adjectives:** confident, deliberate, typographic, grown-up, slightly-conservative, distinctive.
- **References:** Stripe Press, Browser Company / Arc, Mailchimp's illustrated era.
- **Surfaces:** high-contrast type-led layouts, big editorial display, asymmetric grids, illustrated/diagrammatic figures, more whitespace than tech-norm.
- **Risk:** Magazine-y feel can read soft to CTOs who want specs; harder to execute well.

### Recommendation

**Mood 1 with one Mood 2 borrowing.** Lead with engineered confidence (cool palette, technical surfaces, premium type) — but reserve a single warm accent (amber-500) for human moments only: support model card, testimonial card, "Quem atende quando algo dá errado" header, success states. Cool surfaces signal credibility; the single warm note signals humanity. The contrast is the brand.

---

## 6. Decision matrix

Top candidates scored 1–5 against B2B credibility, conversion likelihood, differentiation vs. Brazilian field (Locaweb, KingHost, UOL Host, HostGator BR, Magalu Cloud), and buildability within this prompt's scope.

| Combination | Credibility | Conversion | Differentiation | Buildability | **Total** |
|---|:---:|:---:|:---:|:---:|:---:|
| A (cost) + Arc1 + Mood1 | 4 | 5 | 2 | 5 | 16 |
| A (cost) + Arc3 + Mood1+2 | 4 | 5 | 4 | 4 | 17 |
| **B (support) + Arc3 + Mood1+2** | **5** | **5** | **5** | **4** | **19** |
| B (support) + Arc1 + Mood1 | 5 | 5 | 4 | 5 | 19 |
| B (support) + Arc3 + Mood1 | 5 | 5 | 4 | 5 | 19 |
| C (compliance) + Arc2 + Mood3 | 5 | 3 | 4 | 3 | 15 |
| C (compliance) + Arc3 + Mood1+2 | 5 | 4 | 4 | 4 | 17 |

Three combinations tie at 19. The deciding criterion is **differentiation in the Brazilian cloud market**: a navy-and-cyan-only Mood 1 is well-trodden; the warm-accent twist on Mood 1 (the Mood 1+2 hybrid) is the only candidate that earns a 5 on differentiation without sacrificing credibility or buildability. Support angle (B) + HOA arc (3) + Engineered-Confidence-with-warmth mood (1+2) wins.

---

## 7. Locked creative brief

> **ProDB is the cloud especialista brasileira: the specialist alternative for IT leaders who are tired of hyperscaler bill shock, English-only support, and "datacenter" promises that fall apart under audit. The site leads with a confident, numeric headline backed by Tier III certification, ISO 27001 + SOC + PCI-DSS, and a 24/7 pt-BR support model — then walks the buyer through three recognized pains (bill creep, slow tickets, LGPD pressure), the dual offer (managed cloud servers + tiered backup with a 15-day trial), the five pillars rendered with concrete numbers, the certifications grouped by purpose (Security / Operations / Governance), customer logos paired with at least one numeric testimonial, and a support model section that names channels and response targets. The visual register is "Engineered Confidence with Brazilian warmth": a deep-navy + slate engineered surface, a cyan-400 primary accent for CTAs and highlights, an amber-500 warm accent reserved for the human moments (support, testimonial, success states), Geist display + Geist Mono for technical detail, isometric SVG infrastructure motifs, and one ambient gradient orb behind the hero. The tone is calm, technical, and plainspoken — numbers over adjectives. The conversion architecture serves three intents in priority order: high-intent specialist conversation (homepage primary CTA), mid-intent backup trial (homepage secondary, /backup primary), partner application (/seja-um-parceiro primary). Every form is paired with a trust strip and a response-time promise. Every numeric claim that cannot be verified ships as a clearly-flagged TODO.**

---

## 8. Implications for Phase B (design system)

These are the brief-derived inputs that the design system spec inherits without further debate:

- **Palette:** Deep navy 900 → 700 surface range; slate 50–900 neutrals; cyan-400 primary accent; amber-500 secondary accent (sparing); semantic green/yellow/red/blue; off-white #F7F8FA content bg; near-black #0A1220 hero bg. Never pure #000 or #FFF.
- **Type:** Geist (or Geist Display fallback to Inter) for display + body; Geist Mono for technical detail. Type scale: modular 1.25, fluid via clamp.
- **Accent rule:** Cyan-400 = action / highlight / link. Amber-500 = humanity / warmth / support / testimonial / success. Never both in the same visual cluster except in the support card.
- **Motion language:** entrance fade+rise (8px, 400ms, ease-out); 150ms hover/focus response; one ambient hero element ≤200KB; pause on `prefers-reduced-motion`.
- **Components priority order:** Button (primary/secondary/ghost), Input + Textarea + Select, Card (default/elevated/outline), Badge (cert/feature/status), PricingCard, FeatureCard, LogoStrip, Stat, Testimonial, FAQ accordion, Modal/Dialog, Nav (with mega-menu under Soluções), Footer, CookieBanner, FloatingWhatsApp, Toast.
- **Page-spec inheritance:** Home follows §6 of the master prompt verbatim. Inner pages get hero variants of the homepage hero. Forms always pair with a trust strip below the submit.
- **Banned visual moves:** carousels for primary content; stock handshake photos; pure-black hero; pure-white content; gradient buttons (single-color CTAs only); generic 3D character illustrations.
- **Imagery direction:** isometric SVG infrastructure (server, network, storage, monitoring), product screenshots (OBM panel, cloud panel — placeholder until real), photography only for team/NOC (placeholder until real).

---

## 9. Open assumptions to verify before/during build

These are flagged so the user can correct them before they harden in copy or visuals.

1. **Numeric claims to verify:** "Average response time", "First-call resolution rate", "NPS", "Total active customers", "Years in operation" — all currently TODO. Strategy assumes these numbers exist or can be sourced; if not, the site degrades gracefully with qualitative copy.
2. **Customer testimonials:** None real exist yet. The featured testimonial card ships as a clearly-marked placeholder until at least one customer quote with a numeric result is sourced.
3. **NOC / office photography:** Strategy assumes placeholders are acceptable on first ship; if real photos are available, swap on review.
4. **Configurator backend:** Phase C builds the cloud-server configurator UI with a pre-filled-form submission — not a live price API. If a real pricing API exists, we wire it in Phase C; otherwise the form routes to sales.
5. **Form backend:** Forms submit to a placeholder server action that logs and replies with a confirmation page. Real CRM/email integration is out of scope for this prompt and called out in `decisions.md`.
6. **Analytics:** GA4 with consent-mode and a generic event taxonomy. Real GA property ID is a TODO before deploy.

---

## 10. What changes vs. the live site (preview)

These are the concrete deltas the strategy commits us to. Each is a hypothesis testable against conversion lift.

| Change | Hypothesis |
|---|---|
| Hero replaced with claim + 4-token trust strip + dual CTA (specialist / trial) | Time-to-CTA understanding ↓ from ~8s to ~3s |
| 3-pain problem-framing block added between hero and solutions | Bounce ↓ for cold traffic; scroll depth ↑ |
| Pricing collapses three modals into one shared form pre-filled by plan | Form completion rate ↑ |
| 5-pillar section gets a number per pillar | Perceived rigor ↑; scroll depth ↑ |
| Certifications grouped by purpose, each badge clickable for plain-language explainer | Cert-section dwell time ↑; trust ↑ |
| Customer logo wall paired with one numeric testimonial card | Logo-only CTR (already low) replaced with quote engagement |
| Support model section with channels + response promise + (real or placeholder) NOC photo | Specialist-CTA conversion ↑ |
| One floating WhatsApp + sticky mobile CTA bar on /backup and /servidores-cloud | Mobile conversion ↑ |
| Exit-intent modal on pricing pages offering 15-day trial | Recovery on bouncing buyers ↑ |
| Forms always paired with response-time promise + LGPD reassurance | Form-start → form-submit ↑ |

The full before/after with execution detail lands in §17 of the project at the end of Phase C.

---

**End of Phase A — awaiting user review before starting Phase B.**
