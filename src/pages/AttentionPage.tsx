import AttentionHeatmap from '../components/AttentionHeatmap';

/**
 * Attention Mechanism Page
 * Covers self-attention, multi-head attention, and scaled dot-product attention.
 */
const AttentionPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Attention Mechanism</h1>

            <p>
                Attention is the core operation that allows the Transformer to
                model relationships between tokens regardless of their distance
                in the sequence. Unlike RNNs, there's no sequential bottleneck.
            </p>

            <h2>Scaled Dot-Product Attention</h2>
            <p>
                Given an input matrix <code>X</code>, three projections are
                computed:
            </p>
            <ul>
                <li>
                    <strong>Q (Query)</strong> — what this position is looking
                    for.
                </li>
                <li>
                    <strong>K (Key)</strong> — what each position has to offer.
                </li>
                <li>
                    <strong>V (Value)</strong> — the actual information to
                    aggregate.
                </li>
            </ul>
            <p>The attention output is:</p>
            <pre>
                <code>Attention(Q, K, V) = softmax(Q Kᵀ / √d_k) · V</code>
            </pre>
            <p>
                Dividing by <code>√d_k</code> (the key dimension) prevents the
                dot products from growing large and pushing softmax into
                saturation.
            </p>

            <h2>Multi-Head Attention</h2>
            <p>
                Instead of a single attention function, the model runs{' '}
                <em>h</em> attention heads in parallel, each with its own
                Q/K/V projections into a smaller subspace (dimension{' '}
                <code>d_k = d_model / h</code>). The outputs are concatenated
                and projected back:
            </p>
            <pre>
                <code>
                    MultiHead(Q, K, V) = Concat(head₁, …, headₕ) · Wₒ
                </code>
            </pre>
            <p>
                Different heads can specialise — one might focus on syntactic
                agreement, another on co-reference, another on semantic
                similarity.
            </p>

            <h2>Causal (Masked) Attention</h2>
            <p>
                In decoder-only models (GPT family), the attention matrix is
                masked so each position can only attend to itself and
                earlier positions. This preserves the auto-regressive property:
                the model predicts token <em>t</em> using only tokens 1 … t−1.
            </p>

            <h2>Flash Attention</h2>
            <p>
                The naive attention implementation materialises the full{' '}
                <code>N × N</code> attention matrix, which is{' '}
                <strong>O(N²)</strong> in memory. Flash Attention rewrites the
                computation using tiling to keep it in fast SRAM, reducing
                memory to <strong>O(N)</strong> while computing exactly the
                same result.
            </p>

            {/* Interactive heatmap */}
            <div className="not-prose my-6">
                <AttentionHeatmap />
            </div>
        </article>
    );
};

export default AttentionPage;
