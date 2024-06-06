/* eslint-disable no-console */
import isEqual from "lodash.isequal";
import sortBy from "lodash.sortby";

// Definir una función que se ejecutará en el Worker
async function executeFunction(event) {
	try {
		const data = event.data;
		const stringFunction = data.fun;
		const testCases = data.testCases;
		const refName = data.refName;
		const result = await asyncBoucle(refName, testCases, stringFunction);
		console.log("<----- ALL TEST ENDS ----->");
		globalThis.postMessage(result);
	} catch (err) {
		console.error(err);
	}
}

async function asyncBoucle(refName, testCases, stringFunction) {
	let passedAllTests = true;
	let i = 1;
	for (const testCase in testCases) {
		console.log(`<----- TEST CASE ${i} ----->`);
		i++;
		const test = testCases[testCase];
		let { test_input, test_expected, code_output, passed_test, unOrdered } = test;
		const functionName = refName;
		const parametters = getParamsByName(stringFunction, functionName);
		// biome-ignore lint/security/noGlobalEval: <explanation>
		const dynamicFunction = eval(
			`(function wrapperFunction(${parametters}) { ${stringFunction} return ${functionName}(${parametters}) })`,
		);
		code_output = dynamicFunction(...test_input);
		passed_test = unOrdered ? isEqual(sortBy(code_output), sortBy(test_expected)) : isEqual(code_output, test_expected);
		if (!passed_test) passedAllTests = false;
		testCases[testCase] = { test_input, test_expected, code_output, passed_test };
	}

	return { passedAllTests, testCases };
}

function getParamsByName(code, functionName) {
	const regex = new RegExp(`\\b${functionName}\\s*\\((.*?)\\)\\s*\\{`);
	const match = code.match(regex);
	if (match) {
		const parametros = match[1].split(",").map((param) => param.trim());
		return parametros;
	}
	return null;
}

function logsCapture() {
	const captureLogs = (event) => globalThis.postMessage(event);
	const originalConsoleLog = console.log;
	console.log = (...args) => {
		captureLogs({ type: "log", content: args });
		originalConsoleLog.apply(console, args);
	};
}

function warnCapture() {
	const captureWarn = (event) => globalThis.postMessage(event);
	const originalConsoleWarn = console.warn;
	console.warn = (...args) => {
		captureWarn({ type: "warn", content: args });
		originalConsoleWarn.apply(console, args);
	};
}

function errorCapture() {
	const captureError = (event) => globalThis.postMessage(event);
	const originalConsoleError = console.error;
	console.error = (...args) => {
		captureError({ type: "error", content: args });
		originalConsoleError.apply(console, args);
	};
}

globalThis.onmessage = (event) => {
	executeFunction(event);
};

logsCapture();
warnCapture();
errorCapture();
