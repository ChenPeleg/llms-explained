---
title: Add a subtopic to a topic
description: |
  Follow this skill when adding a new subtopic page to an existing topic
  (for example: adding another subtopic under Tokenization).

steps:
  - title: Wire the subtopic route and navigation
    description: |
      Add the new subtopic route in `src/AppRoutes.tsx`.
      Add the subtopic link key in `DEEP_DIVE_LINKS` in
      `src/components/TokenizationSectionNavigation.tsx`
      and add matching translation keys in locale files.

  - title: Ensure subtopic navigation scrolls to top
    description: |
      When the user clicks subtopic links, scroll to the top of the page.
      Implement this on subtopic navigation links in
      `src/components/TokenizationSectionNavigation.tsx`.

  - title: Add direction for English-only interactive UI
    description: |
      For interactive components that are English-only, set `dir="ltr"` on
      the interactive component root container so layout/direction stays
      correct in RTL languages.

  - title: Validate and test
    description: |
      Run:
      - `npm run lint`
      - `npm run typecheck`
      - `npm run test -- --run`
      - `npm run build`
---
