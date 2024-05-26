import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.API_URL)
  return {
    root: './src',
    base: '/',
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000,
    },
    define: {
      API_URL: JSON.stringify(env.API_URL),
    },
  }
})