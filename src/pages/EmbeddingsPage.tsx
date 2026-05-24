import embeddingData from '../data/embedding-projections.json';

interface EmbeddingPoint {
    word: string;
    x: number;
    y: number;
    cluster: number;
}

const CLUSTER_COLORS = [
    { fill: '#3b82f6', stroke: '#1d4ed8' },   // blue  – royalty
    { fill: '#10b981', stroke: '#065f46' },   // green – people
    { fill: '#f59e0b', stroke: '#92400e' },   // amber – animals
    { fill: '#8b5cf6', stroke: '#4c1d95' },   // violet – cities
];

const CLUSTER_LABELS = ['Royalty', 'People', 'Animals', 'Cities'];

const points = embeddingData as EmbeddingPoint[];

/**
 * Embeddings Page
 * Covers word vectors, semantic space, and a 2-D scatter plot demo.
 */
const EmbeddingsPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Embeddings</h1>

            <p>
                Tokens are discrete symbols — they have no inherent numerical
                meaning. An <strong>embedding</strong> is a learned dense
                vector that gives each token a position in a continuous
                high-dimensional space. Similar tokens end up near each other.
            </p>

            <h2>From One-Hot to Dense Vectors</h2>
            <p>
                A vocabulary of 50,000 words could be represented with
                one-hot vectors of length 50,000, but these are sparse and
                encode no similarity. An embedding matrix{' '}
                <code>E ∈ ℝ^(vocab × d_model)</code> maps each token ID to a
                dense vector of dimension <code>d_model</code> (e.g., 768 for
                BERT-base, 4096 for LLaMA-2-7B).
            </p>

            <h2>Semantic Properties</h2>
            <p>
                Embeddings capture rich semantic and syntactic relationships.
                The classic example:
            </p>
            <blockquote>
                <code>king − man + woman ≈ queen</code>
            </blockquote>
            <p>
                This works because direction in embedding space corresponds to
                meaning. "Royalty" is a direction; "gender" is another.
            </p>

            <h2>Positional Encodings</h2>
            <p>
                Self-attention is permutation-invariant — it doesn't know the
                order of tokens by default. <strong>Positional encodings</strong>{' '}
                are added to (or concatenated with) token embeddings to inject
                position information:
            </p>
            <ul>
                <li>
                    <strong>Sinusoidal</strong> (original Transformer): fixed
                    sine/cosine patterns at different frequencies.
                </li>
                <li>
                    <strong>Learned</strong> (BERT, GPT): a trainable position
                    embedding table.
                </li>
                <li>
                    <strong>RoPE / ALiBi</strong> (LLaMA, Mistral): rotary or
                    relative positional encodings that generalise better to
                    long sequences.
                </li>
            </ul>

            {/* 2-D Scatter Plot */}
            <div className="not-prose my-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Embedding Space (2-D PCA Projection)
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    Pre-computed 2-D projections showing how semantically
                    similar words cluster together.
                </p>

                {/* Legend */}
                <div className="mb-3 flex flex-wrap gap-3">
                    {CLUSTER_LABELS.map((label, i) => (
                        <span
                            key={label}
                            className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300"
                        >
                            <span
                                className="inline-block h-3 w-3 rounded-full"
                                style={{
                                    backgroundColor: CLUSTER_COLORS[i].fill,
                                }}
                            />
                            {label}
                        </span>
                    ))}
                </div>

                <svg
                    viewBox="0 0 400 320"
                    className="w-full rounded-lg bg-gray-50 dark:bg-gray-900"
                    aria-label="2-D embedding space scatter plot"
                    role="img"
                >
                    {points.map((pt) => {
                        const cx = pt.x * 380 + 10;
                        const cy = (1 - pt.y) * 300 + 10;
                        const color = CLUSTER_COLORS[pt.cluster];
                        return (
                            <g key={pt.word}>
                                <circle
                                    cx={cx}
                                    cy={cy}
                                    r={6}
                                    fill={color.fill}
                                    stroke={color.stroke}
                                    strokeWidth={1.5}
                                    opacity={0.85}
                                />
                                <text
                                    x={cx + 8}
                                    y={cy + 4}
                                    fontSize={11}
                                    fill="currentColor"
                                    className="fill-gray-700 dark:fill-gray-200"
                                >
                                    {pt.word}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </article>
    );
};

export default EmbeddingsPage;
