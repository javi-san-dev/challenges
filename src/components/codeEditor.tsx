import Editor from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import { decode, encode } from "js-base64";
import beautify from "js-beautify";
import type { editor } from "monaco-editor";
import { useContext, useEffect, useRef, useState } from "react";
import { getHighlighter } from "shiki";
import CodeEditorTabs from "./codeEditorTabs";

export default function CodeEditor() {
	const editorRef = useRef(null);
	const monacoEditor = useRef(null);
	const codeLanguage = "javascript";
	const currentCode = "function prueba(){}";
	const currentTheme = "dark-plus";
	const fontSize = "13px";

	const handleEditorDidMount = async (editor: editor.IStandaloneCodeEditor, monaco: typeof import("monaco-editor")) => {
		editorRef.current = editor;
		editorRef.current.getModel().updateOptions({ tabSize: 3, indentSize: 3 });
		monacoEditor.current = monaco;
		monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
		monaco.languages.register({ id: codeLanguage });
		const highlighter = await getHighlighter({
			themes: ["dark-plus", "light-plus"],
			langs: ["javascript"],
		});
		shikiToMonaco(highlighter, monaco);
	};

	function updateHashedCode(code: string | undefined) {
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
		editorRef?.current?.setValue(currentCode);
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

	return (
		<div className="flex flex-col border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
			<CodeEditorTabs formatCode={formatCode} resetCode={resetCode} copyCode={copyCode} />
			<Editor
				className="px-0 pt-5 flex-1"
				height="100%"
				// defaultLanguage={codeLanguage}
				language={codeLanguage}
				value={currentCode}
				// beforeMount={handleEditorWillMount}
				onMount={(editor, monaco) => handleEditorDidMount(editor, monaco)}
				theme={currentTheme}
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
