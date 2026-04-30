# ProDB — Design System Spec (Phase B)

**Inherits from:** `docs/strategy.md` §7 (locked creative brief)
**Target stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript
**Status:** Draft pending review. Stop after this phase before code.

---

## 1. Principles

The brief defines a brand register: *Engineered Confidence with Brazilian warmth.* These five principles operationalize that register for every decision in Phase C.

1. **Numbers over adjectives.** Every claim ships with a number or a clearly-flagged TODO. No "soluções inovadoras" — show the SLA, the cert, the time, the cost.
2. **One primary action per viewport.** Cyan CTAs are scarce and intentional; if two cyan buttons are on screen at the same time, one of them is wrong.
3. **Cool surfaces signal credibility; warm accents signal humanity.** Cyan-400 = action. Amber-500 = humanity. Never both in the same visual cluster except in the support card.
4. **Content first, motion second, ornament never.** Animations express cause-effect. The ambient hero orb is the only piece of motion that exists for atmosphere — and it pauses on `prefers-reduced-motion`.
5. **Mobile is the default.** Touch targets ≥44px, sticky bottom CTA on conversion pages, no carousels for primary content.

---

## 2. Design tokens

Tokens are declared in `src/styles/tokens.css` as CSS custom properties on `:root`, then bound to Tailwind v4 via `@theme inline` in `globals.css`. Components consume tokens through Tailwind utility classes — no raw hex literals in component files.

### 2.1 Color

The palette is named by role, not by hue. Each role has a 50–950 step ladder where useful. Contrasts are verified against WCAG 2.2 AA; key body-text-on-surface pairs hit AA Large or better. Pure `#000` and `#FFF` are explicitly disallowed for body and hero surfaces.

#### Brand & accent

| Token | Hex | Use |
|---|---|---|
| `--color-navy-950` | `#070D1A` | App-shell background, near-black anchor (never `#000`). |
| `--color-navy-900` | `#0A1220` | Hero / dramatic section bg. |
| `--color-navy-800` | `#0E1B33` | Elevated surfaces on dark, footer. |
| `--color-navy-700` | `#142547` | Card surfaces on dark, divider hairlines on dark. |
| `--color-navy-600` | `#1E3260` | Borders on dark, cool subtle highlights. |
| `--color-cyan-500` | `#0AB6E8` | Primary action hover/pressed. |
| `--color-cyan-400` | `#22D3EE` | **Primary CTA / link / focus ring.** |
| `--color-cyan-300` | `#67E8F9` | On-dark text emphasis, link hover on dark. |
| `--color-cyan-100` | `#CFFAFE` | Cyan tint surfaces (badges, callouts on light). |
| `--color-amber-600` | `#D97706` | Amber pressed. |
| `--color-amber-500` | `#F59E0B` | **Warmth accent — support, testimonial, success-celebrate.** |
| `--color-amber-200` | `#FDE68A` | Amber tint surfaces (sparing). |

#### Slate neutrals (cool gray, slight blue tint to stay on-brand)

| Token | Hex | Use |
|---|---|---|
| `--color-slate-50` | `#F7F8FA` | **Body bg (light).** Replaces pure white. |
| `--color-slate-100` | `#EEF1F5` | Subtle section bg, input bg on light. |
| `--color-slate-200` | `#DDE3EB` | Borders on light, dividers on light. |
| `--color-slate-300` | `#C2CCD8` | Disabled bg on light, low-emphasis dividers. |
| `--color-slate-400` | `#94A3B8` | Tertiary text, icons-decorative. |
| `--color-slate-500` | `#64748B` | Secondary text on light. |
| `--color-slate-600` | `#475569` | Body text on light (when `slate-700` is too heavy). |
| `--color-slate-700` | `#334155` | **Body text on light (default).** ≥7:1 on `slate-50`. |
| `--color-slate-800` | `#1F2A3D` | Headings on light. |
| `--color-slate-900` | `#0E1726` | Display headings on light. |
| `--color-slate-950` | `#070D1A` | (Same as `navy-950`; aliased for semantic clarity.) |

#### Semantic

