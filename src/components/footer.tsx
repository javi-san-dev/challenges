import { Button } from "@nextui-org/react";
import { decode } from "js-base64";
import { useEffect, useState } from "react";
import { BugIcon, HelpIcon, ListIcon, PlayIcon } from "../helpers/icons";
import { serviceWorker } from "../helpers/workerService";
import ChallengeList from "./challengeList";
import PatternsModal from "./patternsModal";

export default function FooterComponent({ refName, testCases }) {
	const runCode = () => {
		// setLoadingButton(true);
		const params = new URLSearchParams(window.location.search);
		const getParam = params.get("code") as string;
		const fun = decode(decodeURIComponent(getParam));
		const payload: { fun: string; refName: string; testCases: object } = { fun, refName, testCases };
		serviceWorker.executeWorker(payload);
	};

	const sendCode = async () => {
		// setLoadingButton(true);
		const code = decodeURIComponent(params.get("code")) as string;
		const res = await fetch("/api/testCode.json", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				code,
				lang: codeLanguage,
				functionName: currentProblem.refName,
				testCases: currentProblem.testCases,
			}),
		});
		const compilerOutput = await res.json();
		const codeOutput = JSON.parse(compilerOutput.stdout);
		console.log("CODE OUTPUT: ", codeOutput);
		// setLoadingButton(false);
	};

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
					<Button
						isIconOnly
						variant="flat"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={"rotate-180 w-[4rem]"}
					>
						{<PlayIcon size={"1.2rem"} />}
					</Button>
				</li>
				<li>
					<ChallengeList />
				</li>
				<li>
					<Button isIconOnly variant="flat" aria-label="Zoom in" size="md" radius="sm" className={"w-[4rem]"}>
						{<PlayIcon size={"1.2rem"} />}
					</Button>
				</li>
			</ul>
			<ul className="flex gap-2 flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 mt-0 ml-auto">
				<li>
					<Button
						variant="flat"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={"border border-cyan-400 text-cyan-400 bg-white dark:bg-transparent"}
						onClick={runCode}
					>
						{<PlayIcon size={"1.2rem"} />} Run
					</Button>
				</li>
				<li>
					<Button
						variant="flat"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={" text-white dark:text-white bg-green-600 dark:bg-green-700"}
					>
						Submit
					</Button>
				</li>
			</ul>
		</footer>
	);
}
