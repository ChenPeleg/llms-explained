import { useTranslate } from '../hooks/useTranslate';

/**
 * Training Page
 * Covers pre-training objectives, loss functions, and high-level backprop.
 */
const TrainingPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>{t('train_h1')}</h1>

            <p>{t('train_intro')}</p>

            <h2>{t('train_h2_objectives')}</h2>

            <h3>{t('train_h3_clm')}</h3>
            <p>{t('train_clm_p')}</p>
            <pre>
                <code>{'L = −(1/T) Σ log P(xₜ | x₁, …, x_{t-1})'}</code>
            </pre>
            <p>{t('train_clm_p2')}</p>

            <h3>{t('train_h3_mlm')}</h3>
            <p>{t('train_mlm_p')}</p>

            <h3>{t('train_h3_span')}</h3>
            <p>{t('train_span_p')}</p>

            <h2>{t('train_h2_loss')}</h2>
            <p>{t('train_loss_p')}</p>
            <ul>
                <li>
                    <strong>{t('train_adam_label')}</strong> — {t('train_adam_desc')}
                </li>
                <li>
                    <strong>{t('train_lr_label')}</strong> — {t('train_lr_desc')}
                </li>
                <li>
                    <strong>{t('train_clip_label')}</strong> — {t('train_clip_desc')}
                </li>
                <li>
                    <strong>{t('train_mixed_label')}</strong> — {t('train_mixed_desc')}
                </li>
            </ul>

            <h2>{t('train_h2_scale')}</h2>
            <p>{t('train_scale_p')}</p>

            <h2>{t('train_h2_data')}</h2>
            <p>{t('train_data_intro')}</p>
            <ol>
                <li>{t('train_data_li1')}</li>
                <li>{t('train_data_li2')}</li>
                <li>{t('train_data_li3')}</li>
                <li>{t('train_data_li4')}</li>
            </ol>
        </article>
    );
};

export default TrainingPage;
