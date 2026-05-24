import { NavLink } from 'react-router';

const NAV_LINKS = [
    { to: '/', label: 'Home', emoji: '🏠', end: true },
    { to: '/tokenization', label: 'Tokenization', emoji: '✂️' },
    { to: '/embeddings', label: 'Embeddings', emoji: '🔢' },
    { to: '/transformer', label: 'Transformer', emoji: '🏗️' },
    { to: '/attention', label: 'Attention', emoji: '👁️' },
    { to: '/training', label: 'Training', emoji: '🎯' },
    { to: '/inference', label: 'Inference', emoji: '⚡' },
    { to: '/scaling', label: 'Scaling Laws', emoji: '📈' },
    { to: '/finetuning', label: 'Fine-Tuning & RLHF', emoji: '🎛️' },
];

/**
 * Sidebar Component
 * Persistent left-side navigation for desktop screens
 */
const Sidebar = () => {
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
