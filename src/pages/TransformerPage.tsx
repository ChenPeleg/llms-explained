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
        <article className="prose prose-gray max-w-none dark:prose-invert">
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
                    <strong>{t('tr_encdec_label')}</strong> — {t('tr_encdec_desc')}
                </li>
            </ul>

            <h2>{t('tr_h2_block')}</h2>
            <p>{t('tr_block_intro')}</p>
            <ol>
                <li>
                    <strong>{t('tr_block_mhsa_label')}</strong> — {t('tr_block_mhsa_desc')}
                </li>
                <li>
                    <strong>{t('tr_block_residual_label')}</strong> — {t('tr_block_residual_desc')}
                </li>
                <li>
                    <strong>{t('tr_block_ffn_label')}</strong> — {t('tr_block_ffn_desc')}
                </li>
                <li>
                    <strong>{t('tr_block_residual2_label')}</strong> — {t('tr_block_residual2_desc')}
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

            {/* Interactive diagram */}
            <div className="not-prose my-6">
                <TransformerDiagram />
            </div>
        </article>
    );
};

export default TransformerPage;
