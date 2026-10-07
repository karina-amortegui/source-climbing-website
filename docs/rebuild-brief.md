# Source Climbing website rebuild brief

Prepared October 5, 2026 · Draft for project planning

## Purpose and evidence

Rebuild Source Climbing’s website so visitors can confidently plan a visit, choose a program, and complete their next action, while staff can maintain accurate information efficiently.

This brief translates the September 29, 2026 public-site audit into a proposed launch scope. That audit found 100 sitemap URLs: 37 main, utility, legacy, or protected pages and 63 articles. These findings have not been revalidated for October 5. Page counts do not represent 100 unique page designs.

The audit covered public content, HTML, navigation, forms, and integration destinations. It did not establish rendered mobile behavior, accessibility conformance, performance scores, successful form delivery, completed transactions, or protected storefront functionality. Recommendations below are planning proposals, not approved business policy or verified provider capabilities.

## Outcomes and success measures

| Outcome | What we will measure | Launch acceptance |
|---|---|---|
| Make first visits easier | First-visit engagement, waiver and booking handoffs; recurring questions received by staff | A visitor can find costs, rental needs, arrival instructions, and the waiver from the first-visit flow |
| Make programs easier to choose | Program-to-registration handoffs and usability-task completion | Program pages consistently explain age, prerequisites, duration, price, equipment, and registration |
| Help existing members | Member-services task completion and staff feedback | Membership changes are accessible through a visible Manage Membership link |
| Reduce content inconsistencies | Conflicting prices, hours, policies, and dates | Shared information has an identified source and editor; known contradictions are resolved |
| Make the site maintainable | Staff ability to perform routine edits | Staff can update hours, pricing, programs, and events without editing code |

Set numeric improvement targets after reviewing existing analytics and establishing a baseline. A click to an external provider measures a handoff, not a completed sale or registration. Completion reporting depends on provider support and account access.

## Audiences and priority journeys

| Priority / visitor | Intended journey | Information needed | Definition of success |
|---|---|---|---|
| P0: First-time adult | Home → First Visit → choose walk-in or introductory class → waiver / booking → arrival guidance | Total expected cost, rentals, experience requirements, hours, location, orientation | Visitor understands the next step and whether a reservation is needed |
| P0: Parent or guardian | Youth & Families → relevant class, camp, or visit guidance → registration → preparation | Ages, supervision, prerequisites, schedule, equipment, guardian waiver requirements | Parent can identify a suitable option and reach its correct registration flow |
| P0: Prospective member | Pricing → compare memberships → purchase | Recurring vs. prepaid terms, startup fees, eligibility, benefits, family restrictions | Customer understands the plan and reaches the correct purchase destination |
| P0: Current member | Manage Membership → select request → provider form → acknowledgement | Available changes, effective dates, applicable policies, processing expectations | Member can submit the intended request without assuming it has already been processed |
| P0: Party organizer | Parties & Groups → package and capacity → inquiry → acknowledgement | Age limits, dates, price, inclusions, capacity, cancellation rules | Organizer understands that an inquiry is not a confirmed reservation |
| P1: Returning climber | Community → event or clinic → details → RSVP / registration | Current date, eligibility, price, availability if supported | Visitor reaches an active event and the correct signup destination |
| P1: Gift buyer | Gift Certificates → provider purchase | Gift options and redemption information confirmed by staff | Buyer reaches the working purchase flow |

P0 defines the initial build and testing order. Both P0 and P1 journeys are included in the proposed launch.

## Proposed launch scope

### Included

