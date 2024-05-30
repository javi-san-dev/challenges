import { Button, Navbar, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useRef, useState } from "react";
import { AddIcon, CheckSolutionIcon, DarkThemeIcon, DescriptionIcon, MinusIcon, SettingsIcon } from "../helpers/icons";

export default function CodeEditorTabs() {
	const [order] = useState(["0", "1", "2", "3"]);
	const [selectedKey, setSelectedKey] = useState(order[0]);
	const tabsRef = useRef(null);
	const animals = [
		{
			label: "javascript",
			value: "javascript",
			description: "javascript programming language",
		},
		{
			label: "python3",
			value: "python",
			description: "python programming language",
		},
		{ label: "java", value: "java", description: "java programming language" },
		{ label: "c++", value: "cpp", description: "c++ programming language" },
	];

	const tabClickHandler = (index: number) => {
		setSelectedKey(order[index]);
		onTabChange(index);
	};

	return (
		<Navbar isBlurred={false} maxWidth="full" className={"h-[3.3rem]"} classNames={{ wrapper: "px-4" }}>
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
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0">
						<li>
							<Select size="sm" defaultSelectedKeys={["cpp"]} className="w-[130px]">
								{animals.map((animal) => (
									<SelectItem key={animal.value} value={animal.value}>
										{animal.label}
									</SelectItem>
								))}
							</Select>
						</li>
						<li>
							<Button isIconOnly variant="solid" aria-label="Zoom in" size="sm" radius="sm" className={""}>
								{<AddIcon size={"1.2rem"} />}
							</Button>
						</li>
						<li>
							<Button isIconOnly variant="solid" aria-label="Zoom out" size="sm" radius="sm" className={""}>
								{<MinusIcon size={"1.2rem"} />}
							</Button>
						</li>
						<li>
							<Button isIconOnly variant="solid" aria-label="settings" size="sm" radius="sm" className={""}>
								{<SettingsIcon size={"1.1rem"} />}
							</Button>
						</li>
						<li>
							<Button isIconOnly variant="solid" aria-label="settings" size="sm" radius="sm" className={""}>
								<DarkThemeIcon size="1.3rem" />
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</Navbar>
	);
}
