import { Link } from 'react-router';
import TransformerDiagram from '../components/TransformerDiagram';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Transformer Architecture Page
 * Covers the full encoder/decoder architecture, residual connections,
 * layer norm, and the stacking of blocks.
 */
const TransformerPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('tr_h1')}</h1>

            <p>{t('tr_intro')}</p>

            <h2>{t('tr_h2_enc_dec')}</h2>
            <p>{t('tr_enc_dec_intro')}</p>
            <ul>
                <li>
                    <strong>{t('tr_enc_label')}</strong> — {t('tr_enc_desc')}
                </li>
                <li>
                    <strong>{t('tr_dec_label')}</strong> — {t('tr_dec_desc')}
                </li>
                <li>
                    <strong>{t('tr_encdec_label')}</strong> —{' '}
                    {t('tr_encdec_desc')}
                </li>
            </ul>

            <h2>{t('tr_h2_block')}</h2>
            <p>{t('tr_block_intro')}</p>
            <ol>
                <li>
                    <strong>{t('tr_block_mhsa_label')}</strong> —{' '}
                    {t('tr_block_mhsa_desc')}
                </li>
                <li>
                    <strong>{t('tr_block_residual_label')}</strong> —{' '}
                    {t('tr_block_residual_desc')}
                </li>
                <li>
                    <strong>{t('tr_block_ffn_label')}</strong> —{' '}
                    {t('tr_block_ffn_desc')}
                </li>
                <li>
                    <strong>{t('tr_block_residual2_label')}</strong> —{' '}
                    {t('tr_block_residual2_desc')}
                </li>
            </ol>

            <h2>{t('tr_h2_residual')}</h2>
            <p>{t('tr_residual_p')}</p>

            <h2>{t('tr_h2_layernorm')}</h2>
            <p>{t('tr_layernorm_p')}</p>

            <h2>{t('tr_h2_scale')}</h2>
            <ul>
                <li>
                    <strong>GPT-2 Small:</strong> {t('tr_gpt2_desc')}
                </li>
                <li>
                    <strong>GPT-3:</strong> {t('tr_gpt3_desc')}
                </li>
                <li>
                    <strong>LLaMA-2-7B:</strong> {t('tr_llama_desc')}
                </li>
            </ul>

            <div className="not-prose my-6">
                <TransformerDiagram />
            </div>

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/transformer/encoder"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_encoder_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/transformer/decoder"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_decoder_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/transformer/feed-forward"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_ffn_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default TransformerPage;
