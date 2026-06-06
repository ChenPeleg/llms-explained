import TokenizationSectionNavigation from '../../components/TokenizationSectionNavigation';
import { useTranslate } from '../../hooks/useTranslate';

const SubwordAlgorithmsPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('tok_deep_1_title')}</h1>
            <p>{t('tok_deep_1_intro')}</p>
            <p>{t('tok_deep_1_p1')}</p>
            <p>{t('tok_deep_1_p2')}</p>
            <TokenizationSectionNavigation showBackToOverview />
        </article>
    );
};

export default SubwordAlgorithmsPage;
