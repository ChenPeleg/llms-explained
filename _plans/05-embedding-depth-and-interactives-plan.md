# Plan: Deepen and Interactivify the Embeddings Section

## Main Goal

Apply the same treatment that was done for tokenization to the **Embeddings** section:
expand subtopics, add a shared section-navigation component, and introduce interactive
learning components — all using the existing React + Tailwind stack.

---

## Scope (This Plan Only)

- Focus only on `/embeddings` and its sub-routes.
- Define a reusable `EmbeddingsSectionNavigation` component analogous to
  `TokenizationSectionNavigation`.
- Do not add new npm packages or backend dependencies.
- Keep each interactive element isolated in its own component file under
  `src/components/embeddings/`.

---

## Current State

The embeddings section already has two subtopics:
- `/embeddings/word2vec` — Word2VecPage (3 paragraphs, no interactive)
- `/embeddings/positional-encodings` — PositionalEncodingsPage (3 paragraphs, no interactive)

The main `EmbeddingsPage` has a static SVG scatter plot and a simple "Dive Deeper" links
block (no structured section navigation).

---

## Phase 1: Expand the Subtopic Set

Add two new deep-dive subtopics, bringing the total from 2 → 4, mirroring the
tokenization pattern of 4 deep dives.

### Embedding Deep Dive 1 — Word2Vec & Static Embeddings  *(enhance existing)*
Route: `/embeddings/word2vec`

- Expand from 3 paragraphs to a full article covering CBOW vs Skip-Gram, the
  sliding context window, and why Word2Vec produces surprisingly good analogies.
- Add an **Interactive: Vector Arithmetic Demo** — user selects a seed analogy
  (e.g. king − man + woman) and sees the resulting vector and nearest-word result
  rendered visually. Use fixed vocabulary data (no API calls).

### Embedding Deep Dive 2 — Positional Encodings  *(enhance existing)*
Route: `/embeddings/positional-encodings`

- Expand content to cover sinusoidal formulas, why absolute position signals matter,
  learned positional embeddings, and RoPE (Rotary Position Embedding).
- Add an **Interactive: Sinusoidal Wave Visualizer** — user adjusts "position" and
  "dimension index" sliders and sees the resulting sine/cosine wave drawn as an SVG.

### Embedding Deep Dive 3 — Cosine Similarity & Distance  *(new)*
Route: `/embeddings/cosine-similarity`

- Explain dot product vs cosine similarity, the range [−1, 1], and how it relates
  to angle between vectors.
- Provide worked examples and the formula in a blockquote.
- Add an **Interactive: Cosine Similarity Explorer** — user picks from a fixed list
  of word pairs (or enters custom 2-D coordinates) and sees the cosine similarity
  score computed and a small vector arrow diagram drawn with SVG.

### Embedding Deep Dive 4 — Contextual Embeddings  *(new)*
Route: `/embeddings/contextual-embeddings`

- Contrast static embeddings (Word2Vec, GloVe) with contextual embeddings (BERT,
  GPT) where the same word token gets a different vector depending on surrounding
  context.
- Cover polysemy as the key motivation ("bank" in different sentences).
- Add an **Interactive: Context Shift Demo** — user picks a polysemous word and two
  contrasting sentences; the UI highlights how the meaning changes and shows a
  schematic 2-D layout of where each sense lands in embedding space (using pre-baked
  fixed coordinates, no live model).

---

## Phase 2: Interactive Component Inventory

All components live in `src/components/embeddings/`. One concept per file.

| File | Interactive | Placed in |
|------|------------|-----------|
| `VectorArithmeticDemo.tsx` | Word vector analogy explorer | Word2VecPage |
| `SinusoidalWaveVisualizer.tsx` | Sine/cosine position wave with sliders | PositionalEncodingsPage |
| `CosineSimilarityExplorer.tsx` | Word-pair similarity + SVG vector arrows | CosineSimilarityPage |
| `ContextShiftDemo.tsx` | Polysemy context layout diagram | ContextualEmbeddingsPage |

In addition, upgrade the existing static SVG scatter plot on the main EmbeddingsPage
into an **interactive scatter** component (`EmbeddingScatterPlot.tsx`) that supports:
- Hover tooltip showing word label and cluster name.
- Click to highlight an entire cluster.
- Reset button to clear selection.

---

## Phase 3: Shared Section Navigation Component

Create `src/components/EmbeddingsSectionNavigation.tsx` modelled on
`TokenizationSectionNavigation.tsx`:

