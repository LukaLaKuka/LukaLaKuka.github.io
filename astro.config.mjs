import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
const LIVE_URL = "https://tomhuel.github.io";
import partytown from "@astrojs/partytown"


// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  integrations: [
    svelte(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});