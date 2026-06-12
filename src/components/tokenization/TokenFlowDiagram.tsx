/**
 * Token Flow Diagram
 * Static SVG visual showing how raw text becomes tokens and then token IDs.
 */
const TokenFlowDiagram = () => {
    const steps = [
        {
            label: 'Raw Text',
            content: '"Hello, world!"',
            color: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
            textColor: 'text-blue-900 dark:text-blue-100',
        },
        {
            label: 'Token Split',
            content: '"Hello" | "," | " world" | "!"',
            color: 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800',
            textColor: 'text-purple-900 dark:text-purple-100',
        },
        {
            label: 'Token IDs',
            content: '9906 | 11 | 995 | 0',
            color: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
            textColor: 'text-green-900 dark:text-green-100',
        },
    ];

    const tokens = [
        { text: 'Hello', id: 9906, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200' },
        { text: ',', id: 11, color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' },
        { text: ' world', id: 995, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200' },
        { text: '!', id: 0, color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200' },
    ];

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Text → Token → ID Flow
            </h3>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                How raw text is transformed into the numeric token IDs a model actually processes.
            </p>

            {/* Flow steps */}
            <div className="flex flex-col items-center gap-0">
                {steps.map((step, i) => (
                    <div key={step.label} className="flex w-full flex-col items-center">
                        <div
                            className={`w-full rounded-lg border px-4 py-3 ${step.color}`}
                            role="figure"
                            aria-label={`Step ${i + 1}: ${step.label}`}
                        >
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                {step.label}
                            </p>
                            <p className={`font-mono text-sm font-medium ${step.textColor}`}>
                                {step.content}
                            </p>
                        </div>
                        {i < steps.length - 1 && (
                            <div
                                className="my-1 flex h-6 flex-col items-center"
                                aria-hidden="true"
                            >
                                <div className="h-4 w-0.5 bg-gray-300 dark:bg-gray-600" />
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    className="text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M0 0 L5 6 L10 0"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Vocabulary mapping callout */}
            <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Vocabulary Lookup
                </p>
                <div className="flex flex-wrap gap-3">
                    {tokens.map((tok) => (
                        <div key={tok.id} className="flex flex-col items-center gap-1">
                            <span
                                className={`rounded px-2 py-1 font-mono text-sm font-medium ${tok.color}`}
                                aria-label={`Token: ${tok.text}`}
                            >
                                {tok.text}
                            </span>
                            <svg
                                width="2"
                                height="16"
                                aria-hidden="true"
                                className="text-gray-300 dark:text-gray-600"
                            >
                                <line
                                    x1="1"
                                    y1="0"
                                    x2="1"
                                    y2="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="3,2"
                                />
                            </svg>
                            <span
                                className="rounded bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                aria-label={`Token ID: ${tok.id}`}
                            >
                                {tok.id}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                Token IDs shown are from the GPT-4 cl100k vocabulary.
            </p>
        </div>
    );
};

export default TokenFlowDiagram;
