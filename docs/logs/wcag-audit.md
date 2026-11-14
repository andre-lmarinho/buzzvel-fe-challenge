# WCAG 2.2 A/AA audit

Full-criterion audit of the page against WCAG 2.2 levels A and AA, run Nov 15, 2026. Scope: the single page (`/`) in its default state, the open mobile menu, the submitted contact form, at 320–1280 CSS px. This is an engineering audit, not a certification.

## Method

- **axe-core scan** of the production build at 402/768/1280 px plus menu-open and form-submitted states (`pnpm a11y`, WCAG 2.0–2.2 A/AA tags): 0 violations after the fixes below.
- **Programmatic probes** (Playwright/Chromium on Linux): reflow at 320 px, text-spacing override, 200% zoom proxy (640 CSS px), target-size enumeration with spacing exception, computed color contrasts, keyboard walks at 402 and 1280 px (60-press full pass).
- **Code review** for criteria not observable in a browser session (orientation locks, media, timing, gestures).
- **Real screen reader (Orca 46.1, Zorin OS/GNOME, X11)** with Playwright Chromium (`--force-renderer-accessibility`): announcements captured from Orca's debug log — skip link, focus changes, menu toggle states, form labels/required, live validation and the `role="status"` message. Keyboard events were injected via CDP, so Orca intercepted no keystrokes; structural navigation (H/D/L) was not exercised. Announcements reflect real AT reactions to focus and content changes.
- **Not performed:** JAWS/NVDA/VoiceOver, physical devices, WebKit.

## Findings / Accepted limitation

**1.4.11 — Component boundaries.** Interactive-control borders use `#dbdfeb`: 1.33:1 against the white card, 1.06:1 for the cream fill of inputs — below the 3:1 required to identify controls by boundary (affects inputs, outline buttons, category cards, the contact card, the People button). Focus indicators themselves pass (ring + white halo). Kept for Figma fidelity; the criterion is reported as **Fail** in the matrix. Dividers and separators using the same token are decorative and out of scope.

## Coverage matrix

Legend: **P** pass (evidence established), **F** fail (evidence above), **N/A** triggering condition absent, **NT** not tested.

