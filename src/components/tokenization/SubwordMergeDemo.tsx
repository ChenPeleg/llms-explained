import { useState, useCallback } from 'react';

interface MergeStep {
    step: number;
    description: string;
    pieces: string[];
    merged?: [string, string];
}

/** Pre-computed BPE merge steps for the word "tokenization" */
const MERGE_STEPS: MergeStep[] = [
    {
        step: 0,
        description: 'Start: every character is its own token.',
        pieces: ['t', 'o', 'k', 'e', 'n', 'i', 'z', 'a', 't', 'i', 'o', 'n'],
    },
    {
        step: 1,
        description: 'Merge #1: "t" + "o" → "to" (most frequent pair)',
        pieces: ['to', 'k', 'e', 'n', 'i', 'z', 'a', 't', 'i', 'o', 'n'],
        merged: ['t', 'o'],
    },
    {
        step: 2,
        description: 'Merge #2: "t" + "i" → "ti"',
        pieces: ['to', 'k', 'e', 'n', 'i', 'z', 'a', 'ti', 'o', 'n'],
        merged: ['t', 'i'],
    },
    {
        step: 3,
        description: 'Merge #3: "ti" + "o" → "tio"',
        pieces: ['to', 'k', 'e', 'n', 'i', 'z', 'a', 'tio', 'n'],
        merged: ['ti', 'o'],
    },
    {
        step: 4,
        description: 'Merge #4: "tio" + "n" → "tion"',
        pieces: ['to', 'k', 'e', 'n', 'i', 'z', 'a', 'tion'],
        merged: ['tio', 'n'],
    },
    {
        step: 5,
        description: 'Merge #5: "to" + "k" → "tok"',
        pieces: ['tok', 'e', 'n', 'i', 'z', 'a', 'tion'],
        merged: ['to', 'k'],
    },
    {
        step: 6,
        description: 'Merge #6: "tok" + "e" → "toke"',
        pieces: ['toke', 'n', 'i', 'z', 'a', 'tion'],
        merged: ['tok', 'e'],
    },
    {
        step: 7,
        description: 'Merge #7: "toke" + "n" → "token"',
        pieces: ['token', 'i', 'z', 'a', 'tion'],
        merged: ['toke', 'n'],
    },
    {
        step: 8,
        description: 'Merge #8: "i" + "z" → "iz"',
        pieces: ['token', 'iz', 'a', 'tion'],
        merged: ['i', 'z'],
    },
    {
        step: 9,
        description: 'Merge #9: "iz" + "a" → "iza"',
        pieces: ['token', 'iza', 'tion'],
        merged: ['iz', 'a'],
    },
    {
        step: 10,
        description: 'Merge #10: "iza" + "tion" → "ization"',
        pieces: ['token', 'ization'],
        merged: ['iza', 'tion'],
    },
    {
        step: 11,
        description: 'Final: "token" + "ization" → "tokenization" — 2 tokens.',
        pieces: ['token', 'ization'],
    },
];

const PIECE_COLORS = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-300 dark:border-blue-700',
    'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border-green-300 dark:border-green-700',
    'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border-purple-300 dark:border-purple-700',
    'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 border-orange-300 dark:border-orange-700',
    'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200 border-pink-300 dark:border-pink-700',
    'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border-teal-300 dark:border-teal-700',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700',
    'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border-red-300 dark:border-red-700',
];

/**
 * Subword Merge Demo
 * Steps through BPE merge operations on the word "tokenization" so learners
 * can see how character-level pieces are progressively combined.
 */
const SubwordMergeDemo = () => {
    const [stepIdx, setStepIdx] = useState(0);

    const currentStep = MERGE_STEPS[stepIdx];
    const isFirst = stepIdx === 0;
    const isLast = stepIdx === MERGE_STEPS.length - 1;

    const handlePrev = useCallback(
        () => setStepIdx((i) => Math.max(0, i - 1)),
        [],
    );
    const handleNext = useCallback(
        () => setStepIdx((i) => Math.min(MERGE_STEPS.length - 1, i + 1)),
        [],
    );
    const handleReset = useCallback(() => setStepIdx(0), []);

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Interactive C — Subword Merge Demo
            </h3>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                Step through the BPE merge process for the word{' '}
                <span className="font-mono font-medium text-gray-900 dark:text-gray-100">
                    "tokenization"
                </span>
                . Each step fuses the most frequent adjacent pair into a new
                token.
            </p>

            {/* Step indicator */}
            <div className="mb-4 flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Step
                </span>
                <div className="flex gap-1">
                    {MERGE_STEPS.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setStepIdx(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                                i === stepIdx
                                    ? 'bg-blue-500'
                                    : i < stepIdx
                                      ? 'bg-blue-300 dark:bg-blue-700'
                                      : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            aria-label={`Go to step ${i}`}
                            aria-current={i === stepIdx ? 'step' : undefined}
                        />
                    ))}
                </div>
                <span className="ml-1 text-xs text-gray-400 dark:text-gray-500">
                    {stepIdx + 1} / {MERGE_STEPS.length}
                </span>
            </div>

            {/* Merge description */}
            <div className="mb-4 min-h-[3rem] rounded-lg bg-blue-50 px-4 py-3 dark:bg-blue-950/30">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    {currentStep.description}
                </p>
            </div>

            {/* Token pieces */}
            <div
                className="mb-5 flex min-h-[3rem] flex-wrap items-center gap-1.5"
                role="list"
                aria-label="Current token pieces"
            >
                {currentStep.pieces.map((piece, i) => {
                    const isNewlyMerged =
                        currentStep.merged &&
                        piece ===
                            currentStep.merged[0] + currentStep.merged[1];
                    return (
                        <span
                            key={`${piece}-${i}`}
                            role="listitem"
                            className={`rounded border px-2 py-0.5 font-mono text-sm font-medium transition-all ${
                                PIECE_COLORS[i % PIECE_COLORS.length]
                            } ${isNewlyMerged ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''}`}
                            aria-label={`Token piece: ${piece}${isNewlyMerged ? ' (just merged)' : ''}`}
                        >
                            {piece}
                        </span>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isFirst}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    aria-label="Previous merge step"
                >
                    ← Prev
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={isLast}
                    className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next merge step"
                >
                    Next →
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="ml-auto rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    aria-label="Reset to first step"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default SubwordMergeDemo;
