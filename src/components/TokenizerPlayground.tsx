import { useState } from 'react';
import tokenizerExamples from '../data/tokenizer-examples.json';

interface Token {
    id: number;
    text: string;
    color: number;
}

interface TokenizerExample {
    id: string;
    text: string;
    tokens: Token[];
}

const TOKEN_COLORS = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
    'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200',
    'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
    'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200',
    'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200',
    'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200',
];

const examples = tokenizerExamples as TokenizerExample[];

/**
 * Tokenizer Playground
 * Lets the user pick from pre-computed examples and see BPE token splits
 * color-coded as spans. No live model inference — all data is static.
 */
const TokenizerPlayground = () => {
    const [selected, setSelected] = useState<TokenizerExample>(examples[0]);

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Tokenizer Playground
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Select an example to see how text is split into tokens.
            </p>

            {/* Example selector */}
            <div className="mb-4 flex flex-wrap gap-2">
                {examples.map((ex) => (
                    <button
                        key={ex.id}
                        type="button"
                        onClick={() => setSelected(ex)}
                        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                            selected.id === ex.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        {ex.text.length > 20
                            ? ex.text.slice(0, 20) + '…'
                            : ex.text}
                    </button>
                ))}
            </div>

            {/* Tokenized output */}
            <div className="mb-4 flex flex-wrap gap-1">
                {selected.tokens.map((tok, i) => (
                    <span
                        key={i}
                        className={`rounded px-2 py-0.5 font-mono text-sm ${TOKEN_COLORS[tok.color % TOKEN_COLORS.length]}`}
                        title={`Token ID: ${tok.id}`}
                    >
                        {tok.text}
                    </span>
                ))}
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500">
                <strong>{selected.tokens.length}</strong> token
                {selected.tokens.length !== 1 ? 's' : ''} — hover a token to
                see its ID.
            </p>
        </div>
    );
};

export default TokenizerPlayground;
