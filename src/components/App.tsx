import { Route, Routes } from "react-router-dom";
import DataProvider from "../helpers/dataContext";
import type { userType } from "../helpers/types.ts";
import Challenge from "./challenge";

export default function App({ slug, user }: { slug: string; user: userType }) {
	return (
		<div>
			<DataProvider>
				<Routes>
					<Route path="/challenge/*" element={<Challenge slug={slug} user={user} />} />
				</Routes>
			</DataProvider>
		</div>
	);
}
