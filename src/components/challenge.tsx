import { Button } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Split from "react-split";
import type { userType } from "../helpers/types";
import Description from "./description";
import Firework from "./firework";
import FooterComponent from "./footer";
import NavBarComponent from "./navBar";
import RightBoxComponent from "./rightBox";

export default function Challenge({ slug, user }: { slug: string; user: userType }) {
	const [challenge, setChallenge] = useState();
	const location = useLocation(); // Get location object

	useEffect(() => {
		const getChallenge = async () => {
			const lastIndex = location.pathname.lastIndexOf("/");
			const newChallenge: string = location.pathname.substring(lastIndex + 1);
			const res = await fetch(`/api/${newChallenge}.json`);
			const challenge = (await res.json()) as challengeType;
			setChallenge(challenge);
			document.title = challenge.title;
		};

		void getChallenge();
	}, [location.pathname]);

	if (challenge === undefined) return <p>Loading</p>;

	return (
		<div className="flex h-[100vh] flex-col overflow-hidden  bg-neutral-100 dark:bg-transparent">
			<NavBarComponent />
			<Split
				className="split grow overflow-hidden bg-none flex px-4"
				id="mainSplit"
				sizes={[50, 50]}
				minSize={100}
				expandToMin={false}
				gutterSize={10}
				gutterAlign="center"
				snapOffset={30}
				dragInterval={1}
				direction="horizontal"
				cursor="col-resize"
			>
				<Description challenge={challenge} />
				<RightBoxComponent allStartedCode={challenge.startedCode} />
			</Split>
			<FooterComponent refName={challenge.refName} testCases={challenge.testCases} />
			<Firework />
		</div>
	);
}
