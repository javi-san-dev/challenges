import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [tailwind(), react()],
	output: "server",
	adapter: cloudflare(),
	vite: {
		ssr: {
			external: ["node:path"],
		},
	},
});
