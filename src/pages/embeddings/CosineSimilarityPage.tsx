import EmbeddingsSectionNavigation from '../../components/EmbeddingsSectionNavigation';
import CosineSimilarityExplorer from '../../components/embeddings/CosineSimilarityExplorer';
import { useTranslate } from '../../hooks/useTranslate';

const CosineSimilarityPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('emb_cosine_h1')}</h1>
            <p>{t('emb_cosine_intro')}</p>
            <p>{t('emb_cosine_p1')}</p>
            <p>{t('emb_cosine_p2')}</p>
            <blockquote>
                <code>{t('emb_similarity_formula')}</code>
            </blockquote>

            <div className="not-prose my-6">
                <CosineSimilarityExplorer />
            </div>

            <EmbeddingsSectionNavigation showBackToOverview />
        </article>
    );
};

export default CosineSimilarityPage;
