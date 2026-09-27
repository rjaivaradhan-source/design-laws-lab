# Verification record

## Automated checks

- Production TypeScript and Vite build: passed.
- `npm test`: 7 tests passed; 0 failures.
- Catalog integrity: 181 unique canonical topics, 27 activity-backed topics, 154 clearly marked references, 134 component records. All internal topic and scenario references resolve.
- Search examples: checkbox vs. switch, reducing checkout choices, critical error, AI explanation, primary-button hierarchy, modal usage, transient messages, one-of-many choices, and delete confirmation resolve to the intended leading results.
- Contrast formula: black/white = 21:1; identical colors = 1:1; the normal-text threshold is checked against the unrounded ratio.

## Browser checks

Tested in the Codex Chromium-based in-app browser, against the production build.

- All eight main pages and all 27 activity pages render. All activity-page inputs have labels in the DOM check. No application console errors were reported during these checks.
- At a 390-pixel viewport (375-pixel content area after the scrollbar), every main page and featured activity fits without document-level horizontal overflow.
- At a 320-pixel viewport (305-pixel content area), the homepage fits at the default and increased-text settings after correcting intrinsic grid sizing.
- Desktop light and dark themes were visually inspected. Dark-theme root background/text inheritance and skip-link contrast were corrected.
- Homepage switches update primary emphasis, the explanation, and descriptive feedback.
- Activity completion updates the dashboard and persists across a reload. Reflection answers are saved rather than replaced by generic completion text.
- Native modal opens, Escape closes it, and focus returns to its trigger. Dialog name/description associations are present.
- Proximity changes with keyboard range input; contrast reports a calculated 12.86:1 for the improved pair; Express can be selected; familiar navigation reaches saved items; the recall task checks MAPLE-42; the delayed-save activity reaches a success state.
- AI approval supports rejection and editing of the retained draft. Memory edits/removals alter the recommendation. Undo restores the original simulated file location.
- Button disabled state prevents activation; anatomy controls show contextual descriptions; checkboxes commit on Save; switches apply immediately.
- Select and combobox accept Express, payment errors expose recovery, tab arrow keys reveal the invoice panel, accordion disclosure reveals the refund policy, and the table identifies the lowest-cost plan.
- Tooltip first-tap behavior was corrected. Opening and dismissing help are verified through visible controls; keyboard focus/Escape are implemented.
- Rule-breaking choice presets produce different visible option counts/grouping and corresponding feedback.
- A test PNG and a one-page PDF both import and render locally, with filename, dimensions, and Ready status. The PDF renders through the bundled worker.
- A user export displays an explicit **NO AUTOMATED ANALYSIS** notice. A user-authored observation creates a version-linked finding and image marker.
- Revision upload produces side-by-side original/revision views and manual status choices. Original findings remain attached to their original image.
- Authored sample markers select their matching findings. Sample revision changes the payment emphasis and recommendation explanation.

## Limits

- These checks do not certify WCAG conformance, actual user comprehension, or successful use with every assistive technology. Screen-reader testing, broader browser/device testing, and user research remain appropriate before a production launch.
- Intentional low-contrast or undersized controls occur inside clearly identified teaching demonstrations. Their surrounding explanations and controls remain available.
- Search uses transparent local intent matching and keyword ranking; it is not a conversational AI search service.
- User uploads are not analyzed by an AI service. The supported initial critique experience is the explicitly labeled sample plus manual review and comparison.
- The non-featured reference catalog does not have completed interactive lessons. Each such entry is labeled as planned.
- There is no account, cross-device sync, backend, public deployment, or configured remote repository.

Additional responsive check: all eight main pages fit a 768-pixel viewport (753-pixel content area), and mobile navigation reaches My Progress. The viewport override and test theme changes were restored after verification.
