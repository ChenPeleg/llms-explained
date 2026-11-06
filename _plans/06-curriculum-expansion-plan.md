# Plan: Expand the LLMs Explained Curriculum

## Purpose

Broaden the site from an introduction to core LLM mechanics into a guided, end-to-end curriculum: how models are built, adapted, evaluated, served, and used. Expand the existing chapters with more depth while adding new chapters for important topics that are currently absent.

This document is a roadmap only. It does not authorize implementation as part of this task.

## Guiding Principles

- Preserve the site's explanatory, self-guided style and build from accessible explanations to technical detail.
- Make each chapter useful on its own while showing where it fits in the full model lifecycle.
- Distinguish established concepts from active research and clearly label approximations in demonstrations.
- Prefer small, deterministic, self-contained visualizations using the existing frontend stack and bundled data; do not require a backend or live model APIs.
- Keep content accessible on mobile, keyboard-operable, and compatible with the site's English, Hebrew, and Arabic translations.
- Link to primary references for technical claims, and review claims and examples for accuracy before publishing.

## Current Curriculum

The site currently covers:

1. Pre-transformer techniques
2. Tokenization
3. Embeddings
4. Transformer architecture
5. Attention
6. Training
7. Inference and sampling
8. Scaling laws
9. Fine-tuning and RLHF

The expansion should connect these existing chapters into a learning path rather than replace or duplicate them.

## Proposed New Chapters

### 1. Data and Pre-Training

Explain the path from raw data to a pretrained model, complementing the existing training chapter's focus on objectives and loss.

- Data sources, collection, licensing, and provenance at a conceptual level.
- Cleaning, deduplication, filtering, and mixture composition.
- Data contamination and benchmark leakage.
- Pre-training stages, token budgets, and training-data quality.
- The relationship between data, compute, and model behavior.

Potential learning aids: a data-pipeline diagram and a deterministic dataset-mixture explorer that demonstrates how changing mixture weights changes a toy corpus.

### 2. Model Architectures and Efficiency

Extend the current transformer and attention chapters with modern architecture choices and their tradeoffs.

- Decoder-only, encoder-only, and encoder-decoder model families.
- Dense models versus Mixture-of-Experts (MoE), including routing at a high level.
- Multi-query and grouped-query attention.
- Normalization and activation choices as architecture tradeoffs.
- Long-context techniques and the difference between context length and reliable recall.

Potential learning aids: a model-family comparison map and a toy MoE routing visualization. Coordinate coverage with existing encoder, decoder, feed-forward, and KV-cache pages.

### 3. Multimodal Models

Introduce how language models process and generate information beyond text.

- Text-and-image inputs, patch or region representations, and visual encoders.
- Audio input and output, including speech-to-text and text-to-speech pipelines.
- Video as sequences of frames and temporal information.
- Shared versus modality-specific representations.
- Common capabilities and limitations of multimodal systems.

Potential learning aids: a modality-to-representation flow diagram and a small frame/audio-token sequence visualizer using illustrative, precomputed data.

### 4. Evaluation and Reliability

Teach how to measure model performance and why a single score is not enough.

- Benchmarks, task-specific metrics, and held-out evaluation.
- Data leakage, contamination, and reproducibility.
- Human evaluation, pairwise preference, and disagreement.
- Calibration, uncertainty, and failure analysis.
- Evaluation of factuality and robustness, with clear limits on what automated scores establish.

Potential learning aids: a toy benchmark dashboard showing how aggregate scores can hide per-category weaknesses, and an evaluation-design checklist.

### 5. Alignment, Safety, and Model Behavior

Expand the fine-tuning and RLHF material into an accessible account of how desired behavior is specified and evaluated.

- Instruction tuning and preference data.
- Reward modeling and reinforcement-learning-based alignment at a conceptual level.
- Direct preference optimization and related alternatives.
- Policy and specification design, refusal behavior, and the limits of training-time interventions.
- Red-teaming and safety evaluation as measurement practices.

Potential learning aids: a preference-ranking exercise with a fixed example set and a training-stage diagram. Keep the content educational and focused on evaluation and responsible development.

### 6. Retrieval, Tools, and Agents

Explain how applications connect models to external information and actions.

- Retrieval-augmented generation (RAG): chunking, embeddings, retrieval, context assembly, and generation.
- Grounding, citations, freshness, and retrieval failure modes.
- Tool/function calling and the boundary between model output and application execution.
- Multi-step workflows, state, and orchestration.
- Agent reliability, permissions, and human oversight.

Potential learning aids: a step-by-step RAG pipeline and a tool-call lifecycle diagram. Clearly distinguish a language model's generated request from an application's execution of that request.

### 7. Serving and Production Inference

Take the existing inference chapter beyond token selection and explain the systems that deliver model responses.

- Prefill and decode stages, time-to-first-token, and inter-token latency.
- Batching, throughput, and latency tradeoffs.
- KV-cache memory use and its relationship to context length.
- Quantization and other efficiency techniques, with quality tradeoffs.
- Speculative decoding and high-level serving architecture.
- Cost, hardware constraints, and operational monitoring.

