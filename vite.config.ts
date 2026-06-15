// @lovable.dev/vite-tanstack-config bundles tanstackStart, viteReact, tailwindcss, tsConfigPaths
// and nitro (defaults to cloudflare). We pin nitro to the Vercel preset for production deploys.
// Inside the Lovable sandbox build the preset is forced to cloudflare automatically.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
