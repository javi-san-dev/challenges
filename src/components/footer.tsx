import { Button } from "@nextui-org/react";
import { BugIcon, PlayIcon } from "../helpers/icons";
import type { sessionType, testCasesType } from "../helpers/types";
import ChallengeList from "./challengeList";
import PatternsModal from "./patternsModal";
import RunCode from "./runCode";

type componentProps = {
	refName: string;
	testCases: testCasesType;
	session: sessionType;
};

export default function FooterComponent({ refName, testCases, session }: componentProps) {
	return (
		<footer className="w-full px-4 py-2 flex items-center justify-center relative">
			<ul className="flex gap-2">
				<li>
					<Button variant="flat" aria-label="Zoom in" size="md" radius="sm" className={""}>
						{<BugIcon size={"1.2rem"} />} Report bug
					</Button>
				</li>
				<li>
					<PatternsModal />
				</li>
			</ul>
			<ul className="flex gap-2 items-center text-sm font-medium text-gray-500 dark:text-gray-400 absolute">
				<li>
					<ChallengeList isSearch={false} />
				</li>
			</ul>
			<ul className="flex gap-2 flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 mt-0 ml-auto">
				<li>
					<RunCode refName={refName} testCases={testCases} session={session} />
				</li>
			</ul>
		</footer>
	);
}
