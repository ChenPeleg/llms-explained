import EmbeddingsSectionNavigation from '../../components/EmbeddingsSectionNavigation';
import ContextShiftDemo from '../../components/embeddings/ContextShiftDemo';
import { useTranslate } from '../../hooks/useTranslate';

const ContextualEmbeddingsPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('emb_contextual_h1')}</h1>
            <p>{t('emb_contextual_intro')}</p>
            <p>{t('emb_contextual_p1')}</p>
            <p>{t('emb_contextual_p2')}</p>

            <div className="not-prose my-6">
                <ContextShiftDemo />
            </div>

            <EmbeddingsSectionNavigation showBackToOverview />
        </article>
    );
};

export default ContextualEmbeddingsPage;