- Responsive navigation, footer, shared contact information, regular hours, and holiday exceptions.
- Homepage and first-visit experience with clear paths for adults, families, and groups.
- Rates and rental information, membership comparisons, and dedicated member services.
- Adult classes, private coaching, youth classes, camps, teams, and party/group information.
- Community landing page, event/calendar access, and current program/event detail pages.
- About, facility and rules, team, careers, and contact content.
- Gift-certificate purchase handoff, waiver handoff, and necessary confirmation destinations.
- Working contact and party-inquiry forms with validation, delivery, and acknowledgement.
- Existing newsletter signup, subject to verifying its provider configuration and intended use.
- Migration of retained articles, images, downloads, and videos; explicit archive decisions for historical material.
- Staff-editable content, reusable page templates, redirect mapping, metadata, sitemap, and launch checks.
- Agreed analytics for key actions, distinguishing provider handoffs from confirmed outcomes.

### Deferred unless separately scoped

- Replacing Rock Gym Pro billing, reservations, customer records, or Smartwaiver signing.
- Building a custom member account system, payment collection, or waiver storage.
- Real-time capacity, custom availability filtering, automatic waitlists, or cross-provider status synchronization until supported integration access is verified.
- Instant party booking, automated refunds, and automatic approval of membership changes.
- Digital climbing scoreboards, route tracking, or a replacement for existing climbing apps.
- Rebuilding the three protected beta storefronts before their purpose and status are known.

The technical framework, CMS, hosting, delivery schedule, and budget remain undecided. Select them after confirming staff editing needs, integration constraints, and available maintenance capacity.

## Proposed information architecture

| Navigation | Content |
|---|---|
| Visit | First Visit; Rates & Rentals; Hours & Directions; Facility & Rules; visitor FAQs |
| Classes | Beginner Classes; Technique Classes; Private Coaching |
| Youth & Families | Youth Visit Guide; Classes; Camps; Teams; Parties & Groups |
| Membership | Compare Plans; Benefits; Join; member FAQs |
| Community | Events & Calendar; Clinics; Leagues; Competitions; News & Stories |
| About | Our Story; Our Team; Careers; Contact |

Utility actions: **Sign Waiver**, **Book a Class**, and **Manage Membership**. Keep **Gift Certificates** accessible as a secondary purchase action. Contact and hours should also be reachable without navigating deep into a section.

These are content groupings, not final URL assignments. Preserve useful existing URLs where practical; settle changed paths in the redirect map before implementation.

## Integration requirements

| System / flow | Audit finding | Proposed launch approach | Required confirmation |
|---|---|---|---|
| Rock Gym Pro bookings | External program-specific booking links and embedded calendars | Preserve valid booking destinations and evaluate supported embeds | Active offerings, account access, mobile behavior, sold-out states, return links, available integration/reporting options |
| Membership purchases | Separate purchase destinations; some family options are in-person only | Preserve provider purchases and clearly explain in-person exceptions | Current plans, prices, taxes, fees, eligibility, and checkout behavior |
| Membership changes | Embedded conditional form supports contact/payment changes, freeze, unfreeze, and cancellation requests | Use provider-hosted form from dedicated member services | Processing responsibility, effective dates, acknowledgement, and current policy wording |
| Smartwaiver | External adult/minor signing and related site confirmation pages | Preserve signing service and verify return/verification flow | Correct waiver version, callback destinations, minor/guardian flow, and ID guidance |
| Contact and party forms | Native Duda forms | Replace with maintained form delivery or verified supported service | Recipients, routing, retention needs, spam handling, response expectations, and delivery verification |
| Newsletter | SendGrid forms-content embed found on Blog | Retain or reconnect the existing signup workflow | Active list, rendered fields, consent wording, confirmation, and unsubscribe behavior |
| USA Climbing / Sport80 | External membership and competition links | Retain relevant verified links | Current regional and event destinations |
| Media / downloads | Duda-hosted assets, worksheets, application documents, and videos | Migrate owned assets and preserve necessary external embeds | Original files, usage rights, current documents, and accessible alternatives |
| Beta storefronts | Three password-protected pages | Hold migration decision | Business purpose, provider, intended launch status, and whether they supersede audited workflows |

Maintain provider ownership of sensitive billing and waiver information under this scope. The new site should accurately explain each handoff and provide a usable fallback when an embed fails.

