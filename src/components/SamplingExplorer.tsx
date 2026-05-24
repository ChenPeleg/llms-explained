import { useState, useMemo } from 'react';

/** Fixed small vocabulary for the demo */
const VOCAB = [
    { word: 'the', baseLogit: 3.2 },
    { word: 'a', baseLogit: 2.8 },
    { word: 'cat', baseLogit: 2.1 },
    { word: 'sat', baseLogit: 1.5 },
    { word: 'ran', baseLogit: 1.2 },
    { word: 'jumped', baseLogit: 0.9 },
    { word: 'quickly', baseLogit: 0.4 },
    { word: 'slowly', baseLogit: 0.2 },
];

function softmax(logits: number[]): number[] {
    const maxLogit = Math.max(...logits);
    const exps = logits.map((l) => Math.exp(l - maxLogit));
    const sum = exps.reduce((a, b) => a + b, 0);
    return exps.map((e) => e / sum);
}

function topKFilter(probs: number[], k: number): number[] {
    const sorted = [...probs].sort((a, b) => b - a);
    const threshold = sorted[k - 1] ?? 0;
    const filtered = probs.map((p) => (p >= threshold ? p : 0));
    const sum = filtered.reduce((a, b) => a + b, 0);
    return filtered.map((p) => p / sum);
}

function topPFilter(probs: number[], p: number): number[] {
    const indexed = probs.map((prob, i) => ({ prob, i }));
    indexed.sort((a, b) => b.prob - a.prob);
    let cumSum = 0;
    const result = new Array(probs.length).fill(0);
    for (const { prob, i } of indexed) {
        if (cumSum < p) {
            result[i] = prob;
            cumSum += prob;
        }
    }
    const sum = result.reduce((a: number, b: number) => a + b, 0);
    return result.map((p: number) => p / sum);
}

/**
 * Sampling Explorer
 * Interactive demo of temperature, top-k, and top-p sampling.
 * Shows a probability bar chart over a fixed small vocabulary.
 */
const SamplingExplorer = () => {
    const [temperature, setTemperature] = useState(1.0);
    const [topK, setTopK] = useState(8);
    const [topP, setTopP] = useState(1.0);

    const probs = useMemo(() => {
        const scaledLogits = VOCAB.map((v) => v.baseLogit / temperature);
        let p = softmax(scaledLogits);
        if (topK < VOCAB.length) p = topKFilter(p, topK);
        if (topP < 1.0) p = topPFilter(p, topP);
        return p;
    }, [temperature, topK, topP]);

    const maxProb = Math.max(...probs);

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Sampling Explorer
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Adjust temperature, top-k, and top-p to see how the probability
                distribution changes over a small vocabulary.
            </p>

            {/* Controls */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Temperature: <strong>{temperature.toFixed(1)}</strong>
                    </span>
                    <input
                        type="range"
                        min="0.1"
                        max="2.0"
                        step="0.1"
                        value={temperature}
                        onChange={(e) =>
                            setTemperature(parseFloat(e.target.value))
                        }
                        className="w-full accent-blue-600"
                        aria-label="Temperature"
                    />
                    <span className="flex justify-between text-xs text-gray-400">
                        <span>Sharp (0.1)</span>
                        <span>Flat (2.0)</span>
                    </span>
                </label>

                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Top-k: <strong>{topK}</strong>
                    </span>
                    <input
                        type="range"
                        min="1"
                        max={VOCAB.length}
                        step="1"
                        value={topK}
                        onChange={(e) => setTopK(parseInt(e.target.value))}
                        className="w-full accent-blue-600"
                        aria-label="Top-k"
                    />
                    <span className="flex justify-between text-xs text-gray-400">
                        <span>Greedy (1)</span>
                        <span>All ({VOCAB.length})</span>
                    </span>
                </label>

                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Top-p: <strong>{topP.toFixed(2)}</strong>
                    </span>
                    <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.05"
                        value={topP}
                        onChange={(e) => setTopP(parseFloat(e.target.value))}
                        className="w-full accent-blue-600"
                        aria-label="Top-p (nucleus)"
                    />
                    <span className="flex justify-between text-xs text-gray-400">
                        <span>Narrow (0.1)</span>
                        <span>Full (1.0)</span>
                    </span>
                </label>
            </div>

            {/* Bar chart */}
            <div className="space-y-2">
                {VOCAB.map((v, i) => (
                    <div key={v.word} className="flex items-center gap-3">
                        <span className="w-16 text-right font-mono text-sm text-gray-700 dark:text-gray-300">
                            {v.word}
                        </span>
                        <div className="flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                            <div
                                className="h-5 rounded-full bg-blue-500 transition-all duration-200 dark:bg-blue-400"
                                style={{
                                    width: `${(probs[i] / maxProb) * 100}%`,
                                }}
                                role="progressbar"
                                aria-valuenow={Math.round(probs[i] * 100)}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                        </div>
                        <span className="w-12 text-right font-mono text-xs text-gray-500 dark:text-gray-400">
                            {(probs[i] * 100).toFixed(1)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SamplingExplorer;
