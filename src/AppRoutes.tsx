import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import NewFormPage from './pages/NewFormPage';
import EditFormPage from './pages/EditFormPage';
import MainLayout from './layouts/MainLayout';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/forms/new" element={<NewFormPage />} />
                <Route path="/forms/:id/edit" element={<EditFormPage />} />
            </Route>
        </Routes>
    );
}