## Content decisions

These dispositions are proposed. Staff must confirm operational facts before publication.

| Existing content | Proposed disposition | Required work |
|---|---|---|
| Home, First Visit, Contact | Rewrite and retain | Prioritize visitor tasks; reconcile arrival guidance and group requirements |
| Rates and Membership | Retain with shared data | Resolve family eligibility differences; verify fees, rentals, and plan terms |
| Classes, Youth, Youth Classes, Climbing Team | Retain and restructure | Use consistent program details; verify schedules and prerequisites |
| Birthday Parties | Retain and clarify | Reconcile Sunday timing; make request vs. confirmation explicit |
| Facility, Our Team, Our Story | Retain; consolidate repeated material | Separate practical facility guidance from history and values |
| `/news`, `/calendar`, `/blog`, `/updates` | Consolidate overlapping entry points | Establish distinct Events & Calendar and News & Stories destinations |
| Current community programs | Retain if active | Confirm recurrence, dates, registration links, and audience |
| `/after-school-programs` | Merge if superseded | Compare with current youth/coaching content before redirecting |
| `/supported-climbing` | Archive or retire | Confirm discontinued status; remove misleading active registration actions |
| `/health-updates` | Clearly archive or retire | Prevent historical 2021 guidance from appearing current |
| `/setting-updates` | Remove unfinished template or replace | Do not migrate placeholder text or sample contact rows |
| `/citizen-comp` | Correct before retaining | Resolve conflicting date statements and registration status |
| `/one-more-step`, `/release-complete` | Preserve or deliberately remap | Verify their role in the actual waiver/email workflow |
| Three `storefront--beta` variants | Decision pending | Inspect through authorized account access |
| 63 article URLs | Review individually | Keep useful stories and education; clearly date/archive expired notices; preserve intentional redirects |

Do not redirect every removed page to the homepage. Use a relevant replacement when one exists; otherwise make an intentional retirement decision. The full per-URL migration register is a follow-up deliverable, not completed by this brief.

## Content model and editing requirements

- **Business information:** address, contact channels, regular hours, holiday exceptions, and temporary access notices.
- **Prices and plans:** amount, billing period, fees, rental inclusions, eligibility, tax wording, and purchase destination.
- **Programs:** audience, ages, prerequisites, duration, schedule description, cost reference, equipment, and booking destination.
- **Events:** date, recurrence where relevant, status, audience, registration destination, and archive behavior. Live inventory remains with the booking provider unless a supported integration is confirmed.
- **Articles:** title, author, publication date, category, body, media, and historical status.
- **People and reusable FAQs:** staff profiles and approved policy explanations.
- **Integration links:** centrally maintained destinations with a responsible editor and verification date.

Each operational content type needs a named staff owner. Reuse shared facts rather than copying pricing, hours, or policies into multiple pages.

## Design direction

The revised palette, typography defaults, layout tokens, and future Tailwind mapping are documented in [Design tokens](design-tokens.md). The palette follows the updated black/charcoal, white/off-white, and lime direction; unspecified design values remain provisional.

Use real climbing and facility photography, readable typography, clear spacing, and a restrained palette grounded in Source’s identity. Preserve the welcoming community character. Establish the information hierarchy on mobile before expanding layouts to desktop.

Wireframe the homepage, first visit, pricing, program detail, and member-services pages first. Test whether someone can find the relevant cost and next action without gym-specific knowledge. Then develop the visual system on the homepage and one program page before applying it throughout the site.

Design for keyboard access, visible focus, labeled forms, useful errors, readable contrast, reduced-motion preferences, and touch-friendly controls. Verify these in the implementation rather than assuming that a modern visual style provides accessibility.

## Delivery sequence and review points

