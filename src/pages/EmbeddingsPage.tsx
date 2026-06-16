import EmbeddingsSectionNavigation from '../components/EmbeddingsSectionNavigation';
import EmbeddingScatterPlot from '../components/embeddings/EmbeddingScatterPlot';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Embeddings Page
 * Covers word vectors, semantic space, and a 2-D scatter plot demo.
 */
const EmbeddingsPage = () => {
    const { t } = useTranslate();

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
                            <td className="px-4 py-2 font-mono">(0.9, 0.1, 0.0)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">queen</td>
                            <td className="px-4 py-2 font-mono">(0.9, 0.9, 0.0)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">man</td>
                            <td className="px-4 py-2 font-mono">(0.1, 0.05, 0.0)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">woman</td>
                            <td className="px-4 py-2 font-mono">(0.1, 0.9, 0.0)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('emb_worked_caption')}</p>
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

            <div className="not-prose my-6">
                <EmbeddingScatterPlot />
            </div>

            <h2>{t('emb_checkpoint_h2')}</h2>
            <p>{t('emb_checkpoint_intro')}</p>
            <ul>
                <li>{t('emb_checkpoint_li1')}</li>
                <li>{t('emb_checkpoint_li2')}</li>
                <li>{t('emb_checkpoint_li3')}</li>
            </ul>

            <EmbeddingsSectionNavigation />
        </article>
    );
};

export default EmbeddingsPage;
