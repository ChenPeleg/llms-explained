import { useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';

const SinusoidalWaveVisualizer = () => {
    const { t } = useTranslate();
    const [position, setPosition] = useState(20);
    const [dimension, setDimension] = useState(8);

    const phase = (position / 100) * Math.PI * 4;
    const dimScale = Math.max(1, dimension / 4);

    const points = Array.from({ length: 160 }, (_, i) => {
        const x = 20 + i * 2.2;
        const theta = i / dimScale / 10;
        const ySine = 100 - 50 * Math.sin(theta + phase);
        const yCos = 100 - 50 * Math.cos(theta + phase);
        return { x, ySine, yCos };
    });

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t('emb_wave_title')}
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {t('emb_wave_desc')}
            </p>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('emb_wave_position')}: {position}
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={position}
                        onChange={(e) => setPosition(Number(e.target.value))}
                        className="mt-2 w-full accent-blue-600"
                    />
                </label>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('emb_wave_dimension')}: {dimension}
                    <input
                        type="range"
                        min={1}
                        max={64}
                        value={dimension}
                        onChange={(e) => setDimension(Number(e.target.value))}
                        className="mt-2 w-full accent-purple-600"
                    />
                </label>
            </div>

            <svg
                viewBox="0 0 400 200"
                className="w-full rounded-lg bg-gray-50 dark:bg-gray-900"
                role="img"
                aria-label={t('emb_wave_aria')}
            >
                <line x1="20" y1="100" x2="380" y2="100" stroke="#9ca3af" />
                <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    points={points.map((p) => `${p.x},${p.ySine}`).join(' ')}
                />
                <polyline
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    points={points.map((p) => `${p.x},${p.yCos}`).join(' ')}
                />
            </svg>

            <button
                type="button"
                onClick={() => {
                    setPosition(20);
                    setDimension(8);
                }}
                className="mt-3 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                {t('emb_reset')}
            </button>
        </div>
    );
};

export default SinusoidalWaveVisualizer;