1. **Confirm the brief:** settle scope, business facts, integration ownership, and beta-storefront intent.
2. **Build the migration register:** assign every audited URL a disposition, destination, content owner, and verification status.
3. **Finalize sitemap and journeys:** review the first-visit, parent, membership, member-change, and party flows.
4. **Wireframe key pages:** review mobile information hierarchy and handoffs with staff and representative visitors.
5. **Establish visual direction:** review homepage and program-page designs plus reusable components.
6. **Choose implementation tools:** compare CMS, hosting, and framework options against editing needs and verified provider constraints.
7. **Build one complete journey:** homepage → first visit → introductory class → booking provider, with waiver and arrival information.
8. **Expand and migrate:** build remaining templates, forms, integrations, and reviewed content.
9. **Validate on staging:** resolve essential functional, accessibility, content, and redirect issues; train editors.
10. **Launch and monitor:** back up the old site, establish rollback, verify production flows, and review feedback.

Each review should evaluate a concrete deliverable. Dates and estimates follow the scope and integration review, rather than being assumed here.

## Launch acceptance checklist

- [ ] Staff have confirmed current pricing, schedules, policies, eligibility, and contact details.
- [ ] Every inventoried URL has an intentional migration or retirement decision.
- [ ] P0 and P1 journeys work on representative desktop and mobile browsers.
- [ ] Booking, purchase, waiver, gift, and member-change destinations are correct.
- [ ] Contact and party test submissions reach the intended staff recipients and display accurate acknowledgements.
- [ ] Newsletter behavior and event/calendar loading are verified.
- [ ] External transactions are tested using provider-approved methods coordinated with the gym.
- [ ] Keyboard navigation, focus, form errors, contrast, and responsive layouts are checked.
- [ ] Performance is measured on representative pages, including pages with external embeds, and blocking issues are resolved.
- [ ] Redirects, canonical URLs, titles, descriptions, sitemap, and indexing settings are checked.
- [ ] Retained PDFs, videos, images, social links, and application downloads work.
- [ ] Analytics distinguish outbound actions from confirmed conversions and avoid collecting form/payment details.
- [ ] Staff can perform the agreed routine edits, and ongoing ownership is documented.
- [ ] Backup, production access, launch responsibility, and rollback steps are established.

## Decisions to resolve next

| Question | Who can resolve it | Blocks |
|---|---|---|
| Are Rock Gym Pro and Smartwaiver staying, and what are the beta storefronts for? | Gym owner / systems administrator | Final integration scope |
| Who updates the site, and what must they edit regularly? | Gym staff / project owner | CMS selection and editor design |
| Which prices, schedules, programs, and policies are authoritative? | Gym operations lead | Final copy and migration |
| Who handles contact, party, and membership requests, and what response expectations are accurate? | Operations / front desk | Forms and confirmation copy |
| What brand assets and original photographs are available for use? | Brand/content owner | Visual design and media migration |
| What are the budget, target launch window, and review responsibilities? | Project owner | Estimates and delivery schedule |
| What existing analytics and provider reporting can we access? | Site / booking administrators | Baseline and conversion measurement |

Missing account access does not prevent sitemap and wireframe work. It does prevent promising unsupported custom integrations or validating transaction completion.

## Audit references

- [Public sitemap](https://www.sourceclimbing.com/sitemap.xml)
- [First Visit](https://www.sourceclimbing.com/first-visit)
- [Rates](https://www.sourceclimbing.com/rates)
- [Membership](https://www.sourceclimbing.com/membership)
- [Classes](https://www.sourceclimbing.com/classes)
- [Youth Classes](https://www.sourceclimbing.com/youth-classes)
- [Birthday Parties](https://www.sourceclimbing.com/birthday-parties)
- [Contact](https://www.sourceclimbing.com/contact)
- [Calendar](https://www.sourceclimbing.com/calendar)
- [Smartwaiver](https://waiver.smartwaiver.com/w/590d1d321a80c/web/)

These links identify the prior audit’s sources; they are not evidence of a new October 5 crawl.
