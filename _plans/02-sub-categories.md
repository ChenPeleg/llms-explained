# Plan: Sub-Categories for Topic Routes

## Overview

Each top-level topic route (e.g. `/tokenization`) will gain sub-routes that drill into focused sub-topics (e.g. `/tokenization/tiktoken`). Every sub-route page includes a "Return to main article" button that navigates back to the parent topic.

---

## Goals

- Add depth to each topic without cluttering the main article.
- Keep navigation intuitive — sub-routes are reachable from within a topic page.
- Every sub-page has a clear path back to its parent.

---

## Phase 1: Define Sub-Categories per Topic

### 1.1 — Tokenization (`/tokenization`)
- `/tokenization/tiktoken` — TikToken library deep-dive (GPT-2/GPT-4 BPE, cl100k_base)
- `/tokenization/wordpiece` — WordPiece algorithm used by BERT/DistilBERT
- `/tokenization/sentencepiece` — SentencePiece (unigram LM, used by LLaMA, T5)

### 1.2 — Embeddings (`/embeddings`)
- `/embeddings/word2vec` — Word2Vec CBOW & Skip-Gram
- `/embeddings/positional` — Positional encodings (sinusoidal & RoPE)

### 1.3 — Transformer Architecture (`/transformer`)
- `/transformer/encoder` — Encoder stack
- `/transformer/decoder` — Decoder stack & causal masking
- `/transformer/ffn` — Feed-forward sublayer & activation functions (GELU, SwiGLU)

### 1.4 — Attention (`/attention`)
- `/attention/self-attention` — Scaled dot-product self-attention derivation
- `/attention/multi-head` — Multi-head attention and projection
- `/attention/kv-cache` — KV-Cache for efficient inference

### 1.5 — Training (`/training`)
- `/training/next-token` — Causal (next-token prediction) pre-training
- `/training/masked-lm` — Masked language modelling (BERT-style)
- `/training/loss` — Cross-entropy loss & perplexity

### 1.6 — Inference & Sampling (`/inference`)
- `/inference/temperature` — Temperature scaling
- `/inference/top-k-p` — Top-k and Top-p (nucleus) sampling
- `/inference/beam-search` — Beam search vs greedy decoding

### 1.7 — Scaling Laws (`/scaling`)
- `/scaling/chinchilla` — Chinchilla compute-optimal scaling
- `/scaling/emergent` — Emergent abilities & phase transitions

### 1.8 — Fine-Tuning & RLHF (`/finetuning`)
- `/finetuning/sft` — Supervised Fine-Tuning
- `/finetuning/rlhf` — RLHF & PPO
- `/finetuning/lora` — LoRA / parameter-efficient fine-tuning

---

## Phase 2: Routing Changes

### 2.1 — Nested Routes in `AppRoutes.tsx`

Wrap each topic route as a parent `<Route>` with child routes. The parent renders the existing topic page at its index; each child renders a new sub-page component.

```
<Route path="/tokenization" element={<TokenizationPage />} />
  →
<Route path="/tokenization">
  <Route index element={<TokenizationPage />} />
  <Route path="tiktoken" element={<TikTokenPage />} />
  <Route path="wordpiece" element={<WordPiecePage />} />
  <Route path="sentencepiece" element={<SentencePiecePage />} />
</Route>
```

Repeat the same pattern for every topic.

> **Note:** The existing topic pages do **not** use `<Outlet>` — they are leaf pages. Sub-pages are siblings under the same parent path, not children rendered inside the topic page. This keeps the main article page unchanged.

---

## Phase 3: Sub-Page Component Structure

### 3.1 — File Layout

```
src/pages/
  tokenization/
    TikTokenPage.tsx
    WordPiecePage.tsx
    SentencePiecePage.tsx
  embeddings/
    Word2VecPage.tsx
    PositionalEncodingsPage.tsx
  transformer/
    EncoderPage.tsx
    DecoderPage.tsx
    FeedForwardPage.tsx
  attention/
    SelfAttentionPage.tsx
    MultiHeadPage.tsx
    KVCachePage.tsx
  training/
    NextTokenPage.tsx
    MaskedLMPage.tsx
    LossPage.tsx
  inference/
    TemperaturePage.tsx
    TopKPPage.tsx
    BeamSearchPage.tsx
  scaling/
    ChinchillaPage.tsx
    EmergentPage.tsx
  finetuning/
    SFTPage.tsx
    RLHFPage.tsx
    LoRAPage.tsx
```

### 3.2 — "Return to Main Article" Button

Create a shared `BackToMainArticleButton` component (in `src/components/`). It uses `useNavigate` or a `<Link>` to navigate to the parent topic route.

```tsx
// Usage inside any sub-page
<BackToMainArticleButton to="/tokenization" />
```

The button renders consistently at the top (and optionally bottom) of every sub-page.

---

## Phase 4: Navigation Updates

### 4.1 — Links from Main Article to Sub-Pages

On each topic page (e.g. `TokenizationPage`), add a "Dive deeper" or "Related sub-topics" section listing links to its sub-routes. These can be rendered as cards or a simple link list.

### 4.2 — Sidebar Expansion (optional enhancement)

Optionally, when a topic is active in the sidebar, show its sub-routes as an indented list beneath it. This requires:
- Tracking `isActive` per parent route.
- Storing sub-route metadata alongside the existing `NAV_LINKS` array in `Sidebar.tsx`.

---

## Phase 5: i18n / Translation Keys

Each new sub-page will follow the existing `useTranslate` / `t('key')` pattern. Add translation keys for:
- Sub-page headings and intro paragraphs.
- The "Return to main article" button label.

---

## Phase 6: Testing

- Add route-level smoke tests (render each sub-page, assert heading is present).
- Confirm `BackToMainArticleButton` navigates correctly with React Router's `MemoryRouter` in tests.
- Ensure all existing tests continue to pass.

---

## Success Criteria

- [ ] All top-level topic routes remain unchanged in URL and behaviour.
- [ ] Each topic has at least 2 sub-routes accessible via nested paths.
- [ ] Every sub-page displays a "Return to main article" button that navigates back to the parent topic.
- [ ] Sidebar correctly highlights the active parent topic when a sub-route is visited.
- [ ] Links from topic pages to sub-pages are present.
- [ ] `npm run build`, `npm run lint`, `npm run typecheck`, and `npm run test` all pass.
