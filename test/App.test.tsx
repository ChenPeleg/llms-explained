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

describe('App', () => {
    it('renders the home page at "/"', () => {
        renderApp('/');
        expect(screen.getAllByText('LLMs Explained').length).toBeGreaterThan(0);
    });

    it('renders the tokenization page at "/tokenization"', () => {
        renderApp('/tokenization');
        const headings = screen.getAllByRole('heading', { level: 1 });
        expect(headings.some((h) => h.textContent === 'Tokenization')).toBe(true);
    });
});
