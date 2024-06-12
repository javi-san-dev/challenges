export function GET(context) {
	const AUTH_SECRET = context.env.AUTH_SECRET;
	// const AUTH_SECRET = import.meta.env.AUTH_SECRET
	console.log("GETTINg ENV VARS", AUTH_SECRET)
	return new Response(AUTH_SECRET);
}
