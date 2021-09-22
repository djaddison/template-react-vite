import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { join } from "path"

const PROJECT_ROOT = process.cwd()
const projectPath = (path: string) => join(PROJECT_ROOT, path)

export default defineConfig({
  plugins: [react()],
  root: projectPath("src"),
  build: {
    outDir: projectPath("dist"),
    emptyOutDir: true,
  },
})
