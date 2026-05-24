# Plan: LLMs Explained — Frontend-Only App for GitHub Pages

## Overview

Transform this React/TypeScript/Vite template into a standalone, frontend-only educational app about Large Language Models (LLMs). The app will cover technical topics such as tokenization, attention mechanisms, transformer architecture, training, and inference. It will be deployed to GitHub Pages with no backend dependency.

---

## Goals

- Help developers and technically curious people understand how LLMs work under the hood.
- Fully static, no backend, no API calls — deployable to GitHub Pages.
- Interactive visualizations and step-by-step explanations where useful.
- Clean, readable UI with dark mode support.

---

## Phase 1: Project Cleanup & GitHub Pages Setup

### 1.1 — Strip Template Artifacts

- Remove backend-related config (`.env` files referencing Docker/Django, `docker compose` instructions in README).
- Remove existing pages (`EditFormPage`, `NewFormPage`, `HomePage`) and routes that don't apply.
- Remove leftover Storybook boilerplate stories.
- Update `package.json` name from `activity-approval` to `llms-explained`.
- Update `README.md` to reflect the new project purpose.

### 1.2 — GitHub Pages Deployment

- Add a `deploy` script to `package.json` using `gh-pages` (or configure via GitHub Actions workflow).
- Set `base` in `vite.config.ts` to the repository name (e.g., `/llms-explained/`) for correct asset paths.
- Create `.github/workflows/deploy.yml` that builds and publishes to the `gh-pages` branch on every push to `main`.

---

## Phase 2: App Structure & Navigation

### 2.1 — Top-Level Information Architecture

Define the main sections of the app:

1. **Home** — brief intro and navigation to topics
2. **Tokenization** — how text is split into tokens; BPE, WordPiece
3. **Embeddings** — turning tokens into vectors; semantic space
4. **Transformer Architecture** — encoder/decoder, residual connections, layer norm
5. **Attention Mechanism** — self-attention, multi-head attention, scaled dot-product
6. **Training** — pre-training objectives (next-token prediction, masked LM), loss, backprop at a high level
7. **Inference & Sampling** — temperature, top-k, top-p, greedy decoding
8. **Scaling Laws** — Chinchilla, compute-optimal training
9. **Fine-Tuning & RLHF** — SFT, reward models, PPO

### 2.2 — Routing

- Use React Router with a route per topic section.
- Add a persistent sidebar/navbar for navigation between topics.
- Support deep linking so individual sections can be bookmarked/shared.

---

## Phase 3: Content & Interactivity

### 3.1 — Content Format

Each topic page will have:
- A written explanation (markdown-rendered or JSX prose)
- Key concepts highlighted with tooltips or sidebars
- At least one interactive element or diagram

### 3.2 — Interactive Components

Build reusable, self-contained visualizations:

- **Tokenizer Playground** — user types text, app shows BPE token splits with color-coded spans
- **Attention Heatmap** — static or animated matrix showing attention scores between tokens
- **Embedding Space Demo** — 2D PCA projection showing how words cluster (pre-computed data, no API)
- **Sampling Explorer** — slider for temperature/top-k; shows probability distribution shift over a small fixed vocab
- **Transformer Walkthrough** — step-through diagram of a single forward pass

### 3.3 — Pre-Computed Data

All visualizations use pre-computed static JSON data bundled with the app. No live model inference.

---

## Phase 4: UI / UX

### 4.1 — Layout

- Responsive layout: sidebar nav on desktop, hamburger menu on mobile.
- Use existing Tailwind CSS setup.
- Dark mode toggle (build on existing `04-dark-mode-toggle` intent).

### 4.2 — Typography & Readability

- Use a readable font stack suitable for technical prose (e.g., system-ui or a serif/mono mix).
- Code and math snippets styled with monospace blocks.
- LaTeX-style math rendering for formulas (consider KaTeX as a lightweight dependency).

### 4.3 — Accessibility

- Ensure keyboard navigation works for all interactive demos.
- Use semantic HTML and ARIA labels where needed.

---

## Phase 5: Testing & Quality

- Keep Vitest unit tests for utility functions (e.g., tokenizer helpers, sampling math).
- Use Storybook stories for interactive visualization components.
- Run `npm run lint` and `npm run typecheck` in CI.
- GitHub Actions workflow runs tests on every PR.

---

## File Structure (Target)

```
src/
  pages/
    HomePage.tsx
    TokenizationPage.tsx
    EmbeddingsPage.tsx
    TransformerPage.tsx
    AttentionPage.tsx
    TrainingPage.tsx
    InferencePage.tsx
    ScalingLawsPage.tsx
    FineTuningPage.tsx
  components/
    Navbar.tsx
    Sidebar.tsx
    TokenizerPlayground.tsx
    AttentionHeatmap.tsx
    SamplingExplorer.tsx
    TransformerDiagram.tsx
    Tooltip.tsx
    DarkModeToggle.tsx
  data/
    tokenizer-examples.json
    embedding-projections.json
    attention-examples.json
  layouts/
    MainLayout.tsx
  AppRoutes.tsx
  App.tsx
```

---

## Success Criteria

- [ ] App builds with `npm run build` and produces a static bundle
- [ ] Deployed to GitHub Pages and accessible at `https://chenpeleg.github.io/llms-explained/`
- [ ] At least 5 topic pages with written content
- [ ] At least 3 interactive visualizations
- [ ] Dark mode toggle works
- [ ] All routes are deep-linkable
- [ ] `npm run lint`, `npm run typecheck`, and `npm run test` pass
- [ ] No backend or external API dependencies at runtime
