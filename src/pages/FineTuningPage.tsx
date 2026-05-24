import { useTranslate } from '../hooks/useTranslate';

/**
 * Fine-Tuning & RLHF Page
 * Covers SFT, reward modelling, PPO, and DPO.
 */
const FineTuningPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>{t('ft_h1')}</h1>

            <p>{t('ft_intro')}</p>

            <h2>{t('ft_h2_sft')}</h2>
            <p>{t('ft_sft_p')}</p>
            <p>{t('ft_sft_p2')}</p>

            <h2>{t('ft_h2_reward')}</h2>
            <p>{t('ft_reward_p')}</p>
            <pre>
                <code>
                    L = −log σ(r(x, y_w) − r(x, y_l))
                </code>
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
                    <strong>{t('ft_qlora_label')}</strong> — {t('ft_qlora_desc')}
                </li>
                <li>
                    <strong>{t('ft_prefix_label')}</strong> — {t('ft_prefix_desc')}
                </li>
            </ul>
        </article>
    );
};

export default FineTuningPage;
