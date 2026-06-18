import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const rawBase = env.VITE_BASE_PATH || "/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  return {
    plugins: [react(), tailwindcss()],
    base,
  };
});
