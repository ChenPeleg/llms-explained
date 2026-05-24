import BackToMainArticleButton from '../../components/BackToMainArticleButton';
import { useTranslate } from '../../hooks/useTranslate';

const SelfAttentionPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <BackToMainArticleButton to="/attention" />
            <h1>{t('sub_selfattn_h1')}</h1>
            <p>{t('sub_selfattn_intro')}</p>
            <p>{t('sub_selfattn_p1')}</p>
            <p>{t('sub_selfattn_p2')}</p>
        </article>
    );
};

export default SelfAttentionPage;