| Token | Hex | Use |
|---|---|---|
| `--color-success-500` | `#10B981` | Success state, confirmation badges. |
| `--color-success-100` | `#D1FAE5` | Success tint surface. |
| `--color-warning-500` | `#F59E0B` | Caution (aliased to amber-500 for visual cohesion). |
| `--color-warning-100` | `#FEF3C7` | Warning tint surface. |
| `--color-danger-500` | `#EF4444` | Errors, destructive actions. |
| `--color-danger-100` | `#FEE2E2` | Error tint surface. |
| `--color-info-500` | `#3B82F6` | Information, neutral notice. |
| `--color-info-100` | `#DBEAFE` | Info tint surface. |

#### Surface roles (the layer most pages consume)

| Token | Light theme | Dark theme |
|---|---|---|
| `--bg-canvas` | `slate-50` | `navy-950` |
| `--bg-surface` | `#FFFFFFcc` (off-white card) | `navy-800` |
| `--bg-elevated` | `#FFFFFF` | `navy-700` |
| `--bg-inset` | `slate-100` | `navy-900` |
| `--fg-primary` | `slate-900` | `slate-50` |
| `--fg-secondary` | `slate-700` | `slate-300` |
| `--fg-muted` | `slate-500` | `slate-400` |
| `--fg-on-accent` | `navy-950` (on cyan-400) | `navy-950` (on cyan-400) |
| `--border-subtle` | `slate-200` | `navy-700` |
| `--border-strong` | `slate-300` | `navy-600` |
| `--ring-focus` | `cyan-400` | `cyan-300` |
| `--scrim` | `rgba(7,13,26,0.6)` | `rgba(7,13,26,0.7)` |

> **Theme strategy:** Light is the default. Dark is supported via `data-theme="dark"` on `<html>`, not via `prefers-color-scheme` alone — so the user can override. Hero/CTA bands and footer use the dark palette regardless of theme (intentional inversion for emphasis).

### 2.2 Typography

#### Families

| Token | Family | Notes |
|---|---|---|
| `--font-sans` | `Geist` (next/font) | Display + body. Variable, supports 100–900. |
| `--font-mono` | `Geist Mono` | IPs, configs, command snippets, tabular numerics. |

> Geist is already wired in `src/app/layout.tsx`. We keep it. Inter is the fallback if Geist hosting fails.

#### Scale (modular 1.25, fluid via `clamp()`)

