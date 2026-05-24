import { Link } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Scaling Laws Page
 * Covers Chinchilla optimal training and the relationship between
 * compute, data, and model size.
 */
const ScalingLawsPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('scl_h1')}</h1>

            <p>{t('scl_intro')}</p>

            <h2>{t('scl_h2_kaplan')}</h2>
            <p>{t('scl_kaplan_p')}</p>
            <ul>
                <li>
                    <strong>{t('scl_kaplan_n_label')}</strong>: L ∝ N⁻⁰·⁰⁷⁶
                </li>
                <li>
                    <strong>{t('scl_kaplan_d_label')}</strong>: L ∝ D⁻⁰·⁰⁹⁵
                </li>
                <li>
                    <strong>{t('scl_kaplan_c_label')}</strong>: L ∝ C⁻⁰·⁰⁵
                </li>
            </ul>
            <p>{t('scl_kaplan_p2')}</p>

            <h2>{t('scl_h2_chinchilla')}</h2>
            <p>{t('scl_chinchilla_p')}</p>
            <blockquote>{t('scl_chinchilla_quote')}</blockquote>
            <p>{t('scl_chinchilla_p2')}</p>

            <h2>{t('scl_h2_implications')}</h2>
            <ul>
                <li>{t('scl_impl_li1')}</li>
                <li>{t('scl_impl_li2')}</li>
                <li>{t('scl_impl_li3')}</li>
            </ul>

            <h2>{t('scl_h2_emergent')}</h2>
            <p>{t('scl_emergent_p')}</p>

            <h2>{t('scl_h2_downstream')}</h2>
            <p>{t('scl_downstream_p')}</p>

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/scaling/chinchilla"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_chinchilla_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/scaling/emergent-abilities"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_emergent_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default ScalingLawsPage;
