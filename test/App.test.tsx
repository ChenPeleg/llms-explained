import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { ServicesProvider } from '../src/services/provider/ServicesProvider.tsx';
import { injectedServices } from '../src/services/injection/injectedServices.ts';
import { GlobalStateContextProvider } from '../src/stores/GlobalState.tsx';
import { AppRoutes } from '../src/AppRoutes.tsx';

function renderApp(route: string = '/') {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <ServicesProvider services={injectedServices}>
                <GlobalStateContextProvider>
                    <AppRoutes />
                </GlobalStateContextProvider>
            </ServicesProvider>
        </MemoryRouter>
    );
}

function expectPageHeading(text: string) {
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.some((h) => h.textContent === text)).toBe(true);
}

describe('App', () => {
    it('renders the home page at "/"', () => {
        renderApp('/');
        expect(screen.getAllByText('LLMs מוסבר').length).toBeGreaterThan(0);
    });

    it('renders the tokenization page at "/tokenization"', () => {
        renderApp('/tokenization');
        expectPageHeading('טוקניזציה');
    });

    it('renders the tiktoken sub-page at "/tokenization/tiktoken"', () => {
        renderApp('/tokenization/tiktoken');
        expectPageHeading('ספריית TikToken');
    });

    it('renders the word2vec sub-page at "/embeddings/word2vec"', () => {
        renderApp('/embeddings/word2vec');
        expectPageHeading('Word2Vec');
    });

    it('renders the encoder sub-page at "/transformer/encoder"', () => {
        renderApp('/transformer/encoder');
        expectPageHeading('מחסנית Encoder');
    });

    it('renders the self-attention sub-page at "/attention/self-attention"', () => {
        renderApp('/attention/self-attention');
        expectPageHeading('Self-Attention');
    });

    it('renders the next-token sub-page at "/training/next-token"', () => {
        renderApp('/training/next-token');
        expectPageHeading('מודל שפה סיבתי');
    });

    it('renders the temperature sub-page at "/inference/temperature"', () => {
        renderApp('/inference/temperature');
        expectPageHeading('סקיילינג טמפרטורה');
    });

    it('renders the chinchilla sub-page at "/scaling/chinchilla"', () => {
        renderApp('/scaling/chinchilla');
        expectPageHeading('סקיילינג Chinchilla');
    });

    it('renders the sft sub-page at "/finetuning/sft"', () => {
        renderApp('/finetuning/sft');
        expectPageHeading('כוונון מונחה');
    });
});
