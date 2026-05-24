/**
 * Training Page
 * Covers pre-training objectives, loss functions, and high-level backprop.
 */
const TrainingPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Training</h1>

            <p>
                Training a large language model involves two broad phases:
                massive <strong>pre-training</strong> on unlabelled text, and
                optional <strong>fine-tuning</strong> for specific tasks or
                alignment.
            </p>

            <h2>Pre-training Objectives</h2>

            <h3>Causal Language Modelling (CLM)</h3>
            <p>
                Used by GPT-family models. The model predicts the{' '}
                <strong>next token</strong> given all previous tokens. The loss
                is the average negative log-likelihood across all positions:
            </p>
            <pre>
                <code>{'L = −(1/T) Σ log P(xₜ | x₁, …, x_{t-1})'}</code>
            </pre>
            <p>
                Because every position provides a training signal, CLM is
                extremely data-efficient — a single document of length T gives
                T training examples.
            </p>

            <h3>Masked Language Modelling (MLM)</h3>
            <p>
                Used by BERT. Approximately 15% of tokens are replaced with a{' '}
                <code>[MASK]</code> token, and the model predicts the original.
                This allows bidirectional context but the model can't be used
                auto-regressively out of the box.
            </p>

            <h3>Span Corruption (T5)</h3>
            <p>
                Random spans of text are replaced with sentinel tokens. The
                decoder must reconstruct the missing spans, giving a
                sequence-to-sequence pre-training signal.
            </p>

            <h2>The Loss Landscape</h2>
            <p>
                LLM training minimises cross-entropy loss using mini-batch
                stochastic gradient descent. Because the loss landscape has
                many local minima, several tricks help:
            </p>
            <ul>
                <li>
                    <strong>Adam / AdamW</strong> — adaptive learning rates per
                    parameter, with weight decay decoupled.
                </li>
                <li>
                    <strong>Learning rate warmup + cosine decay</strong> — ramp
                    up slowly, then decay smoothly to near-zero.
                </li>
                <li>
                    <strong>Gradient clipping</strong> — cap gradient norm to
                    prevent explosive updates.
                </li>
                <li>
                    <strong>Mixed precision (BF16 / FP16)</strong> — halves
                    memory and speeds up matrix multiplications on modern GPUs.
                </li>
            </ul>

            <h2>Scale of Pre-training</h2>
            <p>
                Modern frontier models are trained on trillions of tokens.
                GPT-3 was trained on ~300B tokens; LLaMA-2 on 2T tokens.
                Training compute is measured in FLOPs — a 7B-parameter model
                trained on 1T tokens uses roughly{' '}
                <code>6 × 7×10⁹ × 10¹² ≈ 4×10²²</code> FLOPs.
            </p>

            <h2>Data Pipeline</h2>
            <p>
                Raw text from the web, books, code, and other sources is:
            </p>
            <ol>
                <li>Deduplicated (exact and near-duplicate removal).</li>
                <li>Quality-filtered (heuristic and classifier-based).</li>
                <li>
                    Tokenized and packed into fixed-length chunks (e.g., 2048
                    or 8192 tokens).
                </li>
                <li>
                    Shuffled and streamed from storage during training.
                </li>
            </ol>
        </article>
    );
};

export default TrainingPage;
