import TransformerDiagram from '../components/TransformerDiagram';

/**
 * Transformer Architecture Page
 * Covers the full encoder/decoder architecture, residual connections,
 * layer norm, and the stacking of blocks.
 */
const TransformerPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Transformer Architecture</h1>

            <p>
                The Transformer, introduced in{' '}
                <em>"Attention Is All You Need"</em> (Vaswani et al., 2017),
                replaced recurrent networks with pure attention, enabling
                massive parallelisation during training.
            </p>

            <h2>Encoder vs. Decoder</h2>
            <p>
                The original Transformer has two stacks:
            </p>
            <ul>
                <li>
                    <strong>Encoder</strong> — reads the full input sequence
                    bidirectionally. Used in models like BERT for understanding
                    tasks.
                </li>
                <li>
                    <strong>Decoder</strong> — generates tokens auto-regressively,
                    attending only to previous positions (causal masking). Used
                    in GPT-family models.
                </li>
                <li>
                    <strong>Encoder-Decoder</strong> — used in T5, BART, and
                    the original machine translation model. The decoder attends
                    to encoder outputs via cross-attention.
                </li>
            </ul>

            <h2>One Transformer Block</h2>
            <p>
                Every block in the stack follows the same pattern:
            </p>
            <ol>
                <li>
                    <strong>Multi-Head Self-Attention</strong> — each position
                    attends to all others (or just previous ones in the decoder).
                </li>
                <li>
                    <strong>Residual Connection + Layer Norm</strong> — the
                    attention output is added to the block's input, then
                    normalised.
                </li>
                <li>
                    <strong>Feed-Forward Network (FFN)</strong> — two linear
                    layers with a non-linearity (ReLU or GELU) applied
                    position-wise.
                </li>
                <li>
                    <strong>Residual Connection + Layer Norm</strong> — again,
                    wrap the FFN output with a skip connection and normalisation.
                </li>
            </ol>

            <h2>Why Residual Connections?</h2>
            <p>
                Residual (skip) connections allow gradients to flow directly
                through the network, preventing vanishing gradients in deep
                stacks. They also let the model learn an{' '}
                <em>incremental update</em> to the representation rather than a
                full transformation.
            </p>

            <h2>Layer Normalisation</h2>
            <p>
                Unlike batch norm, layer norm operates over the feature
                dimension independently for each token. This makes it
                insensitive to batch size and well-suited to variable-length
                sequences. Modern models (GPT-2+) typically use{' '}
                <strong>pre-norm</strong> (normalise before the sub-layer)
                rather than the original post-norm, improving training
                stability.
            </p>

            <h2>Typical Scale</h2>
            <ul>
                <li>
                    <strong>GPT-2 Small:</strong> 12 layers, d_model = 768, 12
                    attention heads, 117 M params
                </li>
                <li>
                    <strong>GPT-3:</strong> 96 layers, d_model = 12,288, 96
                    heads, 175 B params
                </li>
                <li>
                    <strong>LLaMA-2-7B:</strong> 32 layers, d_model = 4,096,
                    32 heads, 7 B params
                </li>
            </ul>

            {/* Interactive diagram */}
            <div className="not-prose my-6">
                <TransformerDiagram />
            </div>
        </article>
    );
};

export default TransformerPage;
