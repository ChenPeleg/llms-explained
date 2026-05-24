import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const EncoderPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/transformer" />
            <h1>{t('sub_encoder_h1')}</h1>
            <p>{t('sub_encoder_intro')}</p>
            <p>{t('sub_encoder_p1')}</p>
            <p>{t('sub_encoder_p2')}</p>
        </article>
    );
};

export default EncoderPage;
