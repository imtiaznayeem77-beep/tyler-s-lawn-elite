// @lovable.dev/vite-tanstack-config includes tanstackStart, viteReact, tailwindcss, tsConfigPaths,
// nitro (default cloudflare). We disable the default nitro target with `cloudflare: false`
// and add nitro with the Vercel preset so the build deploys cleanly to Vercel.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [nitro({ preset: "vercel" })],
  },
});
