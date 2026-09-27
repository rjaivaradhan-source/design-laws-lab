Build a complete, responsive website called “Design Laws Lab”.

TAGLINE
“Experience the principle. Test the design. Understand the decision.”

PRODUCT GOAL

Create an interactive learning platform that helps beginners understand:

1. UI laws and visual design principles
2. UX laws and human behavior
3. AI UX principles
4. UI components and interaction patterns
5. How these ideas apply to real product designs

The central learning method is activity. Users should experience a design problem, change something, observe the result, and then learn the principle behind it.

The website must also allow users to upload designs exported from their own design tools and receive a contextual design critique. Users create their designs outside this website. Do not build an in-browser design editor or canvas.

Use https://www.uilaws.com/ and https://lawsofux.com/ as broad inspiration for the subject area. Create original branding, page layouts, visualizations, illustrations, interaction design, and writing. Do not copy either site.

The finished product should serve two related needs:

LEARN
“What is this law or component, and when should I use it?”

EVALUATE
“I exported my design. What appears to work, what may cause problems, and why?”

────────────────────────────────────────
1. INFORMATION ARCHITECTURE
────────────────────────────────────────

Create these pages:

1. Home
2. UI Laws
3. UX Laws
4. AI UX Principles
5. UI Components
6. Rule-Breaking Lab
7. Design Critique
8. Learning Dashboard

The Learning Dashboard can be a lightweight page using browser storage. An account is not required for the initial version.

Provide a global search that covers laws, principles, components, activities, and product scenarios.

Use consistent connections throughout the site:

• A law links to the components where it commonly matters.
• A component links to the laws that affect its use.
• An activity links to its law, relevant components, and real product examples.
• A critique finding links to the relevant learning activity.
• A rule-breaking experiment links back to the recommended pattern.

Do not treat these pages as isolated content collections.

────────────────────────────────────────
2. VISUAL DIRECTION
────────────────────────────────────────

Create a distinctive visual identity for Design Laws Lab.

Style:

• Contemporary, editorial, and interactive
• Clear enough for complete beginners
• Visually engaging without becoming distracting
• Strong typography and spacious layouts
• Warm off-white surfaces
• Deep charcoal text
• Electric blue for active interactions
• Coral for experiments, warnings, and rule-breaking
• Mint for successful improvements
• Deep navy sections for AI UX
• Subtle gradients and restrained texture
• Rounded panels and clean borders
• High-quality diagrams made with HTML, CSS, or SVG
• Smooth and purposeful motion

The visual language should suggest a practical design laboratory. Use movable controls, measurable changes, comparison views, annotated interface examples, and live feedback.

Use consistent design tokens for spacing, color, radius, typography, shadows, and motion.

Meet WCAG AA contrast for essential text and controls.

Use a modern sans-serif typeface such as Geist, Inter, or Manrope. Ensure the typography has a clear hierarchy and remains comfortable to read on mobile.

────────────────────────────────────────
3. GLOBAL NAVIGATION AND SEARCH
────────────────────────────────────────

Desktop navigation:

• Logo
• Learn menu: UI Laws, UX Laws, AI UX Principles
• UI Components
• Rule-Breaking Lab
• Design Critique
• Search
• Theme toggle
• My Progress

Mobile navigation:

• Clear menu
• Prominent search
• Direct access to Design Critique
• Accessible touch targets
• No horizontal overflow

Global search should support both names and natural questions.

Examples:

• “What is the difference between a checkbox and a switch?”
• “How do I reduce choices in a checkout?”
• “What should I use for a critical error?”
• “Why does this AI recommendation need an explanation?”
• “What helps users notice the primary button?”
• “When should I use a modal?”

Search results should show the content type, a one-sentence summary, and a direct action such as “Try activity” or “Compare components”.

────────────────────────────────────────
4. ACTIVITY-FIRST LEARNING MODEL
────────────────────────────────────────

Every featured law, principle, and component must include a working activity.

Follow this sequence:

1. PRESENT A TASK
Give users a small, realistic goal.

2. LET THEM TRY
Show an interactive interface. Let users click, choose, compare, or adjust it.

3. SHOW WHAT HAPPENED
Give immediate feedback based on their action.

4. REVEAL THE PRINCIPLE
Explain the law or component in simple language.

5. LET THEM IMPROVE IT
Give them meaningful controls that change the interface.

6. LET THEM BREAK IT
Allow intentional misuse or an extreme setting.

7. EXPLAIN THE TRADE-OFF
Show when the change helps, hurts, or depends on context.

