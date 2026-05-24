import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const DecoderPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/transformer" />
            <h1>{t('sub_decoder_h1')}</h1>
            <p>{t('sub_decoder_intro')}</p>
            <p>{t('sub_decoder_p1')}</p>
            <p>{t('sub_decoder_p2')}</p>
        </article>
    );
};

export default DecoderPage;