| Token | min → max | Use |
|---|---|---|
| `--text-xs` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem)` | Helper/legal text. |
| `--text-sm` | `clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)` | Captions, labels, badges. |
| `--text-base` | `clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)` | Body. |
| `--text-lg` | `clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)` | Lead paragraph. |
| `--text-xl` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | H4 / large body. |
| `--text-2xl` | `clamp(1.5rem, 1.3rem + 0.9vw, 1.875rem)` | H3. |
| `--text-3xl` | `clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem)` | H2 (section). |
| `--text-4xl` | `clamp(2.25rem, 1.7rem + 2.2vw, 3.25rem)` | Hero H1 (small variant). |
| `--text-5xl` | `clamp(2.75rem, 2rem + 3vw, 4rem)` | Hero H1 (default). |
| `--text-6xl` | `clamp(3.25rem, 2.4rem + 3.5vw, 5rem)` | Hero H1 (large impact). |

#### Weights

| Token | Weight | Use |
|---|---|---|
| `--fw-regular` | 400 | Body. |
| `--fw-medium` | 500 | UI labels, emphasis spans. |
| `--fw-semibold` | 600 | Subheads, button labels. |
| `--fw-bold` | 700 | Display heads. |

#### Leading & tracking

- Display (H1/H2): `line-height: 1.05–1.1`; `letter-spacing: -0.022em`.
- H3/H4: `line-height: 1.2`; `letter-spacing: -0.012em`.
- Body: `line-height: 1.6`; `letter-spacing: 0`.
- Mono: `line-height: 1.5`; `letter-spacing: 0`.

#### Tabular figures

Numbers in stat blocks, pricing, and tables use `font-feature-settings: "tnum"` to prevent figure-width drift. Mono numbers use the `Geist Mono` family directly.

### 2.3 Spacing

4px base, 8px rhythm. Tailwind v4 defaults align — we extend with two project-specific tokens.

| Token | Value | Use |
|---|---|---|
| `--space-0` | 0 | — |
| `--space-px` | 1px | Hairlines. |
| `--space-1` | 4px | Tight stacks. |
| `--space-2` | 8px | Component internal. |
| `--space-3` | 12px | — |
| `--space-4` | 16px | Default gap. |
| `--space-5` | 20px | — |
| `--space-6` | 24px | Card padding (mobile). |
| `--space-8` | 32px | Card padding (desktop). |
| `--space-10` | 40px | Section internal. |
| `--space-12` | 48px | Section internal large. |
| `--space-16` | 64px | Section vertical (mobile). |
| `--space-20` | 80px | Section vertical (tablet). |
| `--space-24` | 96px | Section vertical (desktop). |
| `--space-32` | 128px | Hero vertical. |

Section spacing always uses tokens from `--space-16` upward — never arbitrary.

### 2.4 Radius

Generous radii reinforce "engineered" character without going playful.

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 4px | Inline tags, code chips. |
| `--radius-sm` | 6px | Small badges. |
| `--radius-md` | 10px | Inputs, small cards. |
| `--radius-lg` | 14px | Default cards. |
| `--radius-xl` | 20px | Pricing cards, large surfaces. |
| `--radius-2xl` | 28px | Hero blocks, feature panels. |
| `--radius-full` | 9999px | Pills, avatars. |

### 2.5 Shadow & elevation

Shadows are layered (one ambient, one directional), low-opacity, and tied to a fixed scale. Pressed states reduce shadow by one step rather than scaling the element (preserves layout stability).

| Token | Value | Use |
|---|---|---|
| `--shadow-xs` | `0 1px 2px 0 rgba(7,13,26,0.05)` | Hairline lift. |
| `--shadow-sm` | `0 2px 4px -1px rgba(7,13,26,0.06), 0 1px 2px -1px rgba(7,13,26,0.04)` | Small cards. |
| `--shadow-md` | `0 6px 14px -2px rgba(7,13,26,0.08), 0 2px 6px -2px rgba(7,13,26,0.05)` | Default elevated cards. |
| `--shadow-lg` | `0 14px 28px -4px rgba(7,13,26,0.12), 0 4px 10px -2px rgba(7,13,26,0.07)` | Floating elements (sticky CTAs). |
| `--shadow-xl` | `0 28px 56px -8px rgba(7,13,26,0.18), 0 6px 16px -4px rgba(7,13,26,0.08)` | Modals. |
| `--shadow-glow-cyan` | `0 0 0 4px rgba(34,211,238,0.18)` | Focus ring on cyan, hero CTA emphasis. |

On dark surfaces, ambient shadow is reduced to ~30% opacity (shadows don't read on dark — replace with `border` + tint shifts).

### 2.6 Motion

#### Durations

| Token | ms | Use |
|---|---|---|
| `--dur-fast` | 120 | Press feedback (color/opacity). |
| `--dur-base` | 200 | State changes (hover, toggle). |
| `--dur-slow` | 320 | Modal open/close, large reveals. |
| `--dur-page` | 480 | Page-level transitions, hero reveal. |

Exit animations are 60–70% of their entry counterpart (responsiveness).

#### Easings

| Token | Curve | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | **Entry** — content rising into place. |
| `--ease-in` | `cubic-bezier(0.5, 0, 0.75, 0)` | **Exit** — content leaving. |
| `--ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | State transitions, accordions. |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Subtle overshoot for primary CTA press-release. |

#### What moves

- Entrance reveals (sections in viewport): `opacity 0→1`, `translateY 8px→0`, `--dur-page`, `--ease-out`. Stagger child items 40ms.
- Hover on interactive elements: `--dur-fast` color/border/shadow change. **Never** `scale > 1.03`.
- Modal open: scrim `opacity 0→1` `--dur-base`; sheet `scale 0.98→1` + `opacity 0→1` `--dur-slow` `--ease-out`.
- Pressed: shadow drops one step + `--dur-fast` opacity decrease.
- Hero ambient: gradient orb `transform: translate3d` drifts ±20px over 14s, infinite, ease-in-out.
- Scroll-linked: header backdrop-blur engages between scroll 8–48px; logo color does **not** change.

#### What does NOT move

- Page chrome (header, footer): no entrance animation.
- Logo lockup: never animated.
- Body text (paragraphs): never animated word-by-word.
- Pricing numbers: no count-up animation (reads gimmicky; numbers are facts).

#### Reduced motion (`prefers-reduced-motion: reduce`)