8. APPLY IT
Offer a realistic product scenario where the user makes a design decision.

A working activity must change the interface or outcome. A decorative animation or a button that only reveals text does not count as an activity.

Activities should be short enough for a beginner to complete in roughly one to three minutes. Users can explore further if they want.

Every activity needs:

• A clear goal
• A visible interactive example
• At least one meaningful user-controlled variable
• Immediate feedback
• A simple explanation
• An accessible keyboard path
• A reset control
• A connection to a real product situation

Use descriptive feedback. Avoid presenting abstract scores without explaining the observed effect.

────────────────────────────────────────
5. HOME PAGE
────────────────────────────────────────

HERO

Headline:
“Learn design by seeing what changes.”

Supporting text:
“Explore UI, UX, AI UX, and interface components through hands-on activities. Upload an exported design to receive a guided critique.”

Primary CTA:
“Start an activity”

Secondary CTA:
“Upload a design”

Hero interactive example:

Show a small interface with visible problems:

• Too many equal actions
• Weak grouping
• A hard-to-find primary action
• An unexplained AI recommendation

Let the visitor change one or two properties immediately. Show a short explanation as the interface improves or becomes harder to use.

SECTIONS

A. Four learning areas

Create interactive entry cards for:

• UI Laws
• UX Laws
• AI UX Principles
• UI Components

Each card should preview a real activity.

B. Choose a starting point

Options:

• “I’m new to design”
• “I’m designing a product”
• “I’m designing an AI feature”
• “I want feedback on my design”

C. See a principle in action

Use a working before-and-after slider with an annotated form or dashboard.

D. Learn from a product scenario

Cards for:

• E-commerce checkout
• Mobile banking
• SaaS dashboard
• Healthcare booking
• Education app
• AI assistant
• Admin panel

Each scenario should lead to applicable activities, components, and critique considerations.

E. Break a rule

Show an interactive preview of the Rule-Breaking Lab.

F. Upload and review

Explain the Design Critique flow:

Export from a design tool → upload → provide context → inspect findings → revise → compare.

────────────────────────────────────────
6. UI LAWS PAGE
────────────────────────────────────────

Heading:
“UI Laws”

Description:
“Change an interface and see how layout, hierarchy, grouping, and feedback affect usability.”

Provide filters for:

• Layout and spacing
• Visual hierarchy
• Gestalt principles
• Interaction
• Feedback
• Accessibility
• Difficulty
• Product context

Create activity entries for these principles:

• Proximity
• Similarity
• Common Region
• Continuity
• Figure-Ground
• Closure
• Alignment
• Contrast
• Visual Hierarchy
• Consistency
• Affordances
• Signifiers
• Visibility of System Status
• Progressive Disclosure
• Error Prevention
• Recognition over Recall
• Fitts’s Law as applied to target size and distance

Use the most accurate and familiar name for each concept. Distinguish established named laws from broader design principles. Do not claim that every item is a formal “law.”

EXAMPLE ACTIVITIES

Proximity:
Let users move labels and controls closer together or farther apart. Ask which label belongs to which field. Show how grouping changes interpretation.

Visual Hierarchy:
Let users adjust size, contrast, and placement of a primary action. Ask them to find the next step before and after the change.

Contrast:
Let users modify foreground and background colors. Show the contrast ratio when it can be calculated and explain its effect on readability.

Visibility of System Status:
Let users submit a form with and without loading, success, and error feedback. Ask whether the action completed.

Affordances and Signifiers:
Show an element that looks interactive but is not, and one that is interactive but looks like plain text. Let users predict what they can click.

Each law detail view should include:

• The activity first
• A plain-language explanation
• An accurate definition
• What problem it helps solve
• When it commonly applies
• When it may be less useful
• A common misuse
• A mobile consideration
• An accessibility consideration
• Related components
• Related UX or AI UX principles
• A real product example

────────────────────────────────────────
7. UX LAWS PAGE
────────────────────────────────────────

Heading:
“UX Laws”

Description:
“Experience how expectations, attention, memory, and decision-making affect product use.”

Organize topics into:

• Decisions
• Memory
• Attention
• Familiarity
• Motivation
• Feedback
• Perceived performance
• Error recovery

Include activities for:

• Jakob’s Law
• Hick’s Law
• Fitts’s Law
• Miller’s Law
• Peak-End Rule
• Serial Position Effect
• Zeigarnik Effect
• Von Restorff Effect
• Tesler’s Law
• Doherty Threshold
• Aesthetic-Usability Effect
• Goal-Gradient Effect
• Postel’s Law
• Occam’s Razor
• Pareto Principle
• Law of Prägnanz
• Cognitive Load Theory
• Recognition over Recall

