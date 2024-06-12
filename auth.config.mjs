import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

import dotenv from 'dotenv'

dotenv.config();

const { env } = process;

export default defineConfig({
	providers: [
		Google({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		session: ({ session, token }) => ({
			...session,
			user: {
				...session.user,
				id: token.sub,
			},
		}),
	},
});
