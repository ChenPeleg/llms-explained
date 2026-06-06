import TokenizationSectionNavigation from '../../components/TokenizationSectionNavigation';
import { useTranslate } from '../../hooks/useTranslate';

const RealModelTokenizersPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('tok_deep_2_title')}</h1>
            <p>{t('tok_deep_2_intro')}</p>
            <p>{t('tok_deep_2_p1')}</p>
            <p>{t('tok_deep_2_p2')}</p>
            <TokenizationSectionNavigation showBackToOverview />
        </article>
    );
};

export default RealModelTokenizersPage;
