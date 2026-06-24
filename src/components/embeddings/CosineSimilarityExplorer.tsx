import { useMemo, useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';

const PRESETS = [
    { id: 'synonyms', label: 'doctor ↔ physician', v1: [1, 0.95], v2: [0.9, 1] },
    { id: 'related', label: 'doctor ↔ hospital', v1: [1, 0.95], v2: [0.7, 0.45] },
    { id: 'unrelated', label: 'doctor ↔ galaxy', v1: [1, 0.95], v2: [-0.2, 0.3] },
];

const cosineSimilarity = (a: number[], b: number[]) => {
    const dot = a[0] * b[0] + a[1] * b[1];
    const magA = Math.hypot(a[0], a[1]);
    const magB = Math.hypot(b[0], b[1]);
    if (magA === 0 || magB === 0) return 0;
    return dot / (magA * magB);
};

const CosineSimilarityExplorer = () => {
    const { t } = useTranslate();
    const [selectedPreset, setSelectedPreset] = useState(PRESETS[0].id);

    const preset = PRESETS.find((p) => p.id === selectedPreset) ?? PRESETS[0];
    const similarity = useMemo(
        () => cosineSimilarity(preset.v1, preset.v2),
        [preset.v1, preset.v2]
    );

    const toPlot = (v: number[]) => ({ x: 200 + v[0] * 110, y: 130 - v[1] * 110 });
    const p1 = toPlot(preset.v1);
    const p2 = toPlot(preset.v2);

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t('emb_cosine_demo_title')}
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {t('emb_cosine_demo_desc')}
            </p>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('emb_cosine_demo_pair')}
            </label>
            <select
                value={selectedPreset}
                onChange={(e) => setSelectedPreset(e.target.value)}
                className="mb-4 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            >
                {PRESETS.map((p) => (
                    <option key={p.id} value={p.id}>
                        {p.label}
                    </option>
                ))}
            </select>

            <svg
                viewBox="0 0 400 260"
                className="w-full rounded-lg bg-gray-50 dark:bg-gray-900"
                role="img"
                aria-label={t('emb_cosine_demo_aria')}
            >
                <line x1="200" y1="20" x2="200" y2="240" stroke="#9ca3af" />
                <line x1="20" y1="130" x2="380" y2="130" stroke="#9ca3af" />
                <line x1="200" y1="130" x2={p1.x} y2={p1.y} stroke="#2563eb" strokeWidth="3" />
                <line x1="200" y1="130" x2={p2.x} y2={p2.y} stroke="#db2777" strokeWidth="3" />
            </svg>

            <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                {t('emb_cosine_demo_score')}: <strong>{similarity.toFixed(3)}</strong>
            </p>

            <button
                type="button"
                onClick={() => setSelectedPreset(PRESETS[0].id)}
                className="mt-3 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                {t('emb_reset')}
            </button>
        </div>
    );
};

export default CosineSimilarityExplorer;
