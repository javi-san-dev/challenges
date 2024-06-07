import { Tab, Tabs } from "@nextui-org/react";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import { useContext, useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { DataContext } from "../helpers/dataContext";

export default function CodeSolution({ allCodeSolutions }) {
	const { data } = useContext(DataContext);
	const [html, setHtml] = useState("");
	const [codeLanguage, setCodeLanguage] = useState(data.codeLanguage);
	const lang = codeLanguage;
	const [solutionCode, setSolutionCode] = useState(allCodeSolutions[codeLanguage]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCodeLanguage(data.codeLanguage);
		setSolutionCode(allCodeSolutions[data.codeLanguage]);
		updateCode();
	}, [data.codeLanguage, data.theme]);

	const updateCode = async (index = 0) => {
		const solutionCode = allCodeSolutions[data.codeLanguage];
		console.log;
		const result = await codeToHtml(solutionCode[index], {
			lang: data.codeLanguage,
			theme: data.theme === "dark" ? "dark-plus" : "light-plus",
			transformers: [transformerNotationHighlight(), transformerNotationDiff()],
		});
		setHtml(result);
	};

	const tabHandler = (val) => {
		const indexString = val.match(/\d+/);
		const index = Number(indexString[0]) - 1;
		updateCode(index);
	};

	return (
		<div className="flex flex-col h-[100%]">
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div
				className="ml-6 mt-4 w-[0px] flex-1"
				style={{ fontSize: "13px" }}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<div className={"sticky bottom-0 w-full bg-white dark:bg-black"}>
				<div className={"border-t border-neutral-300 dark:border-neutral-800 w-full flex-1 px-6 py-2"}>
					<div className="flex w-full flex-col">
						<Tabs aria-label="Options" variant="light" onSelectionChange={(val) => tabHandler(val)}>
							{solutionCode.map((solution: string, i: number) => {
								return <Tab key={`Solution ${i + 1}`} title={`Solution ${i + 1}`} />;
							})}
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
}
