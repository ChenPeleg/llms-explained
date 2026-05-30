import { Link } from 'react-router';
import embeddingData from '../data/embedding-projections.json';
import { useTranslate } from '../hooks/useTranslate';

interface EmbeddingPoint {
    word: string;
    x: number;
    y: number;
    cluster: number;
}

const CLUSTER_COLORS = [
    { fill: '#3b82f6', stroke: '#1d4ed8' },
    { fill: '#10b981', stroke: '#065f46' },
    { fill: '#f59e0b', stroke: '#92400e' },
    { fill: '#8b5cf6', stroke: '#4c1d95' },
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
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('emb_h1')}</h1>

            <p>{t('emb_intro')}</p>

            <h2>{t('emb_h2_onehot')}</h2>
            <p>{t('emb_onehot_p')}</p>

            <h2>{t('emb_h2_examples')}</h2>
            <p>{t('emb_examples_intro')}</p>
            <ul>
                <li>{t('emb_example_synonyms')}</li>
                <li>{t('emb_example_analogy')}</li>
                <li>{t('emb_example_domain')}</li>
                <li>{t('emb_example_composition')}</li>
            </ul>

            <h2>{t('emb_h2_semantic')}</h2>
            <p>{t('emb_semantic_p')}</p>
            <blockquote>
                <code>king − man + woman ≈ queen</code>
            </blockquote>
            <p>{t('emb_direction_p')}</p>

            <h2>{t('emb_h2_worked')}</h2>
            <p>{t('emb_worked_intro')}</p>
            <div className="not-prose my-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
                                {t('emb_worked_word')}
                            </th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
                                {t('emb_worked_vector')}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        <tr>
                            <td className="px-4 py-2 font-medium">king</td>
                            <td className="px-4 py-2 font-mono">
                                (0.9, 0.1, 0.0)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">queen</td>
                            <td className="px-4 py-2 font-mono">
                                (0.9, 0.9, 0.0)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">man</td>
                            <td className="px-4 py-2 font-mono">
                                (0.1, 0.05, 0.0)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">woman</td>
                            <td className="px-4 py-2 font-mono">
                                (0.1, 0.9, 0.0)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">dog</td>
                            <td className="px-4 py-2 font-mono">
                                (0.0, 0.1, 0.95)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">cat</td>
                            <td className="px-4 py-2 font-mono">
                                (0.0, 0.2, 0.9)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('emb_worked_caption')}
            </p>
            <p>{t('emb_worked_followup')}</p>

            <h2>{t('emb_h2_similarity')}</h2>
            <p>{t('emb_similarity_intro')}</p>
            <blockquote>
                <code>{t('emb_similarity_formula')}</code>
            </blockquote>
            <p>{t('emb_similarity_values')}</p>
            <p>{t('emb_similarity_examples_intro')}</p>
            <ul>
                <li>{t('emb_sim_example_high')}</li>
                <li>{t('emb_sim_example_mid')}</li>
                <li>{t('emb_sim_example_low')}</li>
            </ul>

            <h2>{t('emb_h2_learned')}</h2>
            <p>{t('emb_learned_p')}</p>
            <p>{t('emb_learned_steps_intro')}</p>
            <ol>
                <li>{t('emb_learned_step_lookup')}</li>
                <li>{t('emb_learned_step_forward')}</li>
                <li>{t('emb_learned_step_loss')}</li>
                <li>{t('emb_learned_step_update')}</li>
            </ol>

            <h2>{t('emb_h2_lifecycle')}</h2>
            <p>{t('emb_lifecycle_p')}</p>
            <ul>
                <li>
                    <strong>{t('emb_life_input_label')}</strong> —{' '}
                    {t('emb_life_input_desc')}
                </li>
                <li>
                    <strong>{t('emb_life_hidden_label')}</strong> —{' '}
                    {t('emb_life_hidden_desc')}
                </li>
                <li>
                    <strong>{t('emb_life_output_label')}</strong> —{' '}
                    {t('emb_life_output_desc')}
                </li>
            </ul>

            <h2>{t('emb_h2_pitfalls')}</h2>
            <p>{t('emb_pitfalls_intro')}</p>
            <ul>
                <li>{t('emb_pitfall_bias')}</li>
                <li>{t('emb_pitfall_polysemy')}</li>
                <li>{t('emb_pitfall_oov')}</li>
            </ul>

            <h2>{t('emb_h2_positional')}</h2>
            <p>{t('emb_positional_p')}</p>
            <p>
                {t('emb_positional_attention_bridge')}{' '}
                <Link to="/attention" className="font-medium underline">
                    {t('att_h1')}
                </Link>
                .
            </p>
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

            <div className="not-prose my-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {t('emb_scatter_title')}
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    {t('emb_scatter_desc')}
                </p>

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

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/embeddings/word2vec"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_word2vec_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/embeddings/positional-encodings"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_positional_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default EmbeddingsPage;
