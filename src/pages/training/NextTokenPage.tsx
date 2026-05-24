import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const NextTokenPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/training" />
            <h1>{t('sub_nexttoken_h1')}</h1>
            <p>{t('sub_nexttoken_intro')}</p>
            <p>{t('sub_nexttoken_p1')}</p>
            <p>{t('sub_nexttoken_p2')}</p>
        </article>
    );
};

export default NextTokenPage;
