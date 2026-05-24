import { NavLink } from 'react-router';

const TOPICS = [
    {
        to: '/tokenization',
        emoji: '✂️',
        title: 'Tokenization',
        description:
            'How raw text is split into tokens using algorithms like BPE and WordPiece.',
    },
    {
        to: '/embeddings',
        emoji: '🔢',
        title: 'Embeddings',
        description:
            'Turning tokens into dense vectors and navigating semantic space.',
    },
    {
        to: '/transformer',
        emoji: '🏗️',
        title: 'Transformer Architecture',
        description:
            'Encoder/decoder blocks, residual connections, and layer normalisation.',
    },
    {
        to: '/attention',
        emoji: '👁️',
        title: 'Attention Mechanism',
        description:
            'Self-attention, multi-head attention, and scaled dot-product attention.',
    },
    {
        to: '/training',
        emoji: '🎯',
        title: 'Training',
        description:
            'Pre-training objectives like next-token prediction and masked language modelling.',
    },
    {
        to: '/inference',
        emoji: '⚡',
        title: 'Inference & Sampling',
        description:
            'Temperature, top-k, top-p, and greedy decoding strategies.',
    },
    {
        to: '/scaling',
        emoji: '📈',
        title: 'Scaling Laws',
        description:
            'Chinchilla and compute-optimal training — what happens when you scale up.',
    },
    {
        to: '/finetuning',
        emoji: '🎛️',
        title: 'Fine-Tuning & RLHF',
        description:
            'Supervised fine-tuning, reward models, and proximal policy optimisation.',
    },
];

/**
 * Home Page
 * Landing page with a brief intro and links to all topic sections.
 */
const HomePage = () => {
    return (
        <div>
            {/* Hero */}
            <div className="mb-10">
                <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-gray-100">
                    LLMs Explained
                </h1>
                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                    A visual, interactive guide to how Large Language Models
                    work — from raw text to next-token probabilities. No
                    backend, no API calls; everything runs in your browser.
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
                                {topic.title}
                            </h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {topic.description}
                        </p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
