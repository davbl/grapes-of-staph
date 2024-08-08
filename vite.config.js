import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/grapes-of-staph/",
  server: {
    host: "0.0.0.0",
    port: 3000, // use any port number
  },
});
