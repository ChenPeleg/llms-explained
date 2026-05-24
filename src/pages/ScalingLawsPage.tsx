/**
 * Scaling Laws Page
 * Covers Chinchilla optimal training and the relationship between
 * compute, data, and model size.
 */
const ScalingLawsPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Scaling Laws</h1>

            <p>
                Empirical scaling laws describe how model performance improves
                predictably as we increase model size, dataset size, and
                compute budget.
            </p>

            <h2>Kaplan et al. (2020) — OpenAI Scaling Laws</h2>
            <p>
                The original scaling-laws paper found that language model loss
                follows a power law with respect to:
            </p>
            <ul>
                <li>
                    <strong>Parameters N</strong>: L ∝ N⁻⁰·⁰⁷⁶
                </li>
                <li>
                    <strong>Dataset tokens D</strong>: L ∝ D⁻⁰·⁰⁹⁵
                </li>
                <li>
                    <strong>Compute C</strong>: L ∝ C⁻⁰·⁰⁵
                </li>
            </ul>
            <p>
                Crucially, these are independent — each can be scaled without
                running out of the others' benefit. The paper suggested
                training very large models on relatively small data budgets.
            </p>

            <h2>Chinchilla (Hoffmann et al., 2022)</h2>
            <p>
                DeepMind's re-analysis showed that Kaplan et al. had
                underestimated the value of data. Their finding:
            </p>
            <blockquote>
                For compute-optimal training, model size and training tokens
                should scale <strong>equally</strong>. The optimal token count
                is approximately <strong>20× the parameter count</strong>.
            </blockquote>
            <p>
                GPT-3 (175B params, 300B tokens) was significantly
                under-trained by this metric. The Chinchilla model (70B params,
                1.4T tokens) outperformed GPT-3 despite using less compute.
            </p>

            <h2>Implications</h2>
            <ul>
                <li>
                    Models trained since 2023 (LLaMA, Mistral, Falcon) mostly
                    follow Chinchilla ratios or even exceed them (LLaMA-2:
                    7B params on 2T tokens = ~286× the parameter count).
                </li>
                <li>
                    Inference efficiency matters: a smaller, well-trained model
                    is cheaper to serve than a large, under-trained one with
                    the same loss.
                </li>
                <li>
                    Data quality matters as much as quantity — "textbook
                    quality" data (phi-1, phi-2) can beat much larger corpora.
                </li>
            </ul>

            <h2>Emergent Abilities</h2>
            <p>
                Some capabilities (chain-of-thought reasoning, arithmetic,
                multi-step logic) appear suddenly as models cross certain
                parameter thresholds. This "emergence" is not fully explained
                by smooth power-law scaling and is an active research area.
            </p>

            <h2>Beyond Loss: Downstream Task Scaling</h2>
            <p>
                Pre-training loss is a good proxy but not the only metric.
                Some tasks (coding, mathematics) benefit disproportionately from
                scale, while others plateau earlier. Benchmark-specific scaling
                curves can differ significantly from perplexity curves.
            </p>
        </article>
    );
};

export default ScalingLawsPage;
