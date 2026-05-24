import { NavLink } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Sidebar Component
 * Persistent left-side navigation for desktop screens
 */
const Sidebar = () => {
    const { t } = useTranslate();

    const NAV_LINKS = [
        { to: '/', label: t('nav_home'), emoji: '🏠', end: true },
        { to: '/tokenization', label: t('nav_tokenization'), emoji: '✂️' },
        { to: '/embeddings', label: t('nav_embeddings'), emoji: '🔢' },
        { to: '/transformer', label: t('nav_transformer'), emoji: '🏗️' },
        { to: '/attention', label: t('nav_attention'), emoji: '👁️' },
        { to: '/training', label: t('nav_training'), emoji: '🎯' },
        { to: '/inference', label: t('nav_inference'), emoji: '⚡' },
        { to: '/scaling', label: t('nav_scaling'), emoji: '📈' },
        { to: '/finetuning', label: t('nav_finetuning'), emoji: '🎛️' },
    ];
    return (
        <aside className="hidden w-56 shrink-0 lg:block">
            <nav
                className="sticky top-14 overflow-y-auto pt-6"
                aria-label="Topic navigation"
            >
                <ul className="space-y-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                end={link.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                                        isActive
                                            ? 'bg-blue-50 text-blue-700 font-semibold dark:bg-blue-900/30 dark:text-blue-300'
                                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                    }`
                                }
                            >
                                <span aria-hidden="true">{link.emoji}</span>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
