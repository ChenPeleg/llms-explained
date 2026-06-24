import EmbeddingsSectionNavigation from '../../components/EmbeddingsSectionNavigation';
import SinusoidalWaveVisualizer from '../../components/embeddings/SinusoidalWaveVisualizer';
import { useTranslate } from '../../hooks/useTranslate';

const PositionalEncodingsPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('sub_positional_h1')}</h1>
            <p>{t('sub_positional_intro')}</p>
            <p>{t('sub_positional_p1')}</p>
            <p>{t('sub_positional_p2')}</p>
            <p>{t('sub_positional_p3')}</p>
            <p>{t('sub_positional_p4')}</p>

            <div className="not-prose my-6">
                <SinusoidalWaveVisualizer />
            </div>

            <EmbeddingsSectionNavigation showBackToOverview />
        </article>
    );
};

export default PositionalEncodingsPage;
