import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const RLHFPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/finetuning" />
            <h1>{t('sub_rlhf_h1')}</h1>
            <p>{t('sub_rlhf_intro')}</p>
            <p>{t('sub_rlhf_p1')}</p>
            <p>{t('sub_rlhf_p2')}</p>
        </article>
    );
};

export default RLHFPage;
