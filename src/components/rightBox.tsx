import Split from "react-split";
import CodeEditor from "./codeEditor";
import Console from "./console";

export default function RightBoxComponent({ allStartedCode, refName, testCases, session }) {
	return (
		<div>
			<Split
				className="splitHorizontal"
				sizes={[80, 20]}
				minSize={60}
				expandToMin={false}
				gutterSize={10}
				gutterAlign="center"
				snapOffset={30}
				dragInterval={1}
				direction="vertical"
			>
				<CodeEditor
					allStartedCode={allStartedCode}
					refName={refName}
					testCases={testCases}
					session={session}
				/>
				<Console />
			</Split>
		</div>
	);
}