- Hero orb: pause; replace with static gradient.
- Scroll reveals: disable; content visible immediately at `opacity: 1`.
- Modal open/close: keep `opacity` change, drop `scale`.
- Hover/focus: keep (these are state communication, not decoration).

### 2.7 Breakpoints

Mobile-first. Tailwind v4 breakpoint tokens:

| Token | px | Notes |
|---|---|---|
| (default) | 0+ | Single-column, 16px gutters. |
| `sm` | 480 | Phablet — slightly wider gutters. |
| `md` | 768 | Tablet portrait — 2-up cards. |
| `lg` | 1024 | Tablet landscape / small desktop — full nav, 3-up. |
| `xl` | 1280 | Desktop — full hero, 12-col grid. |
| `2xl` | 1536 | Large desktop — content max-width caps at 1280. |

Container max widths: `max-w-screen-md = 768`, `max-w-content = 1184` (custom token), `max-w-prose = 720` for blog reading.

### 2.8 Z-index layers

| Layer | z-index | Examples |
|---|---|---|
| Base | 0 | Page content. |
| Sticky | 20 | Sticky table headers, sticky mobile CTA bar. |
| Header | 40 | Top nav. |
| Mega-menu | 50 | Dropdown nav panels. |
| Floating | 60 | WhatsApp button, scroll-to-top. |
| Modal scrim | 80 | Modal background. |
| Modal | 90 | Modal panel. |
| Toast | 100 | Toast region. |
| Cookie banner | 110 | LGPD banner (top-most until accepted). |

---

## 3. Layout grid

### 3.1 Page grid

- **Desktop (`lg+`):** 12 columns, 24px gutter, 96px outer margin (collapses to 32px below `xl`).
- **Tablet (`md`):** 8 columns, 20px gutter, 32px outer margin.
- **Mobile:** 4 columns, 16px gutter, 16px outer margin.

### 3.2 Section anatomy

Every page section follows the same anatomy:

```
<section> (vertical padding from --space scale)
  <SectionContainer> (max-w-content, horizontal padding)
    <SectionHeader> (eyebrow, h2, lead) — optional
    <SectionBody> (12-col grid)
    <SectionFooter> (CTA, secondary link) — optional
```

### 3.3 Vertical rhythm by viewport

| Section type | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero | `pt-32 pb-16` | `pt-32 pb-20` | `pt-40 pb-24` |
| Standard | `py-16` | `py-20` | `py-24` |
| Compact (CTA band) | `py-12` | `py-16` | `py-20` |

### 3.4 Container

```css
.container-content {
  max-width: 1184px; /* fits 12-col with generous padding */
  margin-inline: auto;
  padding-inline: clamp(1rem, 2vw + 0.5rem, 6rem);
}
```

---

## 4. Component inventory

Each component lists: variants, states, key dimensions, accessibility notes. The full prop interfaces live in code (`src/components`) — this matrix is the source of truth for what exists.

### 4.1 Primitives

#### Button
| Variant | Bg | Fg | Border | Use |
|---|---|---|---|---|
| `primary` | `cyan-400` | `navy-950` | none | The single CTA per viewport. |
| `secondary` | transparent | `slate-900` | `slate-300` | Lower-emphasis but still in hierarchy. |
| `ghost` | transparent | `slate-700` | none | Tertiary, in-context. |
| `dark-primary` | `cyan-400` | `navy-950` | none | Same as primary; on dark backgrounds. |
| `dark-secondary` | `navy-700` | `slate-50` | `navy-600` | On dark backgrounds. |
| `danger` | `danger-500` | white | none | Destructive only. |

States: `default`, `hover`, `focus-visible`, `active`/`pressed`, `loading`, `disabled`.
Sizes: `sm` (32px), `md` (40px, default), `lg` (48px), `xl` (56px, hero only).
Touch target: ≥44×44px on mobile (forces `lg` on mobile when `md` would clip).

Focus ring: 4px `cyan-400` glow at 18% opacity (`--shadow-glow-cyan`), `outline: none` (replaced with the glow). Visible on **all** interactive elements.

