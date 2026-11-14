# Accessibility

What the page ships with and how it was verified. Target: WCAG 2.2 A/AA. Fixes that diverge from the Figma frames are recorded in [design divergences](design-divergences.md).

## In place

- **Landmarks and headings.** `header` / `main` / `footer`, four labeled `nav`s (desktop, mobile menu, three footer columns), a single `h1` (hero), and a skip link to `#main-content` (`src/app/layout.tsx`).
- **Keyboard focus.** Global `:focus-visible`: 2px blue ring, 2px offset, 4px white halo (`globals.css`). The halo is load-bearing: a bare ring is invisible on blue sections (WCAG 2.4.7); ring + halo survives any background (Nov 14, 2026).
- **Mobile menu.** Toggle exposes `aria-expanded`, `aria-controls="mobile-menu"` and a dynamic `aria-label` ("Open/Close menu"). Verified by Playwright interaction at every checked width.
- **Forms.** `Input`/`Textarea` take a required `label` prop — a field cannot exist unlabeled — with `useId()` keeping `id`/`for` unique. Submission confirmation uses `role="status"`; validation is native HTML (`required`, `type="email"`). The form is a client-side demo (no backend).
- **Images.** Descriptive `alt` on content images (hero, featured course, testimonial, people); `alt=""` or `aria-hidden="true"` on everything decorative; the CTA's decorative shapes/labels are one `aria-hidden` wrapper.
- **Touch targets.** Header nav links, logo links and form controls are ≥44 px tall. The mobile menu toggle is 36 px, and footer column links are 32 px — both above the WCAG 2.2 AA minimum (24 px, 2.5.8), below the 44 px best practice.
- **Forced colors.** The logo is a CSS-mask span (`aria-hidden`, accessible name on the wrapping link) with `forced-colors:bg-[CanvasText]`. Forced-colors mode had made the footer logo invisible against the system background; verified in forced light/dark at 402/768/1078/1280 px (Nov 15, 2026).
- **Reduced motion.** `prefers-reduced-motion: reduce` collapses animations and transitions and disables smooth scrolling (`globals.css`).
- **Contrast.** Step-label gray was below 4.5:1 on cream and adjusted from `#6d7384` to `#6c7283`; body and secondary text colors meet 4.5:1 (large text 3:1).

## How it was checked

- Biome's a11y lint rules run on `src/` (`biome.json` excludes `public/` from the linter).
- An automated axe-core scan runs in CI (`pnpm a11y`, [ADR 0003](adr/0003-ci-cd-pipeline.md)): the production build at 402/768/1280 px plus menu-open and form-submitted states, WCAG 2.0–2.2 A/AA tags, fails on any violation.
- An automated Playwright sweep (Nov 15, 2026; final run: 211 viewport widths) checks, per width: first Tab lands on the skip link, the mobile menu opens/closes with correct `aria-expanded`, the demo form renders, content images load, and there is no horizontal overflow — excluding `aria-hidden` elements.
- A full-criterion audit against WCAG 2.2 A/AA is recorded in the [WCAG audit](logs/wcag-audit.md), including an Orca screen-reader session.

## Screen-reader session (Orca)

Tested with real assistive technology: Orca 46.1 on Zorin OS (GNOME, X11), driving Playwright Chromium with `--force-renderer-accessibility`, announcements captured from Orca's debug log. Verified spoken announcements:

- Skip link: "Skip to content link." → activating it announces the main landmark ("conteúdo principal").
- Mobile menu: "Open menu recolhido push button" → "expandido" + "Close menu" + menu items → closes with "recolhido".
- Form fields: label + placeholder + required ("Full name entry Your name obrigatório."); live native validation ("entrada inválida.").
- Status message: "Demo only: no message was sent." announced without a focus move (`role="status"` — WCAG 4.1.3).
- Page summary: 7 landmarks, 18 headings, 1 form.

To repeat: `gsettings set org.gnome.desktop.interface toolkit-accessibility true`, start Orca with `orca --debug-file <file>`, open the built site in Chromium with `--force-renderer-accessibility`, navigate by Tab; Orca announces on every focus change and status update. Structural navigation (H for headings, D for landmarks, L for links) needs real key presses, so it is a human pass.

## Known limitations

- **One accepted AA limitation:** interactive-control borders are below the 1.4.11 3:1 threshold, kept for Figma fidelity — see the audit and [WCAG audit](logs/wcag-audit.md).
