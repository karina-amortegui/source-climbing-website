# Source Climbing website rebuild

The homepage is a dependency-free HTML/CSS/JavaScript implementation of
`styles/homepage/DESIGN.md` and `styles/homepage/code.html`. Those reference files
are preserved unchanged. No React or Tailwind installation is required.

## Preview

Open `index.html` directly in a browser, use VS Code Live Server, or run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8000. Stop the server with Ctrl+C.

## Files

- `index.html`: homepage sections, navigation, provider links, and footer.
- `styles/home.css`: homepage design implementation using Space Grotesk, Inter,
  dark surfaces, and lime accents. The older provisional tokens are unchanged.
- `scripts/home.js`: accessible navigation enhancements and footer year.
- `assets/homepage/`: photographs from the supplied HTML reference and the existing site’s logo.
- `docs/`: existing rebuild documentation.

## Scope and content

Only the homepage is built. Other page links lead to the existing Source Climbing
site or its booking/waiver services, rather than unfinished local routes.
Navigation dropdowns support native keyboard interaction. On smaller viewports,
the Menu button exposes the same navigation; Escape closes disclosures/menu.

The reference's invented live capacity, early access, waiver expiration, and
unverified class prices/durations were omitted. Membership price, startup fee,
hours, and email were checked against the existing site's Membership and Contact
pages during implementation. Rates remain static and need confirmation before
launch. Class cards direct visitors to current provider listings for details.

Sources: https://www.sourceclimbing.com/membership,
https://www.sourceclimbing.com/contact, https://www.sourceclimbing.com/classes.

Photographs are reference/design assets, not verified photographs of the actual gym.
The reference logo URL returned HTML; the logo SVG was sourced from
https://irp-cdn.multiscreensite.com/9a09fb82/dms3rep/multi/SourceClimbingVectorwt.svg.
Confirm image/logo rights and replace with approved Source assets before launch.
Fonts load from Google Fonts with local system fallbacks. No live capacity,
authentication, local payments, or form processing is implemented.

## Validation

Checked with headless Chrome at 320, 390, 768, 1024, and 1440px: no horizontal
overflow or broken images. Mobile disclosure navigation, Escape dismissal,
focus restoration, and reduced-motion scrolling were checked. JavaScript syntax,
local asset paths, fragment destinations, and the single H1 were also checked.
These checks do not validate external checkout completion or constitute a full
accessibility audit.
