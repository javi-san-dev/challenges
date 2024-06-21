import { Button, Navbar, Tab, Tabs } from "@nextui-org/react";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import { CheckSolutionIcon, DarkThemeIcon, DescriptionIcon, TestIcon, VideoIcon } from "../helpers/icons";

export default function TabsDescription({ onTabChange }: { onTabChange: (index: number) => void }) {
	const { data } = useContext(DataContext);
	const [order] = useState(["0", "1", "2", "3"]);
	const [selectedKey, setSelectedKey] = useState(order[0]);
	const tabsRef = useRef(null);

	useEffect(() => {
		if (data.passesAllTests === null) return;
		setSelectedKey(order[1]);
		onTabChange(Number(order[1]));
	}, [data.passesAllTests]);

	useEffect(() => {
		if (!data.testRunning) return;
		setSelectedKey(order[1]);
		onTabChange(Number(order[1]));
	}, [data.testRunning]);

	const tabClickHandler = (index: number) => {
		setSelectedKey(order[index]);
		onTabChange(index);
	};

	return (
		<Navbar
			isBlurred={false}
			maxWidth="full"
			className={"h-[3.3rem] bg-white dark:bg-black"}
			classNames={{ wrapper: "px-4" }}
		>
			<div className="flex w-full flex-col justify-center">
				<Tabs
					selectedKey={selectedKey}
					ref={tabsRef}
					aria-label="Options"
					color="primary"
					variant="underlined"
					onSelectionChange={(key) => tabClickHandler(Number(key))}
					classNames={{
						tabList: "gap-0 w-full relative rounded-none p-0  border-divider",
						cursor: "w-full bg-white backgroundStyle ",
						tab: "max-w-fit p-0 h-12 px-3 mx-0",
						tabContent: "group-data-[selected=true]:text-black dark:group-data-[selected=true]:text-white",
					}}
				>
					<Tab
						key={order[0]}
						title={
							<div className="flex items-center space-x-2">
								<DescriptionIcon />
								<span>Description</span>
							</div>
						}
					/>
					<Tab
						key={order[1]}
						title={
							<div className="flex items-center space-x-2">
								<CheckSolutionIcon size="1.5rem" />
								<span>Test Cases</span>
							</div>
						}
					/>
					<Tab
						key={order[2]}
						title={
							<div className="flex items-center space-x-2">
								<TestIcon size="1.2rem" />
								<span>Solution code</span>
							</div>
						}
					/>
					<Tab
						key={order[3]}
						title={
							<div className="flex items-center space-x-2">
								<VideoIcon />
								<span>Video explanation</span>
							</div>
						}
					/>
				</Tabs>
			</div>
		</Navbar>
	);
}
