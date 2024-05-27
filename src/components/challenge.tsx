import type { userType } from "../helpers/types"
import { Button } from "@nextui-org/react";
import NavBarComponent from "./navBar";

export default function Challenge({ slug, user }: { slug: string; user: userType }) {

	return (
		<div className="flex h-[100vh] flex-col overflow-hidden bg-white dark:bg-black">
			<NavBarComponent />
		</div>
	);
}
