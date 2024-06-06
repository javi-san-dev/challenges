import ConsoleTabs from "./consoleTabs";

export default function Console() {
	return (
		<div className="border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-transparent">
			<div className="relative h-[100%] overflow-scroll">
				<ConsoleTabs />
			</div>
		</div>
	);
}
