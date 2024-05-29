import type { userType } from "../helpers/types";
import { Button } from "@nextui-org/react";
import NavBarComponent from "./navBar";
import FooterComponent from "./footer";
import Split from "react-split";
import Description from "./description"
import RightBoxComponent from "./rightBox"

export default function Challenge({
	slug,
	user,
}: {
	slug: string;
	user: userType;
}) {
	return (
		<div className="flex h-[100vh] flex-col overflow-hidden bg-white dark:bg-black">
			<NavBarComponent />
			<Split
				className="split grow overflow-hidden bg-none flex px-4"
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
				<Description />
				<RightBoxComponent />
			</Split>
			<FooterComponent />
		</div>
	);
}
