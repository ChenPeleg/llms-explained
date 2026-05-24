import SamplingExplorer from '../components/SamplingExplorer';

/**
 * Inference & Sampling Page
 * Covers temperature, top-k, top-p, greedy, and beam search.
 */
const InferencePage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Inference &amp; Sampling</h1>

            <p>
                After training, the model produces a <strong>logit vector</strong>{' '}
                over the vocabulary at each step. How we convert those logits
                into a sampled token determines the model's behaviour.
            </p>

            <h2>Greedy Decoding</h2>
            <p>
                Always pick the token with the highest probability. Fast and
                deterministic, but can get stuck in repetitive loops and misses
                the global optimal sequence.
            </p>

            <h2>Beam Search</h2>
            <p>
                Keep the top-<em>k</em> candidate sequences at each step,
                expanding all simultaneously. More expensive but finds a higher
                overall probability sequence. Common in machine translation;
                less common in open-ended generation.
            </p>

            <h2>Temperature</h2>
            <p>
                Before softmax, divide the logits by a{' '}
                <strong>temperature</strong> <em>T</em>:
            </p>
            <pre>
                <code>p(x) = softmax(logits / T)</code>
            </pre>
            <ul>
                <li>
                    <strong>T → 0</strong>: distribution sharpens → greedy.
                </li>
                <li>
                    <strong>T = 1</strong>: raw model distribution.
                </li>
                <li>
                    <strong>T &gt; 1</strong>: distribution flattens → more
                    random, creative, but also more likely to be incoherent.
                </li>
            </ul>

            <h2>Top-k Sampling</h2>
            <p>
                Keep only the <em>k</em> highest-probability tokens and
                renormalise. Cuts off the long tail of unlikely tokens.
                Typical values: k = 40–200.
            </p>

            <h2>Top-p (Nucleus) Sampling</h2>
            <p>
                Keep the smallest set of tokens whose cumulative probability
                exceeds <em>p</em> (e.g., p = 0.9). Unlike top-k, the number
                of candidates adapts to the distribution's entropy — sharp
                distributions keep fewer candidates, flat ones keep more.
            </p>

            <h2>Repetition Penalty</h2>
            <p>
                Divide logits of already-generated tokens by a penalty factor{' '}
                {'>'} 1. Reduces loops without fully eliminating repeat content.
            </p>

            {/* Interactive demo */}
            <div className="not-prose my-6">
                <SamplingExplorer />
            </div>
        </article>
    );
};

export default InferencePage;
