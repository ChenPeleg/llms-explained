import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const MultiHeadPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/attention" />
            <h1>{t('sub_multihead_h1')}</h1>
            <p>{t('sub_multihead_intro')}</p>
            <p>{t('sub_multihead_p1')}</p>
            <p>{t('sub_multihead_p2')}</p>
        </article>
    );
};

export default MultiHeadPage;
