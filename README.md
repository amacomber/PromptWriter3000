# PromptWriter 3000

A local web app for assembling deterministic, model-friendly prompts from structured controls.

## What is implemented

- Pulldowns:
  - Role (definition-backed expert roles, grouped by department and alphabetized, with Social Team pinned first)
  - Target audience
  - Platform (`No social platform` default, `All platforms`, `Facebook`, `Instagram`, `Reddit`, `X`; selecting a supported platform replaces avoid filters with that platform bundle)
  - Avoid categories preset (`None`, `All`, and policy-derived platform category bundles for `Facebook`, `Instagram`, `Reddit`, `X`, `YouTube`, `Vimeo`)
  - Task type
  - Tone / voice
  - Output format
  - Length (`Short`, `Medium`, `Long`, `Custom word limit`)
  - Model profile (`ChatGPT`, `Claude`, `Gemini`, `Custom`) with default behavior tuning
- Toggle groups:
  - Constraints pack
  - Quality checks
- Text inputs:
  - Primary prompt (goal)
  - Context
  - Must include (line-separated bullets)
  - Must avoid (line-separated bullets)
  - Avoid categories preset selector (fills the avoid-category list from preset sets; platform auto-rules replace this on platform change)
  - Avoid categories (line-separated category guidance)
  - Reference material
  - Success criteria (up to 3 bullets)
  - Negative prompt
- Assumptions policy:
  - Ask questions first
  - Proceed with assumptions (label them)
- Final prompt assembler:
  - Fixed section order
  - Deterministic concatenation
  - Empty sections are skipped
- Practical UX:
  - Live preview
  - Char/word/token estimate meter
  - Copy with labels / without labels
  - Built-in presets (`YouTube short script`, `Bug triage`, `Legal summary`)
  - Save/load/delete custom presets (localStorage)

## Fixed output template

Sections are assembled in this order:

1. `ROLE`
2. `AUDIENCE`
3. `GOAL`
4. `CONTEXT`
5. `INPUTS`
6. `TASK`
7. `CONSTRAINTS`
8. `OUTPUT FORMAT`
9. `QUALITY CHECKS`

## Expert role definitions

- Community Manager: Comments, moderation, and engagement prompts.
- Content Calendar Manager: Planning, batching, repurposing, and deadlines.
- Creative Director: Concepts, brand consistency, and campaign themes.
- Motion Graphics Designer: Lower thirds, transitions, and animated overlays.
- On-camera Host Coach: Delivery, presence, and teleprompter-friendly scripts.
- Short-form Video Producer: Hooks, pacing, and retention structure.
- Social Media Personality: On-camera voice, personal-brand storytelling, and audience engagement.
- Social Media Strategist: Channel mix, cadence, and growth loops.
- TikTok Growth Lead: Trend adaptation, format testing, and community signals.
- Video Editor: Cut strategy, b-roll planning, captions, and sound-design notes.
- YouTube Strategist: Titles/thumbnails, series design, and watch-time optimization.
- Marketing strategist: Positioning, funnels, offers, and CTAs for audience-to-conversion messaging.
- Brand voice copywriter: Taglines, ad copy, landing-page copy, and tone consistency.
- SEO content strategist: Search intent, outlines, metadata, and internal linking.
- Product manager: Requirements, PRDs, prioritization, and tradeoff framing.
- UX writer / content designer: Microcopy, error states, and onboarding flow content.
- UX researcher: Interview scripts, surveys, synthesis, and insight generation.
- iOS Game Engineer (Swift + SpriteKit): Scene graphs, actions, physics, and touch input.
- Metal Graphics Programmer: Render pipeline design, shader programming, and performance tuning.
- Gameplay Programmer: Combat/movement systems, camera behavior, game feel, and iteration tooling.
- Game Systems Designer: Progression, economy design, tuning, and balance.
- Technical Game Designer: Design + implementation specs and scripting logic.
- Engine/Tools Programmer: Level editors, build pipelines, and asset tooling.
- Performance & Optimization Engineer (Apple platforms): Profiling, memory optimization, and frame pacing.
- Apple Platform Engineer (App Store + entitlements): Signing, sandboxing, distribution, and notarization.
- Audio Programmer / Sound Designer: Interactive audio, mixing, and spatial/3D audio behavior.
- QA / Compatibility Tester (iOS/macOS): Device matrix, regressions, controller input, and crash triage.
- Frontend Engineer (React/Next.js): UI architecture, components, state management, and frontend performance.
- Backend Engineer (Node/Express): APIs, auth, data access, and service integrations.
- Full-Stack Engineer: End-to-end implementation, tradeoffs, and deployment planning.
- Web Architect: System design, scalability, and web platform patterns.
- UI Engineer: Design systems, accessibility support, and responsive layout implementation.
- UX Engineer: Interaction patterns and usability-focused implementation.
- Accessibility Specialist (WCAG): A11y audits, ARIA semantics, and keyboard/focus behavior.
- Performance Engineer (Core Web Vitals): Bundle optimization, rendering speed, and caching strategy.
- Security Engineer (Web/AppSec): OWASP-oriented safeguards, auth/session hardening, and threat modeling.
- DevOps / Platform Engineer: CI/CD, hosting, observability, and infrastructure-as-code.
- Software architect: System design, APIs, scaling, and security patterns.
- Senior full-stack engineer: Implementation plans, code, debugging, and engineering best practices.
- Data analyst: SQL-driven questions, metric definitions, and experiment analysis.
- Editor / proofreader: Clarity, structure, grammar, and style-guide consistency.
- Cybersecurity engineer: Threat modeling, hardening guidance, and incident response support.
- DevOps / SRE: CI/CD design, observability, reliability engineering, and runbooks.
- QA / test engineer: Test plans, edge cases, and automation strategy.
- Technical writer: Documentation, tutorials, API references, and release notes.
- Compliance / privacy specialist: Data handling reviews, policy checks, and risk notes.
- Bookkeeper: Day-to-day entries, reconciliation, and categorization.
- CFO / Fractional CFO: Financial strategy, runway planning, pricing, and KPI discipline.
- Controller: Accounting oversight, close process rigor, and internal controls.
- Corporate Finance Manager: Capital planning, liquidity, and funding strategy.
- Cost Accountant: COGS modeling, margin analysis, and cost allocation.
- FP&A Analyst: Budgets, forecasts, and variance analysis.
- Internal Auditor: Risk assessment, control testing, and fraud prevention.
- Revenue Operations Analyst: Billing flows, renewals, and revenue reporting quality.
- Tax Strategist: Entity-choice considerations, deductions, and estimated-tax questions to raise.
- Treasury Manager: Cash management, banking operations, and working-capital strategy.
- Operations manager: Process design, SOPs, and checklists.
- Project manager: Timelines, dependencies, and status reporting.
- Legal-issue spotter: Contract red flags and questions to ask counsel.
- Negotiation coach: Scripts, objection handling, and leverage framing.

## Run locally

Option 1 (double-click):
- Open `index.html` in your browser.

Option 2 (local server):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` - UI structure
- `styles.css` - responsive visual styling
- `app.js` - state, prompt assembly, copy, presets, and counters
