import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from "autoprefixer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    root: './',
    build: {
        outDir: 'dist',
    },
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                  @use "@/assets/styles/_variables.scss" as *;
                  @use "@/assets/styles/_mixins.scss" as *;
                `,
            },
        },
        postcss: {
            plugins: [autoprefixer],
        },
    },
});