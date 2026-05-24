import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const FeedForwardPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/transformer" />
            <h1>{t('sub_ffn_h1')}</h1>
            <p>{t('sub_ffn_intro')}</p>
            <p>{t('sub_ffn_p1')}</p>
            <p>{t('sub_ffn_p2')}</p>
        </article>
    );
};

export default FeedForwardPage;
