import Split from "react-split";
import CodeEditor from "./codeEditor";
import Console from "./console";

export default function RightBoxComponent({ allStartedCode }) {
	return (
		<div>
			<Split
				className="splitHorizontal"
				sizes={[80, 20]}
				minSize={50}
				expandToMin={false}
				gutterSize={10}
				gutterAlign="center"
				snapOffset={30}
				dragInterval={1}
				direction="vertical"
			>
				<CodeEditor allStartedCode={allStartedCode} />
				<Console />
			</Split>
		</div>
	);
}
