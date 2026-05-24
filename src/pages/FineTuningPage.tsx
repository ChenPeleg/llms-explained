/**
 * Fine-Tuning & RLHF Page
 * Covers SFT, reward modelling, PPO, and DPO.
 */
const FineTuningPage = () => {
    return (
        <article className="prose prose-gray max-w-none dark:prose-invert">
            <h1>Fine-Tuning &amp; RLHF</h1>

            <p>
                A pre-trained model is a powerful next-token predictor, but it
                doesn't know how to follow instructions or behave helpfully and
                safely. Fine-tuning bridges that gap.
            </p>

            <h2>Supervised Fine-Tuning (SFT)</h2>
            <p>
                The first step is to fine-tune the model on a dataset of{' '}
                <strong>(prompt, ideal response)</strong> pairs written by
                human annotators. This teaches the model to follow the
                instruction format and produce coherent, helpful responses.
            </p>
            <p>
                The loss is the same causal language modelling loss — the model
                is trained to predict the response tokens given the prompt. The
                prompt tokens are often masked so their loss doesn't contribute.
            </p>

            <h2>Reward Modelling</h2>
            <p>
                Annotators rank multiple model responses to the same prompt.
                A <strong>reward model</strong> (RM) is trained on these
                pairwise preferences using a ranking loss:
            </p>
            <pre>
                <code>
                    L = −log σ(r(x, y_w) − r(x, y_l))
                </code>
            </pre>
            <p>
                where <code>y_w</code> is the preferred response and{' '}
                <code>y_l</code> is the less preferred one. The reward model
                learns to assign higher scalar scores to better responses.
            </p>

            <h2>RLHF with PPO</h2>
            <p>
                Reinforcement Learning from Human Feedback (RLHF) uses the
                reward model as an environment and optimises the SFT model
                (now the policy) using Proximal Policy Optimisation (PPO):
            </p>
            <ol>
                <li>
                    Sample responses from the current policy for a batch of
                    prompts.
                </li>
                <li>
                    Score each response with the reward model.
                </li>
                <li>
                    Update the policy to maximise reward while staying close to
                    the SFT model (via a KL penalty).
                </li>
            </ol>
            <p>
                The KL penalty prevents the policy from drifting too far from
                the SFT baseline and generating gibberish that tricks the RM.
            </p>

            <h2>Direct Preference Optimisation (DPO)</h2>
            <p>
                DPO (Rafailov et al., 2023) skips the RL loop entirely. It
                shows that the reward-maximisation objective can be solved
                implicitly by directly fine-tuning on pairwise preference data:
            </p>
            <pre>
                <code>
                    L = −log σ(β log [π(y_w|x)/π_ref(y_w|x)] − β log
                    [π(y_l|x)/π_ref(y_l|x)])
                </code>
            </pre>
            <p>
                DPO is simpler and more stable than PPO and has become the
                dominant RLHF alternative in open-source models.
            </p>

            <h2>Parameter-Efficient Fine-Tuning (PEFT)</h2>
            <p>
                Full fine-tuning of a 70B-parameter model is expensive.
                PEFT methods update only a small fraction of parameters:
            </p>
            <ul>
                <li>
                    <strong>LoRA</strong> — adds low-rank update matrices{' '}
                    <code>ΔW = BA</code> alongside frozen weights.
                </li>
                <li>
                    <strong>QLoRA</strong> — LoRA on a 4-bit quantised base
                    model, enabling 7B fine-tuning on a single consumer GPU.
                </li>
                <li>
                    <strong>Prefix tuning / Prompt tuning</strong> — prepend
                    learnable soft token embeddings; freeze all model weights.
                </li>
            </ul>
        </article>
    );
};

export default FineTuningPage;
