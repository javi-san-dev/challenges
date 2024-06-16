import challenges from "../../data/challenges.json";
import { getSession } from "auth-astro/server";

export async function GET({ params, redirect, request }: { params: { id: string }; redirect: (url: string) => void }) {
	const session = await getSession(request);
	const id = params.id;
	const challenge = challenges[id as keyof typeof challenges];
	if (challenge === undefined) {
		// return new Response(null, {
		// 	status: 404,
		// 	statusText: "Not found",
		// })
		return redirect("/404");
	}

	return new Response(JSON.stringify(challenge), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
