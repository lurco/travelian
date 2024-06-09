import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [legacy()],
  base: "https://lurco.github.io/travelian",
  build: {
    outDir: "build",
  }
});

