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
- **134 component learning activities**, each with an explicit teaching brief, a visual demonstration of its own behavior, two named practical contexts, action feedback, reflection feedback, reset, and persisted completion. Related components share appropriate primitives while demonstrating their distinct purpose.
- **181 canonical topics** across components, UI, UX, and AI. Existing principle activities remain available; the non-featured principle topics still use the earlier general topic activity and are not claimed to be individually authored by this component revision. Fitts's Law and Recognition over Recall are cross-listed without duplicating records.
- Beginner-question search, aliases, category and saved-topic filters, scenario filters, saved topics, recent lessons, saved reflections, and seven connected product scenarios.
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

Eight automated tests cover canonical IDs, search ranking, contrast math, scenario paths, component guidance, aliases, and server rendering of every component activity. The rendering audit checks all 134 catalog entries, real controls in their visual stages, absence of the generic component fallback, and restoration of completed state.

See `QA.md` for browser checks, tested widths, and remaining verification limits. These checks are not a claim of complete WCAG conformance or proof of real-world usability.

## Code map

- `src/App.tsx`: navigation, page composition, search, learning libraries, lesson detail, component choice/comparison, rule-breaking experiments, scenarios, dashboard, and settings.
- `src/Activities.tsx`: reusable activity shell, native interactive demos, feedback, homepage experiment, and comparison slider.
- `src/ComponentActivities.tsx`: component-specific controls, visual examples, local simulated workflows, teaching feedback, and completion.
- `src/componentExperiments.ts`: an explicit task, two contexts, and a teaching explanation for each of the 134 components.
- `src/components-lab.css`: responsive component learning surfaces and demo-specific layouts.
- `src/Critique.tsx`: lazy-loaded local upload/PDF pipeline, annotated sample, manual findings, revision comparison, and report export.
- `src/content.ts`: canonical topic catalog, searchable aliases, cross-links, scenarios, and references.
- `src/guides.ts`: component-specific definitions, anatomy, states, limitations, accessibility behavior, and activity metadata.
- `src/storage.ts`: browser-local state hook, progress model, and sRGB contrast calculation.
- `src/styles.css`: shared visual tokens, responsive layouts, themes, and motion preferences.
- `tests/core.test.mjs`: automated content/search/math checks.

To add a component, add its explicit brief in `componentExperiments.ts`, implement its behavior in `ComponentDemo`, and verify both examples and completion. There is no generic component fallback: missing entries fail the catalog or render audit. For principle activities, use `ActivityBody`. To add real analysis later, implement an explicit service boundary, privacy/retention disclosures, evidence-linked findings, version IDs, and uncertainty handling; do not reuse sample findings as generated output.

## Sources and design

Branding, layout, diagrams, example interfaces, and explanations are original. The subject-area inspiration is linked in the brief. Educational references include W3C WCAG and ARIA guidance, original Hick and Fitts papers, Nielsen Norman Group, and Microsoft Research human–AI interaction guidance. A small demonstration is not a controlled replication of the underlying research.
