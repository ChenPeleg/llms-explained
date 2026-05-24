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
import MainLayout from './layouts/MainLayout';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/tokenization" element={<TokenizationPage />} />
                <Route path="/embeddings" element={<EmbeddingsPage />} />
                <Route path="/transformer" element={<TransformerPage />} />
                <Route path="/attention" element={<AttentionPage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/inference" element={<InferencePage />} />
                <Route path="/scaling" element={<ScalingLawsPage />} />
                <Route path="/finetuning" element={<FineTuningPage />} />
            </Route>
        </Routes>
    );
}
