import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const EmergentPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/scaling" />
            <h1>{t('sub_emergent_h1')}</h1>
            <p>{t('sub_emergent_intro')}</p>
            <p>{t('sub_emergent_p1')}</p>
            <p>{t('sub_emergent_p2')}</p>
        </article>
    );
};

export default EmergentPage;
