import { Link } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Training Page
 * Covers pre-training objectives, loss functions, and high-level backprop.
 */
const TrainingPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
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
                    <strong>{t('train_adam_label')}</strong> —{' '}
                    {t('train_adam_desc')}
                </li>
                <li>
                    <strong>{t('train_lr_label')}</strong> —{' '}
                    {t('train_lr_desc')}
                </li>
                <li>
                    <strong>{t('train_clip_label')}</strong> —{' '}
                    {t('train_clip_desc')}
                </li>
                <li>
                    <strong>{t('train_mixed_label')}</strong> —{' '}
                    {t('train_mixed_desc')}
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

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/training/next-token"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_nexttoken_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/training/masked-lm"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_maskedlm_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/training/loss"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_loss_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default TrainingPage;
