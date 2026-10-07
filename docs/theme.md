# Website theme

Status: design direction and provisional component guidance, October 6, 2026.

## Source of truth

Use [design-tokens.md](design-tokens.md) for detailed token definitions, [tokens.css](../styles/tokens.css) for canonical values, and [tailwind-theme.css](../styles/tailwind-theme.css) for future Tailwind v4 mappings. This page describes application of that system; it does not create a second theme configuration.

## Brand palette

| Color | Proposed value | Application |
|---|---|---|
| Near-black | `#111111` | Primary text, dark sections, text on lime |
| Charcoal | `#262626` | Contrasting sections and footer |
| Off-white | `#F5F5F0` | Main canvas and inverse text |
| White | `#FFFFFF` | Cards and form surfaces |
| Lime | `#B6D532` | Primary actions and selective highlights |

The color direction follows the user's correction to match Source's identity. Hex values are proposed interpretations, not verified original brand codes. Do not reintroduce the superseded burnt-orange accent. Use lime with near-black text; avoid white text on lime or lime body text on light surfaces.

## Typography and layout

Use bold, readable headings with clean sans-serif body text. Current tokens use local system fonts; no original font identity or named web font has been established. Body copy starts at 1rem, with fluid section/display headings. Separate family and weight utilities: `font-heading font-title`, or `font-body font-copy`.

Use the shared 0.25rem spacing unit, fluid gutters and section spacing, 80rem content maximum, and 65ch reading width. Center page containers and stack content on narrow screens. Breakpoints are provisional content-layout thresholds, not device guarantees.

## Component conventions

| Component | Guidance |
|---|---|
| Primary action | Lime background, near-black label, clear hover and visible focus |
| Secondary action | Neutral treatment with identifiable border or underlined link |
| Cards | Light surface, restrained rounding, subtle separator; optional light shadow |
| Pricing | Consistent billing units, fees, eligibility, and equipment details |
| Program/event cards | Comparable metadata and explicit action; dates/status for events |
| Forms | Persistent labels, identifiable boundaries, required/optional guidance, field errors |
| FAQ | Semantic disclosure controls, keyboard accessible; content remains understandable expanded |
| Notices | Text plus status indicator; never communicate status by color alone |
| Dark sections | Off-white text, purposeful lime accents, separately tested focus contrast |

Decorative border tokens are not sufficient for all input boundaries; use the control-border token where identification matters. Buttons use minimum height rather than fixed heights that clip translated or zoomed text.

## Photography and motion

Prefer authentic facility, instruction, family, and community photography. Confirm usage rights and provide meaningful alternative text when images carry information. Put text outside busy imagery or on a tested backing. Avoid generic startup effects, excessive gradients, and glass styling.

Motion is restrained, using 150–200ms token durations. Honor reduced-motion preferences and avoid essential information conveyed only by animation. Dark sections are designed compositions, not an automatic dark-mode requirement.

## Future Tailwind integration

No dependencies are installed. The existing adapter is uncompiled and targets v4; the application framework is not selected. Follow the import example and checks in [design-tokens.md](design-tokens.md) when implementation is authorized. Prefer semantic utilities such as `bg-canvas`, `text-ink`, and `bg-accent text-on-accent`.

Before launch, verify contrast, keyboard focus, responsive type, zoom/reflow, and third-party embed presentation in rendered pages. Refine provisional tokens after reviewing actual design output.
