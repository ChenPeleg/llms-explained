import { Link } from 'react-router';
import SamplingExplorer from '../components/SamplingExplorer';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Inference & Sampling Page
 * Covers temperature, top-k, top-p, greedy, and beam search.
 */
const InferencePage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('inf_h1')}</h1>

            <p>{t('inf_intro')}</p>

            <h2>{t('inf_h2_greedy')}</h2>
            <p>{t('inf_greedy_p')}</p>

            <h2>{t('inf_h2_beam')}</h2>
            <p>{t('inf_beam_p')}</p>

            <h2>{t('inf_h2_temp')}</h2>
            <p>{t('inf_temp_p')}</p>
            <pre>
                <code>p(x) = softmax(logits / T)</code>
            </pre>
            <ul>
                <li>
                    <strong>{t('inf_temp_li1_label')}</strong>:{' '}
                    {t('inf_temp_li1_desc')}
                </li>
                <li>
                    <strong>{t('inf_temp_li2_label')}</strong>:{' '}
                    {t('inf_temp_li2_desc')}
                </li>
                <li>
                    <strong>{t('inf_temp_li3_label')}</strong>:{' '}
                    {t('inf_temp_li3_desc')}
                </li>
            </ul>

            <h2>{t('inf_h2_topk')}</h2>
            <p>{t('inf_topk_p')}</p>

            <h2>{t('inf_h2_topp')}</h2>
            <p>{t('inf_topp_p')}</p>

            <h2>{t('inf_h2_rep')}</h2>
            <p>{t('inf_rep_p')}</p>

            <div className="not-prose my-6">
                <SamplingExplorer />
            </div>

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/inference/temperature"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_temperature_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/inference/top-k-top-p"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_topkp_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/inference/beam-search"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_beamsearch_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default InferencePage;
