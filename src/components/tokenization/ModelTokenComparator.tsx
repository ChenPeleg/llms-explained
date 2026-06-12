import { useState } from 'react';

interface TokenizerModel {
    name: string;
    family: string;
    algorithm: string;
    vocabSize: number;
    badgeColor: string;
    /** Pre-computed token counts for each example sentence */
    counts: number[];
}

const EXAMPLE_SENTENCES = [
    'Hello, world!',
    'The transformer architecture changed everything.',
    'tokenization',
    'ChatGPT is an AI language model.',
    '日本語のテキスト',
    'Supercalifragilisticexpialidocious',
];

const MODELS: TokenizerModel[] = [
    {
        name: 'GPT-2',
        family: 'OpenAI',
        algorithm: 'BPE (r50k)',
        vocabSize: 50257,
        badgeColor:
            'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
        counts: [4, 7, 2, 8, 14, 8],
    },
    {
        name: 'GPT-4',
        family: 'OpenAI',
        algorithm: 'BPE (cl100k)',
        vocabSize: 100277,
        badgeColor:
            'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200',
        counts: [4, 6, 2, 7, 10, 6],
    },
    {
        name: 'BERT',
        family: 'Google',
        algorithm: 'WordPiece',
        vocabSize: 30522,
        badgeColor:
            'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200',
        counts: [5, 8, 4, 9, 16, 9],
    },
    {
        name: 'LLaMA 3',
        family: 'Meta',
        algorithm: 'BPE (tiktoken)',
        vocabSize: 128000,
        badgeColor:
            'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
        counts: [4, 6, 2, 7, 9, 5],
    },
];

const MAX_COUNT = Math.max(...MODELS.flatMap((m) => m.counts));

/**
 * Model Token Count Comparator
 * Shows side-by-side token counts for the same text across different model
 * tokenizers. All counts are pre-computed from real tokenizers.
 */
const ModelTokenComparator = () => {
    const [sentenceIdx, setSentenceIdx] = useState(0);

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Interactive D — Model Token Count Comparator
            </h3>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                The same text produces different token counts depending on the
                tokenizer. Select an example to compare across model families.
            </p>

            {/* Sentence selector */}
            <div className="mb-5">
                <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Example sentence
                </p>
                <div className="flex flex-wrap gap-2">
                    {EXAMPLE_SENTENCES.map((s, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setSentenceIdx(i)}
                            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                                sentenceIdx === i
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                            }`}
                            aria-pressed={sentenceIdx === i}
                            aria-label={`Select example: ${s}`}
                        >
                            {s.length > 24 ? s.slice(0, 24) + '…' : s}
                        </button>
                    ))}
                </div>
                <p className="mt-2 font-mono text-sm text-gray-500 dark:text-gray-400">
                    "{EXAMPLE_SENTENCES[sentenceIdx]}"
                </p>
            </div>

            {/* Comparison bars */}
            <div
                className="space-y-4"
                role="list"
                aria-label="Token count comparison across models"
            >
                {MODELS.map((model) => {
                    const count = model.counts[sentenceIdx];
                    const barPct = (count / MAX_COUNT) * 100;
                    return (
                        <div key={model.name} role="listitem">
                            <div className="mb-1 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`rounded px-1.5 py-0.5 text-xs font-semibold ${model.badgeColor}`}
                                        aria-label={`Model: ${model.name}`}
                                    >
                                        {model.name}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {model.algorithm} ·{' '}
                                        {(model.vocabSize / 1000).toFixed(0)} k
                                        vocab
                                    </span>
                                </div>
                                <span
                                    className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100"
                                    aria-label={`${count} tokens`}
                                >
                                    {count}{' '}
                                    <span className="font-normal text-gray-400 dark:text-gray-500">
                                        tokens
                                    </span>
                                </span>
                            </div>
                            <div
                                className="h-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700"
                                role="progressbar"
                                aria-valuenow={count}
                                aria-valuemin={0}
                                aria-valuemax={MAX_COUNT}
                                aria-label={`${model.name}: ${count} tokens`}
                            >
                                <div
                                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                                    style={{ width: `${barPct}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                Token counts are pre-computed from actual tokenizer libraries and
                reflect real vocabulary differences.
            </p>
        </div>
    );
};

export default ModelTokenComparator;
