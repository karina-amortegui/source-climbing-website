# Website specification

Status: proposed implementation requirements, October 6, 2026. Based on the [rebuild brief](rebuild-brief.md) and revised design prompt; not a new audit of the live site. Operational facts require gym review before publication.

## Purpose

Help people plan a first visit, compare costs, find suitable programs, book through existing providers, and manage memberships. Preserve Source Climbing's welcoming community identity and “All Are Climbers Here” message.

## Documentation map

| Specification | Scope | Proposed route |
|---|---|---|
| [Home](pages/home.md) | Orientation and primary pathways | `/` |
| [First Visit](pages/first-visit.md) | Preparation, walk-ins, rentals, waiver | `/first-visit` |
| [Memberships](pages/memberships.md) | Plans, benefits, member services | `/membership` |
| [Classes](pages/classes.md) | Adult learning and coaching | `/classes` |
| [Youth Programs](pages/youth-programs.md) | Youth visits, classes, camps, teams, parties | `/youth` |
| [Events](pages/events.md) | Calendar, clinics, leagues, competitions | `/events` (proposed new route) |
| [About](pages/about.md) | Story, facility, people, careers | `/about` (proposed new route) |
| [Contact](pages/contact.md) | Location, hours, questions | `/contact` |
| [Theme](theme.md) | Visual system and component conventions | Not a public page |

Documentation filenames do not determine public URLs. Preserve existing useful URLs and approve redirects individually before routing changes. These eight specifications describe page families; they do not eliminate supporting pages or the article archive.

## Navigation and shared layout

Primary groups: Visit, Classes, Youth & Families, Membership, Community, About. Contact is accessible from About and the footer. Utility actions: Sign Waiver, Book a Class, Manage Membership; Gift Certificates is a secondary purchase action.

Every public page includes a consistent header, navigation, footer, contact access, and relevant next action. Use a single primary heading, descriptive page title, and logical heading hierarchy. Add breadcrumbs on deeper program, article, and event pages. An optional announcement displays current closures or access notices and has an expiration date.

Mobile navigation must expose the same destinations, support keyboard operation, close predictably, and return focus to its trigger. Sticky elements must not obscure content or focus. Hours, pricing, and policies come from shared content rather than independent page copies.

## Supporting pages and migration

Retain or explicitly remap Rates & Rentals, Facility & Rules, gift certificates, youth class/camp/team details, birthday parties, current community programs, staff/story pages, articles, and waiver verification/confirmation destinations. Provide a dedicated member-services destination, proposed `/membership/manage`.

Review all 100 previously inventoried URLs before launch. `/news`, `/calendar`, `/blog`, and `/updates` need distinct calendar-versus-editorial roles or relevant redirects. Protected beta storefronts remain undecided. Historical health guidance, discontinued programs, and unfinished templates require explicit archive/removal decisions. The full URL migration register remains a separate deliverable.

## Functional boundaries

| Capability | Requirement |
|---|---|
| Booking and purchases | Preserve verified Rock Gym Pro destinations; explain external handoffs |
| Waiver | Preserve Smartwaiver signing and verified return/email-confirmation flow |
| Member changes | Provider-hosted request form; distinguish submission from completed processing |
| Contact and party inquiries | Validated forms, verified delivery, useful success/error states |
| Calendar | Supported provider embed or maintained event listing; fallback direct link |
| Newsletter | Retain only after confirming configuration, consent, and delivery |
| Staff editing | Editable hours, pricing, programs, events, articles, and integration links |

Do not invent availability, booking confirmations, customer accounts, reviews, prices, policies, or program dates. No custom billing or waiver storage is included. Third-party widgets cannot be assumed to inherit the website's theme or accessibility behavior.

## Content requirements

Each program needs audience, ages, prerequisites, duration, schedule, price reference, equipment inclusion, and registration destination. Events need dated occurrence information, status, eligibility, and registration. Articles need title, author, publication date, and archive status. Integration links need a responsible editor and last verification date.

Assign operational content to a gym staff owner and editorial/brand content to a content owner; actual people remain to be identified. Placeholder information must be visibly marked during design and resolved before launch.

## Accessibility, responsiveness, and states

Design and test for WCAG 2.2 AA as the implementation target; no current conformance is claimed. Include keyboard access, visible focus, descriptive labels, associated field errors, meaningful image alternatives, sufficient contrast, reduced motion, and readable zoom/reflow. Controls have comfortable touch targets; content order remains logical on mobile.

Specify loading, empty, unavailable, error, and success states wherever data, forms, or embeds are involved. Preserve form values on recoverable errors. Never show success before the backend/provider acknowledges submission. Provide a direct provider/contact fallback when appropriate.

## Measurement and launch

Measure first-visit pathways, booking/waiver handoffs, member-service access, and inquiry submissions without sending sensitive form values to analytics. Outbound clicks are not completed transactions. Provider-supported reporting and existing analytics access require confirmation.

Launch requires approved business copy, working production forms, coordinated provider-flow testing, redirects, metadata, sitemap/indexing checks, responsive/accessibility checks, performance review, editor training, backup, and rollback ownership. Page-specific acceptance criteria complement the [brief's launch checklist](rebuild-brief.md).

## Implementation status

This is documentation only. Framework, CMS, hosting, schedule, and budget remain open. Theme tokens and a future Tailwind v4 adapter exist without installed dependencies. The next implementation preparation steps are URL migration decisions, content confirmation, and wireframes of the priority journeys.
