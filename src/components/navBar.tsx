import {
	Button,
	Chip,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { signIn, signOut } from "auth-astro/client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import {
	AddIcon,
	DarkThemeIcon,
	LightThemeIcon,
	MinusIcon,
	SearchIcon,
	SettingsIcon,
	SignInIcon,
} from "../helpers/icons";
import ChallengeList from "./challengeList";
import SignInButton from "./signInButton";

export default function NavBarComponent({ user }) {
	const { data, updateData } = useContext(DataContext);
	const [selectedKeys, setSelectedKeys] = useState(new Set([data.theme]));
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isDarTheme, setIsDarkTheme] = useState(() => data.theme === "dark");

	useEffect(() => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		htmlElement.style.fontSize = "16px";
	}, []);

	useEffect(() => {
		const selectedKeyVal = Array.from(selectedKeys)[0];
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		htmlElement.classList.remove("light");
		htmlElement.classList.remove("dark");
		htmlElement.classList.add(selectedKeyVal);
		const isDarkTheme = selectedKeyVal === "dark";
		if (isDarkTheme) setIsDarkTheme(true);
		if (!isDarkTheme) setIsDarkTheme(false);
		localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
		updateData({ theme: isDarkTheme ? "dark" : "light" });
	}, [selectedKeys]);

	const zoomIn = () => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		const fontSize = Number(htmlElement.style.fontSize.replace(/[^0-9]/g, ""));
		htmlElement.style.fontSize = `${fontSize + 1}px`;
	};

	const zoomOut = () => {
		const htmlElement = document.getElementById("htmlElement") as HTMLElement;
		const fontSize = Number(htmlElement.style.fontSize.replace(/[^0-9]/g, ""));
		htmlElement.style.fontSize = `${fontSize - 1}px`;
	};

	return (
		<nav className="bg-neutral-100 dark:bg-black">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Challenges</span>
					<Chip color="warning" variant="flat">
						Beta
					</Chip>
				</a>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0">
						<li>
							<ChallengeList isSearch={true} />
						</li>
						<li>
							<Button
								isIconOnly
								variant="flat"
								aria-label="Zoom in"
								size="md"
								radius="sm"
								className={"w-[4rem]"}
								onClick={zoomIn}
							>
								{<AddIcon size={"1.2rem"} />}
							</Button>
						</li>
						<li>
							<Button
								isIconOnly
								variant="flat"
								aria-label="Zoom out"
								size="md"
								radius="sm"
								className={"w-[4rem]"}
								onClick={zoomOut}
							>
								{<MinusIcon size={"1.2rem"} />}
							</Button>
						</li>
						<li>
							<Dropdown>
								<DropdownTrigger>
									<Button isIconOnly variant="flat" aria-label="theme" size="md" radius="sm" className={"w-[4rem]"}>
										{isDarTheme ? <DarkThemeIcon size="1.3rem" /> : <LightThemeIcon size="1.3rem" />}
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
						<li className="flex items-center pr-2">
							<SignInButton user={user} />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
