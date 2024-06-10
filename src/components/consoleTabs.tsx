import { Button, Navbar, Tab, Tabs } from "@nextui-org/react";
import { useRef } from "react";
import { BinIcon, TerminalIcon } from "../helpers/icons";

export default function ConsoleTabs({ removeLogs }) {
	const tabsRef = useRef(null);

	return (
		<Navbar isBlurred={false} maxWidth="full" className="h-[3.3rem]" classNames={{ wrapper: "px-4" }}>
			<div className="flex w-full flex-col justify-center">
				<Tabs
					selectedKey={"0"}
					ref={tabsRef}
					aria-label="Options"
					color="primary"
					variant="underlined"
					classNames={{
						tabList: "gap-6 w-full relative rounded-none p-0  border-divider",
						cursor: "w-full bg-cyan-400",
						tab: "max-w-fit p-0 h-12",
						tabContent: "group-data-[selected=true]:text-cyan-400",
					}}
				>
					<Tab
						key={"0"}
						title={
							<div className="flex items-center space-x-2">
								<TerminalIcon size="1.5rem" />
								<span>Console</span>
							</div>
						}
					/>
				</Tabs>
			</div>
			<div>
				<Button
					onClick={removeLogs}
					isIconOnly
					variant="solid"
					aria-label="settings"
					size="sm"
					radius="sm"
					className={""}
				>
					<BinIcon />
				</Button>
			</div>
		</Navbar>
	);
}
