# Design Laws Lab

**Experience the principle. Test the design. Understand the decision.**

An original, responsive learning website built from the final brief in `BRIEF.md`. This directory is its own Git repository on `main`; it is not part of another application's source tree. No remote repository or public deployment is configured.

## Run

Use Node.js 24 or newer and npm.

```sh
npm ci
npm run dev
```

For a production build and local preview:

```sh
npm run build
npm run preview -- --port 5173
```

Open `http://127.0.0.1:5173`. Navigation uses hash routes, so static hosting does not need per-route rewrites. Deploy the contents of `dist/` at the host root. Fonts and the PDF worker are bundled locally; the app does not require a font CDN, an account, API credentials, or a database.

If an environment blocks the native dependency optimizer while running the development server, the production build and preview are a supported alternative. The Vite configuration uses its runner loader to avoid unnecessary parent-directory scanning during configuration loading.

## What's implemented

- Eight main pages: Home, UI Laws, UX Laws, AI UX Principles, UI Components, Rule-Breaking Lab, Design Critique, and Learning Dashboard.
- **27 featured interactive lessons**, comprising the complete initial set requested in the final brief. Each has a task, adjustable or actionable example, contextual feedback, reset, explanation, reflection, and completion tracking.
- **181 canonical topics**, including **134 component references**. The other **154 topics** are explicitly labeled **Reference · activity planned**, rather than being presented as completed activities. Fitts's Law and Recognition over Recall are cross-listed without duplicating records.
- Beginner-question search, aliases, category and activity filters, scenario filters, saved topics, recent lessons, actual saved reflection answers, and seven connected product scenarios.
- Live homepage experiments, a pointer/touch/keyboard comparison slider, component-specific anatomy, component comparisons, and a component decision tool.
- Ten Rule-Breaking Lab experiments with common, broken, improved, and contextual-exception views.
- Light/dark themes, reduced-motion support, increased text size, high contrast, native form controls, visible focus, modal focus behavior, keyboard tabs, and touch-accessible help.

## Critique capability and privacy

**No real image-analysis service is connected.** In accordance with the final brief, the site never fabricates automated findings for a user upload.

The critique page provides two clearly separate experiences:

1. An authored **demo analysis** for an original sample checkout. Its numbered observations identify specific visible evidence, severity, confidence, improvements, related activities, and feedback choices. A sample revision demonstrates visible changes.
2. A **guided manual review** of user exports, with context fields, local image/PDF previews, user-authored location markers, version-linked notes, revision uploads, side-by-side comparison, manual improvement assessments, and JSON report export.

Limits: PNG, JPG, WebP, or PDF; 10 MB per file; 10 pages per PDF; 12 rendered screens across originals and revisions; 40 megapixels per image. Invalid or unreadable exports receive a visible error.

Files are read into browser memory and previewed with object URLs. The app does not upload them, store them in localStorage, or send them to an external service. Removing a file or leaving the critique page releases its preview. Export the review before leaving. Only progress and accessibility preferences are saved in localStorage. Clearing site data removes those preferences and progress.

Static exports cannot verify actual keyboard behavior, screen-reader output, hidden states, task success, unseen responsive layouts, or an AI system's real behavior. The UI states these limits and does not use an overall quality score.

## Tests and verification

```sh
npm test
npm run build
```

Seven automated tests cover canonical IDs and internal references, natural-language search ranking, reference contrast ratios and thresholds, scenario paths, the featured activity inventory, component anatomy/alternatives, and aliases.

See `QA.md` for browser checks, tested widths, and remaining verification limits. These checks are not a claim of complete WCAG conformance or proof of real-world usability.

## Code map

- `src/App.tsx`: navigation, page composition, search, learning libraries, lesson detail, component choice/comparison, rule-breaking experiments, scenarios, dashboard, and settings.
- `src/Activities.tsx`: reusable activity shell, native interactive demos, feedback, homepage experiment, and comparison slider.
- `src/Critique.tsx`: lazy-loaded local upload/PDF pipeline, annotated sample, manual findings, revision comparison, and report export.
- `src/content.ts`: canonical topic catalog, searchable aliases, cross-links, scenarios, and references.
- `src/guides.ts`: component-specific definitions, anatomy, states, limitations, accessibility behavior, and activity metadata.
- `src/storage.ts`: browser-local state hook, progress model, and sRGB contrast calculation.
- `src/styles.css`: shared visual tokens, responsive layouts, themes, and motion preferences.
- `tests/core.test.mjs`: automated content/search/math checks.

To add an activity, give the catalog entry an `activity` key, implement the corresponding demo in `ActivityBody`, add its guidance/metadata, and test its keyboard path and feedback. Keep incomplete demos marked as planned. To add real analysis later, implement an explicit service boundary, privacy/retention disclosures, evidence-linked findings, version IDs, and uncertainty handling; do not reuse sample findings as generated output.

## Sources and design

Branding, layout, diagrams, example interfaces, and explanations are original. The subject-area inspiration is linked in the brief. Educational references include W3C WCAG and ARIA guidance, original Hick and Fitts papers, Nielsen Norman Group, and Microsoft Research human–AI interaction guidance. A small demonstration is not a controlled replication of the underlying research.