Avoid overstating what a law predicts. Explain the context and limitations of simplified demonstrations.

EXAMPLE ACTIVITIES

Hick’s Law:
Ask the user to choose an item from a short list, then a longer list. Let them group, filter, and prioritize options. Explain how choice organization affects decision effort.

Jakob’s Law:
Give users a familiar navigation pattern and an unfamiliar one. Ask them to complete the same task in each.

Recognition over Recall:
Show information on one screen, then require the user to remember it on the next. Let them add visible cues and compare the effort.

Doherty Threshold:
Let users interact with a simulated slow response. Add progress and immediate acknowledgement. Explain perceived responsiveness without implying that visual feedback makes an operation faster.

Peak-End Rule:
Let users inspect two brief onboarding journeys with different final moments, then reflect on which felt better and why.

Include an “Explain simply” toggle and a “Go deeper” section for users who want more detail.

────────────────────────────────────────
8. AI UX PRINCIPLES PAGE
────────────────────────────────────────

Heading:
“AI UX Principles”

Description:
“Practice designing AI experiences people can understand, evaluate, correct, and control.”

Explain that this section presents design principles and practical guidance. Do not imply that all of them are universally recognized scientific laws.

Organize the page around:

• Capabilities and expectations
• Uncertainty and confidence
• Explanation and evidence
• Human control
• Approval and automation
• Memory and personalization
• Privacy and permissions
• Errors and recovery
• Agent activity and status

Include interactive activities for:

• Explain important AI recommendations
• Show uncertainty when it matters
• Make capabilities and limits clear
• Separate a suggestion from an action
• Ask for approval before consequential actions
• Show what an AI agent is doing
• Let users inspect completed actions
• Let users undo or correct actions
• Make memory visible and editable
• Give control over personalization
• Explain permissions before accessing data
• Show useful sources or evidence
• Support human escalation where appropriate
• Make failures understandable and recoverable
• Avoid implying certainty or abilities the system does not have

EXAMPLE ACTIVITIES

Recommendation transparency:
Display an AI suggestion. Let the user add an explanation, evidence, or uncertainty statement. Ask whether they can evaluate the suggestion.

Approval:
Present an AI workflow that could save, send, or change something. Let the user choose between draft, approval, and automatic execution. Explain which level of control suits the scenario.

AI memory:
Let users review a simulated memory list, edit an item, reject a proposed memory, and delete an item. Show how each choice changes the next recommendation.

Error recovery:
Show a mistaken AI action in a simulated workflow. Let users undo, correct, retry, or escalate. Explain what a useful recovery path includes.

Agent status:
Show an agent carrying out a multi-step task. Let users inspect current activity, completed steps, failed steps, and the final receipt.

Use realistic product scenarios. Clearly label simulated AI behavior as a learning activity.

────────────────────────────────────────
9. UI COMPONENTS LIBRARY
────────────────────────────────────────

Heading:
“Every component has a job. Learn it by using it.”

Purpose:

Help beginners learn the name, anatomy, states, behavior, use cases, alternatives, and accessibility needs of common UI components.

The library must be searchable by name, common beginner wording, and user goal.

Examples:

• Searching “small message that disappears” should lead to Toast/Snackbar.
• Searching “choose one from several options” should lead to Radio Group, Select, and Segmented Control with guidance.
• Searching “ask before deleting” should lead to Confirmation Dialog.

Avoid duplicate records when a component appears in more than one category. Use cross-category tags instead.

COMPONENT CATALOG

Foundations:
• Color
• Typography
• Iconography
• Spacing
• Grid
• Layout
• Elevation
• Borders
• Dividers
• Design tokens
• Responsive breakpoints

Navigation:
• Top navigation
• Sidebar
• Navigation rail
• Bottom navigation
• Tabs
• Breadcrumbs
• Pagination
• Stepper
• Menu
• Mega menu
• Command menu
• Anchor navigation

Actions and selection:
• Button
• Icon button
• Floating action button
• Split button
• Link
• Checkbox
• Radio group
• Switch
• Segmented control
• Slider
• Range slider
• Stepper control
• Chip
• Tag

Forms and inputs:
• Text field
• Text area
• Search field
• Password field
• Number field
• Date picker
• Time picker
• Date range picker
• Select
• Multi-select
• Combobox
• Autocomplete
• File upload
• Drag-and-drop upload
• OTP field
• Rich text editor
• Helper text
• Validation message
• Character counter