#### Input / Textarea / Select
- Height: 44px (mobile-friendly default).
- Border: `slate-200`; focus: `cyan-400` 1px + glow.
- Label: above the field, persistent (never placeholder-only).
- Helper text: below the field, `text-sm text-slate-500`.
- Error state: border `danger-500`, helper text replaced with error message in `danger-500`, icon prepended.
- Mobile keyboard: `inputmode` and `autocomplete` set per field semantics.

#### Checkbox / Radio
- 20×20px visual, 44×44px hit area (extended via padding).
- Checked: `cyan-400` fill, white check, 6px corner radius (checkbox).
- Focus ring same spec as inputs.

#### Badge
| Variant | Use |
|---|---|
| `cert` | ISO/SOC/PCI badges — monochrome, slate or white per surface, 32px tall. |
| `feature` | Pill — slate-100 bg, slate-700 text, slate-200 border. |
| `status-success` / `warning` / `danger` / `info` | Tinted pill with icon. |
| `accent-cyan` | Cyan-100 bg, cyan-700 text, used to mark "Recomendado". |
| `accent-amber` | Amber-100 bg, amber-700 text — only for warmth moments. |

### 4.2 Compositions

#### Card
- Default: `bg-white`, `border-slate-200`, `shadow-sm`, `radius-lg`, padding `space-6` mobile / `space-8` desktop.
- Elevated: drops border, takes `shadow-md`.
- Outline: `bg-transparent`, `border-slate-200`, no shadow.
- On-dark: `bg-navy-800`, `border-navy-700`, no shadow.

#### PricingCard
- Width: 1-up mobile, 3-up `md+`.
- Highlighted variant: `Avançado` plan — `cyan-400` 2px top border + ribbon "Mais escolhido" (`accent-cyan` badge in top-right corner).
- Sections (top→bottom): plan name, price (Geist Mono tabular figures), short tagline, primary CTA, divider, feature list (12 items max, icon + label).
- CTA opens a unified modal pre-filled with plan name; **no duplicate form modals.**

#### FeatureCard (homepage pillars)
- 5 cards in a horizontal scroll on mobile (snap), grid on desktop.
- Each card: icon (Lucide, 32×32, cyan-400 stroke on dark / slate-700 stroke on light), headline (`text-xl semibold`), 1-sentence proof point with a number, footnote (label + value).

#### LogoStrip
- 6 logos visible at `lg+`, 3 at `md`, 2 at mobile (with horizontal scroll-snap fallback).
- Logos: monochrome `slate-500` on light bg, `slate-300` on dark bg. Equal optical weight via SVG `width`/`height` containers (140px × 48px).
- Heading above: small uppercase eyebrow `text-xs tracking-widest text-slate-500`.

#### Stat
- Number: Geist Mono, `text-4xl` to `text-5xl`, `slate-900` (light) / `slate-50` (dark).
- Unit: smaller, same weight, `slate-500`.
- Caption: `text-sm slate-600`.

#### Testimonial
- Card with: 64×64 photo (rounded-full), name, title + company, quote (`text-lg`), result chip ("redução de custo: 38%" — amber-tinted).
- If real customer quote not available, ships as a clearly-marked TODO placeholder — never invent.

#### FAQ accordion
- Single-expand by default (clicking another collapses the open one).
- Header: `text-lg semibold slate-900`, chevron rotates 180° on open `--dur-base --ease-inout`.
- Body: `text-base slate-700`, `space-4` padding.
- Keyboard: full support — Up/Down between items, Enter/Space toggles.

#### CertBadge (with modal)
- Compact: 64×64 SVG monochrome, label below.
- On click/tap: opens explainer modal — what the cert is, scope, audit cadence, link to evidence (if available; otherwise TODO).

#### Modal / Dialog
- Backdrop: `--scrim`, `--dur-base` fade.
- Panel: max-width 560px, `bg-white`, `radius-xl`, `shadow-xl`, padding `space-8`.
- Open: `opacity 0→1` + `scale 0.98→1` `--dur-slow --ease-out`.
- Close affordances: top-right close button (44×44 hit area), Escape key, click-outside.
- Focus trap: yes; first focusable receives focus on open; focus returns to trigger on close.
- Reduced motion: drops `scale`, keeps `opacity`.

