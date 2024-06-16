import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Tab,
	Tabs,
	cn,
	useDisclosure,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { BugIcon, DownIcon, HelpIcon, ListIcon, PlayIcon, SearchIcon } from "../helpers/icons";
import TableChallenges from "./tableChallenges";

const categories = [
	"All",
	"String",
	"Array",
	"Linked List",
	"Stacks & Queues",
	"Graphs",
	"Binary Tree",
	"Dynamic Programming",
	"Recursion",
	"Searching",
	"Sorting",
	"Famous algorithms",
	"JavaScript",
];

export default function ChallengesPage() {
	const [selectedKeys, setSelectedKeys] = useState(new Set(["easy"]));
	const [selectedCategoryKeys, setSelectedCategoryKeys] = useState(new Set(["all"]));
	const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

	const setCategory = () => {};

	return (
		<div className=" m-auto mt-8 w-[90%] max-w-[900px] flex flex-col justify-center">
			<div className="flex gap-3">
				<Input
					autofocus
					isClearable
					classNames={{
						base: "w-full sm:max-w-[44%]",
						inputWrapper: "border-1",
					}}
					placeholder="Search by name..."
					size="md"
					startContent={<SearchIcon className="text-default-300" />}
					// value={filterValue}
					variant="bordered"
					onClear={() => console.log("clear")}
					// onValueChange={onSearchChange}
				/>
				<Dropdown
					showArrow
					classNames={{
						base: "before:bg-default-200", // change arrow background
						content:
							"py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
					}}
				>
					<DropdownTrigger>
						<Button variant="flat" size="md" endContent={<DownIcon className="text-small" />}>
							Category
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Multiple selection example"
						variant="flat"
						closeOnSelect={false}
						disallowEmptySelection
						selectionMode="single"
						selectedKeys={selectedCategoryKeys}
						onSelectionChange={setSelectedCategoryKeys}
					>
						<DropdownSection title="Filter by Category">
							{categories.map((category, i) => {
								return (
									<DropdownItem
										key={`${i} ${category}`}
										description={`${category} base Algorithms`}
										startContent={<ListIcon size="2rem" className={iconClasses} />}
										onClick={() => setCategory(category)}
									>
										{category}
									</DropdownItem>
								);
							})}
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
				<Dropdown
					showArrow
					classNames={{
						base: "before:bg-default-200", // change arrow background
						content:
							"py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
					}}
				>
					<DropdownTrigger>
						<Button variant="flat" size="md" endContent={<DownIcon className="text-small" />}>
							Difficulty
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Multiple selection example"
						variant="flat"
						closeOnSelect={false}
						disallowEmptySelection
						selectionMode="multiple"
						selectedKeys={selectedKeys}
						onSelectionChange={setSelectedKeys}
					>
						<DropdownSection title="Filter by difficulty">
							<DropdownItem
								description="Easy base Algorithms"
								color="success"
								key="easy"
								startContent={<ListIcon size="2rem" className={iconClasses} />}
							>
								Easy
							</DropdownItem>
							<DropdownItem
								description="Medium base Algorithms"
								color="warning"
								key="medium"
								startContent={<ListIcon size="2rem" className={iconClasses} />}
							>
								Medium
							</DropdownItem>
							<DropdownItem
								description="Hard base Algorithms"
								color="danger"
								key="hard"
								startContent={<ListIcon size="2rem" className={iconClasses} />}
							>
								Hard
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</div>

			<TableChallenges />
		</div>
	);
}
