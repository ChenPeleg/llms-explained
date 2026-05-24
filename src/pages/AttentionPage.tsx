import { Link } from 'react-router';
import AttentionHeatmap from '../components/AttentionHeatmap';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Attention Mechanism Page
 * Covers self-attention, multi-head attention, and scaled dot-product attention.
 */
const AttentionPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('att_h1')}</h1>

            <p>{t('att_intro')}</p>

            <h2>{t('att_h2_sdp')}</h2>
            <p>{t('att_sdp_intro')}</p>
            <ul>
                <li>
                    <strong>{t('att_q_label')}</strong> — {t('att_q_desc')}
                </li>
                <li>
                    <strong>{t('att_k_label')}</strong> — {t('att_k_desc')}
                </li>
                <li>
                    <strong>{t('att_v_label')}</strong> — {t('att_v_desc')}
                </li>
            </ul>
            <p>{t('att_formula_label')}</p>
            <pre>
                <code>Attention(Q, K, V) = softmax(Q Kᵀ / √d_k) · V</code>
            </pre>
            <p>{t('att_scaling_p')}</p>

            <h2>{t('att_h2_mha')}</h2>
            <p>{t('att_mha_p')}</p>
            <pre>
                <code>MultiHead(Q, K, V) = Concat(head₁, …, headₕ) · Wₒ</code>
            </pre>
            <p>{t('att_mha_p2')}</p>

            <h2>{t('att_h2_causal')}</h2>
            <p>{t('att_causal_p')}</p>

            <h2>{t('att_h2_flash')}</h2>
            <p>{t('att_flash_p')}</p>

            <div className="not-prose my-6">
                <AttentionHeatmap />
            </div>

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/attention/self-attention"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_selfattn_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/attention/multi-head"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_multihead_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/attention/kv-cache"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_kvcache_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default AttentionPage;
