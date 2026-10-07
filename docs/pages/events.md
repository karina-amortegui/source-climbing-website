# Events

Proposed route: `/events`. Navigation: Community. Status: proposed page-family specification; existing `/news` and `/calendar` migration undecided.

## Purpose and audience

Help climbers discover current clinics, social events, leagues, and competitions. Main action: **View Event**, then **RSVP / Register** at the appropriate verified destination.

## Section order

1. Community introduction and upcoming-events view.
2. Supported calendar/embed or maintained chronological listing.
3. Recurring program pathways: clinics, league, community nights, competitions.
4. Volunteer opportunities when current.
5. Separate News & Stories link for editorial content.

## Event detail content

Include title, specific date/time and timezone, location, audience, eligibility, cost, prerequisites, status, registration, and relevant preparation. Use America/Los_Angeles for local scheduling and account for seasonal clock changes. A recurrence rule must allow exceptions rather than implying every occurrence is confirmed.

Distinguish upcoming, sold-out, postponed, cancelled, and past events. Preserve relevant archived detail pages without presenting expired registrations as active. Protected storefront behavior is not assumed.

## Functionality and states

Use the confirmed Rock Gym Pro calendar where appropriate, with a direct fallback. If filters are implemented, filter maintained event records by date/category and provide a clear reset and empty state; do not promise unsupported provider filtering. Show loading/error states for embeds, and accessible dated summaries or links where the integration permits.

USA Climbing registration and volunteer flows may leave the site. Verify each destination. No real-time capacity, waitlist, or registration completion is claimed without integration support.

## Responsive behavior and acceptance

- Offer a usable list or direct-provider alternative to a cramped mobile calendar.
- Dates, status, and eligibility are visible before registration.
- Past events and articles cannot be mistaken for upcoming activities.
- Empty results, unavailable embeds, and broken destinations have useful handling.
- Recurrence exceptions and conflicting legacy dates are resolved before launch.

## Confirmation needed

Current programs, recurrence dates, calendar integration, competition/volunteer links, content owner, and archive policy. Follow [website-spec.md](../website-spec.md) and [theme.md](../theme.md).
