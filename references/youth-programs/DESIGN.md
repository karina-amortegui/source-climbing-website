---
name: Ascent Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c6c9b0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8f937c'
  outline-variant: '#454935'
  surface-tint: '#b4d330'
  primary: '#d2f24e'
  on-primary: '#2a3400'
  primary-container: '#b6d532'
  on-primary-container: '#4a5a00'
  inverse-primary: '#546500'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#e7e4e3'
  on-tertiary: '#303030'
  tertiary-container: '#cac8c7'
  on-tertiary-container: '#545453'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d0f04c'
  primary-fixed-dim: '#b4d330'
  on-primary-fixed: '#181e00'
  on-primary-fixed-variant: '#3f4c00'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  pure-white: '#FFFFFF'
  surface-charcoal: '#262626'
  surface-elevated: '#1A1A1A'
  border-subtle: '#333333'
  text-muted: '#8E8E93'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an outdoor recreation editorial aesthetic engineered for community, athletic focus, and tactile clarity. Built upon the core ethos "All Are Climbers Here," it combines technical athleticism with an inclusive, grounded Pacific Northwest community atmosphere.

The design movement blends **High-Contrast Editorial** with **Clean Functional Minimalism**:
- **Confidence & Utility:** Sturdy typography and structured grids mirror climbing architecture—steep angles, solid anchors, and calculated movements.
- **Approachable Craft:** Softened dark surfaces and warm off-white canvas spaces avoid intimidating corporate austerity, making newcomers and seasoned boulderers feel equally welcome.
- **Electric Precision:** High-chroma lime green is deployed with surgical discipline for key focal points, essential triggers, and live system feedback, balancing intense energy with structured negative space.

## Colors

The palette establishes an authentic climbing gym atmosphere: dark crag tones, tactile wall textures, and high-visibility route-setting hues.

### Role Assignments
- **Primary (`#B6D532`):** High-voltage lime accent. Used exclusively for primary call-to-actions, active toggle states, progress indicators, and route grade highlights. Always rendered with near-black text (`#111111`) to guarantee AAA contrast ratios.
- **Secondary (`#F5F5F0`):** Warm off-white. The dominant high-contrast foreground color for headings, primary text blocks, and stark secondary buttons.
- **Tertiary (`#262626`):** Deep charcoal. Defines card backgrounds, structural dividers, chip surfaces, and elevated panels above the base background.
- **Neutral (`#111111`):** Deep near-black background floor. Grounds the visual canvas while mitigating eye fatigue.

### Contrast Policy
- High-chroma lime (`#B6D532`) must never pair with white text; all text layered over primary fills must use `#111111`.
- Secondary text and metadata rely on `#8E8E93` over neutral backdrops to maintain AA readability while retaining clear hierarchy against `#F5F5F0` headers.

## Typography

The typographic system pairs the structural, geometric presence of **Space Grotesk** with the neutral, hyper-legible utility of **Inter**.

- **Space Grotesk (Display, Headlines, Meta Badges):** Imparts an architectural, route-setting attitude. Used with tight letter-spacing for large section headers, and slightly tracked out for all-caps tags, labels, and gym metadata.
- **Inter (Body, Forms, Data):** Provides effortless readability in both high-density schedule layouts and extended community announcements.
- **Scale Behavior:** Headings scale down on viewports under 768px via dedicated mobile tokens to maintain editorial weight without triggering awkward line breaks.

## Layout & Spacing

The layout is built on an adaptive 12-column grid prioritizing open, generous breathing room balanced by tightly organized content clusters.

### Rhythm & Grid
- **Desktop (>= 1024px):** 12-column grid, max width 1280px, 2.5rem outer canvas margins, and 1.5rem gutters.
- **Tablet (768px – 1023px):** 8-column grid with 2rem margins and 1.25rem gutters.
- **Mobile (< 768px):** 4-column grid with 1.25rem margins and 1rem gutters. Columns stack vertically; hero lockups collapse into single-column editorial arrangements.

