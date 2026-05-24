import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const TopKPPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/inference" />
            <h1>{t('sub_topkp_h1')}</h1>
            <p>{t('sub_topkp_intro')}</p>
            <p>{t('sub_topkp_p1')}</p>
            <p>{t('sub_topkp_p2')}</p>
        </article>
    );
};

export default TopKPPage;
