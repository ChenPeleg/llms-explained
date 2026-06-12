import TokenizationSectionNavigation from '../../components/TokenizationSectionNavigation';
import TokenBudgetSimulator from '../../components/tokenization/TokenBudgetSimulator';
import { useTranslate } from '../../hooks/useTranslate';

const PromptEngineeringImplicationsPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('tok_deep_4_title')}</h1>
            <p>{t('tok_deep_4_intro')}</p>
            <p>{t('tok_deep_4_p1')}</p>
            <p>{t('tok_deep_4_p2')}</p>

            <div className="not-prose my-6">
                <TokenBudgetSimulator />
            </div>

            <TokenizationSectionNavigation showBackToOverview />
        </article>
    );
};

export default PromptEngineeringImplicationsPage;
