import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/llms-explained/',
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000,
    },

    define: {
        'import.meta.env.VITE_BUILD_EPOC_DATE': JSON.stringify(
            new Date().getTime()
        ),
        'import.meta.env.VITE_APP_VERSION': JSON.stringify(
            process.env.npm_package_version
        ),
    },
});
