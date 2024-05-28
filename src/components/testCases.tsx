import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import beautify from "js-beautify";
import { useState } from "react";
import { codeToHtml } from "shiki";
import challenges from "../data/challenges.json";
import { CheckedIcon, RoundedErrorIcon } from "../helpers/icons";

interface TestCasesType {
	test_input: Array<unknown>;
	test_expected: unknown;
	code_output: unknown;
	passed_test: boolean;
}

export default function TestCases() {
	const challenge = challenges.uncompress;
	const passesAllTests = false;
	const isDarkTheme = true;
	const testCases = challenge.testCases as unknown as Array<TestCasesType>;
	const lang = "javascript";
	const theme = "dark-plus";
	const fontSize = "13px";
	const [htmlCode, setHtmlCode] = useState<string[]>(["", "", ""]);

	const setInputCode = async (code: string, index: number) => {
		const beautyCode = beautify(code, { indent_size: 3, space_in_empty_paren: true });
		const result = await codeToHtml(beautyCode, {
			lang,
			theme,
			transformers: [transformerNotationHighlight(), transformerNotationDiff()],
		});
		setHtmlCode((currValues) => {
			const newVal = [...currValues];
			newVal[index] = result;
			return newVal;
		});
	};

	return (
		<div className="px-6">
			<header className="flex items-center">
				{passesAllTests ? <CheckedIcon size="2rem" /> : <RoundedErrorIcon size="2.3rem" />}
				{passesAllTests ? (
					<h1 className="p-4 text-3xl font-light dark:text-neutral-400">Great! All Tests passed</h1>
				) : (
					<h1 className="p-4 text-3xl font-light dark:text-neutral-400">Hops! Tests failed</h1>
				)}

				{!passesAllTests && (
					<Chip
						variant="faded"
						color="success"
						className="ml-4 border border-red-700 bg-white text-xs font-extralight text-red-700 dark:bg-black"
					>
						At last one test fail.
					</Chip>
				)}
			</header>

			<div className={'border my-6 rounded-xl p-5'}>
				<Accordion variant="splitted" selectionMode="multiple" isCompact className="mt-4 py-8 pt-0">
					{Object.entries(testCases).map(([_, value], i) => {
						const { test_input, test_expected, code_output, passed_test } = value;
						setInputCode(JSON.stringify(test_input), 0);
						setInputCode(JSON.stringify(test_expected), 1);
						setInputCode(JSON.stringify(code_output), 2);
						const icon = passed_test ? <CheckedIcon size="2.5rem" /> : <RoundedErrorIcon size="2.5rem" />;
						const color = passed_test ? "#4fd71e8f" : "#ff11009b";
						const testTitle = passed_test ? "Test passed" : "Test failed";
						const borderColorLight = passed_test ? "border-green-300" : "border-red-300";
						const borderColorDark = passed_test ? "!border-green-900" : "!border-red-900";
						const borderColor = isDarkTheme ? borderColorDark : borderColorLight;
						// const textColor = passed_test ? "text-green-900" : "text-red-900"
						return (
							<AccordionItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								startContent={icon}
								aria-label={'Test ${i + 1}'}
								title={testTitle}
								className={'m-0 border-[0.5px] p-0 font-medium'}
							>
								<p className="m-0 mb-2">Input</p>
								<div
									className={'shadow-sm shadow-[${color}] mb-4 overflow-hidden rounded-xl border border-default-200 text-sm dark:border-default-100'}
								>
									<div
										className="ml-6 mt-4 w-[0px] flex-1"
										style={{ fontSize }}
										// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
										dangerouslySetInnerHTML={{ __html: htmlCode[0] }}
									/>
								</div>
								<p className="m-0 mb-2">Expected output</p>
								<div
									className={'shadow-sm shadow-[${color}] mb-4 overflow-hidden rounded-xl border border-default-200 text-sm dark:border-default-100'}
								>
									<div
										className="ml-6 mt-4 w-[0px] flex-1"
										style={{ fontSize }}
										// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
										dangerouslySetInnerHTML={{ __html: htmlCode[1] }}
									/>
								</div>
								<p className="m-0 mb-2">Your output</p>
								<div
									className={'shadow-sm shadow-[${color}] mb-4 overflow-hidden rounded-xl border border-default-200 text-sm dark:border-default-100'}
								>
									<div
										className="ml-6 mt-4 w-[0px] flex-1"
										style={{ fontSize }}
										// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
										dangerouslySetInnerHTML={{ __html: htmlCode[2] }}
									/>
								</div>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</div>
	);
}
