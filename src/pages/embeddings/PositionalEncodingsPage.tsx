import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const PositionalEncodingsPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/embeddings" />
            <h1>{t('sub_positional_h1')}</h1>
            <p>{t('sub_positional_intro')}</p>
            <p>{t('sub_positional_p1')}</p>
            <p>{t('sub_positional_p2')}</p>
        </article>
    );
};

export default PositionalEncodingsPage;
