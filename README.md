# LLMs Explained

A frontend-only educational app about Large Language Models, deployed to GitHub Pages.

## About

This app helps developers and technically curious people understand how LLMs work under the hood. Topics covered include:

- **Tokenization** — how text is split into tokens; BPE, WordPiece
- **Embeddings** — turning tokens into vectors; semantic space
- **Transformer Architecture** — encoder/decoder, residual connections, layer norm
- **Attention Mechanism** — self-attention, multi-head attention, scaled dot-product
- **Training** — pre-training objectives, loss, backprop at a high level
- **Inference & Sampling** — temperature, top-k, top-p, greedy decoding
- **Scaling Laws** — Chinchilla, compute-optimal training
- **Fine-Tuning & RLHF** — SFT, reward models, PPO

## Live App

[https://chenpeleg.github.io/llms-explained/](https://chenpeleg.github.io/llms-explained/)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm run test
npm run lint
npm run typecheck
```

## Storybook

```bash
npm run storybook
```
