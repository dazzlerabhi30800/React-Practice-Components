import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/generate-token": "https://dev-test.cimet.io",
    },
  },
  plugins: [react()],
});
