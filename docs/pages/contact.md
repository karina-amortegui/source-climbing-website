# Contact

Route: `/contact`. Navigation: About and footer; hours/location also available from Visit. Status: proposed page specification.

## Purpose and audience

Help visitors find the gym, understand operating hours, and contact the correct staff. Primary actions: **Send a Message**, **Call**, and **Get Directions**.

## Section order

1. Contact introduction and direct phone/email options.
2. Shared address, hours, and dated holiday exceptions.
3. Directions and verified parking/access information.
4. Links to party/group requests and member services for those specific tasks.
5. General inquiry form.
6. Brief arrival/contact FAQs and shared footer.

## Form requirements

Fields: first name, last name, email, phone, message. Proposed requirements: first name, email, and message required; last name and phone optional unless staff establish a need. Use persistent labels and appropriate input types/autocomplete. Do not imply payment or membership changes can be safely submitted through the general message field.

Validate client-side for helpful feedback and server-side for delivery integrity. Mark required fields, associate errors with inputs, preserve values on recoverable failure, and avoid duplicate submissions while sending. Use suitable spam protection without making the form inaccessible.

States: idle, invalid, submitting, delivered/accepted, and failed. A success message requires a positive backend acknowledgement and describes receipt, not staff resolution. Display an approved response expectation or neutral follow-up wording; do not invent an SLA. Show phone/email alternatives on failure.

## Location and shared data

Source phone, email, address, hours, and holiday exceptions from the shared business record. Existing audit data must be rechecked before publication. A map is optional; a plain address and directions link must remain usable without the embed. Do not publish real-time open/closed labels unless holiday exceptions and timezone handling are reliable.

## Responsive behavior and acceptance

- Forms use a logical single-column mobile layout and readable input text.
- Keyboard users can submit and understand errors and success feedback.
- Phone, email, directions, and routed task links work.
- Coordinated test submissions reach the intended staff recipient.
- Hours and address match the rest of the site; analytics exclude message/contact values.

## Confirmation needed

Recipients, response expectations, required fields, retention/spam handling, address/hours, directions/access details, and delivery provider. Follow [website-spec.md](../website-spec.md) and [theme.md](../theme.md).
