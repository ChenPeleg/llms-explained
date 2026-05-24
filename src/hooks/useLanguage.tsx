import { useEffect } from 'react';
import { useService } from '../services/provider/useService';
import { TranslationService } from '../services/Translation.service';
import { LocalStorageService } from '../services/LocalStorage.service';
import { useGlobalState } from '../stores/GlobalState';
import { Language } from '../models/Language';

const LANGUAGE_STORAGE_KEY = 'app-language';

/**
 * Helper function to get document direction based on language
 * Hebrew and Arabic are RTL (right-to-left), English is LTR (left-to-right)
 */
const getDirectionForLanguage = (language: Language): 'rtl' | 'ltr' => {
    return language === Language.Hebrew || language === Language.Arabic
        ? 'rtl'
        : 'ltr';
};

/**
 * Hook to manage language switching and document direction
 *
 * This hook provides:
 * - Current language
 * - setLanguage method to switch languages
 * - Automatically sets document direction (rtl for Hebrew/Arabic, ltr for English)
 * - Persists the chosen language to localStorage
 * - Access to translation service for getting available languages
 *
 * @returns Object containing language, setLanguage method, and available languages
 */
export const useLanguage = () => {
    const [translationService, localStorageService] = useService([
        TranslationService,
        LocalStorageService,
    ]);
    const { globalState, setLanguage: setGlobalLanguage } = useGlobalState();

    const currentLanguage: Language = globalState.language;

    // Hydrate language from localStorage on mount
    useEffect(() => {
        const stored = localStorageService.getItem(LANGUAGE_STORAGE_KEY);
        if (stored && (Object.values(Language) as string[]).includes(stored)) {
            setGlobalLanguage(stored as Language);
        }
        // Intentionally run only on mount to load persisted preference
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Set the language, update document direction, and persist to localStorage
     * @param language - The language to switch to
     */
    const setLanguage = (language: Language) => {
        setGlobalLanguage(language);
        localStorageService.setItem(LANGUAGE_STORAGE_KEY, language);
    };

    // Apply dir/lang attributes on <html> when language changes
    useEffect(() => {
        const direction = getDirectionForLanguage(currentLanguage);
        document.documentElement.dir = direction;
        document.documentElement.lang = currentLanguage;
    }, [currentLanguage]);

    /**
     * Get all available languages from the translation service
     */
    const availableLanguages = translationService.getAvailableLanguages();

    return {
        language: currentLanguage,
        setLanguage,
        availableLanguages,
    };
};