| # | Criterion | Status | Evidence |
| --- | --- | --- | --- |
| 1.1.1 | Non-text Content | P | Descriptive `alt` on content images; `alt=""`/`aria-hidden` on decorative; logo masked but link named |
| 1.2.1–1.2.3 | Media | N/A | No audio or video on the page |
| 1.3.1 | Info and Relationships | P | Landmarks, heading levels, labeled navs, `figure`/`figcaption`, lists; verified in the accessibility tree |
| 1.3.2 | Meaningful Sequence | P | DOM order matches reading order at 402/768/1280 px |
| 1.3.3 | Sensory Characteristics | P | No shape/size/position-only instructions; icons paired with text |
| 1.3.4 | Orientation | P | No orientation restriction in code; both device orientations render |
| 1.3.5 | Identify Input Purpose | P | `autoComplete="name"`/`"email"` added; textarea has no applicable token |
| 1.4.1 | Use of Color | P | No information conveyed by color alone (hover color shifts are redundant affordances) |
| 1.4.2 | Audio Control | N/A | No audio |
| 1.4.3 | Contrast (Minimum) | P | axe scan clean; placeholder 5.30:1, step label 4.52:1, inverse link 5.49:1; all pairs measured |
| 1.4.4 | Resize Text | P | 200% proxy (640 CSS px): no horizontal scroll, no clipped text, functionality intact |
| 1.4.5 | Images of Text | P | All text is real text (logotype images exempt as logos) |
| 1.4.10 | Reflow | P | 320 px: `scrollWidth` 320, zero clipped text blocks |
| 1.4.11 | Non-text Contrast | **F** | Control boundaries 1.33:1/1.06:1 — accepted limitation (finding 4); focus indicator passes via white halo |
| 1.4.12 | Text Spacing | P | Full override (1.5 lh, 2em spacing, 0.12em/0.16em): no control clipping; only the hidden skip link scrolls |
| 1.4.13 | Content on Hover or Focus | N/A | No hover/focus-revealed content |
| 2.1.1 | Keyboard | P | Full keyboard walk at 402/1280 px: everything reachable and operable |
| 2.1.2 | No Keyboard Trap | P | Walk exits cleanly; menu opens/closes; no `aria-hidden` focus stops |
| 2.1.4 | Character Key Shortcuts | N/A | None exist |
| 2.2.1 | Timing Adjustable | N/A | No time limits |
| 2.2.2 | Pause, Stop, Hide | N/A | No moving or auto-updating content; `prefers-reduced-motion` also supported |
| 2.3.1 | Three Flashes | N/A | No flashing content |
| 2.4.1 | Bypass Blocks | P | Skip link is the first Tab stop at every width |
| 2.4.2 | Page Titled | P | "Luma — Practical learning for curious people" |
| 2.4.3 | Focus Order | P | Verified sequence is logical at 402/1280 px (content order, no jumps) |
| 2.4.4 | Link Purpose (In Context) | P | Purposes discernible; footer mock anchors noted above |
| 2.4.5 | Multiple Ways | N/A | Single page |
| 2.4.6 | Headings and Labels | P | Descriptive headings; form labels always present (required prop) |
| 2.4.7 | Focus Visible | P | Blue ring + white halo observed at every stop of the walk |
| 2.4.11 | Focus Not Obscured (Min) | P | No sticky/fixed elements; menu renders below the header |
| 2.5.1 | Pointer Gestures | N/A | No multipoint/path gestures |
| 2.5.2 | Pointer Cancellation | N/A | No activation on `down` events |
| 2.5.3 | Label in Name | P | `aria-label`s contain the visible text where visible text exists |
| 2.5.4 | Motion Actuation | N/A | No device-motion triggers |
| 2.5.7 | Dragging Movements | N/A | No dragging functionality |
| 2.5.8 | Target Size (Minimum) | P | All targets ≥24 px or pass the spacing exception (smallest: menu toggle 36 px, footer links 32 px) |
| 3.1.1 | Language of Page | P | `<html lang="en">` |
| 3.1.2 | Language of Parts | N/A | Single-language content |
| 3.2.1 | On Focus | P | No context changes on focus |
| 3.2.2 | On Input | P | Form changes state only on submit |
| 3.2.6 | Consistent Help | N/A | Single page |
| 3.3.1 | Error Identification | P | Native HTML validation identifies and describes errors in text |
| 3.3.2 | Labels or Instructions | P | Visible labels (mandatory prop) + "Fill out the fields…" instruction; required fields marked |
| 3.3.3 | Error Suggestion | P | Native validation messages propose correction; entered data persists (no re-render) |
| 3.3.4 | Error Prevention (Legal/Financial) | N/A | Demo form, no consequential submission |
| 3.3.7 | Redundant Entry | N/A | One form only |
| 3.3.8 | Accessible Authentication | N/A | No authentication flow ("Log in" is a mock anchor) |
| 4.1.2 | Name, Role, Value | P | Names/roles/states verified in the tree incl. menu `aria-expanded`/`aria-controls` |
| 4.1.3 | Status Messages | P | Orca announced the submission message ("Demo only: no message was sent.") without a focus move — `role="status"` works |

## Limitations

- Chromium on Linux only (headless probes + one real-AT Orca session); no Safari/WebKit, no JAWS/NVDA/VoiceOver, no physical devices.
- The Orca session did not exercise structural navigation (H/D/L keys) because keyboard events were injected, not grabbed by Orca; a human pass with real keys is the remaining layer.
- axe-core covers only the rules and states it implements; the probes above cover the gaps axe is known to miss (`::placeholder`, 1.4.11 boundaries, target-size spacing).
- A passing sample of one page cannot be extended to other pages or future changes; the CI scan (`pnpm a11y`, [ADR 0003](../adr/0003-ci-cd-pipeline.md)) keeps the exercised states covered going forward.
