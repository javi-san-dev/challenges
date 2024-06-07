import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import parse from "html-react-parser";
import beautify from "js-beautify";
import { useContext, useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { DataContext } from "../helpers/dataContext";
import { CheckedIcon, ClockIcon, JavaIcon, PythonIcon, RoundedErrorIcon } from "../helpers/icons";

export default function ChallengeDescription({ challenge }) {
	const { data } = useContext(DataContext);
	const [inputCode, setInputCode] = useState("");
	const [outputCode, setOutputCode] = useState("");
	const hints = challenge.hints;
	const theme = "dark-plus";
	const svg =
		challenge.submittedCode === "string" ? <CheckedIcon size={"1.2rem"} /> : <RoundedErrorIcon size={"1.4rem"} />;

	const ChipColor = (
		tagName: string,
	): "success" | "warning" | "danger" | "default" | "primary" | "secondary" | undefined => {
		let color: "success" | "warning" | "danger" | "default" | "primary" | "secondary" | undefined;
		if (tagName === "Easy") color = "success";
		if (tagName === "Medium") color = "warning";
		if (tagName === "Hard") color = "danger";
		if (tagName === "Extreme Hard") color = "default";
		return color;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		async function transform() {
			const code = beautify(challenge.examples.example1.input, {
				indent_size: 3,
				space_in_empty_paren: true,
			});
			const lang = "javascript";
			const result = await codeToHtml(code, {
				lang,
				theme: data.theme === "dark" ? "dark-plus" : "light-plus",
				transformers: [transformerNotationHighlight(), transformerNotationDiff()],
			});
			setInputCode(result);
		}
		void transform();
	}, [challenge, data.theme]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		async function transform() {
			const code = beautify(challenge.examples.example1.output, {
				indent_size: 3,
				space_in_empty_paren: true,
			});
			const lang = "javascript";
			const result = await codeToHtml(code, {
				lang,
				theme: data.theme === "dark" ? "dark-plus" : "light-plus",
				transformers: [transformerNotationHighlight(), transformerNotationDiff()],
			});
			setOutputCode(result);
		}
		void transform();
	}, [challenge, data.theme]);

	return (
		<div className="px-4 pb-4">
			<header className="my-2 flex items-center">
				{/* {svg} */}
				<h1 className="py-3 text-3xl font-light dark:text-neutral-100">{challenge.title}</h1>
			</header>
			<div className="mb-8 flex items-center">
				<Chip color={ChipColor(challenge.tags[0])} variant="flat" className={"mr-4"}>
					{challenge.tags[0]}
				</Chip>
				<Chip color="primary" variant="flat" className="mr-4" classNames={{ base: "", content: "text-cyan-400" }}>
					{challenge.tags[1]}
				</Chip>
				<ClockIcon size={"1.4rem"} />
				<p className="m-0 ml-2 mr-4 p-0 font-light dark:text-neutral-500">10 mins</p>
				{svg}
				<p className="m-0 ml-2 p-0 font-light dark:text-neutral-500 mr-4">Completed</p>
				<div aria-labelledby=":r2ri:" className="mt-1 flex items-center gap-x-2">
					<span className="inline-flex items-center rounded bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-black dark:bg-neutral-800 dark:text-yellow-500">
						JS
					</span>
					<span className="inline-flex items-center rounded bg-[#cccbcb] px-2 py-1 text-xs font-semibold text-white dark:bg-neutral-800 dark:text-[#3178c6]">
						<PythonIcon size="0.8rem" />
					</span>
					<span className="inline-flex items-center rounded bg-[#f1adad] px-2 py-0.5 text-xs font-semibold text-white dark:bg-neutral-800 dark:text-[#3178c6]">
						<JavaIcon size="1rem" />
					</span>
					<span className="inline-flex items-center rounded bg-[#5d5d5d] px-2 py-0.5 text-xs font-semibold text-white dark:bg-neutral-800 dark:text-[#3178c6]">
						C++
					</span>
				</div>
			</div>
			<div className="font-extralight dark:text-neutral-400 mb-8">{parse(challenge.description)}</div>
			<h4 className="mb-2">Sample Input</h4>
			<div className={"mb-4 overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-transparent text-sm"}>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div className="w-[0px] p-3" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: inputCode }} />
			</div>
			<h4 className="mb-2">Sample Output</h4>
			<div className={"mb-4 overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-transparent text-sm"}>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div className="w-[0px] p-3" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: outputCode }} />
			</div>
			<div>
				<h3>Hints</h3>
				<Accordion variant="splitted" selectionMode="multiple" className="mb-2 px-0 dark:text-neutral-400">
					<AccordionItem key="1" aria-label="Hint 1" title="Hint 1" className=" !shadow-none border border-neutral-300 dark:border-none !bg-neutral-50 dark:!bg-content1">
						{hints.hint_1}
					</AccordionItem>
					<AccordionItem key="2" aria-label="Hint 2" title="Hint 2" className=" !shadow-none border border-neutral-300 dark:border-none !bg-neutral-50 dark:!bg-content1">
						{hints.hint_2}
					</AccordionItem>
					<AccordionItem key="3" aria-label="Hint 3" title="Hint 3" className=" !shadow-none border border-neutral-300 dark:border-none !bg-neutral-50 dark:!bg-content1">
						{hints.hint_3}
					</AccordionItem>
					<AccordionItem
						key="4"
						aria-label="Optimal Space & Time Complexity"
						title="Optimal Space & Time Complexity"
						className=" !shadow-none border border-neutral-300 dark:border-none !bg-neutral-50 dark:!bg-content1"
					>
						{hints.Optimal_Space__Time_Complexity}
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
