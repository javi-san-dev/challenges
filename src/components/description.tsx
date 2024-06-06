import { useState } from "react";
import ChallengeDescription from "./challengeDescription";
import CodeSolution from "./codeSolution";
import TabsDescription from "./tabsDescription";
import TestCases from "./testCases";

export default function DescriptionComponent({ challenge }) {
	const [index, setIndex] = useState<number>(0);

	return (
		<div className="border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-transparent">
			<div className="relative h-[100%] overflow-scroll">
				<TabsDescription
					onTabChange={(num: number) => {
						setIndex(num);
						return {};
					}}
				/>
				{index === 0 && <ChallengeDescription challenge={challenge} />}
				{index === 1 && <TestCases testCases={challenge.testCases} />}
				{index === 2 && <CodeSolution allCodeSolutions={challenge.solutionCode} />}
			</div>
		</div>
	);
}
