import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import auth from "auth-astro";

export default defineConfig({
	integrations: [tailwind(), react(), auth()],
	output: "server",
	adapter: cloudflare({
		imageService: 'cloudflare'
 }),
	vite: {
		ssr: {
			external: ["node:path"],
		},
	},
});
