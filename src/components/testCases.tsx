import { Accordion, AccordionItem } from "@nextui-org/react";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import beautify from "js-beautify";
import { useContext, useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { DataContext } from "../helpers/dataContext";
import { CheckedIcon, RoundedErrorIcon } from "../helpers/icons";
import { serviceWorker } from "../helpers/workerService";

export default function TestCases({ testCases }) {
	const { data } = useContext(DataContext);
	const passesAllTests = data.passesAllTests;
	const lang = data.codeLanguage;
	const [currentTests, setCurrentTests] = useState(testCases);
	const theme = data.theme === "dark" ? "dark-plus" : "light-plus";

	useEffect(() => {
		serviceWorker.evento = (payload) => {
			setTimeout(() => {
				if (payload.type === "test") {
					setCurrentTests(payload.testCases);
				}
			}, 500);
		};
	}, []);

	const setInputCode = async (code: string) => {
		const beautyCode = beautify(code, { indent_size: 3, space_in_empty_paren: true });
		const result = await codeToHtml(beautyCode, {
			lang,
			theme,
			transformers: [transformerNotationHighlight(), transformerNotationDiff()],
		});
		return result;
	};

	return (
		<div className="px-6">
			<header className="flex items-center">
				{passesAllTests ? <CheckedIcon size="2rem" /> : <RoundedErrorIcon size="2.3rem" />}
				{passesAllTests ? (
					<h1 className="p-4 text-3xl font-light dark:text-neutral-400">Great! All Tests passed</h1>
				) : (
					<h1 className="p-4 text-3xl font-light dark:text-neutral-400">Hops! At last one test fail.</h1>
				)}
			</header>

			<div className={"border my-6 rounded-xl p-5"}>
				<Accordion variant="splitted" selectionMode="multiple" isCompact className="mt-4 py-8 pt-0">
					{Object.entries(currentTests).map(([_, value], i) => {
						const { test_input, test_expected, code_output, passed_test } = value;
						const icon = passed_test ? <CheckedIcon size="2.5rem" /> : <RoundedErrorIcon size="2.5rem" />;
						const testTitle = passed_test ? "Test passed" : "Test failed";
						return (
							<AccordionItem
								key={i}
								startContent={icon}
								aria-label={"Test ${i + 1}"}
								title={testTitle}
								className={"m-0 border-[0.5px] p-0 font-medium"}
							>
								<p className="m-0 mb-2">Input</p>
								<div className="p-3 overflow-hidden rounded-xl border border-default-200 text-sm dark:border-default-100">
									<div className="w-[0px] flex-1" dangerouslySetInnerHTML={{ __html: test_input }} />
								</div>
								<p className="m-0 mb-2">Expected output</p>
								<div className="p-3 overflow-hidden rounded-xl border border-default-200 text-sm dark:border-default-100">
									<div className="w-[0px] flex-1" dangerouslySetInnerHTML={{ __html: test_expected }} />
								</div>
								<p className="m-0 mb-2">Your output</p>
								<div className="p-3 overflow-hidden rounded-xl border border-default-200 text-sm dark:border-default-100">
									<div className="w-[0px] flex-1" dangerouslySetInnerHTML={{ __html: code_output }} />
								</div>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</div>
	);
}