- "Next section" link → `/transformer`
- "Go deeper" link list → all 4 embedding deep-dive routes
- Optional `showBackToOverview` prop (renders a "Back to Embeddings overview" link)
  for use on subtopic pages
- `onClick={scrollToTop}` on every link (matching existing pattern)

Update `EmbeddingsPage` to use `EmbeddingsSectionNavigation` in place of the current
hand-coded "Dive Deeper" block.

---

## Phase 4: Page-Level Content Updates

### Main EmbeddingsPage
- Replace the static `<div>` "Dive Deeper" block with `<EmbeddingsSectionNavigation />`.
- Replace the static SVG scatter with `<EmbeddingScatterPlot />`.
- Add a short "What you should understand now" checkpoint section before the navigation.

### Word2VecPage
- Expand text content.
- Embed `<VectorArithmeticDemo />` in a `not-prose` wrapper.
- Add `<EmbeddingsSectionNavigation showBackToOverview />` at the bottom.

### PositionalEncodingsPage
- Expand text content.
- Embed `<SinusoidalWaveVisualizer />` in a `not-prose` wrapper.
- Add `<EmbeddingsSectionNavigation showBackToOverview />` at the bottom.

### CosineSimilarityPage *(new file)*
- Full article content.
- Embed `<CosineSimilarityExplorer />`.
- Add `<EmbeddingsSectionNavigation showBackToOverview />` at the bottom.

### ContextualEmbeddingsPage *(new file)*
- Full article content.
- Embed `<ContextShiftDemo />`.
- Add `<EmbeddingsSectionNavigation showBackToOverview />` at the bottom.

---

## Phase 5: Routing

Add two new child routes under `/embeddings` in `AppRoutes.tsx`:

```
/embeddings/cosine-similarity       → CosineSimilarityPage
/embeddings/contextual-embeddings   → ContextualEmbeddingsPage
```

---

## Phase 6: Translation Keys

Follow the existing `useTranslate` / `t('key')` pattern. Add keys for:

- Section navigation headings (`emb_next_section`, `emb_go_deeper`,
  `emb_back_to_overview_heading`, `emb_back_to_overview_link`)
- Deep-dive labels (`emb_deep_1_label` … `emb_deep_4_label`)
- New page headings, intros, and interactive labels for all 4 subtopics
- Scatter plot interactive (hover tooltip strings)

Add keys to all supported locale files, keeping the same structure as the tokenization
locale additions.

---

## Phase 7: Add-Subtopic Skill Compliance

Follow the steps in `.github/skills/add-subtopic/skill.md` for each new subtopic:

1. Wire the route in `AppRoutes.tsx`.
2. Add the subtopic link in `EmbeddingsSectionNavigation` (analogous to
   `DEEP_DIVE_LINKS` in `TokenizationSectionNavigation`).
3. Add matching translation keys in all locale files.
4. Ensure subtopic links use `onClick={scrollToTop}`.
5. Set `dir="ltr"` on the root container of any English-only interactive component.

---

## Accessibility & UX Constraints

- Descriptive `aria-label` / `role="img"` on all SVG visuals.
- Keyboard-navigable controls for all sliders and selects.
- Sufficient color contrast for cluster colors and chart states.
- Responsive layout using existing Tailwind patterns.
- Each interactive has a visible Reset button.

---

## Technical Constraints

- React + Tailwind only — no new npm packages.
- No backend / model API calls — all data is fixed in-repo (JSON or inline constants).
- All logic must be deterministic and educational.

---

## Rollout Sequence

1. Create `EmbeddingsSectionNavigation` component and add translation keys.
2. Update `EmbeddingsPage` to use the new navigation and the interactive scatter.
3. Enhance `Word2VecPage` (content + `VectorArithmeticDemo`).
4. Enhance `PositionalEncodingsPage` (content + `SinusoidalWaveVisualizer`).
5. Create `CosineSimilarityPage` + `CosineSimilarityExplorer` component.
6. Create `ContextualEmbeddingsPage` + `ContextShiftDemo` component.
7. Wire new routes in `AppRoutes.tsx`.
8. Run `npm run lint`, `npm run typecheck`, `npm run test -- --run`, `npm run build`.

---

## Success Criteria

- Embeddings section has 4 deep-dive subtopics (up from 2), each with richer
  text content and at least one interactive component.
- A shared `EmbeddingsSectionNavigation` component handles all in-section navigation.
- Main `EmbeddingsPage` ends with the shared navigation block, not a hand-coded list.
- The interactive scatter plot on the main page supports hover and click interactions.
- No new dependencies are introduced.
- All existing tests continue to pass and the build succeeds.
