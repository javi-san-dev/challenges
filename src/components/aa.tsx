import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ChallengesPage from "../components/challengesPage";

export default function AA() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/challenges" element={<ChallengesPage />} />
			</Routes>
		</BrowserRouter>
	);
}
