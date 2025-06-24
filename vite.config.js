import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://localhost:8099',   // <— drop the /api
                changeOrigin: true,
                secure: false,
                rewrite: p => p                // ← either remove entirely or no-op
            }
        }
    }
});
