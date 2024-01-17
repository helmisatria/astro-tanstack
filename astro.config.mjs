import { defineConfig } from "astro/config";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [TanStackRouterVite()]
  },
  integrations: [react(), tailwind()]
});