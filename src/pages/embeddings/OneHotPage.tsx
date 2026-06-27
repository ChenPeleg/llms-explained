import EmbeddingsSectionNavigation from '../../components/EmbeddingsSectionNavigation';
import { useTranslate } from '../../hooks/useTranslate';

const OneHotPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('emb_onehot_page_h1')}</h1>
            <p>{t('emb_onehot_page_intro')}</p>

            <h2>{t('emb_onehot_page_h2_problems')}</h2>

            <div className="not-prose my-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700" dir="ltr">
                <table className="w-full text-sm">
                    <caption className="px-4 py-2 text-left text-xs text-gray-500 dark:text-gray-400">
                        {t('emb_onehot_table_caption')}
                    </caption>
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
                                {t('emb_onehot_table_word')}
                            </th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
                                {t('emb_onehot_table_vector')}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        <tr>
                            <td className="px-4 py-2 font-medium">cat</td>
                            <td className="px-4 py-2 font-mono">[1, 0, 0, 0]</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">dog</td>
                            <td className="px-4 py-2 font-mono">[0, 1, 0, 0]</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">run</td>
                            <td className="px-4 py-2 font-mono">[0, 0, 1, 0]</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-medium">fast</td>
                            <td className="px-4 py-2 font-mono">[0, 0, 0, 1]</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>{t('emb_onehot_page_problems_p1')}</p>
            <p>{t('emb_onehot_page_problems_p2')}</p>
            <p>{t('emb_onehot_page_problems_p3')}</p>

            <h2>{t('emb_onehot_page_h2_alternative')}</h2>
            <p>{t('emb_onehot_page_alternative_p1')}</p>
            <p>{t('emb_onehot_page_alternative_p2')}</p>
            <p>{t('emb_onehot_page_alternative_p3')}</p>

            <EmbeddingsSectionNavigation showBackToOverview />
        </article>
    );
};

export default OneHotPage;
