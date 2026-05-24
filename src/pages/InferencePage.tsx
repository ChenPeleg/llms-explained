import SamplingExplorer from '../components/SamplingExplorer';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Inference & Sampling Page
 * Covers temperature, top-k, top-p, greedy, and beam search.
 */
const InferencePage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
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
                    <strong>{t('inf_temp_li1_label')}</strong>: {t('inf_temp_li1_desc')}
                </li>
                <li>
                    <strong>{t('inf_temp_li2_label')}</strong>: {t('inf_temp_li2_desc')}
                </li>
                <li>
                    <strong>{t('inf_temp_li3_label')}</strong>: {t('inf_temp_li3_desc')}
                </li>
            </ul>

            <h2>{t('inf_h2_topk')}</h2>
            <p>{t('inf_topk_p')}</p>

            <h2>{t('inf_h2_topp')}</h2>
            <p>{t('inf_topp_p')}</p>

            <h2>{t('inf_h2_rep')}</h2>
            <p>{t('inf_rep_p')}</p>

            {/* Interactive demo */}
            <div className="not-prose my-6">
                <SamplingExplorer />
            </div>
        </article>
    );
};

export default InferencePage;
