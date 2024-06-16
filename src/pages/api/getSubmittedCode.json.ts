import { getSession } from "auth-astro/server";
import { tursoDB } from "../../helpers/turso";

export const POST: APIRoute = async ({ request, params }) => {
	try {
		if (request.headers.get("Content-Type") === "application/json") {
			const user = await getSession(request);
			const body = await request.json();
			const challengeName = body.challengeName;
			const { rows } = await tursoDB.execute({
				sql: `SELECT ${challengeName} FROM submitted_code WHERE user_id = ?`,
				args: [user.user.id],
			});
			console.log(rows)
			return rows.length > 0 ? new Response(JSON.stringify(rows[0]), { status: 200 }) : new Response(null, { status: 200 });
		}
	} catch (error) {
		return new Response(null, { status: 400, msg: error });
	}
};
