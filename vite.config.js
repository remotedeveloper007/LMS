import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module
import sass from 'vite-plugin-sass'; // Import sass as default

export default defineConfig({
    plugins: [
        laravel({
            // input: ['resources/css/app.css', 'resources/js/app.jsx'],
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        sass (),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/resources/js'), // Adjust this to match your actual source directory
        },
    },
});