Feedback and status:
• Alert
• Banner
• Toast or snackbar
• Notification
• Badge
• Status indicator
• Progress bar
• Indeterminate progress
• Skeleton
• Spinner
• Empty state
• Success state
• Error state
• Warning state
• Inline validation

Information and content:
• Card
• List
• Table
• Data grid
• Timeline
• Accordion
• Description list
• Statistic card
• Avatar
• Avatar group
• Tooltip
• Popover
• Callout
• Code block
• Image gallery
• Carousel
• Comparison table

Overlays and temporary surfaces:
• Modal dialog
• Confirmation dialog
• Drawer
• Bottom sheet
• Side panel
• Lightbox
• Context menu
• Dropdown menu
• Command palette

Product patterns:
• Dashboard
• Login
• Sign-up
• Checkout
• Onboarding
• Settings
• Profile
• Search results
• Wizard
• Multi-step form
• Split view
• Master-detail view
• Feed
• Kanban board

AI interface patterns:
• AI chat input
• Conversation thread
• Prompt suggestion
• Suggested follow-up
• AI response
• Streaming response
• AI status indicator
• Confidence or uncertainty indicator
• Source citation
• Recommendation card
• Approval control
• Accept, edit, and reject actions
• Regenerate action
• Undo action
• AI memory panel
• Personalization control
• Human escalation
• Response feedback
• Model selector
• Tool activity indicator
• Automation receipt
• Agent status
• Permission request
• AI safety message

The catalog should be broad and extensible. Do not claim that it contains literally every component ever used in interface design.

COMPONENT DETAIL EXPERIENCE

Every individual component should provide:

1. TRY IT
A working example with a specific task.

2. NAME IT
The common name and useful alternative names.

3. EXPLORE ITS ANATOMY
Clickable labels for the component’s parts.

4. CHANGE IT
Let users adjust relevant properties such as size, labels, spacing, density, placement, number of options, or content length.

5. TEST ITS STATES
Show relevant default, hover, focus, selected, disabled, loading, error, success, expanded, collapsed, and destructive states. Only show states that make sense for that component.

6. BREAK IT
Allow a realistic misuse and explain what changes for the user.

7. COMPARE IT
Show suitable alternatives and explain the choice.

8. USE IT IN CONTEXT
Show the component inside a real screen.

9. CHECK ACCESSIBILITY
Give component-specific keyboard, focus, labeling, screen-reader, and touch guidance.

10. CONNECT THE PRINCIPLES
Link relevant UI, UX, and AI UX activities.

EXAMPLES

Modal:
Let the user open it, use the keyboard, close it, trigger a destructive confirmation, and compare it with a drawer or full-page flow.

Checkbox versus Switch:
Let the user select several options in a form, then toggle an immediate setting. Explain the difference through behavior.

Toast versus Alert:
Let the user trigger a saved confirmation and a serious payment error. Ask which feedback should remain visible.

Table versus Cards:
Let the user compare many records and then inspect a single item. Explain which format serves each task better.

Tooltip:
Let the user discover optional information by hover, focus, and touch. Show why essential instructions need a more visible presentation.

“What should I use?” decision tool:

Ask about user goal, urgency, number of options, reversibility, device, comparison needs, and whether the action involves AI. Recommend appropriate components with reasons and alternatives.

────────────────────────────────────────
10. RULE-BREAKING LAB
────────────────────────────────────────

Purpose:

Teach users to understand the impact of a principle and make intentional design choices.

Layout:

Left:
• Choose a principle, component, and scenario
• Change variables

Center:
• Live working interface
• Version comparison

Right:
• Contextual feedback
• Usability impact
• Accessibility impact
• Possible exceptions
• Suggested test with real users

Include experiments such as:

• Too many equal choices
• Small primary action
• Unfamiliar navigation
• Hidden loading state
• Important information hidden in a tooltip
• Critical error displayed as a temporary toast
• Misused modal
• AI action without approval
• AI recommendation without a useful explanation
• No undo path after an automated change

Allow comparison among:

• Common implementation
• Intentionally broken version
• Improved version
• Contextual exception

Do not automatically call every unconventional choice “wrong.” Ask what the user and task require.

────────────────────────────────────────
11. DESIGN CRITIQUE PAGE
────────────────────────────────────────

Heading:
“Upload your design. Understand the decisions behind it.”

