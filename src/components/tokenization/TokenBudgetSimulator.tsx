import { useState, useCallback, useId } from 'react';

const CONTEXT_SIZES = [
    { label: 'GPT-3.5 (4 k)', tokens: 4096 },
    { label: 'GPT-4 (8 k)', tokens: 8192 },
    { label: 'GPT-4-turbo (128 k)', tokens: 128000 },
    { label: 'Claude 3 (200 k)', tokens: 200000 },
    { label: 'Gemini 1.5 (1 M)', tokens: 1000000 },
];

const BUDGET_COLOR = (pct: number) => {
    if (pct < 0.5) return 'bg-green-500';
    if (pct < 0.8) return 'bg-yellow-500';
    return 'bg-red-500';
};

const DEFAULT_PROMPT_TOKENS = 512;
const DEFAULT_CONTEXT_IDX = 1; // GPT-4 8k

/**
 * Token Budget Simulator
 * Shows how different prompt token counts consume a model's context window.
 */
const TokenBudgetSimulator = () => {
    const [promptTokens, setPromptTokens] = useState(DEFAULT_PROMPT_TOKENS);
    const [contextIdx, setContextIdx] = useState(DEFAULT_CONTEXT_IDX);
    const sliderId = useId();
    const selectId = useId();

    const contextSize = CONTEXT_SIZES[contextIdx].tokens;
    const usedFraction = Math.min(promptTokens / contextSize, 1);
    const remaining = Math.max(contextSize - promptTokens, 0);
    const pct = usedFraction * 100;

    const handleReset = useCallback(() => {
        setPromptTokens(DEFAULT_PROMPT_TOKENS);
        setContextIdx(DEFAULT_CONTEXT_IDX);
    }, []);

    const formatTokens = (n: number) =>
        n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)} k` : String(n);

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Interactive B — Token Budget Simulator
            </h3>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                Adjust how many tokens your prompt uses and select a model to see
                how much context window is consumed.
            </p>

            {/* Model selector */}
            <div className="mb-5">
                <label
                    htmlFor={selectId}
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Model context size
                </label>
                <select
                    id={selectId}
                    value={contextIdx}
                    onChange={(e) => setContextIdx(Number(e.target.value))}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    aria-label="Select model context size"
                >
                    {CONTEXT_SIZES.map((c, i) => (
                        <option key={c.label} value={i}>
                            {c.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Prompt token slider */}
            <div className="mb-5">
                <label
                    htmlFor={sliderId}
                    className="mb-1 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    <span>Prompt tokens</span>
                    <span className="font-mono font-semibold tabular-nums text-gray-900 dark:text-gray-100">
                        {formatTokens(promptTokens)}
                    </span>
                </label>
                <input
                    id={sliderId}
                    type="range"
                    min={1}
                    max={contextSize}
                    value={promptTokens}
                    onChange={(e) => setPromptTokens(Number(e.target.value))}
                    className="w-full accent-blue-600"
                    aria-label={`Prompt tokens: ${promptTokens}`}
                    aria-valuemin={1}
                    aria-valuemax={contextSize}
                    aria-valuenow={promptTokens}
                />
                <div className="mt-1 flex justify-between text-xs text-gray-400 dark:text-gray-500">
                    <span>1</span>
                    <span>{formatTokens(Math.round(contextSize / 2))}</span>
                    <span>{formatTokens(contextSize)}</span>
                </div>
            </div>

            {/* Progress bar */}
            <div className="mb-2">
                <div
                    className="h-6 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
                    role="progressbar"
                    aria-valuenow={Math.round(pct)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Context window: ${Math.round(pct)}% used`}
                >
                    <div
                        className={`h-full rounded-full transition-all duration-200 ${BUDGET_COLOR(usedFraction)}`}
                        style={{ width: `${pct}%` }}
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Used</p>
                    <p className="font-mono text-base font-semibold text-gray-900 dark:text-gray-100">
                        {formatTokens(promptTokens)}
                    </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Remaining</p>
                    <p className="font-mono text-base font-semibold text-gray-900 dark:text-gray-100">
                        {formatTokens(remaining)}
                    </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Usage</p>
                    <p className="font-mono text-base font-semibold text-gray-900 dark:text-gray-100">
                        {pct.toFixed(1)}%
                    </p>
                </div>
            </div>

            {usedFraction >= 1 && (
                <p className="mt-3 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
                    ⚠ Prompt exceeds the context window — tokens beyond the limit
                    will be truncated.
                </p>
            )}

            <button
                type="button"
                onClick={handleReset}
                className="mt-4 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                aria-label="Reset to defaults"
            >
                Reset
            </button>
        </div>
    );
};

export default TokenBudgetSimulator;
