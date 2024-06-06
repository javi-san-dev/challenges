import { Tab, Tabs } from "@nextui-org/react";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import challenges from "../data/challenges.json";

export default function CodeSolution({ allCodeSolutions }) {
	const challenge = challenges.uncompress;
	const [html, setHtml] = useState("");
	const codeLanguage = "javascript";
	const lang = codeLanguage;
	const solutionCode = allCodeSolutions[codeLanguage][0];
	const theme = "dark-plus";

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		async function transform() {
			const result = await codeToHtml(solutionCode, {
				lang,
				theme,
				transformers: [transformerNotationHighlight(), transformerNotationDiff()],
			});
			setHtml(result);
		}
		void transform();
	}, []);

	return (
		<div className="flex flex-col">
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div
				className="ml-6 mt-4 w-[0px] flex-1"
				style={{ fontSize: "13px" }}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<div className={"sticky bottom-0 w-full flex-1"}>
				<div className={"border-t w-full flex-1 px-6 py-2"}>
					<div className="flex w-full flex-col">
						<Tabs aria-label="Options" variant="light">
							{challenge.solutionCode[codeLanguage].map((solution: string, i: number) => {
								return <Tab key={`Solution ${i + 1}`} title={`Solution ${i + 1}`} />;
							})}
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
}
