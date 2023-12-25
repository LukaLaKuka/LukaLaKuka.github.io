import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const LIVE_URL = "https://tomhuel.github.io";

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  integrations: [tailwind()]
});