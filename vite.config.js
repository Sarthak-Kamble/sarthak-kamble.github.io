import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// Root base for https://sarthak-kamble.github.io/ (user GitHub Pages site).
// Only set VITE_BASE_PATH in .env if you intentionally host under a subfolder.
const base =
  process.env.VITE_BASE_PATH && process.env.VITE_BASE_PATH !== "/"
    ? process.env.VITE_BASE_PATH.endsWith("/")
      ? process.env.VITE_BASE_PATH
      : `${process.env.VITE_BASE_PATH}/`
    : "/";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
});
