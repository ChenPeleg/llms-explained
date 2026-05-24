import { NavLink } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Home Page
 * Landing page with a brief intro and links to all topic sections.
 */
const HomePage = () => {
    const { t } = useTranslate();

    const TOPICS = [
        {
            to: '/tokenization',
            emoji: '✂️',
            titleKey: 'nav_tokenization',
            descKey: 'home_topic_tokenization_desc',
        },
        {
            to: '/embeddings',
            emoji: '🔢',
            titleKey: 'nav_embeddings',
            descKey: 'home_topic_embeddings_desc',
        },
        {
            to: '/transformer',
            emoji: '🏗️',
            titleKey: 'nav_transformer',
            descKey: 'home_topic_transformer_desc',
        },
        {
            to: '/attention',
            emoji: '👁️',
            titleKey: 'nav_attention',
            descKey: 'home_topic_attention_desc',
        },
        {
            to: '/training',
            emoji: '🎯',
            titleKey: 'nav_training',
            descKey: 'home_topic_training_desc',
        },
        {
            to: '/inference',
            emoji: '⚡',
            titleKey: 'nav_inference',
            descKey: 'home_topic_inference_desc',
        },
        {
            to: '/scaling',
            emoji: '📈',
            titleKey: 'nav_scaling',
            descKey: 'home_topic_scaling_desc',
        },
        {
            to: '/finetuning',
            emoji: '🎛️',
            titleKey: 'nav_finetuning',
            descKey: 'home_topic_finetuning_desc',
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="mb-10">
                <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {t('home_hero_title')}
                </h1>
                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                    {t('home_hero_desc')}
                </p>
            </div>

            {/* Topic grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {TOPICS.map((topic) => (
                    <NavLink
                        key={topic.to}
                        to={topic.to}
                        className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div className="mb-2 flex items-center gap-3">
                            <span
                                className="text-2xl"
                                aria-hidden="true"
                            >
                                {topic.emoji}
                            </span>
                            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                                {t(topic.titleKey)}
                            </h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t(topic.descKey)}
                        </p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
