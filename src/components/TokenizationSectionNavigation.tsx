import { Link } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

interface TokenizationSectionNavigationProps {
    showBackToOverview?: boolean;
}

const DEEP_DIVE_LINKS = [
    {
        to: '/tokenization/subword-algorithms',
        key: 'tok_deep_1_label',
    },
    {
        to: '/tokenization/model-tokenizers',
        key: 'tok_deep_2_label',
    },
    {
        to: '/tokenization/multilingual-edge-cases',
        key: 'tok_deep_3_label',
    },
    {
        to: '/tokenization/prompt-engineering-implications',
        key: 'tok_deep_4_label',
    },
];

const TokenizationSectionNavigation = ({
    showBackToOverview = false,
}: TokenizationSectionNavigationProps) => {
    const { t } = useTranslate();
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
            <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                {t('tok_next_section')}
            </h2>
            <p className="mb-5">
                <Link
                    to="/embeddings"
                    onClick={scrollToTop}
                    className="text-blue-700 hover:underline dark:text-blue-300"
                >
                    {t('nav_embeddings')}
                </Link>
            </p>

            <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                {t('tok_go_deeper')}
            </h2>
            <ul className="mb-5 space-y-2">
                {DEEP_DIVE_LINKS.map((deepDiveLink) => (
                    <li key={deepDiveLink.to}>
                        <Link
                            to={deepDiveLink.to}
                            onClick={scrollToTop}
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t(deepDiveLink.key)}
                        </Link>
                    </li>
                ))}
            </ul>

            {showBackToOverview && (
                <>
                    <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                        {t('tok_back_to_overview_heading')}
                    </h2>
                    <p>
                        <Link
                            to="/tokenization"
                            onClick={scrollToTop}
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('tok_back_to_overview_link')}
                        </Link>
                    </p>
                </>
            )}
        </div>
    );
};

export default TokenizationSectionNavigation;
