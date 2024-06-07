import { Button, Navbar, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useContext, useRef, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import {
	AddIcon,
	CheckSolutionIcon,
	CodeIcon,
	CopyIcon,
	DarkThemeIcon,
	DescriptionIcon,
	FullScreenIcon,
	MinusIcon,
	ReloadIcon,
	SettingsIcon,
} from "../helpers/icons";

const languages = [
	{ label: "javascript", value: "javascript", description: "javascript programming language" },
	{ label: "python3", value: "python", description: "python programming language" },
	{ label: "java", value: "java", description: "java programming language" },
	{ label: "c++", value: "cpp", description: "c++ programming language" },
];

const fontSize = [
	{ label: "12px", value: "12px", description: "font size code 12 px" },
	{ label: "13px", value: "13px", description: "font size code 13 px" },
	{ label: "14px", value: "14px", description: "font size code 14 px" },
	{ label: "15px", value: "15px", description: "font size code 15 px" },
	{ label: "16px", value: "16px", description: "font size code 16 px" },
	{ label: "17px", value: "17px", description: "font size code 17 px" },
	{ label: "18px", value: "18px", description: "font size code 18 px" }
];

export default function CodeEditorTabs({ formatCode, resetCode, copyCode, updateFont }) {
	const { data, updateData } = useContext(DataContext);
	const [order] = useState(["0", "1", "2", "3"]);
	const [selectedKey, setSelectedKey] = useState(order[0]);
	const tabsRef = useRef(null);

	const tabClickHandler = (index: number) => {
		setSelectedKey(order[index]);
		onTabChange(index);
	};

	const setFullScreen = () => {
		const navElement = document.getElementsByTagName("nav")[0];
		const footerElement = document.getElementsByTagName("footer")[0];
		navElement.classList.toggle("hiddeNavBars");
		footerElement.classList.toggle("hiddeNavBars");
		const mainSplitElement = document.getElementById("mainSplit");
		mainSplit.classList.toggle("py-4");
	};

	const updateLanguage = (e) => {
		updateData({ codeLanguage: e.target.value });
		localStorage.setItem("codeLanguage", e.target.value);
	};

	return (
		<Navbar
			isBlurred={false}
			maxWidth="full"
			className={"h-[3.3rem] bg-white dark:bg-transparent"}
			classNames={{ wrapper: "px-4" }}
		>
			<div className="flex w-full items-center">
				<Tabs
					selectedKey={selectedKey}
					ref={tabsRef}
					aria-label="Options"
					color="primary"
					variant="underlined"
					onSelectionChange={(key) => tabClickHandler(Number(key))}
					classNames={{
						tabList: "gap-6 relative rounded-none p-0  border-divider",
						cursor: "w-full bg-cyan-400",
						tab: "max-w-fit p-0 h-12",
						tabContent: "group-data-[selected=true]:text-cyan-400",
					}}
				>
					<Tab
						key={order[0]}
						title={
							<div className="flex items-center space-x-2">
								<DescriptionIcon />
								<span>Your solution</span>
							</div>
						}
					/>
					<Tab
						key={order[1]}
						title={
							<div className="flex items-center space-x-2">
								<CheckSolutionIcon size="1.5rem" />
								<span>Submitted Solution</span>
							</div>
						}
					/>
				</Tabs>
				<div className="hidden w-full md:block md:w-auto ml-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row space-x-1 rtl:space-x-reverse md:mt-0">
						<li>
							<Select
								items={languages}
								label=""
								placeholder=""
								variant="bordered"
								defaultSelectedKeys={[data.codeLanguage]}
								labelPlacement="outside"
								size="sm"
								onChange={(e) => updateLanguage(e)}
								classNames={{
									trigger: "border border-default-200 rounded-small w-[120px] text-default-500",
								}}
							>
								{(language) => (
									<SelectItem key={language.value} value={language.value}>
										{language.label}
									</SelectItem>
								)}
							</Select>
						</li>
						<li>
							<Select
								items={fontSize}
								label=""
								placeholder=""
								variant="bordered"
								defaultSelectedKeys={["13px"]}
								labelPlacement="outside"
								size="sm"
								onChange={(e) => updateFont(e)}
								classNames={{
									trigger: "border border-default-200 rounded-small w-[90px] text-default-500",
								}}
							>
								{(language) => (
									<SelectItem key={language.value} value={language.value}>
										{language.label}
									</SelectItem>
								)}
							</Select>
						</li>
						{/* <li>
							<Button
								isIconOnly
								variant="flat"
								aria-label="Zoom in"
								size="sm"
								radius="sm"
								className=""
								onClick={() => formatCode()}
							>
								{<CodeIcon size={"1.1rem"} />}
							</Button>
						</li> */}
						<li>
							<Button
								isIconOnly
								variant="bordered"
								aria-label="Zoom out"
								size="sm"
								radius="sm"
								className="border"
								onClick={() => resetCode()}
							>
								{<ReloadIcon size={"1.1rem"} />}
							</Button>
						</li>
						<li>
							<Button
								isIconOnly
								variant="bordered"
								aria-label="settings"
								size="sm"
								radius="sm"
								className="border"
								onClick={() => copyCode()}
							>
								{<CopyIcon size={"1.1rem"} />}
							</Button>
						</li>
						<li>
							<Button
								isIconOnly
								variant="bordered"
								aria-label="settings"
								size="sm"
								radius="sm"
								className="border"
								onClick={() => setFullScreen()}
							>
								<FullScreenIcon size="1.1rem" />
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</Navbar>
	);
}
