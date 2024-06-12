import authConfig from "auth:config";
import { Auth } from "@auth/core";
import type { Session } from "@auth/core/types";

/**
 * Fetches the current session.
 * @param req The request object.
 * @returns The current session, or `null` if there is no session.
 */
export async function getSession(req: Request, AUTH_SECRET, options = authConfig): Promise<Session | null> {
	// @ts-ignore
	options.secret ??= AUTH_SECRET;
	options.trustHost ??= true;

	const url = new URL(`${options.prefix}/session`, req.url);
	const response = await Auth(new Request(url, { headers: req.headers }), options);
	const { status = 200 } = response;

	const data = await response.json();
	if (!data || !Object.keys(data).length) return null;
	if (status === 200) return data;
	throw new Error(data.message);
}
