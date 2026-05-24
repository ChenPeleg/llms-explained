import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../models/Language';

const LANGUAGE_LABELS: Record<Language, string> = {
    [Language.English]: 'EN',
    [Language.Hebrew]: 'עב',
    [Language.Arabic]: 'ع',
};

/**
 * LanguageSwitcher Component
 * Renders a compact button group for switching between supported languages.
 */
const LanguageSwitcher = () => {
    const { language, setLanguage, availableLanguages } = useLanguage();

    return (
        <div
            className="flex items-center gap-1"
            role="group"
            aria-label="Select language"
        >
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    aria-pressed={language === lang}
                    className={`rounded px-2 py-1 text-xs font-semibold transition-colors ${
                        language === lang
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                    {LANGUAGE_LABELS[lang]}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
