import TokenizerPlayground from '../components/TokenizerPlayground';

/**
 * Tokenization Page
 * Covers BPE, WordPiece, and how text becomes token IDs.
 */
const TokenizationPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Tokenization</h1>

            <p>
                Before a language model can process text, the text must be
                converted into a sequence of discrete <strong>tokens</strong>.
                A token is the basic unit the model operates on — it can be a
                word, a sub-word, a single character, or even whitespace.
            </p>

            <h2>Why Sub-word Tokenization?</h2>
            <p>
                Early NLP models used whole-word vocabularies, but these
                struggle with rare or unseen words. Character-level models handle
                any word but produce very long sequences. <strong>Sub-word</strong>{' '}
                tokenization (e.g. BPE, WordPiece, Unigram) finds a middle
                ground: common words get their own token, while rare words are
                split into familiar pieces.
            </p>

            <h2>Byte-Pair Encoding (BPE)</h2>
            <p>
                BPE starts with a character-level vocabulary and iteratively
                merges the most frequent pair of adjacent tokens until the
                vocabulary reaches a target size. GPT models (including
                GPT-4) use a variant called <em>tiktoken</em>.
            </p>
            <ol>
                <li>
                    Initialise vocabulary with individual characters (and a
                    special end-of-word symbol).
                </li>
                <li>
                    Count all adjacent token pairs in the training corpus.
                </li>
                <li>
                    Merge the most frequent pair into a new token.
                </li>
                <li>Repeat until the vocabulary is large enough.</li>
            </ol>

            <h2>WordPiece</h2>
            <p>
                Used by BERT and its derivatives. Similar to BPE but merges
                pairs that maximise the likelihood of the training data rather
                than raw frequency. Sub-word tokens that don't start a word are
                prefixed with <code>##</code> (e.g.,{' '}
                <code>playing → play + ##ing</code>).
            </p>

            <h2>Key Vocabulary Numbers</h2>
            <ul>
                <li>GPT-2: 50,257 tokens</li>
                <li>GPT-3 / GPT-4 (tiktoken cl100k): 100,277 tokens</li>
                <li>BERT: 30,522 tokens</li>
                <li>LLaMA 3: 128,000 tokens</li>
            </ul>

            <h2>Tokenization in Practice</h2>
            <p>
                Numbers, punctuation, and non-English scripts often tokenize
                inefficiently — a single Chinese character may map to multiple
                tokens. This is why token count (not character count) matters
                when estimating model costs and context window usage.
            </p>

            {/* Interactive Demo */}
            <div className="not-prose my-6">
                <TokenizerPlayground />
            </div>
        </article>
    );
};

export default TokenizationPage;
