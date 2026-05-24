import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const BeamSearchPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/inference" />
            <h1>{t('sub_beamsearch_h1')}</h1>
            <p>{t('sub_beamsearch_intro')}</p>
            <p>{t('sub_beamsearch_p1')}</p>
            <p>{t('sub_beamsearch_p2')}</p>
        </article>
    );
};

export default BeamSearchPage;
