"use client";
// import * as React from "react";
import { type ReactNode, createContext, useCallback, useEffect, useState } from "react";

export interface DefaultStateType {
	codeLanguage: string;
	theme: string;
	passesAllTests: boolean | null;
	testCases: null | object;
	errorMsg: string;
	consoleMsg: string;
	submittedCode: object;
	submittedList: array<string>;
}

export interface DataContextType {
	data: DefaultStateType;
	updateData: (payload: object) => void;
}

const defaultState: DefaultStateType = {
	codeLanguage: "cpp",
	theme: "dark",
	passesAllTests: null,
	testCases: null,
	errorMsg: "",
	consoleMsg: "",
	submittedCode: {},
	submittedList: [],
};

const defaultContextValue: DataContextType = {
	data: { ...defaultState },
	updateData: () => {},
};

interface Props {
	children: ReactNode;
}

export const DataContext = createContext<DataContextType>(defaultContextValue);

const DataProvider = ({ children }) => {
	const [data, setData] = useState(defaultState);
	const codeLanguage = localStorage.getItem("codeLanguage");
	const theme = localStorage.getItem("theme");

	useEffect(() => {
		updateData({ codeLanguage, theme });

		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		htmlElement.classList.remove("light");
		htmlElement.classList.remove("dark");
		htmlElement.classList.add(theme);
	}, []);

	const updateData = useCallback((payload: object) => {
		setData((data) => {
			const newState: object = typeof payload === "function" ? (payload(data) as object) : payload;
			return {
				...data,
				...newState,
			};
		});
	}, []);

	return <DataContext.Provider value={{ data, updateData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
