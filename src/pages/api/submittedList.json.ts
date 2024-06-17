import { getSession } from "auth-astro/server";
import { tursoDB } from "../../helpers/turso";

export const GET = async ({ request, response }) => {
	try {
		const session = await getSession(request);
		const userID = session.user.id;
		const { rows } = await tursoDB.execute({
			sql: "SELECT * FROM submitted_code WHERE user_id = ?",
			args: [userID],
		});
		if (rows.length) {
			const data = { ...rows[0], user_id: null, id: null };
			return new Response(JSON.stringify(data), { status: 200 });
		}
			return new Response(null, { status: 400, msg: "no submit solution found" });
	} catch (error) {
		return new Response(null, { status: 400, msg: error });
	}
};
