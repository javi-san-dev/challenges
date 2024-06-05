import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import parse from "html-react-parser";
import beautify from "js-beautify";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import challenges from "../data/challenges.json";
import { CheckedIcon, ClockIcon, RoundedErrorIcon } from "../helpers/icons";

export default function ChallengeDescription() {
	const challenge = challenges.uncompress;
	const [inputCode, setInputCode] = useState("");
	const [outputCode, setOutputCode] = useState("");
	const hints = challenges.uncompress.hints;
	const theme = "dark-plus";
	const svg =
		challenge.submittedCode === "string" ? <CheckedIcon size={"2rem"} /> : <RoundedErrorIcon size={"2.3rem"} />;

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
				theme,
				transformers: [transformerNotationHighlight(), transformerNotationDiff()],
			});
			setInputCode(result);
		}
		void transform();
	}, []);

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
				theme,
				transformers: [transformerNotationHighlight(), transformerNotationDiff()],
			});
			setOutputCode(result);
		}
		void transform();
	}, []);

	return (
		<div className="px-4 pb-4">
			<header className="my-2 flex items-center">
				{svg}
				<h1 className="p-3 text-3xl font-light dark:text-neutral-100">{challenge.title}</h1>
			</header>
			<div className="mb-8 flex items-center text-neutral-500">
				<Chip color={ChipColor(challenge.tags[0])} variant="flat" className={"mr-5"}>
					{challenge.tags[0]}
				</Chip>
				<Chip color="primary" variant="flat" className="mr-5" classNames={{ base: "", content: "text-cyan-400" }}>
					{challenge.tags[1]}
				</Chip>
				<ClockIcon size={"1.4rem"} />
				<p className="m-0 ml-2 mr-5 p-0 font-light text-neutral-500">10 mins</p>
				<CheckedIcon size={"1.2rem"} />
				<p className="m-0 ml-2 p-0 font-light text-neutral-500">100 completed</p>
			</div>
			<div className="font-extralight dark:text-neutral-400">{parse(challenge.description)}</div>
			<h3>Example</h3>
			<div className={"mb-4 overflow-hidden rounded-xl border border-neutral-500 dark:border-neutral-800 text-sm"}>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div className="w-[0px] p-3" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: inputCode }} />
			</div>
			<div className={"mb-4 overflow-hidden rounded-xl border border-neutral-500 dark:border-neutral-800 text-sm"}>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div className="w-[0px] p-3" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: outputCode }} />
			</div>
			<div>
				<h3>Hints</h3>
				<Accordion variant="splitted" selectionMode="multiple" className="mb-2 px-0 dark:text-neutral-400">
					<AccordionItem key="1" aria-label="Hint 1" title="Hint 1" className={" !shadow-none"}>
						{hints.hint_1}
					</AccordionItem>
					<AccordionItem key="2" aria-label="Hint 2" title="Hint 2" className={" !shadow-none"}>
						{hints.hint_2}
					</AccordionItem>
					<AccordionItem key="3" aria-label="Hint 3" title="Hint 3" className={" !shadow-none"}>
						{hints.hint_3}
					</AccordionItem>
					<AccordionItem
						key="4"
						aria-label="Optimal Space & Time Complexity"
						title="Optimal Space & Time Complexity"
						className={" !shadow-none"}
					>
						{hints.Optimal_Space__Time_Complexity}
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
