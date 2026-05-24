import { Link } from 'react-router';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Fine-Tuning & RLHF Page
 * Covers SFT, reward modelling, PPO, and DPO.
 */
const FineTuningPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('ft_h1')}</h1>

            <p>{t('ft_intro')}</p>

            <h2>{t('ft_h2_sft')}</h2>
            <p>{t('ft_sft_p')}</p>
            <p>{t('ft_sft_p2')}</p>

            <h2>{t('ft_h2_reward')}</h2>
            <p>{t('ft_reward_p')}</p>
            <pre>
                <code>L = −log σ(r(x, y_w) − r(x, y_l))</code>
            </pre>
            <p>{t('ft_reward_p2')}</p>

            <h2>{t('ft_h2_rlhf')}</h2>
            <p>{t('ft_rlhf_p')}</p>
            <ol>
                <li>{t('ft_rlhf_li1')}</li>
                <li>{t('ft_rlhf_li2')}</li>
                <li>{t('ft_rlhf_li3')}</li>
            </ol>
            <p>{t('ft_rlhf_p2')}</p>

            <h2>{t('ft_h2_dpo')}</h2>
            <p>{t('ft_dpo_p')}</p>
            <pre>
                <code>
                    L = −log σ(β log [π(y_w|x)/π_ref(y_w|x)] − β log
                    [π(y_l|x)/π_ref(y_l|x)])
                </code>
            </pre>
            <p>{t('ft_dpo_p2')}</p>

            <h2>{t('ft_h2_peft')}</h2>
            <p>{t('ft_peft_p')}</p>
            <ul>
                <li>
                    <strong>{t('ft_lora_label')}</strong> — {t('ft_lora_desc')}
                </li>
                <li>
                    <strong>{t('ft_qlora_label')}</strong> —{' '}
                    {t('ft_qlora_desc')}
                </li>
                <li>
                    <strong>{t('ft_prefix_label')}</strong> —{' '}
                    {t('ft_prefix_desc')}
                </li>
            </ul>

            <div className="not-prose mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
                <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {t('dive_deeper')}
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/finetuning/sft"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_sft_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/finetuning/rlhf"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_rlhf_h1')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/finetuning/lora"
                            className="text-blue-700 hover:underline dark:text-blue-300"
                        >
                            {t('sub_lora_h1')}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default FineTuningPage;
