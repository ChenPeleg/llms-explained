import { HashRouter } from 'react-router';

import { ServicesProvider } from './services/provider/ServicesProvider.tsx';
import { injectedServices } from './services/injection/injectedServices.ts';
import { GlobalStateContextProvider } from './stores/GlobalState.tsx';
import { AppRoutes } from './AppRoutes.tsx';
import { ToastProvider } from './common';

function App() {
    return (
        <HashRouter>
            <ServicesProvider services={injectedServices}>
                <GlobalStateContextProvider>
                    <ToastProvider>
                        <AppRoutes />
                    </ToastProvider>
                </GlobalStateContextProvider>
            </ServicesProvider>
        </HashRouter>
    );
}

export default App;