#### Nav (header)
- Layout: logo (left) → nav links (center on `lg+`, hidden on `<lg`) → primary CTA (right) → phone (mobile shows phone icon CTA).
- Sticky from scroll 0; `bg-white/85` with `backdrop-blur-md` engages at scroll > 8px.
- Mega-menu under "Soluções" — opens on hover (desktop) and click (always); two columns: Servidores Cloud / Backup, each with 3-line description + arrow.
- Mobile: hamburger → fullscreen sheet, slide-in from right `--dur-slow --ease-out`.

#### Footer
- 4 columns on `lg`, 2 on `md`, stacked on mobile.
- Sections: Soluções / Empresa / Contato / Legal.
- ISO badge strip below: 9 badges in a row at `lg`, wraps gracefully.
- Final strip: CNPJ, address, social icons, copyright.

#### CookieBanner (LGPD)
- Position: bottom, full-width, `bg-navy-900`, `text-slate-50`.
- Three controls: "Aceitar todos" (primary cyan), "Rejeitar opcionais" (secondary), "Personalizar" (link → modal with granular toggles for: necessary [always on], analytics, marketing).
- Persists choice in `localStorage`; respects choice on subsequent visits.
- GA4 fires only after analytics accepted.

#### FloatingWhatsApp
- Bottom-right, 56×56, amber-500 bg, white WhatsApp icon, `shadow-lg`.
- Mobile-first; on desktop appears smaller (48×48) and dismissible.
- Hover reveals tooltip "Falar no WhatsApp".

#### StickyMobileCTA
- Active on `/servidores-cloud` and `/backup`, `< md` only.
- Sits above `safe-area-inset-bottom`.
- Dual-button: primary (plan-relevant), secondary (call/whatsapp).

#### ExitIntentModal
- Triggers on `mouseleave` toward top edge (desktop) or rapid scroll-to-top + idle (mobile).
- Once-per-session.
- Offers: "15 dias grátis no plano Avançado, sem cartão de crédito."
- Two CTAs: "Começar teste grátis" + "Não, obrigado".

