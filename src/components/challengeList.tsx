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
import { useEffect, useRef } from "react";
import { BugIcon, DownIcon, HelpIcon, ListIcon, PlayIcon, SearchIcon } from "../helpers/icons";
import TableChallenges from "./tableChallenges";

export default function ChallengeList({ isSearch }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
	const icon = isSearch ? <SearchIcon size="1.2rem" /> : <ListIcon size="1.2rem" />;
	const text = isSearch ? "Type to search..." : "Challenge list";
	const inputClass = isSearch ? "pr-24" : "";
	const inputRef = useRef(null);
	if (inputRef.current !== null && isSearch) console.log("EEEEEEE");

	useEffect(() => {
		if (inputRef.current !== null && isSearch) console.log("EEEEEEE");
	}, []);

	return (
		<>
			<Button onPress={onOpen} variant="flat" aria-label="Zoom in" size="md" radius="sm" className={`${inputClass}`}>
				{/* <ListIcon size="1.2rem" /> Challenge list */}
				{icon} {text}
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="2xl"
				hideCloseButton
				scrollBehavior="inside"
				classNames={{
					base: "bg-white dark:bg-black border border-neutral-500 dark:border-neutral-800 ",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								<div className="flex gap-3">
									<Input
										autofocus
										ref={inputRef}
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
										<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
											<DropdownSection title="Actions">
												<DropdownItem
													key="new"
													shortcut="⌘N"
													description="Create a new file"
													startContent={<ListIcon size="2rem" className={iconClasses} />}
												>
													New file
												</DropdownItem>
												<DropdownItem
													key="copy"
													shortcut="⌘C"
													description="Copy the file link"
													startContent={<ListIcon size="2rem" className={iconClasses} />}
												>
													Copy link
												</DropdownItem>
												<DropdownItem
													key="edit"
													shortcut="⌘⇧E"
													description="Allows you to edit the file"
													startContent={<ListIcon size="2rem" className={iconClasses} />}
												>
													Edit file
												</DropdownItem>
											</DropdownSection>
											<DropdownSection title="Danger zone">
												<DropdownItem
													key="delete"
													className="text-danger"
													color="danger"
													shortcut="⌘⇧D"
													description="Permanently delete the file"
													startContent={<ListIcon size="2rem" className={cn(iconClasses, "text-danger")} />}
												>
													Delete file
												</DropdownItem>
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
										<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
											<DropdownSection title="Actions">
												<DropdownItem
													key="new"
													shortcut="⌘N"
													description="Create a new file"
													startContent={<ListIcon size="2rem" className={iconClasses} />}
												>
													New file
												</DropdownItem>
												<DropdownItem
													key="copy"
													shortcut="⌘C"
													description="Copy the file link"
													startContent={<ListIcon size="2rem" className={iconClasses} />}
												>
													Copy link
												</DropdownItem>
												<DropdownItem
													key="edit"
													shortcut="⌘⇧E"
													description="Allows you to edit the file"
													startContent={<ListIcon size="2rem" className={iconClasses} />}
												>
													Edit file
												</DropdownItem>
											</DropdownSection>
											<DropdownSection title="Danger zone">
												<DropdownItem
													key="delete"
													className="text-danger"
													color="danger"
													shortcut="⌘⇧D"
													description="Permanently delete the file"
													startContent={<ListIcon size="2rem" className={cn(iconClasses, "text-danger")} />}
												>
													Delete file
												</DropdownItem>
											</DropdownSection>
										</DropdownMenu>
									</Dropdown>
								</div>
							</ModalHeader>
							<ModalBody>
								<TableChallenges />
							</ModalBody>
							<ModalFooter />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
