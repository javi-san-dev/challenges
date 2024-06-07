import { useContext } from "react";
import { DataContext } from "../helpers/dataContext";
import { TerminalIcon } from "../helpers/icons";
import ConsoleTabs from "./consoleTabs";

export default function Console() {
	const { data } = useContext(DataContext);
	return (
		<div className="border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-transparent">
			<div className="relative h-[100%] overflow-scroll">
				<ConsoleTabs />
				<div className="mt-5 flex flex-col items-center justify-center">
					<span className=" text-neutral-500">
						<TerminalIcon size="5rem" />
					</span>
					<h2 className="text-lg">{data.codeLanguage} Console</h2>
					<p className=" text-sm text-neutral-500">console logs will appear here.</p>
				</div>
			</div>
		</div>
	);
}
