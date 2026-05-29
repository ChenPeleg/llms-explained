import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import TokenizationPage from './pages/TokenizationPage';
import EmbeddingsPage from './pages/EmbeddingsPage';
import TransformerPage from './pages/TransformerPage';
import AttentionPage from './pages/AttentionPage';
import TrainingPage from './pages/TrainingPage';
import InferencePage from './pages/InferencePage';
import ScalingLawsPage from './pages/ScalingLawsPage';
import FineTuningPage from './pages/FineTuningPage';
import TikTokenPage from './pages/tokenization/TikTokenPage';
import WordPiecePage from './pages/tokenization/WordPiecePage';
import SentencePiecePage from './pages/tokenization/SentencePiecePage';
import Word2VecPage from './pages/embeddings/Word2VecPage';
import PositionalEncodingsPage from './pages/embeddings/PositionalEncodingsPage';
import EncoderPage from './pages/transformer/EncoderPage';
import DecoderPage from './pages/transformer/DecoderPage';
import FeedForwardPage from './pages/transformer/FeedForwardPage';
import SelfAttentionPage from './pages/attention/SelfAttentionPage';
import MultiHeadPage from './pages/attention/MultiHeadPage';
import KVCachePage from './pages/attention/KVCachePage';
import NextTokenPage from './pages/training/NextTokenPage';
import MaskedLMPage from './pages/training/MaskedLMPage';
import LossPage from './pages/training/LossPage';
import TemperaturePage from './pages/inference/TemperaturePage';
import TopKPPage from './pages/inference/TopKPPage';
import BeamSearchPage from './pages/inference/BeamSearchPage';
import ChinchillaPage from './pages/scaling/ChinchillaPage';
import EmergentPage from './pages/scaling/EmergentPage';
import SFTPage from './pages/finetuning/SFTPage';
import RLHFPage from './pages/finetuning/RLHFPage';
import LoRAPage from './pages/finetuning/LoRAPage';
import MainLayout from './layouts/MainLayout';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/tokenization">
                    <Route index element={<TokenizationPage />} />
                    <Route path="tiktoken" element={<TikTokenPage />} />
                    <Route path="wordpiece" element={<WordPiecePage />} />
                    <Route
                        path="sentencepiece"
                        element={<SentencePiecePage />}
                    />
                </Route>
                <Route path="/embeddings">
                    <Route index element={<EmbeddingsPage />} />
                    <Route path="word2vec" element={<Word2VecPage />} />
                    <Route
                        path="positional-encodings"
                        element={<PositionalEncodingsPage />}
                    />
                </Route>
                <Route path="/transformer">
                    <Route index element={<TransformerPage />} />
                    <Route path="encoder" element={<EncoderPage />} />
                    <Route path="decoder" element={<DecoderPage />} />
                    <Route path="feed-forward" element={<FeedForwardPage />} />
                </Route>
                <Route path="/attention">
                    <Route index element={<AttentionPage />} />
                    <Route
                        path="self-attention"
                        element={<SelfAttentionPage />}
                    />
                    <Route path="multi-head" element={<MultiHeadPage />} />
                    <Route path="kv-cache" element={<KVCachePage />} />
                </Route>
                <Route path="/training">
                    <Route index element={<TrainingPage />} />
                    <Route path="next-token" element={<NextTokenPage />} />
                    <Route path="masked-lm" element={<MaskedLMPage />} />
                    <Route path="loss" element={<LossPage />} />
                </Route>
                <Route path="/inference">
                    <Route index element={<InferencePage />} />
                    <Route path="temperature" element={<TemperaturePage />} />
                    <Route path="top-k-top-p" element={<TopKPPage />} />
                    <Route path="beam-search" element={<BeamSearchPage />} />
                </Route>
                <Route path="/scaling">
                    <Route index element={<ScalingLawsPage />} />
                    <Route path="chinchilla" element={<ChinchillaPage />} />
                    <Route
                        path="emergent-abilities"
                        element={<EmergentPage />}
                    />
                </Route>
                <Route path="/finetuning">
                    <Route index element={<FineTuningPage />} />
                    <Route path="sft" element={<SFTPage />} />
                    <Route path="rlhf" element={<RLHFPage />} />
                    <Route path="lora" element={<LoRAPage />} />
                </Route>
            </Route>
        </Routes>
    );
}
