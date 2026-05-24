import { useState } from 'react';

const STEPS = [
    {
        id: 0,
        label: 'Input Embedding',
        description:
            'The input tokens are converted to dense vectors (embeddings). Each token gets a high-dimensional vector plus a positional encoding.',
        highlight: ['embed'],
    },
    {
        id: 1,
        label: 'Multi-Head Attention',
        description:
            'Each position attends to all positions, computing Query, Key, and Value projections. Multiple "heads" capture different relationship patterns simultaneously.',
        highlight: ['attn'],
    },
    {
        id: 2,
        label: 'Add & Norm',
        description:
            'A residual connection adds the attention output back to the input, then layer normalisation stabilises training.',
        highlight: ['norm1'],
    },
    {
        id: 3,
        label: 'Feed-Forward Network',
        description:
            'A two-layer MLP (with ReLU or GELU) is applied to each position independently, expanding and then contracting the hidden dimension.',
        highlight: ['ffn'],
    },
    {
        id: 4,
        label: 'Add & Norm (again)',
        description:
            'Another residual + layer-norm after the FFN. This pattern (Attention → Add & Norm → FFN → Add & Norm) is one Transformer block.',
        highlight: ['norm2'],
    },
    {
        id: 5,
        label: 'Output Projection',
        description:
            'After N stacked blocks, the final hidden states are projected to vocabulary logits via a linear layer and softmax to produce next-token probabilities.',
        highlight: ['output'],
    },
];

type StepId = (typeof STEPS)[number]['highlight'][number];

const BOX_BASE =
    'rounded-lg border-2 px-4 py-3 text-center text-sm font-medium transition-all duration-200';

function boxClass(id: StepId, highlight: StepId[]) {
    if (highlight.includes(id)) {
        return `${BOX_BASE} border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-400 shadow-md`;
    }
    return `${BOX_BASE} border-gray-200 bg-white text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300`;
}

/**
 * Transformer Diagram
 * Step-through walkthrough of a single Transformer forward pass.
 */
const TransformerDiagram = () => {
    const [step, setStep] = useState(0);
    const current = STEPS[step];

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Transformer Forward Pass
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Step through the components of a single Transformer block.
            </p>

            {/* Diagram */}
            <div className="mb-6 flex flex-col items-center gap-2">
                {/* Arrow connector */}
                {(['embed', 'attn', 'norm1', 'ffn', 'norm2', 'output'] as const).map(
                    (id, i, arr) => (
                        <div key={id} className="flex flex-col items-center">
                            <div className={`w-52 ${boxClass(id, current.highlight)}`}>
                                {
                                    [
                                        'Input Embedding',
                                        'Multi-Head Attention',
                                        'Add & Norm',
                                        'Feed-Forward Network',
                                        'Add & Norm',
                                        'Output Projection',
                                    ][i]
                                }
                            </div>
                            {i < arr.length - 1 && (
                                <div className="my-0.5 h-4 w-px bg-gray-300 dark:bg-gray-600" />
                            )}
                        </div>
                    )
                )}
            </div>

            {/* Explanation */}
            <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                    Step {current.id + 1}: {current.label}
                </p>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                    {current.description}
                </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                    ← Previous
                </button>
                <span className="text-xs text-gray-400">
                    {step + 1} / {STEPS.length}
                </span>
                <button
                    type="button"
                    onClick={() =>
                        setStep((s) => Math.min(STEPS.length - 1, s + 1))
                    }
                    disabled={step === STEPS.length - 1}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                    Next →
                </button>
            </div>
        </div>
    );
};

export default TransformerDiagram;
