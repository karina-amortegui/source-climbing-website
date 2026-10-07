# Source Climbing design tokens

Prepared October 6, 2026. Implements the revised Stitch prompt and [rebuild brief](rebuild-brief.md).

## Status and ownership

The black/charcoal, white/off-white, and lime direction comes from the user's brand correction. The five hex values below are the prompt's proposed modern palette, not measurements of the original site. No Stitch export or original font assets have been provided. Named fonts were never selected: the prompt asks for bold readable headings and clean sans-serif body text.

All supporting colors, sizes, spacing, breakpoints, and effects are **provisional implementation defaults**, ready to refine after design review. They are not extracted original-site specifications.

- [tokens.css](../styles/tokens.css) is the canonical, framework-independent value source. It defines variables only, with no component styling or remote requests.
- [tailwind-theme.css](../styles/tailwind-theme.css) maps those values to future Tailwind v4 utilities. Breakpoint literals live only in this adapter.
- No package manifest, dependencies, downloaded fonts, build tools, or application scaffolding are added. The adapter has not been compiled.

## Palette and roles

| Primitive | Value | Role |
|---|---|---|
| `--source-black` | `#111111` | Main text, dark hero/footer, text on lime |
| `--source-charcoal` | `#262626` | Contrasting dark sections |
| `--source-off-white` | `#F5F5F0` | Main canvas, inverse text |
| `--source-white` | `#FFFFFF` | Cards and form surfaces |
| `--source-lime` | `#B6D532` | Primary actions and selected accents |

Use semantic tokens for most components: `canvas`, `surface`, `ink`, `muted`, `inverse`, `accent`, and `on-accent`. In Tailwind these become, for example, `bg-canvas`, `text-ink`, and `bg-accent text-on-accent`.

| Supporting token | Value | Use |
|---|---|---|
| `--source-muted` | `#595959` | Secondary text on light surfaces |
| `--source-accent-hover` | `#A4C129` | Lime button hover, retaining near-black text |
| `--source-border` | `#D6D6CE` | Decorative separators only |
| `--source-control-border` | `#737373` | Identifiable input boundaries on light surfaces |
| `--source-error` | `#B42318` | Error text on light surfaces, paired with explanation/icon |
| `--source-success` | `#236B3A` | Success text on light surfaces, paired with explanation/icon |

Keep lime purposeful. Avoid lime text on white/off-white or white text on lime. Use off-white text on charcoal/black. Supporting text/status colors above are intended for light surfaces; do not reuse them blindly on dark sections. Dark sections are explicit compositions, not an automatic dark-mode theme.

Focus uses a 2px outline with a 3px offset: near-black on light surfaces and lime on dark surfaces. Do not remove outlines. Check actual text, control, focus, and photo-overlay contrast during implementation; tokens alone do not establish accessibility compliance.

## Typography

Body and heading stacks currently resolve to local system sans-serif fonts (`ui-sans-serif`, `system-ui`, platform fallbacks). This introduces no font-loading dependency. A future named heading/body pairing needs design review and licensed assets; update the two family tokens rather than scattered components. No original-site font identity is claimed.

| Token suffix | Value | Usage |
|---|---|---|
| `text-small` | `0.875rem` | Captions and supplementary copy |
| `text-body` | `1rem` | Body and form inputs |
| `text-lead` | `1.25rem` | Introductory copy |
| `text-card` | `1.5rem` | Card headings |
| `text-section` | `clamp(1.75rem, 1.25rem + 2vw, 3rem)` | Section headings |
| `text-display` | `clamp(2.5rem, 1.5rem + 4vw, 5.5rem)` | Hero heading |
| `weight-body / label / heading` | `400 / 600 / 700` | Copy, controls, headings |
| `leading-body / heading` | `1.6 / 1.1` | Copy and headings |
| `tracking-heading` | `-0.025em` | Large headings only |

Token names in CSS have the `--source-` prefix. Utilities separate size, family, weight, and line height: `font-heading font-title text-section leading-heading`. Family utilities are `font-body` and `font-heading`; weight utilities are `font-copy`, `font-label`, and `font-title`, avoiding collisions with family names.

## Layout, shape, and motion

| Variable | Default | Intended use |
|---|---|---|
| `--source-space-unit` | `0.25rem` | Four-pixel base at default root size; spacing multiples |
| `--source-gutter` | `clamp(1rem, 3vw, 2rem)` | Page side padding |
| `--source-section-space` | `clamp(3rem, 6vw, 6rem)` | Section vertical padding |
| `--source-content-width` | `80rem` | Centered page maximum |
| `--source-reading-width` | `65ch` | Long-form copy maximum |
| `--source-control-height` | `3rem` | Minimum control height, not a fixed text-clipping height |
| `--source-radius-control / card` | `0.375rem / 0.75rem` | Restrained rounding |
| `--source-shadow-card` | `0 4px 16px rgb(17 17 17 / 0.06)` | Optional subtle card elevation |
| `--source-duration-fast / normal` | `150ms / 200ms` | Small state transitions |
| `--source-ease` | `cubic-bezier(0.2, 0, 0, 1)` | Transition easing |
| `--source-z-header / menu / modal` | `20 / 30 / 50` | Reserved layer order |

Prefer spacing multiples of 1, 2, 3, 4, 6, 8, 12, 16, and 24 units. Cards use borders first and shadows sparingly. Use real gym photography with readable text placed outside busy image areas or on a tested dark backing; avoid decorative gradients and glass effects.

Breakpoints: `sm` 40rem, `md` 48rem, `lg` 64rem, `xl` 80rem, `2xl` 96rem. These are proposed starting points, not device guarantees; adjust when content needs more space. Base layouts stack on mobile. Do not assign fixed card or text heights.

The plain CSS changes duration variables to zero for reduced-motion preferences. Components must consume those variables and also disable nonessential animations, smooth scrolling, and animated transforms when reduced motion is requested.

## Eventual Tailwind usage

The adapter targets Tailwind v4's CSS-first theme API. `@theme inline` maps utility names to the plain CSS tokens. It does not install Tailwind or generate working utility CSS by itself. The framework/version decision is still open; if v3 is selected, translate these mappings to `theme.extend` instead of using this adapter.

After dependencies and an application entry are deliberately introduced, an entry under `styles/` can use:

```css
@import "tailwindcss";
@import "./tokens.css";
@import "./tailwind-theme.css";
```

Example future component classes:

```html
<section class="bg-canvas px-gutter py-section text-ink">
  <div class="mx-auto max-w-content">
    <h1 class="font-heading text-display leading-heading tracking-heading font-title">
      All Are Climbers Here
    </h1>
    <button class="min-h-control rounded-control bg-accent px-6 font-label text-on-accent hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink motion-reduce:transition-none">
      Plan Your First Visit
    </button>
  </div>
</section>
```

Motion, focus sizing, and layering tokens without dedicated theme namespaces can use arbitrary values, such as `duration-[var(--source-duration-fast)]` and `z-[var(--source-z-header)]`. Do not use `transition-all`; select only needed properties. If using named duration utilities later, connect them explicitly rather than assuming CSS variables generate them.

Before activating: compile the adapter, check responsive utilities and font weights, verify contrast and zoom/reflow, and review the design against actual Stitch output. No dependency installation is needed to edit these values now.

Reference: [Tailwind theme variables](https://tailwindcss.com/docs/theme), consulted October 6, 2026 for namespaces and variable aliasing.
