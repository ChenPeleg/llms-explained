# Plan: Deepen the Tokenization Section

## Main Goal

Make the app more in-depth by expanding the **Tokenization** section with richer structure, deeper learning paths, and clear next-step navigation.

---

## Scope (This Plan Only)

- Focus only on `/tokenization`
- Do not change other top-level sections yet
- Define a reusable pattern that can later be applied to all sections

---

## Desired Tokenization Experience

1. The main tokenization page remains the entry point.
2. Readers can branch into multiple deeper-dive subtopics.
3. Every tokenization page ends with a consistent navigation block:
   - **Next section:** link to **Embeddings**
   - **Go deeper:** links to additional tokenization deep dives

---

## Content Expansion Plan for Tokenization

### 1) Strengthen the Main `/tokenization` Page

- Keep the current fundamentals (what tokens are, BPE, WordPiece, vocabulary basics).
- Add clearer progression from beginner explanation to intermediate understanding.
- Add a short “what you should understand now” checkpoint near the end.
- Add an “End of section links” block:
  - **Next:** `/embeddings`
  - **Go deeper:** tokenization deep-dive links

### 2) Define Tokenization Deep-Dive Tracks

Create a structured list of deep dives so users can continue by topic:

- **Tokenization Deep Dive 1 — Subword Algorithms**
  - BPE vs WordPiece vs SentencePiece
  - Tradeoffs, compression behavior, unknown handling

- **Tokenization Deep Dive 2 — Real Model Tokenizers**
  - TikToken and modern GPT token vocabularies
  - Why token counts differ between models

- **Tokenization Deep Dive 3 — Multilingual & Edge Cases**
  - CJK text, emojis, punctuation, whitespace
  - Why visually similar text can produce different token counts

- **Tokenization Deep Dive 4 — Practical Prompt Engineering Implications**
  - Cost and context-window impact
  - Prompt phrasing choices that affect token efficiency

### 3) End-of-Page Navigation Pattern (Required)

At the end of the main tokenization page and each tokenization deep-dive page, include:

- **Next section**
  - Embeddings (`/embeddings`)
- **Go deeper**
  - Tokenization deep dive links (1, 2, 3, 4)
- **Back to tokenization overview** (for deep-dive pages)

### 4) Internal Consistency Rules

- Use one naming convention for deep-dive titles and routes.
- Keep deep-dive list order stable everywhere it appears.
- Keep labels simple and scannable (“Tokenization 1”, “Tokenization 2”, etc., plus clear subtitle).

---

## Rollout Sequence (Tokenization Only)

1. Finalize tokenization deep-dive topics and titles.
2. Expand main `/tokenization` narrative and add end-of-section links.
3. Create/populate tokenization deep-dive pages.
4. Add consistent end-of-page navigation on each deep-dive page.
5. Validate route/link continuity from:
   - Tokenization overview → deep dives
   - Deep dives → tokenization overview
   - Tokenization pages → embeddings

---

## Success Criteria

- Tokenization has a visibly deeper learning path than the current version.
- Users always have a clear next step at page end.
- The page-end pattern supports your long-term goal of applying the same structure to all sections.
