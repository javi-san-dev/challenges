import { Button, useDisclosure } from "@nextui-org/react";
import { decode } from "js-base64";
import isEqual from "lodash.isequal";
import sortBy from "lodash.sortby";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import { PlayIcon } from "../helpers/icons";
import type { sessionType, testCasesType } from "../helpers/types";
import { serviceWorker } from "../helpers/workerService";
import SignIn from "./signIn";

type componentProps = {
	refName: string;
	testCases: testCasesType;
	session: sessionType;
};

export default function RunCode({ refName, testCases, session }: componentProps) {
	const { data, updateData } = useContext(DataContext);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const isJavaScript = data.codeLanguage === "javascript";
	const [loadingButton, setLoadingButton] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		serviceWorker.evento = (payload) => {
			if (payload.type === "test") {
				updateData({ testCases: payload.testCases, passesAllTests: payload.passesAllTests, consoleMsg: payload.logs });
			}
		};
	}, []);

	const runCode = () => {
		setLoadingButton(true);
		setTimeout(() => {
			const params = new URLSearchParams(window.location.search);
			const getParam = params.get("code") as string;
			const fun = decode(decodeURIComponent(getParam));
			const payload: { fun: string; refName: string; testCases: object } = { fun, refName, testCases };
			serviceWorker.executeWorker(payload);
			setLoadingButton(false);
		}, 800);
	};

	const sendCode = async () => {
		if (session === null) {
			setOpenModal((openModal) => !openModal);
			return;
		}
		setLoadingButton(true);
		const params = new URLSearchParams(window.location.search);
		const URIcode = params.get("code") as string;
		const code = decodeURIComponent(URIcode) as string;
		const res = await fetch("/api/testCode.json", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				code,
				lang: data.codeLanguage,
				functionName: refName,
				testCases: testCases,
			}),
		});
		const compilerOutput = await res.json();
		if (compilerOutput.stderr !== null) {
			setLoadingButton(false);
			updateData({ errorMsg: compilerOutput.stderr });
			return;
		}
		const a = compilerOutput.stdout.indexOf("$0lu1i0n") + "$0lu1i0n".length;
		const b = compilerOutput.stdout.lastIndexOf("$0lu1i0n");
		const stdoutSolution = JSON.parse(compilerOutput.stdout.slice(a, b));
		updateData({ consoleMsg: JSON.stringify(compilerOutput.stdout.slice(0, a)) });
		const solution = stdoutSolution;
		const currentTestCases = structuredClone(testCases);
		let i = 0;
		let passesAllTests = true;
		for (const test in currentTestCases) {
			currentTestCases[test].code_output = solution[i];
			const code_output = solution[i];
			const test_expected = currentTestCases[test].test_expected;
			const passTest = currentTestCases[test].unOrdered
				? isEqual(sortBy(code_output), sortBy(test_expected))
				: isEqual(code_output, test_expected);
			currentTestCases[test].passed_test = passTest;
			passesAllTests = passTest;
			i++;
		}
		updateData({ testCases: currentTestCases, passesAllTests });
		setLoadingButton(false);
	};

	return (
		<>
			<Button
				isLoading={!!loadingButton}
				variant="flat"
				aria-label="Zoom in"
				size="md"
				radius="sm"
				className={"border border-cyan-400 text-cyan-400 bg-white dark:bg-transparent"}
				onClick={isJavaScript ? runCode : sendCode}
			>
				{!loadingButton && <PlayIcon size="1.2rem" />}
				Run
			</Button>
			<SignIn openModal={openModal} />
		</>
	);
}
