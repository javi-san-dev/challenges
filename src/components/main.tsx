import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import type { userType } from "../helpers/types.ts";
import App from "./App.tsx";

export default ({ pathname, slug, user }: { pathname: string; slug: string; user: userType }) =>
	import.meta.env.SSR ? (
		<StaticRouter location={pathname}>
			<App slug={slug} user={user} />
		</StaticRouter>
	) : (
		<BrowserRouter>
			<App slug={slug} user={user} />
		</BrowserRouter>
	);
