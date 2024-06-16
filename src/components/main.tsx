import { BrowserRouter } from "react-router-dom";
import ChallengesPage from "../components/challengesPage";
import type { userType } from "../helpers/types.ts";

import { Route, Routes } from "react-router-dom";
import DataProvider from "../helpers/dataContext";
import Challenge from "./challenge";

export default ({ pathname, slug, user }: { pathname: string; slug: string; user: userType | null }) => (
	<BrowserRouter>
		<DataProvider>
			<Routes>
				<Route path="/challenges" element={<ChallengesPage />} />
				<Route path="/challenges/*" element={<Challenge slug={slug} user={user} />} />
			</Routes>
		</DataProvider>
	</BrowserRouter>
);
