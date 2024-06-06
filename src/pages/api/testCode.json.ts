import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const body = await request.json();
		const code = body.code;
		const lang = body.lang;
		const functionName = body.functionName;
		const testCases = body.testCases;
		const res = await fetch(`http://localhost:8080/api/${lang}`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ code, input: "", functionName, testCases }),
		});
		const codeOutput = await res.json();
		return new Response(JSON.stringify(codeOutput), {
			status: 200,
		});
	}
	return new Response(null, { status: 400 });
};