This page evaluates designs created in other tools. Users may export from Figma, Framer, Sketch, Adobe tools, or another design application.

DO NOT build an in-browser design editor, drag-and-drop canvas, layers panel, component placement tool, or design authoring system on this page.

USER FLOW

Step 1: Upload

Support:

• PNG
• JPG
• WebP
• PDF
• Multiple images for a screen sequence or flow

Set sensible file size and page limits. Explain them before upload.

Provide drag-and-drop and standard file picker access. Show thumbnails, filenames, upload status, and removal controls.

Step 2: Add context

Ask:

• What product or feature is shown?
• Who is the intended user?
• What is the user’s main task?
• Is it desktop, tablet, or mobile?
• Is this one screen or a flow?
• Does it contain AI features?
• Which part of the design would you like reviewed most?
• Are there intentional choices or constraints we should know about?

Allow users to skip optional questions, but explain that context improves feedback.

Step 3: Analyze the export

Evaluate visible evidence for:

• Likely components and patterns
• Visual hierarchy
• Grouping and proximity
• Alignment and spacing
• Label clarity
• Number and presentation of choices
• Visible navigation
• Information density
• Readability
• Visible error, empty, loading, and success states
• Color contrast when measurable from the export
• Visible AI explanations, controls, or approval steps
• Consistency across multiple screens

Map observations to relevant UI principles, UX laws, AI UX principles, and components.

Step 4: Review findings

Display the uploaded design prominently.

Place numbered markers or bounded highlights on areas connected to findings.

Clicking a marker should open the corresponding finding in a feedback panel. Clicking a finding should highlight the related area in the design.

For each finding, provide:

• Concise title
• Observed evidence
• Location in the uploaded design
• Why it may affect the user’s task
• Relevant principle or component
• Severity
• Confidence
• Specific recommendation
• Example of an improvement
• Link to a related activity
• Option to mark it useful, incorrect, or intentional

Group findings into:

• Strong decisions
• Opportunities to improve
• Potential risks
• Questions requiring interaction or user testing

Step 5: Revise and compare

Let the user upload a revised export.

Show original and revised versions side by side or with a comparison slider.

Keep the findings linked to the version they came from. Show which visible findings appear improved, unchanged, or newly introduced.

Users edit their designs in their own design tool and upload a new export. The website does not edit the design for them.

WHAT AN EXPORT CAN AND CANNOT SHOW

A static image can support observations about visible layout, text, color, hierarchy, and components.

Do not claim to verify:

• Actual keyboard navigation
• Screen-reader behavior
• Real interactions
• Hidden states
• Animation behavior
• Responsive layouts that were not uploaded
• True task completion
• Actual user understanding
• Whether an AI system genuinely behaves as shown

Mark these as “Needs interaction testing” or “Cannot verify from this export.”

For a PDF or multiple uploaded screens, assess visible flow order and consistency. Do not infer missing steps as certain errors.

EVALUATION QUALITY

Avoid presenting one overall score as proof of quality.

Show useful category summaries:

• Visual clarity
• Component fit
• Task flow
• Accessibility observations
• AI trust and control, if applicable

Every result must explain the evidence behind it. Findings based on uncertain visual interpretation should be labeled accordingly.

If a real image analysis service is not available, provide a clearly labeled demo analysis for sample designs. Do not produce generic findings for a user upload while pretending the file was actually analyzed.

UPLOAD PRIVACY

Tell users what happens to an uploaded file, how long it is retained, and whether it is sent to an external analysis service. Do not claim local processing or deletion unless implemented.

────────────────────────────────────────
12. FEEDBACK SYSTEM
────────────────────────────────────────

Create a reusable feedback panel used in activities, the Rule-Breaking Lab, and Design Critique.

Feedback should answer:

• What happened?
• What evidence supports this observation?
• Which principle or component is involved?
• Why might it matter?
• What could the user change?
• When might the current choice still be reasonable?
• What should be tested with real users?

Use plain language. Avoid shaming the learner.

Example:

“The primary action blends in with the other buttons. A first-time user may need longer to find the next step. Try giving this action a stronger label and visual priority, then check whether people find it faster.”

Provide:

• “Show me why”
• “Try an improvement”
• “See a real example”
• “Learn the principle”
• “This was intentional”
• “This feedback was useful”
• “This feedback missed the point”

────────────────────────────────────────
13. PROGRESS AND LEARNING DASHBOARD
────────────────────────────────────────

Allow users to:

• Save laws and components
• Track completed activities
• Resume recent activities
• View related topics
• Review quiz answers
• See their explored scenarios

