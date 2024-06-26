import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";
import { tursoDB } from "./src/helpers/turso";

export default defineConfig({
	providers: [
		Google({
			clientId: import.meta.env.GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (account !== undefined) {
				console.log("VALUE:", account);
				const { rows } = await tursoDB.execute({
					sql: "SELECT * FROM users WHERE email = ?",
					args: [user.email],
				});

				if (!rows.length) {
					await tursoDB.execute({
						sql: "INSERT INTO users (user_id, sub, user_name, email, provider) VALUES (?, ?, ?, ?, ?)",
						args: [account.providerAccountId, token.sub, user.name, user.email, account.provider],
					});
				}

				token.id = account.providerAccountId;
				token.isPremium = false;
			}
			if (user) {
				// User is available during sign-in
			}
			return token;
		},
		session({ session, token }) {
			session.user.id = token.id;
			session.user.isPremium = token.isPremium;
			return session;
		},
	},
});
