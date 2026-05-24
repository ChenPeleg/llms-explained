import { BrowserRouter } from 'react-router';

import { ServicesProvider } from './services/provider/ServicesProvider.tsx';
import { injectedServices } from './services/injection/injectedServices.ts';
import { GlobalStateContextProvider } from './stores/GlobalState.tsx';
import { AppRoutes } from './AppRoutes.tsx';
import { ToastProvider } from './common';

function App() {
    return (
        <BrowserRouter basename="/llms-explained">
            <ServicesProvider services={injectedServices}>
                <GlobalStateContextProvider>
                    <ToastProvider>
                        <AppRoutes />
                    </ToastProvider>
                </GlobalStateContextProvider>
            </ServicesProvider>
        </BrowserRouter>
    );
}

export default App;
