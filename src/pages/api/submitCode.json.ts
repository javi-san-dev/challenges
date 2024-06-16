import { getSession } from "auth-astro/server";
import { tursoDB } from "../../helpers/turso";

export const POST: APIRoute = async ({ request, params }) => {
	try {
		if (request.headers.get("Content-Type") === "application/json") {
			const user = await getSession(request);
			const body = await request.json();
			const code = body.code;
			const codeLanguage = body.codeLanguage;
			const challengeName = body.challengeName;
			let solution = null;
			const { rows } = await tursoDB.execute({
				sql: "SELECT * FROM submitted_code WHERE user_id = ?",
				args: [user.user.id],
			});
			if (!rows.length) {
				solution = JSON.stringify({ [codeLanguage]: code });
				await tursoDB.execute({
					sql: `INSERT INTO submitted_code (user_id, ${challengeName}) VALUES (?, ?)`,
					args: [user.user.id, solution],
				});
			} else {
				const submitted_code = JSON.parse(rows[0][challengeName]);
				solution = structuredClone(submitted_code);
				solution[codeLanguage] = code;
				solution = JSON.stringify(solution);
				await tursoDB.execute({
					sql: `UPDATE submitted_code SET ${challengeName} = ? WHERE user_id = ?`,
					args: [solution, user.user.id],
				});
			}

			return new Response(solution, { status: 200 });
		}
		return new Response(null, { status: 400, msg: "bad content type" });
	} catch (err) {
		return new Response(null, { status: 400, msg: err });
	}
};
