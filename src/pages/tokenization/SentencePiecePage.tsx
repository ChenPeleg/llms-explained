import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const SentencePiecePage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/tokenization" />
            <h1>{t('sub_sentencepiece_h1')}</h1>
            <p>{t('sub_sentencepiece_intro')}</p>
            <p>{t('sub_sentencepiece_p1')}</p>
            <p>{t('sub_sentencepiece_p2')}</p>
        </article>
    );
};

export default SentencePiecePage;
