import EmbeddingsSectionNavigation from '../../components/EmbeddingsSectionNavigation';
import VectorArithmeticDemo from '../../components/embeddings/VectorArithmeticDemo';
import { useTranslate } from '../../hooks/useTranslate';

const Word2VecPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('sub_word2vec_h1')}</h1>
            <p>{t('sub_word2vec_intro')}</p>
            <p>{t('sub_word2vec_p1')}</p>
            <p>{t('sub_word2vec_p2')}</p>
            <p>{t('sub_word2vec_p3')}</p>
            <p>{t('sub_word2vec_p4')}</p>

            <div className="not-prose my-6">
                <VectorArithmeticDemo />
            </div>

            <EmbeddingsSectionNavigation showBackToOverview />
        </article>
    );
};

export default Word2VecPage;
