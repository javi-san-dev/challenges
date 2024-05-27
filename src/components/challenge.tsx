import type { userType } from "../helpers/types"
import { Button } from "@nextui-org/react";

export default function Challenge({ slug, user }: { slug: string; user: userType }) {

	return (
		<div className="flex h-[100vh] flex-col overflow-hidden bg-white dark:bg-black">
			<h1 className=" text-red-700">Challenge</h1>
			<Button>click me</Button>
		</div>
	);
}
