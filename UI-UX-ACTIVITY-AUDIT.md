# UI / UX activity audit

Audited 33 canonical UI and UX lessons (cross-listed lessons share their canonical implementation).

## Findings and changes

24 supplemental lessons used the identical TopicActivity banking-form/dashboard fallback. Each now routes by its canonical lesson ID to a dedicated experiment in LawActivities.tsx. The original nine core lessons retain their direct experiments. Doherty Threshold now uses a filter-response timing experiment, separate from the system-status save workflow.

The 24 replacements cover Similarity, Common Region, Continuity, Figure–Ground, Closure, Alignment, Consistency, Affordances, Signifiers, Progressive Disclosure, Error Prevention, Miller’s Law, Peak–End Rule, Serial Position Effect, Zeigarnik Effect, Von Restorff Effect, Tesler’s Law, Aesthetic–Usability Effect, Goal–Gradient Effect, Postel’s Law, Occam’s Razor, Pareto Principle, Law of Prägnanz, and Cognitive Load Theory.

Each replacement has two contexts, an actual visual or behavioral manipulation, explanatory feedback, a principle-specific reflection, and completion persistence. Law of Parsimony is searchable as an alias of Occam’s Razor. The new content explicitly distinguishes illustrative simulations from controlled psychological experiments.

## Validation

- Automated coverage check rejects an unregistered UI/UX activity. Server render checks all 24 new implementations and restored completion states.
- Browser checks exercised both contexts of all 24 lessons at 320px, with no document overflow. Postel’s Law was separately checked through its validation action for accepted and ambiguous input.
- Pareto reflection rejects the unsupported 80/20 assumption and enables completion after both examples and the supported answer.
- Aesthetic–Usability: independently checked visual polish, broken action, and repaired action.
- Production build and nine automated tests pass. Build reports a bundle-size advisory; it does not block output.

## Scope

AI principle fallback lessons are outside this UI/UX audit. The nine pre-existing core experiments are not converted to the new two-context wrapper in this change.