Use local storage for the initial version. Explain that progress is saved in that browser if accounts and server storage are not implemented.

Do not force users to sign up before trying activities.

────────────────────────────────────────
14. CONTENT MODEL
────────────────────────────────────────

Store educational content in structured data.

Each law or principle should have:

• ID
• Name
• Type: named law, design principle, or AI UX principle
• Category
• Plain-language explanation
• More detailed explanation
• Applicable situations
• Limitations
• Related components
• Related principles
• Activity definition
• Product example
• Accessibility notes
• Source reference when applicable

Each component should have:

• ID
• Canonical name
• Common alternative names
• Category tags
• Purpose
• Anatomy
• Relevant states
• Common uses
• Misuses
• Alternatives
• Interaction activity
• Accessibility behavior
• Mobile behavior
• Related principles
• Real product example

Each activity should have:

• User goal
• Initial state
• Adjustable variables
• Feedback rules
• Reset behavior
• Keyboard behavior
• Completion condition

Build content so new activities and components can be added without redesigning pages.

Use original educational explanations. If a named law or empirical claim has a source, include a source link or a reference area. Do not fabricate research or statistics.

────────────────────────────────────────
15. ACCESSIBILITY AND RESPONSIVENESS
────────────────────────────────────────

Meet these requirements across the site:

• Semantic HTML
• Keyboard operation for all activities
• Visible focus indicators
• Logical focus order
• Accessible labels
• Clear form errors
• Large touch targets
• Adequate text contrast
• Reduced-motion support
• Screen-reader-friendly feedback updates
• Non-color indicators for status
• Appropriate focus management in dialogs
• Mobile layouts with no essential hover-only interaction

Provide user settings for:

• Reduced motion
• Increased text size
• High contrast
• Simpler explanations

Ensure the interactive lessons still work on touch devices.

────────────────────────────────────────
16. IMPLEMENTATION
────────────────────────────────────────

Use:

• React
• TypeScript
• Tailwind CSS
• Reusable components
• A suitable animation library where needed
• Structured content data
• Responsive layouts
• Accessible controls

Create reusable modules for:

• Site navigation
• Search and filters
• Law and component cards
• Activity shell
• Live example preview
• Feedback panel
• Comparison slider
• Scenario picker
• Rule-Breaking Lab
• Component anatomy overlay
• Upload interface
• Annotated design viewer
• Findings list
• Revision comparison
• Progress tracking
• Accessibility settings

Implement real working interactions for the featured activities. Avoid dead buttons, placeholder controls, and lorem ipsum.

If time or platform limits prevent full implementation of the entire catalog, prioritize a smaller set of complete, working activities and build a scalable content structure for the rest. Clearly identify content that is still planned. Do not present static cards as completed interactive lessons.

Suggested initial fully implemented activities:

UI:
• Proximity
• Visual Hierarchy
• Contrast
• Visibility of System Status
• Fitts’s Law

UX:
• Hick’s Law
• Jakob’s Law
• Recognition over Recall
• Doherty Threshold

AI UX:
• Recommendation Explanation
• Human Approval
• AI Memory Control
• Error Recovery

Components:
• Button
• Modal Dialog
• Checkbox
• Switch
• Select
• Combobox
• Toast
• Alert
• Tabs
• Accordion
• Table
• Tooltip
• Progress Indicator
• AI Recommendation Card

The remaining catalog entries should have accurate reference content and a clear path for adding a working activity.

────────────────────────────────────────
17. ACCEPTANCE CRITERIA
────────────────────────────────────────

The website is ready when:

1. A first-time visitor can complete a meaningful activity from the homepage.
2. Every featured law and component has an interactive demonstration.
3. The visitor can see why a change helped or hurt.
4. Users can compare similar components and understand when each fits.
5. The Rule-Breaking Lab responds to user changes with relevant feedback.
6. Search finds laws, principles, components, and beginner questions.
7. Users can upload an exported design and provide context.
8. Critique findings point to specific visible areas and explain their evidence.
9. The upload flow is honest about analysis capability and its limits.
10. Users can upload a revision and compare versions.
11. All core activities work with mouse, keyboard, and touch.
12. The site works on desktop, tablet, and mobile.
13. The design has a distinctive identity and does not imitate the reference sites.
14. No critical navigation or activity controls are decorative or broken.

The outcome should feel like an interactive design laboratory where users learn a principle by experiencing it, learn a component by using it, and improve an exported design through specific, evidence-based feedback.