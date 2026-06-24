import { useMemo, useState } from 'react';
import embeddingData from '../../data/embedding-projections.json';
import { useTranslate } from '../../hooks/useTranslate';

interface EmbeddingPoint {
    word: string;
    x: number;
    y: number;
    cluster: number;
}

const CLUSTER_COLORS = [
    { fill: '#3b82f6', stroke: '#1d4ed8' },
    { fill: '#10b981', stroke: '#065f46' },
    { fill: '#f59e0b', stroke: '#92400e' },
    { fill: '#8b5cf6', stroke: '#4c1d95' },
];

const CLUSTER_KEY_SUFFIXES = ['royalty', 'people', 'animals', 'cities'];

const points = embeddingData as EmbeddingPoint[];

const EmbeddingScatterPlot = () => {
    const { t } = useTranslate();
    const [hoveredWord, setHoveredWord] = useState<EmbeddingPoint | null>(null);
    const [selectedCluster, setSelectedCluster] = useState<number | null>(null);

    const clusterLabels = useMemo(
        () => CLUSTER_KEY_SUFFIXES.map((s) => t(`emb_cluster_${s}`)),
        [t]
    );

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t('emb_scatter_title')}
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {t('emb_scatter_desc')}
            </p>

            <div className="mb-3 flex flex-wrap gap-3">
                {clusterLabels.map((label, i) => {
                    const isActive = selectedCluster === null || selectedCluster === i;
                    return (
                        <button
                            key={label}
                            type="button"
                            onClick={() =>
                                setSelectedCluster((prev) => (prev === i ? null : i))
                            }
                            className={`flex items-center gap-1.5 rounded px-2 py-1 text-sm transition ${
                                isActive
                                    ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                                    : 'bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                            }`}
                        >
                            <span
                                className="inline-block h-3 w-3 rounded-full"
                                style={{ backgroundColor: CLUSTER_COLORS[i].fill }}
                            />
                            {label}
                        </button>
                    );
                })}
            </div>

            <svg
                viewBox="0 0 400 320"
                className="w-full rounded-lg bg-gray-50 dark:bg-gray-900"
                aria-label={t('emb_scatter_aria')}
                role="img"
            >
                {points.map((pt) => {
                    const cx = pt.x * 380 + 10;
                    const cy = (1 - pt.y) * 300 + 10;
                    const color = CLUSTER_COLORS[pt.cluster];
                    const inSelectedCluster =
                        selectedCluster === null || selectedCluster === pt.cluster;
                    const isHovered = hoveredWord?.word === pt.word;

                    return (
                        <g
                            key={pt.word}
                            onMouseEnter={() => setHoveredWord(pt)}
                            onMouseLeave={() => setHoveredWord(null)}
                            onClick={() => setSelectedCluster(pt.cluster)}
                            className="cursor-pointer"
                        >
                            <circle
                                cx={cx}
                                cy={cy}
                                r={isHovered ? 8 : 6}
                                fill={color.fill}
                                stroke={color.stroke}
                                strokeWidth={isHovered ? 2 : 1.5}
                                opacity={inSelectedCluster ? 0.95 : 0.2}
                            />
                            <text
                                x={cx + 8}
                                y={cy + 4}
                                fontSize={11}
                                fill="currentColor"
                                className={`fill-gray-700 dark:fill-gray-200 ${
                                    inSelectedCluster ? 'opacity-100' : 'opacity-30'
                                }`}
                            >
                                {pt.word}
                            </text>
                        </g>
                    );
                })}
            </svg>

            <p className="mt-3 min-h-6 text-sm text-gray-600 dark:text-gray-300">
                {hoveredWord
                    ? `${t('emb_scatter_hover_word')}: ${hoveredWord.word} ${t('emb_scatter_separator')} ${t('emb_scatter_hover_cluster')}: ${clusterLabels[hoveredWord.cluster]}`
                    : t('emb_scatter_hover_hint')}
            </p>

            <button
                type="button"
                onClick={() => {
                    setSelectedCluster(null);
                    setHoveredWord(null);
                }}
                className="mt-2 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
                {t('emb_reset')}
            </button>
        </div>
    );
};

export default EmbeddingScatterPlot;
