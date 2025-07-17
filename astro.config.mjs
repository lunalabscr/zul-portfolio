// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
const isProduction = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  site: isProduction ? "https://lunalabscr.github.io" : undefined,
  base: isProduction ? "/zul-portfolio/" : "/",
  integrations: [react()],
});
