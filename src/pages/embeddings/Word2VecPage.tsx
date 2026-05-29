import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const Word2VecPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/embeddings" />
            <h1>{t('sub_word2vec_h1')}</h1>
            <p>{t('sub_word2vec_intro')}</p>
            <p>{t('sub_word2vec_p1')}</p>
            <p>{t('sub_word2vec_p2')}</p>
        </article>
    );
};

export default Word2VecPage;
