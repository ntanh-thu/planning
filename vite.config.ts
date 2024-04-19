import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: [
         { find: '@', replacement: path.resolve('src') },
         { find: '@components', replacement: path.resolve('./src/components') },
         { find: '@assets', replacement: path.resolve('./src/assets') },
         { find: '@pages', replacement: path.resolve('./src/pages') },
      ],
   },
   server: {
      watch: {
         usePolling: true,
      },
   },
});