### Space Scale Usage
- `space-xs` (4px) and `space-sm` (8px): Used strictly for micro-spacing inside tight components, such as chip tags, iconography offsets, and checkbox labels.
- `space-md` (16px) and `space-lg` (24px): Standard internal card padding, input fields, and inline cluster gaps.
- `space-xl` (40px): Section divisions, hero banner margins, and card grid stack separation.

## Elevation & Depth

Visual hierarchy uses a refined **Tonal Layering** system with **Low-Contrast Outlines** instead of blurry skeuomorphic shadows.

### Surface Hierarchy
- **Base Canvas (Level 0):** `#111111` solid matte.
- **Cards & Surfaces (Level 1):** `#1A1A1A` to `#262626` fills paired with a crisp 1px border (`#333333`).
- **Elevated Modals & Menus (Level 2):** `#262626` surface bordered with `#404040`, complemented by an ultra-subtle, directional ambient shadow (`rgba(0, 0, 0, 0.45)` with 24px blur and 12px Y-offset) to lift popovers cleanly off the surface.

### Boundary Rules
- Crisp visual boundaries are established with fine 1px strokes rather than heavy contrast jumps.
- Primary interactive elements (such as focused inputs or selected route filters) illuminate their 1px border to `#B6D532`, giving an immediate sense of active focus.

## Shapes

The design system adopts a **Soft (Level 1)** shape language to echo the geometry of the brand's logo mark—where external contours soften gently while retaining structural discipline.

- **Base Radius (0.25rem / 4px):** Input elements, secondary buttons, tags, chips, and small cards.
- **Container Radius (0.5rem / 8px):** Primary modules, large image frames, feature banners, and dialog sheets.
- **Outer Terminals vs. Interior Layouts:** Outer containers use soft fillets, while inner grids, dividers, and rule lines maintain strict 90-degree orthogonal edges, preserving an engineered, technical feel.

## Components

### Buttons
- **Primary Action:** Solid `#B6D532` background with `#111111` text, Space Grotesk 600 weight, uppercase tracking, 0.25rem corner radius, and 0.75rem $\times$ 1.5rem padding. Hover state shifts background to `#C4E33E`; active state scales subtly (`0.98`).
- **Secondary Action:** Transparent background with `#333333` border and `#F5F5F0` text. Hover adds `#262626` background fill and lightens border to `#555555`.
- **Ghost Action:** Borderless `#F5F5F0` text with an underline accent appearing only on hover.

### Chips & Route Badges
- **Status / Grade Chips:** `#262626` container, 1px `#333333` border, Space Grotesk 12px uppercase label.
- **Active / Selected State:** `#B6D532` fill with `#111111` text, indicating selected climbing disciplines (Bouldering, Lead, Youth Team) or member filters.

### Input Fields & Controls
- **Text Inputs:** `#1A1A1A` fill, 1px `#333333` boundary, `#F5F5F0` text, 0.75rem $\times$ 1rem internal padding. On focus: border shifts immediately to `#B6D532` with no ambient blur. Placeholder text rests at `#8E8E93`.
- **Checkboxes & Radios:** Custom 18px $\times$ 18px boxes with 2px borders in `#404040`. Checked state fills solid `#B6D532` with a dark `#111111` check glyph.

### Cards & Editorial Panels
- **Standard Card:** Solid `#1A1A1A` fill, 1px `#333333` border, 0.5rem radius, and 1.5rem padding.
- **Featured Card (Membership / Class Hero):** `#262626` fill with an upper edge accent border (2px `#B6D532`).
- **Image Cards:** High-contrast full-bleed climbing photography framed with a 1px border; text overlays sit inside a bottom gradient shield transitioning from transparent to `#111111` ($90\%$ opacity).

### Specialized Gym Components
- **Gym Status Indicator:** A pill-shaped badge displaying live wall capacity and open status using a glowing `#B6D532` indicator dot against a `#262626` pill.
- **Route Grade Tag:** Monospaced V-Scale / YDS difficulty badge (e.g., `V5-V7`, `5.11c`) rendered in high-contrast inverted chips for instant readability on mobile screens.