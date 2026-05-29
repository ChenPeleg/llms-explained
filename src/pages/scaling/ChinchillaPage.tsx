import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const ChinchillaPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/scaling" />
            <h1>{t('sub_chinchilla_h1')}</h1>
            <p>{t('sub_chinchilla_intro')}</p>
            <p>{t('sub_chinchilla_p1')}</p>
            <p>{t('sub_chinchilla_p2')}</p>
        </article>
    );
};

export default ChinchillaPage;