Potential learning aids: a request timeline and a simple latency/throughput tradeoff explorer with illustrative, not benchmark-claiming, values.

## Planned Extensions to Existing Chapters

| Existing chapter | Content to extend |
| --- | --- |
| Pre-transformer techniques | Add a concise progression from n-gram models through RNNs/LSTMs and sequence-to-sequence models; explain which limitations motivated attention-based architectures. |
| Tokenization | Clarify byte-level and subword approaches, Unicode and multilingual edge cases, tokenizer/model differences, and the effect of token counts on context and cost. Reconcile the current consolidated deep-dive routes with the older individual tokenizer pages. |
| Embeddings | Explain embedding tables and dimensions, static versus contextual representations, similarity limitations, and the relationship between embeddings and retrieval. |
| Transformer architecture | Make the complete block and forward pass easier to follow; deepen residual connections, normalization, positional information, and architectural variants without duplicating the attention chapter. |
| Attention | Connect the scaled dot-product derivation to masks, multi-head attention, GQA/MQA, and KV caching; explain computation and memory tradeoffs. |
| Training | Add the training loop, optimization, learning-rate schedules, batch size, gradient accumulation, and checkpointing; distinguish objective, optimizer, and data choices. |
| Inference and sampling | Connect logits and decoding strategies to serving constraints, context limits, and latency; keep algorithmic sampling explanations distinct from production systems. |
| Scaling laws | Explain compute/data/parameter tradeoffs, uncertainty in empirical trends, and where scaling-law predictions do not directly determine product capability. |
| Fine-tuning and RLHF | Clarify the stages from base model through instruction tuning and preference optimization; compare SFT, RLHF, DPO, and parameter-efficient fine-tuning with their tradeoffs. |

## Learning Path and Cross-Chapter Structure

1. Keep the current sequence as the core path from text representation through model architecture, training, and use.
2. Add explicit “prerequisites,” “next,” and “related topics” links where a chapter depends on another chapter.
3. Present new chapters as optional paths after the relevant foundations:
   - Data and pre-training after training fundamentals.
   - Model architectures alongside transformer and attention.
   - Multimodal models after embeddings and transformer architecture.
   - Evaluation and reliability after training and fine-tuning.
   - Alignment after fine-tuning.
   - Retrieval, tools, and agents after embeddings and inference.
   - Serving after inference and attention/KV cache.
4. Add a concise glossary for recurring terms and link glossary entries to the chapter that explains them fully.
5. Use consistent page-end navigation so readers can continue, return to an overview, or follow a related deep dive.

## Content and Interaction Standards

- Each chapter should start with a learning goal and a short plain-language overview, then build toward technical details.
- Use worked examples, diagrams, tables, and short checkpoints to break up long explanations.
- Introduce interactive elements only when they clarify a concept; keep each interaction focused and resettable.
- Use fixed, documented example data for demos; avoid presenting toy outputs as real model measurements.
- Provide accessible text alternatives for diagrams and announce meaningful interactive state changes.
- Add translation keys to every supported locale for new visible content, while preserving directionality for language-neutral formulas and demos.
- Cite reliable primary sources or authoritative references for technical facts, and revisit references as the field changes.

## Delivery Phases

### Phase 1 — Curriculum and Content Audit

- Map current pages to learning outcomes and identify overlap, missing prerequisites, and terminology inconsistencies.
- Agree on the target audience and the intended depth for each chapter.
- Define the final chapter names, routes, ownership, and cross-links before drafting content.
- Resolve the tokenization subtopic route divergence recorded in `02-sub-categories.md`.

### Phase 2 — Deepen the Existing Curriculum

- Extend existing chapters in the order of the current learning path.
- Add or improve diagrams and worked examples where they address identified gaps.
- Establish consistent chapter introductions, checkpoints, references, and end-of-page navigation.

### Phase 3 — Add New Chapters

- Add the proposed chapters in prerequisite order: Data and Pre-Training; Model Architectures and Efficiency; Multimodal Models; Evaluation and Reliability; Alignment, Safety, and Model Behavior; Retrieval, Tools, and Agents; Serving and Production Inference.
- For each chapter, complete an outline and factual review before adding detailed page content.
- Add focused subtopics only where a topic needs more than one self-contained explanation.

### Phase 4 — Interactions, Localization, and Quality Review

- Select and build the highest-value interactions after chapter content and learning goals are stable.
- Ensure routes, in-page links, translated content, keyboard navigation, and mobile layouts are coherent.
- Review all examples, claims, and references; label simplified demonstrations and known limitations.
- Gather reader feedback and prioritize revisions based on confusion or navigation gaps.

## Success Criteria

- The site has a coherent learning path from foundational concepts to modern model development and deployment.
- Each proposed new chapter has a clear scope, learning outcomes, and links to prerequisite and related chapters.
- Existing chapters are deepened without duplicating the new chapters or one another.
- Visualizations and interactions are accurate to their stated simplifications, accessible, and useful to learning.
- New content follows the existing localization and responsive-design patterns.
- Technical claims have suitable references, and the site does not imply that illustrative data is live model output or a benchmark result.
