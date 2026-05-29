import { Link } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

interface BackToMainArticleButtonProps {
    to: string;
}

const BackToMainArticleButton = ({ to }: BackToMainArticleButtonProps) => {
    const { t } = useTranslate();

    return (
        <div className="not-prose mb-6">
            <Link
                to={to}
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
                {t('back_to_main_article')}
            </Link>
        </div>
    );
};

export default BackToMainArticleButton;
