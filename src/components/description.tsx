import ChallengeDescription from "./challengeDescription";
import TabsDescription from "./tabsDescription";
import CodeSolution from "./codeSolution";

export default function DescriptionComponent() {
	return (
		<div className="border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
			<div className="relative h-[100%] overflow-scroll">
				<TabsDescription />
				{/* <ChallengeDescription /> */}
				<CodeSolution />
			</div>
		</div>
	);
}
