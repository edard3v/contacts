import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@App": "/src/App",
      "@pages": "/src/pages",
      "@router": "/src/router",
      "@components": "/src/components",
      "@layouts": "/src/layouts",
      "@services": "/src/services",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@api": "/src/api",
      "@errors": "/src/errors",
      "@enums": "/src/enums",
      "@global_stores": "/src/global_stores",
      "@regex": "/src/regex",
    },
  },
});
