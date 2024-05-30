import Split from "react-split";
import CodeEditor from "./codeEditor";
import Console from "./console";

export default function RightBoxComponent() {
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
				<CodeEditor />
				<div className="border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
					<Console />
				</div>
			</Split>
		</div>
	);
}
