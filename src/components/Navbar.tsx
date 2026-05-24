import { useState } from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../hooks/useTheme';

const NAV_LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/tokenization', label: 'Tokenization' },
    { to: '/embeddings', label: 'Embeddings' },
    { to: '/transformer', label: 'Transformer' },
    { to: '/attention', label: 'Attention' },
    { to: '/training', label: 'Training' },
    { to: '/inference', label: 'Inference' },
    { to: '/scaling', label: 'Scaling Laws' },
    { to: '/finetuning', label: 'Fine-Tuning' },
];

/** Sun icon — shown in dark mode to switch back to light */
const SunIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
        />
    </svg>
);

/** Moon icon — shown in light mode to switch to dark */
const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
);

/** Hamburger / close icon for mobile menu */
const MenuIcon = ({ open }: { open: boolean }) =>
    open ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );

/**
 * Navbar Component
 * Top navigation bar with mobile hamburger menu and dark mode toggle
 */
const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors';

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900 dark:shadow-gray-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center justify-between">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-xl font-bold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                    >
                        LLMs Explained
                    </NavLink>

                    {/* Desktop nav */}
                    <nav
                        className="hidden items-center gap-5 lg:flex"
                        aria-label="Main navigation"
                    >
                        {NAV_LINKS.slice(1).map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={linkClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right controls */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                            aria-label="Toggle dark mode"
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 lg:hidden"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            <MenuIcon open={mobileOpen} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <nav
                    className="border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900 lg:hidden"
                    aria-label="Mobile navigation"
                >
                    <ul className="space-y-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    end={link.end}
                                    className={({ isActive }) =>
                                        `block rounded-md px-3 py-2 text-sm ${
                                            isActive
                                                ? 'bg-blue-50 text-blue-600 font-semibold dark:bg-blue-900/30 dark:text-blue-400'
                                                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                                        }`
                                    }
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
