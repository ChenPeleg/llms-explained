import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const TikTokenPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/tokenization" />
            <h1>{t('sub_tiktoken_h1')}</h1>
            <p>{t('sub_tiktoken_intro')}</p>
            <p>{t('sub_tiktoken_p1')}</p>
            <p>{t('sub_tiktoken_p2')}</p>
        </article>
    );
};

export default TikTokenPage;
