import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Tab,
	Tabs,
	cn,
	useDisclosure,
} from "@nextui-org/react";
import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { DataContext } from "../helpers/dataContext";
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
	const { data, updateData } = useContext(DataContext);
	const [selectedKeys, setSelectedKeys] = useState(new Set(["easy"]));
	const [selectedCategoryKeys, setSelectedCategoryKeys] = useState(new Set(["all"]));
	const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
	const [isListReady, setIsListReady] = useState(false)

	const findSubmitted = (challengeList) => {
		const result = [];
		for (const challenge in challengeList) {
			if (challengeList[challenge] !== null) {
				result.push(challenge);
			}
		}

		return result;
	};

	useEffect(() => {
		async function getSubmittedList() {
			const response = await fetch("/api/submittedList.json");
			const data = await response.json();
			const submittedList = findSubmitted(data);
			updateData({ submittedList: submittedList });
			setIsListReady(true)
		}
		getSubmittedList();
	}, []);

	const setCategory = () => {};

	return (
		<>
			<Navbar classNames={{ wrapper: "m-0 p-0 max-w-[900px]" }}>
				<NavbarBrand>
					<p className="font-bold text-inherit">CHALLENGES</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link color="foreground" href="#">
							Features
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="#" aria-current="page">
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Integrations
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem>
						<Button as={Link} color="primary" href="#" variant="flat">
							Sign In
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div className=" m-auto mt-8 w-[90%] max-w-[900px] flex flex-col justify-center">
				<h1 className="m-auto text-4xl mb-8 mt-4">Challenges</h1>
				<div className="flex gap-3 mb-4">
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
					<div className="ml-auto flex gap-3">
						<Dropdown
							showArrow
							classNames={{
								base: "before:bg-default-200", // change arrow background

								content: "py-1 px-1 border border-default-200 bg-white dark:bg-black",
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
								classNames={{
									list: "max-h-[400px] overflow-scroll",
								}}
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
								base: "before:bg-default-200 ml-auto", // change arrow background
								content: "py-1 px-1 border border-default-200 bg-white dark:bg-black",
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
				</div>
				{isListReady && <TableChallenges />}
			</div>
		</>
	);
}
