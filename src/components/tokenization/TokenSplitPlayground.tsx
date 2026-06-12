import { useState, useCallback } from 'react';

/**
 * A single educational token with display text and an illustrative ID.
 * Note: 'id' is not a real tokenizer vocabulary ID — it is a deterministic
 * pseudo-ID generated for educational display purposes only.
 */
interface Token {
    text: string;
    id: number;
}

const TOKEN_COLORS = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
    'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200',
    'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
    'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200',
    'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200',
    'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200',
    'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
];

/**
 * Educational tokenizer: splits text into sub-word-like chunks using a
 * simplified rule set that mirrors real BPE behaviour for common patterns.
 * This is intentionally approximate — accuracy is sacrificed for clarity.
 */
function educationalTokenize(text: string): Token[] {
    if (!text.trim()) return [];

    // Known common subwords that would be merged in a real BPE vocabulary
    const knownPieces: Record<string, number> = {
        ' the': 279,
        ' of': 315,
        ' to': 284,
        ' and': 290,
        ' in': 287,
        ' is': 285,
        ' it': 340,
        ' you': 499,
        ' that': 326,
        ' was': 373,
        ' for': 369,
        ' on': 389,
        ' are': 458,
        ' with': 449,
        ' as': 438,
        ' at': 520,
        ' be': 387,
        ' by': 553,
        ' this': 420,
        ' have': 617,
        ' from': 505,
        ' or': 477,
        ' an': 459,
        ' but': 533,
        ' not': 471,
        ' what': 636,
        ' all': 553,
        ' were': 723,
        ' we': 584,
        ' when': 994,
        ' can': 649,
        ' there': 1070,
        ' use': 1005,
        ' your': 1104,
        ' how': 1268,
        ' said': 1071,
        ' each': 1855,
        ' she': 1016,
        ' which': 1348,
        ' do': 656,
        ' their': 1202,
        ' if': 676,
        ' will': 690,
        ' up': 709,
        ' out': 711,
        ' about': 922,
        ' who': 879,
        ' get': 636,
        ' like': 698,
        ' just': 891,
        ' know': 1406,
        ' time': 892,
        ' people': 1274,
        ' has': 706,
        ' him': 1093,
        ' his': 813,
        ' man': 893,
        ' back': 1203,
        ' think': 1781,
        ' also': 1101,
        ' so': 523,
        ' into': 989,
        ' year': 1664,
        ' good': 1695,
        ' some': 1063,
        ' could': 1436,
        ' them': 1124,
        ' see': 1047,
        ' other': 1023,
        ' than': 1109,
        ' then': 1243,
        ' its': 1202,
        ' our': 1013,
        ' two': 1403,
        ' more': 810,
        ' these': 1521,
        ' want': 2406,
        ' way': 1648,
        ' look': 2007,
        ' first': 1317,
        ' after': 1306,
        ' come': 2041,
        ' may': 1253,
        ' show': 1501,
        ' every': 1475,
        ' new': 1052,
        ' make': 1304,
        ' most': 1455,
        ' over': 916,
        ' give': 2183,
        ' any': 904,
        // common word fragments (BPE-style sub-units)
        'ing': 278,
        'ion': 292,
        'tion': 295,
        'ed': 274,
        'er': 260,
        'ly': 306,
        'al': 278,
        'ize': 1096,
        'ation': 1735,
        'ment': 893,
        'ness': 1042,
        'ful': 2115,
        'less': 1752,
        'able': 1358,
        'ible': 3474,
        'ical': 3378,
        'ist': 1354,
        'ism': 2191,
        'pre': 884,
        'pro': 652,
        'dis': 748,
        're': 260,
        'sub': 848,
        'inter': 2009,
        'trans': 1807,
        'non': 2201,
        'co': 1030,
        'ex': 330,
        'de': 409,
        'im': 318,
        'un': 359,
        'com': 543,
        'con': 521,
        'en': 268,
    };

    // Tokenize: split on word boundaries preserving spaces, then sub-split each chunk
    const rawParts = text.split(/(\s+|[^\w\s]+)/).filter(Boolean);
    const tokens: Token[] = [];

    for (let p = 0; p < rawParts.length; p++) {
        const part = rawParts[p];

        if (/^\s+$/.test(part)) continue; // skip pure whitespace

        const withLeadingSpace = p > 0 && /^\s+$/.test(rawParts[p - 1])
            ? ' ' + part
            : part;

        // Check if we know this whole piece as a unit
        if (knownPieces[withLeadingSpace.toLowerCase()] !== undefined) {
            tokens.push({
                text: withLeadingSpace,
                id: knownPieces[withLeadingSpace.toLowerCase()],
            });
            continue;
        }

        // Otherwise, sub-split greedily
        const subTokens = splitIntoSubwords(withLeadingSpace);
        tokens.push(...subTokens);
    }

    return tokens;
}

