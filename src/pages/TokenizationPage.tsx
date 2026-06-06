import TokenizerPlayground from '../components/TokenizerPlayground';
import TokenizationSectionNavigation from '../components/TokenizationSectionNavigation';
import { useTranslate } from '../hooks/useTranslate';

/**
 * Tokenization Page
 * Covers BPE, WordPiece, and how text becomes token IDs.
 */
const TokenizationPage = () => {
    const { t } = useTranslate();

    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1>{t('tok_h1')}</h1>

            <p>{t('tok_intro')}</p>

            <h2>{t('tok_h2_subword')}</h2>
            <p>{t('tok_subword_p')}</p>

            <h2>{t('tok_h2_bpe')}</h2>
            <p>{t('tok_bpe_p')}</p>
            <ol>
                <li>{t('tok_bpe_li1')}</li>
                <li>{t('tok_bpe_li2')}</li>
                <li>{t('tok_bpe_li3')}</li>
                <li>{t('tok_bpe_li4')}</li>
            </ol>

            <h2>{t('tok_h2_wordpiece')}</h2>
            <p>{t('tok_wordpiece_p')}</p>

            <h2>{t('tok_h2_vocab')}</h2>
            <ul>
                <li>GPT-2: 50,257 tokens</li>
                <li>GPT-3 / GPT-4 (tiktoken cl100k): 100,277 tokens</li>
                <li>BERT: 30,522 tokens</li>
                <li>LLaMA 3: 128,000 tokens</li>
            </ul>

            <h2>{t('tok_h2_practice')}</h2>
            <p>{t('tok_practice_p')}</p>

            <h2>{t('tok_h2_intermediate')}</h2>
            <p>{t('tok_intermediate_p')}</p>

            <div className="not-prose my-6">
                <TokenizerPlayground />
            </div>

            <h2>{t('tok_h2_checkpoint')}</h2>
            <p>{t('tok_checkpoint_intro')}</p>
            <ul>
                <li>{t('tok_checkpoint_li1')}</li>
                <li>{t('tok_checkpoint_li2')}</li>
                <li>{t('tok_checkpoint_li3')}</li>
            </ul>

            <TokenizationSectionNavigation />
        </article>
    );
};

export default TokenizationPage;
