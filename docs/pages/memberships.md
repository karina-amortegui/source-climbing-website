# Memberships

Route: `memberships.html` (the production navigation target remains the existing page). Navigation: Membership. Status: Owner Demo V1 implementation.

## Purpose and audience

Help prospective members compare plans and purchase options. Account management is external and remains on the current operational Member Services flow until the Redpoint HQ transition is approved. Page-specific presentation lives in `styles/memberships.css`; no page-specific JavaScript is required.

## Section order

1. Membership introduction and benefits summary.
2. Comparable single-month, recurring FLEX, and annual plan cards.
3. Eligibility and family options with online versus front-desk purchase distinctions.
4. Benefits and guest-pass explanation.
5. FAQs and related Rates & Rentals link.
6. Clear transition note and current member-services fallback.

The implemented page also includes an existing-member banner, family/household guidance, online versus front-desk signup guidance, a community image section, native FAQ disclosures, and a final call to action. The supplied reference's unsupported operational claims were replaced with neutral copy or explicit owner-confirmation notes.

## Redpoint HQ transition

Redpoint HQ is the planned external destination for account management in November 2026. Its verified customer-portal URL is not available, so **Manage Membership** must remain a pending integration dependency rather than a guessed or nonfunctional link. Preserve the current operational link until the destination is approved and ready.

References to the current member-management flow:

- `member-services.html` — current operational page and Rock Gym Pro request-form handoff.
- `styles/member-services.css` — styles used by that page.
- `scripts/member-services.js` — interaction logic used by that page.
- Existing navigation references in `home.html`, `contact.html`, `youth-programs.html`, `parties-groups.html`, `about.html`, and `member-services.html`.

Once the Redpoint HQ destination is verified and all references are migrated, the three page-specific files above can be safely removed together, subject to a final repository-wide reference check. Do not remove them before then.

## Plan content

Use shared plan records for amount, period, startup fees, tax wording, rental inclusion/exclusion, eligibility, renewal behavior, and destination. Do not equate an annual effective monthly price with actual monthly billing. Resolve existing family-eligibility inconsistencies before publishing. Avoid unverified “most popular” labels.

## Member-services supporting page

Present tasks for updating contact/payment information, freezing, unfreezing, cancelling, and other requests. Open or embed the verified provider-hosted form. Explain confirmed effective-date rules and processing expectations before handoff. Preserve provider responsibility for sensitive payment information.

The current flow is a request process, not evidence of an authenticated account dashboard or instant approval. Display acknowledgement only when supported by the provider; do not infer submission from link clicks. If an embed fails, show a direct provider link and contact alternative.

## Responsive behavior and states

Stack plan cards in a consistent order; repeat labels so each is understandable independently. Ensure comparison content works without horizontal scrolling. Unavailable plans have explicit status rather than a misleading purchase action.

## Acceptance

- Costs, billing periods, fees, and eligibility are comparable and approved.
- Each purchase action uses the matching provider offering.
- Existing members can reach management without navigating sales content deeply.
- Submission and completed account changes are described accurately.

## Confirmation needed

Current plans, family restrictions, benefits, purchase links, policies, and request-handling ownership. Follow [website-spec.md](../website-spec.md) and [theme.md](../theme.md).
