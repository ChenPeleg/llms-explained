import { useTranslate } from '../hooks/useTranslate';

const PreTransformerTechniquesPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('pretr_h1')}</h1>
            <p>{t('pretr_intro')}</p>

            <h2>{t('pretr_h2_why')}</h2>
            <p>{t('pretr_why_p1')}</p>
            <p>{t('pretr_why_p2')}</p>

            <h2>{t('pretr_h2_baselines')}</h2>
            <p>{t('pretr_baselines_intro')}</p>
            <ul>
                <li>
                    <strong>{t('pretr_baseline_ngram_label')}</strong> —{' '}
                    {t('pretr_baseline_ngram_desc')}
                </li>
                <li>
                    <strong>{t('pretr_baseline_tfidf_label')}</strong> —{' '}
                    {t('pretr_baseline_tfidf_desc')}
                </li>
                <li>
                    <strong>{t('pretr_baseline_nb_label')}</strong> —{' '}
                    {t('pretr_baseline_nb_desc')}
                </li>
            </ul>

            <h2>{t('pretr_h2_rnn_lstm_gru')}</h2>
            <p>{t('pretr_rnn_intro')}</p>
            <ul>
                <li>{t('pretr_rnn_li1')}</li>
                <li>{t('pretr_rnn_li2')}</li>
                <li>{t('pretr_rnn_li3')}</li>
            </ul>

            <h2>{t('pretr_h2_cnn')}</h2>
            <p>{t('pretr_cnn_p1')}</p>
            <p>{t('pretr_cnn_p2')}</p>

            <h2>{t('pretr_h2_seq2seq')}</h2>
            <p>{t('pretr_seq2seq_p1')}</p>
            <p>{t('pretr_seq2seq_p2')}</p>
            <ol>
                <li>{t('pretr_seq2seq_li1')}</li>
                <li>{t('pretr_seq2seq_li2')}</li>
                <li>{t('pretr_seq2seq_li3')}</li>
            </ol>

            <h2>{t('pretr_h2_examples')}</h2>
            <p>{t('pretr_examples_intro')}</p>
            <ul>
                <li>{t('pretr_example_translation')}</li>
                <li>{t('pretr_example_sentiment')}</li>
                <li>{t('pretr_example_qa')}</li>
            </ul>

            <h2>{t('pretr_h2_transformer_shift')}</h2>
            <p>{t('pretr_shift_p1')}</p>
            <p>{t('pretr_shift_p2')}</p>
            <ul>
                <li>{t('pretr_shift_li1')}</li>
                <li>{t('pretr_shift_li2')}</li>
                <li>{t('pretr_shift_li3')}</li>
            </ul>

            <h2>{t('pretr_h2_checkpoint')}</h2>
            <p>{t('pretr_checkpoint_intro')}</p>
            <ul>
                <li>{t('pretr_checkpoint_li1')}</li>
                <li>{t('pretr_checkpoint_li2')}</li>
                <li>{t('pretr_checkpoint_li3')}</li>
            </ul>
        </article>
    );
};

export default PreTransformerTechniquesPage;
