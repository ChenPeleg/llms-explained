import embeddingData from '../data/embedding-projections.json';
import { useTranslate } from '../hooks/useTranslate';

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

const CLUSTER_KEY_SUFFIXES = ['royalty', 'people', 'animals', 'cities'];

const points = embeddingData as EmbeddingPoint[];

/**
 * Embeddings Page
 * Covers word vectors, semantic space, and a 2-D scatter plot demo.
 */
const EmbeddingsPage = () => {
    const { t } = useTranslate();

    const clusterLabels = CLUSTER_KEY_SUFFIXES.map((s) =>
        t(`emb_cluster_${s}`)
    );

    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>{t('emb_h1')}</h1>

            <p>{t('emb_intro')}</p>

            <h2>{t('emb_h2_onehot')}</h2>
            <p>{t('emb_onehot_p')}</p>

            <h2>{t('emb_h2_semantic')}</h2>
            <p>{t('emb_semantic_p')}</p>
            <blockquote>
                <code>king − man + woman ≈ queen</code>
            </blockquote>
            <p>{t('emb_direction_p')}</p>

            <h2>{t('emb_h2_positional')}</h2>
            <p>{t('emb_positional_p')}</p>
            <ul>
                <li>
                    <strong>{t('emb_pos_sinusoidal_label')}</strong>{' '}
                    {t('emb_pos_sinusoidal_desc')}
                </li>
                <li>
                    <strong>{t('emb_pos_learned_label')}</strong>{' '}
                    {t('emb_pos_learned_desc')}
                </li>
                <li>
                    <strong>{t('emb_pos_rope_label')}</strong>{' '}
                    {t('emb_pos_rope_desc')}
                </li>
            </ul>

            {/* 2-D Scatter Plot */}
            <div className="not-prose my-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {t('emb_scatter_title')}
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    {t('emb_scatter_desc')}
                </p>

                {/* Legend */}
                <div className="mb-3 flex flex-wrap gap-3">
                    {clusterLabels.map((label, i) => (
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
