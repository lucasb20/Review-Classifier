import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root: './src',
    base: '/',
    build: {
      outDir: 'dist',
    },
    define: {
      API_URL: JSON.stringify(env.API_URL),
    },
  }
})