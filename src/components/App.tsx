import { Route, Routes } from "react-router-dom";
import type { userType } from "../helpers/types.ts";
import Challenge from "./challenge";

export default function App({ slug, user }: { slug: string; user: userType }) {
	return (
		<div>
			<Routes>
				<Route path="/challenge/*" element={<Challenge slug={slug} user={user} />} />
			</Routes>
		</div>
	);
}
