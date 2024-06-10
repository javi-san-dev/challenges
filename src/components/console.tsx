import { useContext, useEffect, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import { TerminalIcon } from "../helpers/icons";
import { ErrorConsole } from "../helpers/icons";
import ConsoleTabs from "./consoleTabs";

export default function Console() {
	const { data } = useContext(DataContext);
	const errorMsg = data.errorMsg;
	const consoleMsg = data.consoleMsg;
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		if (errorMsg.length === 0) return;
		errorComponent();
	}, [errorMsg]);

	useEffect(() => {
		if (consoleMsg.length === 0) return;
		consoleComponent();
	}, [consoleMsg]);

	const errorComponent = () => {
		const a = (
			<div className="flex items-center border-y border-[rgba(185,28,28,1)] bg-[rgba(239,68,68,0.6)] p-2 align-middle text-sm font-normal text-[rgba(185,28,28,1)] dark:border-[rgb(91,0,0)] dark:bg-[rgb(41,0,0)] dark:text-[rgb(255,128,128)]">
				<span className="mr-3">
					<ErrorConsole size="1rem" />
				</span>
				<p className="m-0 inline p-0">{errorMsg}</p>
			</div>
		);
		setLogs((currentLogs) => {
			return [...currentLogs, a];
		});
	};

	const consoleComponent = () => {
		const messages = Array.isArray(consoleMsg) ? consoleMsg : consoleMsg.split("\\n");
		const a = messages.map((msg, i) => {
			return (
				<div
					className="flex items-center border-y border-neutral-300 dark:border-neutral-800 p-2 align-middle text-sm font-normal"
					key={i}
				>
					<p className="m-0 inline p-0">{msg}</p>
				</div>
			);
		});

		setLogs((currentLogs) => {
			return [...currentLogs, a];
		});
	};

	const removeLogs = () => {
		setLogs("");
	};

	return (
		<div className="border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-transparent">
			<div className="relative h-[100%] overflow-scroll">
				<ConsoleTabs removeLogs={removeLogs} />
				{logs.length === 0 && (
					<div className="mt-5 flex flex-col items-center justify-center">
						<span className=" text-neutral-500">
							<TerminalIcon size="5rem" />
						</span>
						<h2 className="text-lg">{data.codeLanguage} Console</h2>
						<p className=" text-sm text-neutral-500">console logs will appear here.</p>
					</div>
				)}

				{logs}
			</div>
		</div>
	);
}
