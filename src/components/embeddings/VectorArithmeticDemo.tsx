import { useMemo, useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';

interface Point {
    x: number;
    y: number;
}

const WORD_VECTORS: Record<string, Point> = {
    king: { x: 0.82, y: 0.36 },
    queen: { x: 0.82, y: 0.64 },
    man: { x: 0.55, y: 0.25 },
    woman: { x: 0.55, y: 0.53 },
    paris: { x: 0.4, y: 0.85 },
    france: { x: 0.2, y: 0.8 },
    rome: { x: 0.62, y: 0.82 },
    italy: { x: 0.42, y: 0.77 },
};

const ANALOGIES = [
    { id: 'gender', a: 'king', b: 'man', c: 'woman' },
    { id: 'capital', a: 'paris', b: 'france', c: 'italy' },
];

const distance = (p1: Point, p2: Point) =>
    Math.hypot(p1.x - p2.x, p1.y - p2.y);

const findNearest = (target: Point, excluded: string[]) => {
    const candidates = Object.entries(WORD_VECTORS).filter(
        ([word]) => !excluded.includes(word)
    );
    return candidates.reduce((best, [word, vec]) => {
        const d = distance(target, vec);
        if (!best || d < best.distance) return { word, distance: d, vec };
        return best;
    }, null as null | { word: string; distance: number; vec: Point });
};

const VectorArithmeticDemo = () => {
    const { t } = useTranslate();
    const [selectedId, setSelectedId] = useState(ANALOGIES[0].id);

    const selected = ANALOGIES.find((a) => a.id === selectedId) ?? ANALOGIES[0];
    const va = WORD_VECTORS[selected.a];
    const vb = WORD_VECTORS[selected.b];
    const vc = WORD_VECTORS[selected.c];

    const result = useMemo<Point>(
        () => ({ x: va.x - vb.x + vc.x, y: va.y - vb.y + vc.y }),
        [va.x, va.y, vb.x, vb.y, vc.x, vc.y]
    );

    const nearest = findNearest(result, [selected.a, selected.b, selected.c]);

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t('emb_vec_demo_title')}
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {t('emb_vec_demo_desc')}
            </p>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('emb_vec_demo_select')}
            </label>
            <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="mb-4 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            >
                {ANALOGIES.map((a) => (
                    <option key={a.id} value={a.id}>
                        {a.a} - {a.b} + {a.c}
                    </option>
                ))}
            </select>

            <svg
                viewBox="0 0 420 240"
                className="w-full rounded-lg bg-gray-50 dark:bg-gray-900"
                role="img"
                aria-label={t('emb_vec_demo_aria')}
            >
                <line x1="20" y1="220" x2="400" y2="220" stroke="#9ca3af" />
                <line x1="20" y1="220" x2="20" y2="20" stroke="#9ca3af" />

                {Object.entries(WORD_VECTORS).map(([word, vec]) => {
                    const x = vec.x * 360 + 30;
                    const y = (1 - vec.y) * 180 + 30;
                    return (
                        <g key={word}>
                            <circle cx={x} cy={y} r={5} fill="#6366f1" opacity={0.85} />
                            <text
                                x={x + 8}
                                y={y + 4}
                                fontSize={11}
                                className="fill-gray-700 dark:fill-gray-200"
                            >
                                {word}
                            </text>
                        </g>
                    );
                })}

                <circle
                    cx={result.x * 360 + 30}
                    cy={(1 - result.y) * 180 + 30}
                    r={7}
                    fill="#ef4444"
                />
                <text
                    x={result.x * 360 + 38}
                    y={(1 - result.y) * 180 + 34}
                    fontSize={11}
                    className="fill-red-600"
                >
                    result
                </text>
            </svg>

            <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                {selected.a} - {selected.b} + {selected.c} ≈{' '}
                <strong>{nearest?.word ?? t('emb_vec_demo_no_match')}</strong>
            </p>

            <button
                type="button"
                onClick={() => setSelectedId(ANALOGIES[0].id)}
                className="mt-3 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                {t('emb_reset')}
            </button>
        </div>
    );
};

export default VectorArithmeticDemo;