#### Toast
- Position: top-right desktop, top-center mobile.
- Auto-dismiss: 5s default, 3s for success, 8s for error.
- `aria-live="polite"` (not `assertive` — doesn't steal focus).

#### HeroOrb (decorative)
- SVG with two radial gradients (cyan + amber), 60% blur, ~120vw at hero.
- `transform` drift only; pauses on `prefers-reduced-motion`.
- Asset budget: ≤ 8KB inline SVG.

#### InfraDiagram (isometric SVG primitive)
- Hand-authored SVGs for: cloud server, backup flow, network redundancy, monitoring NOC.
- Stroke-based, `stroke-width: 1.5` consistent across the set.
- Hover: subtle stroke color shift on key nodes (`slate-700 → cyan-400`) `--dur-base`.
- Reduced motion: hover state instant.

---

## 5. Interaction patterns

### 5.1 State matrix (all interactive elements)

| State | What changes | Duration |
|---|---|---|
| `default` | Baseline. | — |
| `hover` (pointer only) | Background tint shift; cursor `pointer`. | `--dur-fast` |
| `focus-visible` | Cyan focus ring (4px glow). | instant on focus, `--dur-fast` on blur |
| `active` / `pressed` | Shadow drops one step; opacity drops to 0.9. | `--dur-fast` |
| `loading` | Spinner replaces label; element retains size. | spinner: 800ms cycle |
| `disabled` | Opacity 0.5; `cursor: not-allowed`; `aria-disabled`. | — |

> **No layout shift on press.** We never scale the box past `1.02`. We never shrink the element. We only modify shadow/opacity/inner content.

### 5.2 Forms

- Labels persistent above field.
- Required marker: `*` after label, `aria-required` on input.
- Helper text below; error replaces helper, identical position (no jump).
- Validation: on blur, not on keystroke.
- On submit with errors: focus moves to first invalid field; error summary banner at top with anchor links to each field; `aria-live="assertive"` for the summary, `role="alert"`.
- Submit button: shows spinner, label changes to "Enviando…"; disable submit during in-flight.
- Success: full confirmation page (not toast). Page contains: confirmation message, what to expect next ("Respondemos em até 2h úteis"), calendar link if applicable, secondary CTA (back to homepage).
- Autosave: long forms (partner application) debounce-save to `sessionStorage`.

### 5.3 Loading

- Skeletons (not spinners) for page-level / above-the-fold loading.
- Spinners only for in-button operations and ≤300ms blocks.
- Reserve space for async images (`width`/`height` declared, prevents CLS).

### 5.4 Empty states

- Blog index with no results: illustration + "Nenhum artigo encontrado para «{termo}»" + "Limpar busca" link.
- Pricing modal initial: not empty — has plan name and feature list pre-loaded.

### 5.5 Error states

- Form errors: see §5.2.
- Page errors (404): branded illustration + headline + 3 quick links + "Voltar à home".
- Network errors: toast + retry CTA.

### 5.6 Success states

- Form success: dedicated page.
- Inline checkmark animations on confirmations (optional, reduced-motion respected).
- "Mensagem enviada" Toast on minor actions only.

---

## 6. Accessibility floor (WCAG 2.2 AA)

| Concern | Implementation |
|---|---|
| Color contrast | Body text ≥ 4.5:1; large text ≥ 3:1; verified per pair (not assumed). Manually checked: `slate-700` on `slate-50` = 9.6:1, `slate-50` on `navy-900` = 16.1:1, `navy-950` on `cyan-400` = 11.7:1. |
| Keyboard navigation | Every interactive element reachable via Tab in visual order; modals trap focus and return on close; mega-menu opens on Enter/Space and closes on Escape. |
| Focus indicators | Visible on all interactive elements; cyan glow ring; never removed without replacement. |
| Skip links | "Pular para o conteúdo principal" — visible on focus, top of every page. |
| Headings | Single H1 per page; logical h1→h6 hierarchy; no level skips. |
| Landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` for blog rail. |
| Alt text | All meaningful images have descriptive pt-BR alt; decorative images use `alt=""`. |
| Forms | Visible labels; `for`/`id` association; `aria-required`, `aria-invalid`, `aria-describedby` for helper/error text; error summary uses `role="alert"`. |
| Live regions | Toasts `aria-live="polite"`; form error summary `role="alert"`. |
| Touch targets | Minimum 44×44px on every interactive element (verified including icon-only). |
| Motion | `prefers-reduced-motion: reduce` honored — see §2.6. |
| Language | `<html lang="pt-BR">`. |
| Color independence | All semantic state (success/error/warning) backed by an icon + text, not color alone. |
| `prefers-color-scheme` | Honored, but user override available via theme toggle (stored in `localStorage`). |
| Zoom | Page survives 200% zoom with no horizontal scroll, no clipping; `viewport` meta does not disable user scaling. |

We will run an automated audit (`@axe-core/react` in dev + Lighthouse) and a manual keyboard pass on every page before declaring Phase C complete.

---

## 7. Iconography & illustration

- **Icon library:** `lucide-react`. One family, consistent stroke width 1.75. No mixing.
- **Icon sizes:** `16` (inline), `20` (inputs), `24` (cards), `32` (feature cards), `40` (hero accents). Never arbitrary.
- **Cert badges:** purpose-drawn SVG, monochrome, designed at 64×64.
- **Infra illustrations:** isometric SVG, line-based, drawn at 600×400 base. See §4.2 `InfraDiagram`.
- **Banned:** emoji as functional icons; raster PNG for icons; mixing filled and outline icons in the same hierarchy; AI-generated 3D character art.

---

## 8. Repo layout (as built in Phase C)

```
src/
  app/
    (marketing)/         <- group for marketing pages (no layout impact)
      page.tsx           <- /
      servidores-cloud/page.tsx
      backup/page.tsx
      empresa/page.tsx
      seja-um-parceiro/page.tsx
      contato/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
    politica-de-privacidade/page.tsx
    termos-de-uso/page.tsx
    politica-de-cookies/page.tsx
    not-found.tsx        <- 404
    layout.tsx           <- root, fonts, metadata, theme provider
    sitemap.ts
    robots.ts
  components/
    ui/                  <- primitives (Button, Input, Card, Badge, Modal, …)
    sections/            <- composed sections (Hero, ProblemFraming, Solutions, Pricing, …)
    layout/              <- Header, Footer, MegaMenu, MobileNav, FloatingWhatsApp, CookieBanner
    forms/               <- ContactForm, TrialForm, PartnerForm, ConfiguratorForm
    illustrations/       <- HeroOrb, InfraDiagrams, CertBadges
  lib/
    cn.ts                <- classnames helper
    schemas.ts           <- Zod schemas for forms
    analytics.ts         <- GA4 + consent gating
    seo.ts               <- metadata helpers
  content/
    backup-plans.ts      <- pricing + feature matrix data
    certifications.ts    <- 9 certs with explainers
    pillars.ts           <- 5 pillars with numeric proofs
    customers.ts         <- partner logo + (optional) testimonial
    posts/               <- blog markdown
  styles/
    tokens.css           <- :root tokens
    globals.css          <- Tailwind import + @theme + reset
copy/
  copy.md                <- pt-BR copy doc (built alongside Phase C)
docs/
  strategy.md            <- Phase A
  design-system.md       <- this file
  decisions.md           <- running tradeoff log
public/
  brand/                 <- logo, favicon, og images
  partners/              <- partner logos (TODO: real assets)
  illustrations/         <- exported SVGs
README.md
```

---

## 9. Tailwind v4 binding (sketch)

The token file mounts as the source of truth. Tailwind's `@theme inline` exposes them as utility classes.

```css
/* src/styles/tokens.css */
:root {
  --color-navy-950: #070D1A;
  --color-cyan-400: #22D3EE;
  /* …full ladder… */
}
[data-theme="dark"] {
  /* surface roles flipped */
}
```

```css
/* src/app/globals.css */
@import "tailwindcss";
@import "../styles/tokens.css";

@theme inline {
  --color-navy-950: var(--color-navy-950);
  --color-cyan-400: var(--color-cyan-400);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  /* fluid type, custom radii, custom shadows, custom durations */
}
```

Components consume via `bg-navy-900 text-slate-50 rounded-2xl shadow-md transition-[background-color,box-shadow] duration-fast`. No `[#22D3EE]` literals in components.

---

## 10. Hard "do" / "don't" list (the polish floor)

**Do**
- Use semantic HTML (`<button>` not `<div role="button">`).
- Use `<a>` for navigation, `<button>` for actions.
- Reserve space for async content (no CLS).
- Pair every numeric stat with a unit and a caption.
- Use Geist Mono for: IPs, timestamps, commands, prices in cards (where tabular alignment matters).
- Use cyan only for primary action; amber only for human warmth; never both as button colors on the same screen.
- Use `clamp()` for type to avoid breakpoint-specific font sizes.
- Use `prefers-reduced-motion` to gate ambient/decorative motion only — keep micro feedback (≤120ms color change) regardless.

**Don't**
- Don't use pure `#000` or `#FFF` for body or hero.
- Don't use emoji as icons.
- Don't use carousels for primary content (problem framing, solutions, pricing).
- Don't animate `width` / `height` / `top` / `left` — `transform`/`opacity` only.
- Don't use placeholder-only labels.
- Don't ship icon-only buttons without `aria-label`.
- Don't show two equally-weighted CTAs on the same viewport.
- Don't show count-up animations for prices or SLA percentages.
- Don't write copy with banned words from the strategy: "transformação digital", "soluções inovadoras", "parceiro estratégico", "solução robusta", "ecossistema", "jornada do cliente", "holística", "sinergia".

---

## 11. Risks / decisions to flag

These are choices in this spec that may need user override before code:

1. **Theme default:** Light is default; dark is opt-in via toggle. The hero band is intentionally dark regardless — it's the brand signature. Confirm or override.
2. **Geist as the only sans family:** Recommended (already wired). Alternatives if you want more distinctiveness: Söhne (paid), Inter, Manrope. Geist is the safest call given it ships free with Vercel hosting.
3. **Amber-500 placement:** Reserved exclusively for warmth contexts (support, testimonial, success). If you'd prefer cooler-only and no amber, we keep cyan as the only accent and lose one differentiation lever.
4. **Configurator behavior:** Phase C builds the configurator UI but submits to a contact form pre-filled with the chosen config (no live pricing API). Confirm or share an API.
5. **Form backend:** Server actions submit to a placeholder endpoint that logs payload + responds with confirmation. If you have a real CRM/email destination (HubSpot, RD Station, Zapier, SMTP), share before Phase C and we wire it.
6. **Blog content:** Three real titles from current site; bodies summarized as placeholders unless you provide source content.
7. **Analytics:** GA4 ID is TODO before deploy. Hotjar / Clarity placeholders commented in code.

---

**End of Phase B — awaiting user review before starting Phase C.**
