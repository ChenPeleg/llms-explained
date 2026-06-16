import { useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';

const BANK_CONTEXTS = [
    {
        id: 'finance',
        label: 'Bank (finance)',
        sentence: 'She went to the bank to deposit her paycheck.',
        point: { x: 290, y: 90 },
    },
    {
        id: 'river',
        label: 'Bank (river edge)',
        sentence: 'They sat on the bank of the river at sunset.',
        point: { x: 120, y: 180 },
    },
];

const ContextShiftDemo = () => {
    const { t } = useTranslate();
    const [selected, setSelected] = useState(BANK_CONTEXTS[0].id);

    const selectedContext =
        BANK_CONTEXTS.find((context) => context.id === selected) ?? BANK_CONTEXTS[0];

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t('emb_context_demo_title')}
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {t('emb_context_demo_desc')}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
                {BANK_CONTEXTS.map((context) => (
                    <button
                        key={context.id}
                        type="button"
                        onClick={() => setSelected(context.id)}
                        className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                            selected === context.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                        {context.label}
                    </button>
                ))}
            </div>

            <p className="mb-4 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700 dark:bg-gray-700/50 dark:text-gray-200">
                {selectedContext.sentence}
            </p>

            <svg
                viewBox="0 0 420 240"
                className="w-full rounded-lg bg-gray-50 dark:bg-gray-900"
                role="img"
                aria-label={t('emb_context_demo_aria')}
            >
                <circle cx="210" cy="120" r="90" fill="none" stroke="#d1d5db" strokeDasharray="4 4" />
                {BANK_CONTEXTS.map((context) => {
                    const active = context.id === selected;
                    return (
                        <g key={context.id}>
                            <circle
                                cx={context.point.x}
                                cy={context.point.y}
                                r={active ? 10 : 7}
                                fill={active ? '#2563eb' : '#94a3b8'}
                            />
                            <text
                                x={context.point.x + 10}
                                y={context.point.y + 4}
                                fontSize={11}
                                className={active ? 'fill-blue-700 dark:fill-blue-300' : 'fill-gray-600 dark:fill-gray-400'}
                            >
                                {context.label}
                            </text>
                        </g>
                    );
                })}
            </svg>

            <button
                type="button"
                onClick={() => setSelected(BANK_CONTEXTS[0].id)}
                className="mt-3 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                {t('emb_reset')}
            </button>
        </div>
    );
};

export default ContextShiftDemo;
