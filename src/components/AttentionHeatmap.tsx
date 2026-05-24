import { useState } from 'react';
import attentionExamples from '../data/attention-examples.json';

interface AttentionExample {
    tokens: string[];
    attentionWeights: number[][];
}

interface AttentionData {
    example1: AttentionExample;
    example2: AttentionExample;
}

const data = attentionExamples as AttentionData;

const EXAMPLES = [
    { key: 'example1' as const, label: 'The cat sat on the mat' },
    { key: 'example2' as const, label: 'She loves machine learning' },
];

function weightToColor(value: number): string {
    const intensity = Math.round(value * 255);
    return `rgb(${255 - intensity}, ${255 - Math.round(intensity * 0.6)}, 255)`;
}

/**
 * Attention Heatmap
 * Renders a grid showing attention scores between tokens.
 * Darker blue = higher attention weight.
 */
const AttentionHeatmap = () => {
    const [exampleKey, setExampleKey] = useState<'example1' | 'example2'>(
        'example1'
    );
    const example = data[exampleKey];

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Attention Heatmap
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Each cell shows how much a token (row) attends to another token
                (column). Darker = higher attention.
            </p>

            {/* Selector */}
            <div className="mb-4 flex gap-2">
                {EXAMPLES.map((ex) => (
                    <button
                        key={ex.key}
                        type="button"
                        onClick={() => setExampleKey(ex.key)}
                        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                            exampleKey === ex.key
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        {ex.label}
                    </button>
                ))}
            </div>

            {/* Heatmap grid */}
            <div className="overflow-x-auto">
                <table
                    className="border-separate border-spacing-0.5"
                    aria-label="Attention weights"
                >
                    <thead>
                        <tr>
                            <th className="w-16" />
                            {example.tokens.map((tok, j) => (
                                <th
                                    key={j}
                                    className="px-1 pb-1 text-center text-xs font-medium text-gray-600 dark:text-gray-300"
                                >
                                    {tok}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {example.tokens.map((rowTok, i) => (
                            <tr key={i}>
                                <td className="pr-2 text-right text-xs font-medium text-gray-600 dark:text-gray-300">
                                    {rowTok}
                                </td>
                                {example.attentionWeights[i].map((w, j) => (
                                    <td
                                        key={j}
                                        className="h-8 w-8 rounded text-center text-xs font-mono"
                                        style={{
                                            backgroundColor: weightToColor(w),
                                        }}
                                        title={`${rowTok} → ${example.tokens[j]}: ${w.toFixed(2)}`}
                                        aria-label={`${rowTok} attends to ${example.tokens[j]} with weight ${w.toFixed(2)}`}
                                    >
                                        {w.toFixed(2)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttentionHeatmap;
