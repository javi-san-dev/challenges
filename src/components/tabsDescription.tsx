import { Navbar, Tab, Tabs } from "@nextui-org/react";
import { useRef, useState } from "react";
import { CheckSolutionIcon, DescriptionIcon, TestIcon, VideoIcon } from "../helpers/icons";

export default function TabsDescription() {
	const [order] = useState(["0", "1", "2", "3"]);
	const [selectedKey, setSelectedKey] = useState(order[0]);
	const tabsRef = useRef(null);

	const tabClickHandler = (index: number) => {
		setSelectedKey(order[index]);
	};

	return (
		<Navbar isBlurred={false} maxWidth="full" className={"h-[3.3rem]"}>
			<div className="flex w-full flex-col justify-center">
				<Tabs
					selectedKey={selectedKey}
					ref={tabsRef}
					aria-label="Options"
					color="primary"
					variant="underlined"
					onSelectionChange={(key) => tabClickHandler(Number(key))}
					classNames={{
						tabList: "gap-6 w-full relative rounded-none p-0  border-divider",
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
								<span>Description</span>
							</div>
						}
					/>
					<Tab
						key={order[1]}
						title={
							<div className="flex items-center space-x-2">
								<CheckSolutionIcon size="1.5rem" />
								<span>Solution</span>
							</div>
						}
					/>
					<Tab
						key={order[2]}
						title={
							<div className="flex items-center space-x-2">
								<TestIcon size="1.2rem" />
								<span>Test Cases</span>
							</div>
						}
					/>
					<Tab
						key={order[3]}
						title={
							<div className="flex items-center space-x-2">
								<VideoIcon />
								<span>Video</span>
							</div>
						}
					/>
				</Tabs>
			</div>
		</Navbar>
	);
}
