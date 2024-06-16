import Editor from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import { decode, encode } from "js-base64";
import beautify from "js-beautify";
import type { editor } from "monaco-editor";
import { useContext, useEffect, useRef, useState } from "react";
import { getHighlighter } from "shiki";
import { DataContext } from "../helpers/dataContext";
import CodeEditorTabs from "./codeEditorTabs";

export default function CodeEditor({ allStartedCode }) {
	const { data } = useContext(DataContext);
	const editorRef = useRef(null);
	const monacoEditor = useRef(null);
	const codeLanguage = data.codeLanguage;
	const submittedCode = data.submittedCode[data.codeLanguage];
	const [startedCode, setStartedCode] = useState(allStartedCode[codeLanguage]);
	const params = new URLSearchParams(window.location.search);
	const getParam = params.get("code");
	const currentCode = getParam !== null ? decode(decodeURIComponent(getParam)) : startedCode;
	const [fontSize, setFontSize] = useState("13px");
	const isSubmittedSolution = useRef(false);

	useEffect(() => {
		const startedCode = allStartedCode[data.codeLanguage];
		setStartedCode(startedCode);
		updateHashedCode(startedCode);
		editorRef?.current?.setValue(startedCode);
		editorRef?.current?.getAction("editor.action.formatDocument").run();
	}, [data.codeLanguage]);

	useEffect(() => {
		const startedCode = allStartedCode[data.codeLanguage];
		setStartedCode(startedCode);
		updateHashedCode(startedCode);
		updateHashedCode(startedCode);
		editorRef?.current?.setValue(startedCode);
		editorRef?.current?.getAction("editor.action.formatDocument").run();
	}, [allStartedCode]);

	const handleEditorDidMount = async (editor: editor.IStandaloneCodeEditor, monaco: typeof import("monaco-editor")) => {
		editorRef.current = editor;
		editorRef.current.getModel().updateOptions({ tabSize: 3, indentSize: 3 });
		monacoEditor.current = monaco;
		// monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
		// monaco.languages.register({ id: codeLanguage });
		const highlighter = await getHighlighter({
			themes: ["dark-plus", "light-plus"],
			langs: ["javascript", "java", "python", "cpp"],
		});
		shikiToMonaco(highlighter, monaco);
	};

	function updateHashedCode(code: string | undefined) {
		if (isSubmittedSolution.current) return;
		// if (tabIndex.current === 1) return;
		if (code === undefined) return;
		const hashedCode = encodeURIComponent(`${encode(code)}`);
		const url = new URL(window.location);
		const params2 = url.searchParams;
		params2.set("code", hashedCode);
		window.history.pushState({}, "", url.toString());
	}

	const formatCode = () => {
		editorRef.current.getAction("editor.action.formatDocument").run();
	};

	const resetCode = () => {
		updateHashedCode(startedCode);
		editorRef?.current?.setValue(startedCode);
		editorRef.current.getAction("editor.action.formatDocument").run();
	};

	const copyCode = async () => {
		const getCodeValue = editorRef?.current?.getValue();
		try {
			await navigator.clipboard.writeText(getCodeValue);
			// setIsClipBoardClicked(true);
			// setTimeout(() => {
			// 	setIsClipBoardClicked(false);
			// }, 4000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	const updateFont = (val) => {
		setFontSize(val.target.value);
	};

	const setSubmittedCode = () => {
		isSubmittedSolution.current = true;
		const code = decode(submittedCode);
		editorRef?.current?.setValue(code);
		editorRef.current.getAction("editor.action.formatDocument").run();
	};

	const setCurrentSolution = () => {
		isSubmittedSolution.current = false;
		const params = new URLSearchParams(window.location.search);
		const URIcode = params.get("code") as string;
		const code = decode(decodeURIComponent(URIcode)) as string;
		console.log(code);
		editorRef?.current?.setValue(code);
		editorRef.current.getAction("editor.action.formatDocument").run();
	};

	return (
		<div className="flex flex-col border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-transparent">
			<CodeEditorTabs
				formatCode={formatCode}
				resetCode={resetCode}
				copyCode={copyCode}
				updateFont={updateFont}
				setSubmittedCode={setSubmittedCode}
				setCurrentSolution={setCurrentSolution}
			/>
			<Editor
				className="px-0 pt-5 flex-1"
				height="100%"
				// defaultLanguage={codeLanguage}
				language={codeLanguage}
				value={currentCode}
				// beforeMount={handleEditorWillMount}
				onMount={(editor, monaco) => handleEditorDidMount(editor, monaco)}
				theme={data.theme === "dark" ? "dark-plus" : "light-plus"}
				onChange={(value: string | undefined) => updateHashedCode(value)}
				options={{
					minimap: { enabled: false },
					scrollbar: { vertical: "hidden" },
					fontSize,
					codeLens: false,
					readOnly: false,
					inlineSuggest: { enabled: false },
					contextmenu: false,
				}}
			/>
		</div>
	);
}
