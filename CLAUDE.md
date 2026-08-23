# HPS Website Development Rules

## Project

This repository contains the production website for HPS, a school in Model Town, Lahore.

Production:
https://hpslahore.com/

Deployment:
Vercel automatically deploys from the main branch.

The site is live and used by parents, students, and prospective families.

Work conservatively. Never break existing production functionality.

The project is intentionally plain static HTML, CSS, and JavaScript.

Do not convert it to React, Next.js, Tailwind, shadcn, or another framework unless the user explicitly approves an architecture change.

Do not introduce large dependencies merely to reproduce a UI interaction.

---

## Hard Brand Rules

1. The school's public-facing name is exactly:

HPS

Never expand HPS into any longer school name anywhere, including:
- visible copy
- HTML comments
- alt text
- metadata
- structured data
- filenames
- documentation intended for production

CONTENT.md may document historical naming information for traceability, but that wording must not appear publicly unless explicitly approved.

2. Do not use em dashes in website copy.

Use commas, periods, colons, parentheses, or other appropriate punctuation instead.

3. No AI-generated or stock imagery may be used on the production website.

Only use authentic photographs of:
- the real school
- actual students
- actual staff
- real HPS events

Images must come from existing project assets or files explicitly supplied by the user.

AI-generated mockups may be used as layout/design references only.

Never copy an AI-generated person or scene into production.

If a section would benefit from an image but no authentic asset exists, use a text-only treatment and leave a TODO comment for the user.

---

## Content and Factual Accuracy

CONTENT.md is the factual source of truth for this website.

Read CONTENT.md before adding or modifying factual copy.

Every claim involving:
- student results
- names
- dates
- competitions
- awards
- school history
- curriculum
- facilities
- leadership
- admissions information
- contact information

must be traceable to CONTENT.md or another source explicitly provided by the user.

If a requested fact is not documented, do not invent it.

Use a clearly marked:

[CONFIRM: description of information needed]

or ask the user.

Never silently infer missing factual information.

Two historical conflicts must remain respected unless explicitly resolved by the user:
- Do not claim "100 years of legacy". The documented founding year is 1999.
- Do not present "most affordable fees" as a verified factual claim.

---

## Design System

Preserve the established premium editorial HPS identity.

Core palette:
- Navy: #0d1c33
- Secondary navy: #16294a
- Muted gold: #a5813f
- Soft gold: #c7a468
- Ivory: #f7f3ea
- Paper: #fbf9f4

Typography:
- Fraunces for editorial/display headings
- Inter for body, navigation, controls, and interface text

Overall aesthetic:
- prestigious
- editorial
- restrained
- photography-led
- calm
- sophisticated
- appropriate for an established private school

Avoid:
- generic SaaS design
- glassmorphism
- neon effects
- excessive gradients
- excessive cards
- excessive rounded corners
- heavy drop shadows
- gaming-style UI
- flashy animation
- template-looking components

Desktop and mobile must both look deliberately designed.

Do not build desktop and merely shrink it for mobile.

Assume a large portion of parents visit using phones.

---

## Interaction and Animation

Existing animations and interactions should remain lightweight and accessible.

Use:
- CSS transitions
- CSS keyframes
- IntersectionObserver
- minimal vanilla JavaScript

Respect:

prefers-reduced-motion

Do not introduce:
- Framer Motion
- GSAP
- large animation libraries

unless explicitly approved.

When improving UI interactions or animation, if the 21.dev MCP is available, search it first for high-quality relevant patterns.

Examples:
- animated tabs
- segmented controls
- number tickers
- accordions
- collapsibles
- scroll reveals
- subtle underline or shimmer interactions
- premium editorial UI

Use 21.dev as design and interaction inspiration.

Many 21.dev components use React/Tailwind. Do not install or copy those frameworks into this project.

Recreate useful interaction patterns using the existing vanilla HTML/CSS/JS architecture.

Animation should be subtle and premium rather than attention-seeking.

---

## Images and Performance

Use authentic source images only.

Do not display source social-media posters directly on the homepage when the information can be presented more elegantly in HTML.

Where useful, authentic photographs may be cleanly cropped into optimized derivative assets.

Never reconstruct missing visual content using generative AI.

For displayed images:
- use appropriate dimensions
- include width and height attributes where practical
- lazy-load below-the-fold images
- avoid unnecessary upscaling
- optimize oversized files
- prefer modern formats such as WebP where appropriate

Do not preload large numbers of below-the-fold assets.

---

## Responsive QA

Important layouts should be tested at minimum around:

1440px
1280px
768px
430px
390px
375px

Verify:
- no horizontal overflow
- no clipped typography
- no broken image paths
- no content hidden behind fixed navigation
- no tiny touch targets
- no awkward empty spaces
- no score/stat wrapping
- no JavaScript console errors

Interactive controls must remain keyboard accessible.

---

## Accessibility

Use semantic HTML.

Interactive controls should have:
- visible focus states
- appropriate buttons
- ARIA state where needed
- keyboard support

For tabs, accordions, menus, and similar controls, preserve proper keyboard interaction.

Always respect reduced-motion preferences.

Maintain reasonable text/background contrast.

---

## Production Safety

Never touch:
- DNS
- domain configuration
- Vercel project configuration

unless the user explicitly requests and approves it.

Do not push automatically.

The user controls when production is updated.

If the user says not to push, do not push.

Before modifying an existing live feature, inspect how it currently works first.

Preserve working functionality whenever possible.

---

## Git Workflow

Before beginning any task:

1. Run git status.
2. Inspect the current branch.
3. Inspect any existing diff.

Never overwrite or accidentally include unrelated pre-existing work.

If the working tree contains unrelated uncommitted changes, stop and tell the user before proceeding.

Work in small, reviewable features.

Before every commit:
1. run git status
2. run git diff
3. verify exactly which files belong to the feature
4. stage only those files

Never bundle unrelated changes into the same commit.

Use clear commit messages.

Generated QA screenshots should normally remain local and should not be committed unless the user explicitly requests it.

Do not push until the user explicitly approves pushing.

---

## Source Files

Key files currently include:

index.html
admissions.html
CONTENT.md
images/

CONTENT.md is authoritative for factual website claims.

Do not modify factual copy without checking it first.

---

## Working Style

For meaningful visual changes:

1. inspect the existing implementation
2. make the change locally
3. test desktop and mobile
4. capture or provide local screenshots when useful
5. show the user what changed
6. wait for approval when requested
7. commit cleanly
8. do not push until explicitly told to

Do not redesign unrelated areas while completing a narrow request.

Keep edits surgical.
