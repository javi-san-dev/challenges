import {
	Button,
	Chip,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure
} from "@nextui-org/react";
import {
	DarkThemeIcon,
	AddIcon,
	MinusIcon,
	SearchIcon,
	SettingsIcon,
	SignInIcon,
} from "../helpers/icons";
import { useEffect, useState, useMemo } from "react";

export default function NavBarComponent() {
	const [selectedKeys, setSelectedKeys] = useState(new Set(["dark"]));
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	useEffect(() => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		htmlElement.style.fontSize = '16px';
	}, []);

	useEffect(() => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		htmlElement.classList.remove("light");
		htmlElement.classList.remove("dark");
		htmlElement.classList.add(Array.from(selectedKeys)[0]);
	}, [selectedKeys]);

	const zoomIn = () => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		const fontSize = Number(htmlElement.style.fontSize.replace(/[^0-9]/g, ""));
		htmlElement.style.fontSize = '${fontSize + 1}px';
	};

	const zoomOut = () => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		const fontSize = Number(htmlElement.style.fontSize.replace(/[^0-9]/g, ""));
		htmlElement.style.fontSize = '${fontSize - 1}px';
	};

	return (
		<nav className="bg-white dark:bg-black">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Challenges
					</span>
					<Chip color="warning" variant="flat">
						Beta
					</Chip>
				</a>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0">
						<li>
							<Button
								variant="bordered"
								aria-label="search for challenge"
								size="md"
								radius="sm"
								className={''}
								onPress={onOpen}
							>
								{<SearchIcon size={"1.2rem"} />}Type to search...
							</Button>
							<Modal
								hideCloseButton={true}
								backdrop="opaque"
								isOpen={isOpen}
								onOpenChange={onOpenChange}
								placement="top"
								classNames={{
									base: "overflow-hidden border border-default-200 bg-gradient-to-br from-white to-default-100 dark:from-black dark:to-default-50 h-[400px]",
									header: "border-b-[1px] border-default-200",
									footer: "border-t-[1px] border-default-200",
									closeButton: "hover:bg-white/5 active:bg-white/10",
								}}
								motionProps={{
									variants: {
										enter: {
											y: 0,
											opacity: 1,
											transition: {
												duration: 0.3,
												ease: "easeOut",
											},
										},
										exit: {
											y: -20,
											opacity: 0,
											transition: {
												duration: 0.2,
												ease: "easeIn",
											},
										},
									},
								}}
							>
								<ModalContent>
									{() => (
										<>
											<ModalHeader className="flex flex-col gap-1 p-2">
												<Input
													placeholder="Type to search..."
													variant="bordered"
													startContent={<SearchIcon />}
													classNames={{
														base: "border-none",
														inputWrapper: "border-none",
														innerWrapper: "border-none",
														input: "border-none",
													}}
												/>
											</ModalHeader>
											<ModalBody />
										</>
									)}
								</ModalContent>
							</Modal>
						</li>
						<li>
							<Button
								isIconOnly
								variant="bordered"
								aria-label="Zoom in"
								size="md"
								radius="sm"
								className={'w-[4rem]'}
								onClick={zoomIn}
							>
								{<AddIcon size={"1.2rem"} />}
							</Button>
						</li>
						<li>
							<Button
								isIconOnly
								variant="bordered"
								aria-label="Zoom out"
								size="md"
								radius="sm"
								className={'w-[4rem]'}
								onClick={zoomOut}
							>
								{<MinusIcon size={"1.2rem"} />}
							</Button>
						</li>
						<li>
							<Button
								isIconOnly
								variant="bordered"
								aria-label="settings"
								size="md"
								radius="sm"
								className={'w-[4rem]'}
							>
								{<SettingsIcon size={"1.1rem"} />}
							</Button>
						</li>
						<li>
							<Dropdown>
								<DropdownTrigger>
									<Button
										isIconOnly
										variant="bordered"
										aria-label="settings"
										size="md"
										radius="sm"
										className={'w-[4rem]'}
									>
										<DarkThemeIcon size="1.3rem" />
									</Button>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="Single selection example"
									variant="flat"
									disallowEmptySelection
									selectionMode="single"
									selectedKeys={selectedKeys}
									onSelectionChange={setSelectedKeys}
								>
									<DropdownItem key="dark">Dark</DropdownItem>
									<DropdownItem key="light">Light</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</li>
						<li>
							<Button
								variant="bordered"
								aria-label="sign in"
								size="md"
								radius="sm"
								className={''}
							>
								<SignInIcon />
								Sign in
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
