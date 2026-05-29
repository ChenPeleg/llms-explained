import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const WordPiecePage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/tokenization" />
            <h1>{t('sub_wordpiece_h1')}</h1>
            <p>{t('sub_wordpiece_intro')}</p>
            <p>{t('sub_wordpiece_p1')}</p>
            <p>{t('sub_wordpiece_p2')}</p>
        </article>
    );
};

export default WordPiecePage;