/** Greedy longest-match sub-word split using known suffixes/prefixes */
function splitIntoSubwords(word: string): Token[] {
    if (!word) return [];

    // Common suffixes in order of preference (longest first)
    const suffixes = [
        'ization', 'ational', 'fulness', 'iveness', 'ousness', 'ingness',
        'ations', 'nesses', 'lessly', 'ically', 'ments', 'ation', 'izing',
        'iness', 'fully', 'lessly', 'isms', 'ists',
        'ance', 'ence', 'ment', 'ness', 'tion', 'sion', 'less', 'able',
        'ible', 'ical', 'ism', 'ist', 'ing', 'ion', 'ify', 'ize', 'ous',
        'ful', 'ive', 'ent', 'ant', 'ary', 'ory', 'al', 'ed', 'er', 'ly',
        'es', 'en', 'ic',
    ];

    // Common prefixes in order of preference
    const prefixes = [
        'under', 'inter', 'trans', 'over', 'anti', 'self', 'non', 'dis',
        'mis', 'pre', 'pro', 'sub', 'un', 're', 'de', 'ex', 'co', 'en',
        'em', 'in', 'im', 'com', 'con',
    ];

    // Remove leading space for sub-analysis, add it back to first token
    const leadingSpace = word.startsWith(' ') ? ' ' : '';
    const stripped = leadingSpace ? word.slice(1) : word;

    if (stripped.length <= 3) {
        return [{ text: word, id: pseudoId(word) }];
    }

    // Try to find a prefix match
    for (const prefix of prefixes) {
        if (
            stripped.toLowerCase().startsWith(prefix) &&
            stripped.length > prefix.length + 2
        ) {
            const rest = stripped.slice(prefix.length);
            const restTokens = splitIntoSubwords(rest);
            return [
                { text: leadingSpace + stripped.slice(0, prefix.length), id: pseudoId(prefix) },
                ...restTokens,
            ];
        }
    }

    // Try to find a suffix match
    for (const suffix of suffixes) {
        if (
            stripped.toLowerCase().endsWith(suffix) &&
            stripped.length > suffix.length + 2
        ) {
            const stem = stripped.slice(0, stripped.length - suffix.length);
            const stemTokens = splitIntoSubwords(leadingSpace + stem);
            return [
                ...stemTokens,
                { text: suffix, id: pseudoId(suffix) },
            ];
        }
    }

    // No split found — return as-is
    return [{ text: word, id: pseudoId(word) }];
}

/** Generate a deterministic fake token ID from a string for display purposes */
function pseudoId(text: string): number {
    let hash = 5381;
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) + hash + text.charCodeAt(i)) & 0xffff;
    }
    return Math.abs(hash) % 100000;
}

const DEFAULT_TEXT = 'Tokenization is the foundation of every language model.';

/**
 * Token Split Playground
 * User enters free text and sees it split into educational sub-word tokens.
 * No real tokenizer API — uses a simplified educational algorithm.
 */
const TokenSplitPlayground = () => {
    const [text, setText] = useState(DEFAULT_TEXT);
    const tokens = educationalTokenize(text);

    const handleReset = useCallback(() => setText(DEFAULT_TEXT), []);

    return (
        <div
            dir="ltr"
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Interactive A — Token Split Playground
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Type any text and watch it split into token chunks in real time.
                Token IDs shown are illustrative, based on a simplified BPE-style
                algorithm.
            </p>

            {/* Text input */}
            <div className="mb-4">
                <label
                    htmlFor="token-split-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Input text
                </label>
                <textarea
                    id="token-split-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
                    placeholder="Enter text to tokenize…"
                    aria-label="Text to tokenize"
                />
            </div>

            {/* Token display */}
            {tokens.length > 0 ? (
                <>
                    <div
                        className="mb-3 flex flex-wrap gap-1"
                        role="list"
                        aria-label="Tokenized output"
                    >
                        {tokens.map((tok, i) => (
                            <span
                                key={i}
                                role="listitem"
                                className={`rounded px-2 py-0.5 font-mono text-sm ${TOKEN_COLORS[i % TOKEN_COLORS.length]}`}
                                title={`Token ID: ${tok.id}`}
                                aria-label={`Token "${tok.text}", ID ${tok.id}`}
                            >
                                {tok.text}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        <strong>{tokens.length}</strong> token
                        {tokens.length !== 1 ? 's' : ''} — hover a token to see
                        its illustrative ID.
                    </p>
                </>
            ) : (
                <p className="text-sm text-gray-400 dark:text-gray-500">
                    Start typing to see tokens appear…
                </p>
            )}

            {/* Reset */}
            <button
                type="button"
                onClick={handleReset}
                className="mt-4 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                aria-label="Reset input to default example"
            >
                Reset
            </button>
        </div>
    );
};

export default TokenSplitPlayground;
